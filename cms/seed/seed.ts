/**
 * ============================================================
 *  AI PlayGrounds — Payload CMS Seed Script
 * ============================================================
 *
 * Migrates all current i18n JSON data (public/locales/en & es)
 * into Payload CMS globals for both locales.
 *
 * Run with:  pnpm seed
 *
 * What it does:
 *  1. Creates an initial admin user (if none exists)
 *  2. Seeds all 9 globals (site, hero, problem, program, trajectory,
 *     coming2026, faq, waitlist, footer) in both ES and EN
 *  3. Handles the data shape differences between flat JSON and Payload
 *     array format (e.g. enlacesPieSociales, preguntasValidacion, etc.)
 *  4. Converts subtituloHtml (raw HTML string) → Lexical JSON rich text
 * ============================================================
 */

import { getPayload } from 'payload'
import configPromise from '@payload-config'

// ── Raw locale data ──────────────────────────────────────────────────────────
import heroEn from '../../public/locales/en/hero.json'
import heroEs from '../../public/locales/es/hero.json'
import problemEn from '../../public/locales/en/problem.json'
import problemEs from '../../public/locales/es/problem.json'
import programEn from '../../public/locales/en/program.json'
import programEs from '../../public/locales/es/program.json'
import trajectoryEn from '../../public/locales/en/trajectory.json'
import trajectoryEs from '../../public/locales/es/trajectory.json'
import coming2026En from '../../public/locales/en/coming2026.json'
import coming2026Es from '../../public/locales/es/coming2026.json'
import faqEn from '../../public/locales/en/faq.json'
import faqEs from '../../public/locales/es/faq.json'
import waitlistEn from '../../public/locales/en/waitlist.json'
import waitlistEs from '../../public/locales/es/waitlist.json'
import footerEn from '../../public/locales/en/footer.json'
import footerEs from '../../public/locales/es/footer.json'
import siteEn from '../../public/locales/en/site.json'
import siteEs from '../../public/locales/es/site.json'

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Converts raw HTML snippets (from subtituloHtml) into Payload's Lexical
 * JSON format. Only supports <em> and <strong> inlines.
 */
function htmlToLexicalParagraph(html: string) {
  // Parse simple inline tags into Lexical nodes
  const nodes: object[] = []
  // Split by em/strong tags
  const parts = html.split(/(<em>.*?<\/em>|<strong>.*?<\/strong>)/g)

  for (const part of parts) {
    if (!part) continue
    if (part.startsWith('<em>')) {
      const text = part.replace(/<\/?em>/g, '')
      nodes.push({ type: 'text', text, format: 2 }) // 2 = italic
    } else if (part.startsWith('<strong>')) {
      const text = part.replace(/<\/?strong>/g, '')
      nodes.push({ type: 'text', text, format: 1 }) // 1 = bold
    } else {
      nodes.push({ type: 'text', text: part, format: 0 })
    }
  }

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: nodes,
          direction: 'ltr',
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr',
    },
  }
}

/** Wraps a flat string array into Payload array format [{nombre}] */
function toNombreArray(items: string[]) {
  return items.map((nombre) => ({ nombre }))
}

/** Wraps a flat string array into Payload array format [{etiqueta}] */
function toEtiquetaArray(items: string[]) {
  return items.map((etiqueta) => ({ etiqueta }))
}

/** Wraps a flat string array into Payload array format [{pregunta}] */
function toPreguntaArray(items: string[]) {
  return items.map((pregunta) => ({ pregunta }))
}

// ── Transform functions (JSON → Payload shape) ───────────────────────────────

function transformHero(d: typeof heroEs) {
  return {
    badge: d.badge,
    titularLinea1: d.titularLinea1,
    titularLinea2: d.titularLinea2,
    subtitulo: d.subtitulo,
    subtituloEnfasis: d.subtituloEnfasis,
    ctaPrincipal: d.ctaPrincipal,
    ctaSecundario: d.ctaSecundario,
    mockupCodigo: {
      tipo: d.mockupCodigo.tipo,
      nombreArchivo: d.mockupCodigo.nombreArchivo,
      comentarios: d.mockupCodigo.comentarios.map((linea) => ({ linea })),
    },
    pasarelaLogos: {
      tipo: d.pasarelaLogos.tipo,
      etiqueta: d.pasarelaLogos.etiqueta,
      items: toNombreArray(d.pasarelaLogos.items),
    },
  }
}

function transformProblem(d: typeof problemEs) {
  return {
    etiqueta: d.etiqueta,
    tituloLinea1: d.tituloLinea1,
    tituloLinea2: d.tituloLinea2,
    // Convert HTML string to Lexical JSON for the rich text field
    subtituloHtml: htmlToLexicalParagraph(d.subtituloHtml),
    pasos: d.pasos.map((p) => ({
      numero: p.numero,
      titulo: p.titulo,
      descripcion: p.descripcion,
    })),
    cita: d.cita,
    estadisticas: d.estadisticas.map((s) => ({
      valor: s.valor,
      sufijo: s.sufijo,
      etiqueta: s.etiqueta,
    })),
  }
}

function transformProgram(d: typeof programEs) {
  return {
    etiqueta: d.etiqueta,
    titulo: d.titulo,
    cita: d.cita,
    pilares: d.pilares.map((p) => ({
      icono: p.icono,
      titulo: p.titulo,
      descripcion: p.descripcion,
    })),
    tituloHitos: d.tituloHitos,
    hitos: d.hitos.map((h) => ({
      numero: h.numero,
      titulo: h.titulo,
      descripcion: h.descripcion,
    })),
    tituloValidacion: d.tituloValidacion,
    preguntasValidacion: toPreguntaArray(d.preguntasValidacion),
    metricasEstructura: d.metricasEstructura.map((m) => ({
      valor: m.valor,
      etiqueta: m.etiqueta,
    })),
    cta: d.cta,
  }
}

function transformTrajectory(d: typeof trajectoryEs) {
  return {
    etiqueta: d.etiqueta,
    titulo: d.titulo,
    subtitulo: d.subtitulo,
    estadisticas: d.estadisticas.map((s) => ({
      valor: s.valor,
      sufijo: s.sufijo,
      etiqueta: s.etiqueta,
    })),
    eventosTimeline: d.eventosTimeline.map((ev) => ({
      titulo: ev.titulo,
      descripcion: ev.descripcion,
      // etiquetas was string[], now [{etiqueta}]
      etiquetas: toEtiquetaArray(ev.etiquetas),
    })),
  }
}

function transformComing2026(d: typeof coming2026Es) {
  return {
    etiqueta: d.etiqueta,
    titulo: d.titulo,
    subtitulo: d.subtitulo,
    iniciativas: d.iniciativas.map((i) => ({
      icono: i.icono,
      titulo: i.titulo,
      descripcion: i.descripcion,
      categoria: i.categoria,
    })),
    cta: d.cta,
  }
}

function transformFaq(d: typeof faqEs) {
  return {
    etiqueta: d.etiqueta,
    titulo: d.titulo,
    items: d.items.map((item) => ({
      pregunta: item.pregunta,
      respuesta: item.respuesta,
    })),
  }
}

function transformWaitlist(d: typeof waitlistEs) {
  return {
    titularLinea1: d.titularLinea1,
    titularLinea2: d.titularLinea2,
    subtitulo: d.subtitulo,
    formulario: d.formulario,
    bloqueAlianzas: d.bloqueAlianzas,
  }
}

function transformFooter(d: typeof footerEs) {
  // columnas was Record<string, links[]>, now array of {titulo, enlaces}
  const columnas = Object.entries(d.columnas).map(([titulo, enlaces]) => ({
    titulo,
    enlaces,
  }))

  return {
    eslogan: d.eslogan,
    newsletter: d.newsletter,
    columnas,
    etiquetaAliados: d.etiquetaAliados,
    aliados: toNombreArray(d.aliados),
    copyright: d.copyright,
    // enlacesPieSociales was string[], now [{nombre}]
    enlacesPieSociales: toNombreArray(d.enlacesPieSociales),
  }
}

function transformSite(d: typeof siteEs) {
  return {
    meta: d.meta,
    navegacion: {
      marca: d.navegacion.marca,
      enlaces: d.navegacion.enlaces,
      alternarIdioma: d.navegacion.alternarIdioma,
      cta: d.navegacion.cta,
    },
  }
}

// ── Main seed function ────────────────────────────────────────────────────────

async function seed() {
  const payload = await getPayload({ config: configPromise })

  // ── 1. Create admin user (skip if already exists) ──────────────────────────
  payload.logger.info('Checking for existing admin user...')
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })

  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@aiplaygrounds.com',
        password: 'changeme123',
        name: 'Admin',
        role: 'admin',
      },
    })
    payload.logger.info('✅ Admin user created: admin@aiplaygrounds.com / changeme123')
    payload.logger.info('   ⚠️  IMPORTANT: Change this password after first login!')
  } else {
    payload.logger.info('   Admin user already exists, skipping.')
  }

  // ── 2. Seed globals ────────────────────────────────────────────────────────
  const globals = [
    { slug: 'site',        es: transformSite(siteEs),            en: transformSite(siteEn) },
    { slug: 'hero',        es: transformHero(heroEs),            en: transformHero(heroEn) },
    { slug: 'problem',     es: transformProblem(problemEs),      en: transformProblem(problemEn) },
    { slug: 'program',     es: transformProgram(programEs),      en: transformProgram(programEn) },
    { slug: 'trajectory',  es: transformTrajectory(trajectoryEs), en: transformTrajectory(trajectoryEn) },
    { slug: 'coming2026',  es: transformComing2026(coming2026Es), en: transformComing2026(coming2026En) },
    { slug: 'faq',         es: transformFaq(faqEs),              en: transformFaq(faqEn) },
    { slug: 'waitlist',    es: transformWaitlist(waitlistEs),    en: transformWaitlist(waitlistEn) },
    { slug: 'footer',      es: transformFooter(footerEs),        en: transformFooter(footerEn) },
  ] as const

  for (const g of globals) {
    payload.logger.info(`\nSeeding global: ${g.slug}`)

    await payload.updateGlobal({
      slug: g.slug as any,
      locale: 'es',
      data: g.es as any,
    })
    payload.logger.info(`  ✅ [es] ${g.slug}`)

    await payload.updateGlobal({
      slug: g.slug as any,
      locale: 'en',
      data: g.en as any,
    })
    payload.logger.info(`  ✅ [en] ${g.slug}`)
  }

  payload.logger.info('\n🎉 Seed complete! All globals seeded in ES and EN.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
