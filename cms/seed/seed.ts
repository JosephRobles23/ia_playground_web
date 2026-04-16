/**
 * ============================================================
 *  AI PlayGrounds — Payload CMS Seed Script
 * ============================================================
 *
 * Migrates all current i18n JSON data (public/locales/en & es)
 * into Payload CMS globals.
 *
 * IMPORTANT: We seed using `locale: 'all'` which means every localized
 * field must be passed as `{ es: "...", en: "..." }` objects. This is
 * the ONLY correct way to seed both locales for Payload arrays —
 * seeding locale-by-locale overwrites array items entirely on the
 * second pass, wiping the first locale's data.
 *
 * Run with:  pnpm seed
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

/** Create a bilingual object for a localized field */
function loc(es: string, en: string) {
  return { es, en }
}

/**
 * Strips simple HTML inline tags (<em>, <strong>) to plain text.
 * Used since subtituloHtml is now a 'textarea' field in Payload.
 */
function htmlToPlainText(html: string) {
  return html.replace(/<\/?(?:em|strong)>/g, '')
}

// ── Transform functions (JSON → Payload shape with locale:'all') ─────────

function buildHero() {
  return {
    badge: loc(heroEs.badge, heroEn.badge),
    titularLinea1: loc(heroEs.titularLinea1, heroEn.titularLinea1),
    titularLinea2: loc(heroEs.titularLinea2, heroEn.titularLinea2),
    subtitulo: loc(heroEs.subtitulo, heroEn.subtitulo),
    subtituloEnfasis: loc(heroEs.subtituloEnfasis, heroEn.subtituloEnfasis),
    ctaPrincipal: {
      texto: loc(heroEs.ctaPrincipal.texto, heroEn.ctaPrincipal.texto),
      ancla: heroEs.ctaPrincipal.ancla, // not localized
    },
    ctaSecundario: {
      texto: loc(heroEs.ctaSecundario.texto, heroEn.ctaSecundario.texto),
      ancla: heroEs.ctaSecundario.ancla,
    },
    mockupCodigo: {
      tipo: heroEs.mockupCodigo.tipo,
      nombreArchivo: loc(heroEs.mockupCodigo.nombreArchivo, heroEn.mockupCodigo.nombreArchivo),
      comentarios: heroEs.mockupCodigo.comentarios.map((linea, i) => ({
        linea: loc(linea, heroEn.mockupCodigo.comentarios[i] ?? linea),
      })),
    },
    pasarelaLogos: {
      tipo: heroEs.pasarelaLogos.tipo,
      etiqueta: loc(heroEs.pasarelaLogos.etiqueta, heroEn.pasarelaLogos.etiqueta),
      items: heroEs.pasarelaLogos.items.map((nombre) => ({ nombre })),
    },
  }
}

function buildProblem() {
  return {
    etiqueta: loc(problemEs.etiqueta, problemEn.etiqueta),
    tituloLinea1: loc(problemEs.tituloLinea1, problemEn.tituloLinea1),
    tituloLinea2: loc(problemEs.tituloLinea2, problemEn.tituloLinea2),
    subtituloHtml: loc(
      htmlToPlainText(problemEs.subtituloHtml),
      htmlToPlainText(problemEn.subtituloHtml)
    ),
    pasos: problemEs.pasos.map((p, i) => ({
      numero: p.numero,
      titulo: loc(p.titulo, problemEn.pasos[i]?.titulo ?? p.titulo),
      descripcion: loc(p.descripcion, problemEn.pasos[i]?.descripcion ?? p.descripcion),
    })),
    cita: loc(problemEs.cita, problemEn.cita),
    estadisticas: problemEs.estadisticas.map((s, i) => ({
      valor: s.valor,
      sufijo: s.sufijo,
      etiqueta: loc(s.etiqueta, problemEn.estadisticas[i]?.etiqueta ?? s.etiqueta),
    })),
  }
}

function buildProgram() {
  return {
    etiqueta: loc(programEs.etiqueta, programEn.etiqueta),
    titulo: loc(programEs.titulo, programEn.titulo),
    cita: loc(programEs.cita, programEn.cita),
    pilares: programEs.pilares.map((p, i) => ({
      icono: p.icono,
      titulo: loc(p.titulo, programEn.pilares[i]?.titulo ?? p.titulo),
      descripcion: loc(p.descripcion, programEn.pilares[i]?.descripcion ?? p.descripcion),
    })),
    tituloHitos: loc(programEs.tituloHitos, programEn.tituloHitos),
    hitos: programEs.hitos.map((h, i) => ({
      numero: h.numero,
      titulo: loc(h.titulo, programEn.hitos[i]?.titulo ?? h.titulo),
      descripcion: loc(h.descripcion, programEn.hitos[i]?.descripcion ?? h.descripcion),
    })),
    tituloValidacion: loc(programEs.tituloValidacion, programEn.tituloValidacion),
    preguntasValidacion: programEs.preguntasValidacion.map((q, i) => ({
      pregunta: loc(q, programEn.preguntasValidacion[i] ?? q),
    })),
    metricasEstructura: programEs.metricasEstructura.map((m, i) => ({
      valor: m.valor,
      etiqueta: loc(m.etiqueta, programEn.metricasEstructura[i]?.etiqueta ?? m.etiqueta),
    })),
    cta: {
      texto: loc(programEs.cta.texto, programEn.cta.texto),
      ancla: programEs.cta.ancla,
    },
  }
}

function buildTrajectory() {
  return {
    etiqueta: loc(trajectoryEs.etiqueta, trajectoryEn.etiqueta),
    titulo: loc(trajectoryEs.titulo, trajectoryEn.titulo),
    subtitulo: loc(trajectoryEs.subtitulo, trajectoryEn.subtitulo),
    estadisticas: trajectoryEs.estadisticas.map((s, i) => ({
      valor: s.valor,
      sufijo: s.sufijo,
      etiqueta: loc(s.etiqueta, trajectoryEn.estadisticas[i]?.etiqueta ?? s.etiqueta),
    })),
    eventosTimeline: trajectoryEs.eventosTimeline.map((ev, i) => ({
      titulo: loc(ev.titulo, trajectoryEn.eventosTimeline[i]?.titulo ?? ev.titulo),
      descripcion: loc(ev.descripcion, trajectoryEn.eventosTimeline[i]?.descripcion ?? ev.descripcion),
      etiquetas: ev.etiquetas.map((et, j) => ({
        etiqueta: loc(et, trajectoryEn.eventosTimeline[i]?.etiquetas[j] ?? et),
      })),
    })),
  }
}

function buildComing2026() {
  return {
    etiqueta: loc(coming2026Es.etiqueta, coming2026En.etiqueta),
    titulo: loc(coming2026Es.titulo, coming2026En.titulo),
    subtitulo: loc(coming2026Es.subtitulo, coming2026En.subtitulo),
    iniciativas: coming2026Es.iniciativas.map((ini, i) => ({
      icono: ini.icono,
      titulo: loc(ini.titulo, coming2026En.iniciativas[i]?.titulo ?? ini.titulo),
      descripcion: loc(ini.descripcion, coming2026En.iniciativas[i]?.descripcion ?? ini.descripcion),
      categoria: loc(ini.categoria, coming2026En.iniciativas[i]?.categoria ?? ini.categoria),
    })),
    cta: {
      texto: loc(coming2026Es.cta.texto, coming2026En.cta.texto),
      ancla: coming2026Es.cta.ancla,
    },
  }
}

function buildFaq() {
  return {
    etiqueta: loc(faqEs.etiqueta, faqEn.etiqueta),
    titulo: loc(faqEs.titulo, faqEn.titulo),
    items: faqEs.items.map((item, i) => ({
      pregunta: loc(item.pregunta, faqEn.items[i]?.pregunta ?? item.pregunta),
      respuesta: loc(item.respuesta, faqEn.items[i]?.respuesta ?? item.respuesta),
    })),
  }
}

function buildWaitlist() {
  return {
    titularLinea1: loc(waitlistEs.titularLinea1, waitlistEn.titularLinea1),
    titularLinea2: loc(waitlistEs.titularLinea2, waitlistEn.titularLinea2),
    subtitulo: loc(waitlistEs.subtitulo, waitlistEn.subtitulo),
    formulario: {
      placeholderEmail: loc(waitlistEs.formulario.placeholderEmail, waitlistEn.formulario.placeholderEmail),
      boton: loc(waitlistEs.formulario.boton, waitlistEn.formulario.boton),
      notaPrivacidad: loc(
        waitlistEs.formulario.notaPrivacidad ?? '',
        waitlistEn.formulario.notaPrivacidad ?? ''
      ),
    },
    bloqueAlianzas: {
      textoEnfasis: loc(
        waitlistEs.bloqueAlianzas.textoEnfasis ?? '',
        waitlistEn.bloqueAlianzas.textoEnfasis ?? ''
      ),
      texto: loc(
        waitlistEs.bloqueAlianzas.texto ?? '',
        waitlistEn.bloqueAlianzas.texto ?? ''
      ),
      cta: {
        texto: loc(
          waitlistEs.bloqueAlianzas.cta.texto,
          waitlistEn.bloqueAlianzas.cta.texto
        ),
        mailto: waitlistEs.bloqueAlianzas.cta.mailto,
      },
    },
  }
}

function buildFooter() {
  const esEntries = Object.entries(footerEs.columnas)
  const enEntries = Object.entries(footerEn.columnas)

  const columnas = esEntries.map(([tituloEs, enlacesEs], colIndex) => {
    const [tituloEn, enlacesEn] = enEntries[colIndex] ?? [tituloEs, enlacesEs]
    return {
      titulo: loc(tituloEs, tituloEn),
      enlaces: (enlacesEs as any[]).map((link, linkIdx) => ({
        etiqueta: loc(link.etiqueta, (enlacesEn as any[])?.[linkIdx]?.etiqueta ?? link.etiqueta),
        href: link.href,
      })),
    }
  })

  return {
    eslogan: loc(footerEs.eslogan, footerEn.eslogan),
    newsletter: {
      texto: loc(footerEs.newsletter.texto, footerEn.newsletter.texto),
      placeholderEmail: loc(footerEs.newsletter.placeholderEmail, footerEn.newsletter.placeholderEmail),
      boton: loc(footerEs.newsletter.boton, footerEn.newsletter.boton),
    },
    columnas,
    etiquetaAliados: loc(footerEs.etiquetaAliados, footerEn.etiquetaAliados),
    aliados: footerEs.aliados.map((nombre: string) => ({ nombre })),
    copyright: loc(footerEs.copyright, footerEn.copyright),
    enlacesPieSociales: footerEs.enlacesPieSociales.map((nombre: string) => ({ nombre })),
  }
}

function buildSite() {
  return {
    meta: {
      tituloPagina: loc(siteEs.meta.tituloPagina, siteEn.meta.tituloPagina),
      descripcion: loc(siteEs.meta.descripcion, siteEn.meta.descripcion),
    },
    navegacion: {
      marca: siteEs.navegacion.marca,
      enlaces: siteEs.navegacion.enlaces.map((e, i) => ({
        texto: loc(e.texto, siteEn.navegacion.enlaces[i]?.texto ?? e.texto),
        href: e.href,
      })),
      alternarIdioma: {
        etiqueta: loc(siteEs.navegacion.alternarIdioma.etiqueta, siteEn.navegacion.alternarIdioma.etiqueta),
        ruta: loc(siteEs.navegacion.alternarIdioma.ruta, siteEn.navegacion.alternarIdioma.ruta),
      },
      cta: {
        texto: loc(siteEs.navegacion.cta.texto, siteEn.navegacion.cta.texto),
        ancla: siteEs.navegacion.cta.ancla,
      },
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

  // ── 2. Seed globals using locale: 'all' ────────────────────────────────────
  // This is critical: using 'all' means every localized field is passed as
  // { es: "...", en: "..." }. This prevents arrays from being overwritten
  // when seeding the second locale.
  const globals = [
    { slug: 'site',       data: buildSite() },
    { slug: 'hero',       data: buildHero() },
    { slug: 'problem',    data: buildProblem() },
    { slug: 'program',    data: buildProgram() },
    { slug: 'trajectory', data: buildTrajectory() },
    { slug: 'coming2026', data: buildComing2026() },
    { slug: 'faq',        data: buildFaq() },
    { slug: 'waitlist',   data: buildWaitlist() },
    { slug: 'footer',     data: buildFooter() },
  ] as const

  for (const g of globals) {
    payload.logger.info(`Seeding global: ${g.slug}`)

    await payload.updateGlobal({
      slug: g.slug as any,
      locale: 'all',
      data: g.data as any,
    })
    payload.logger.info(`  ✅ ${g.slug} (es + en)`)
  }

  payload.logger.info('\n🎉 Seed complete! All globals seeded in ES and EN.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
