import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  label: 'Hero',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: { description: 'Small badge text above the title (e.g. "Next cohort: 2026")' },
    },
    {
      name: 'titularLinea1',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'First line of the main heading' },
    },
    {
      name: 'titularLinea2',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Second line of the main heading' },
    },
    {
      name: 'subtitulo',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Subtitle text below the heading' },
    },
    {
      name: 'subtituloEnfasis',
      type: 'text',
      localized: true,
      admin: { description: 'Emphasized/bold part of the subtitle' },
    },
    {
      name: 'ctaPrincipal',
      type: 'group',
      label: 'Primary CTA',
      fields: [
        { name: 'texto', type: 'text', localized: true, required: true },
        { name: 'ancla', type: 'text', required: true, admin: { description: 'Anchor link (e.g. #waitlist)' } },
      ],
    },
    {
      name: 'ctaSecundario',
      type: 'group',
      label: 'Secondary CTA',
      fields: [
        { name: 'texto', type: 'text', localized: true, required: true },
        { name: 'ancla', type: 'text', required: true, admin: { description: 'Anchor link (e.g. #program)' } },
      ],
    },
    {
      name: 'mockupCodigo',
      type: 'group',
      label: 'Code Mockup',
      admin: { description: 'Code snippet shown in the hero (currently commented out in UI)' },
      fields: [
        { name: 'tipo', type: 'text' },
        { name: 'nombreArchivo', type: 'text', localized: true },
        {
          name: 'comentarios',
          type: 'array',
          label: 'Code Comments',
          fields: [
            { name: 'linea', type: 'text', localized: true, required: true },
          ],
        },
      ],
    },
    {
      name: 'pasarelaLogos',
      type: 'group',
      label: 'Sponsors Marquee',
      fields: [
        { name: 'tipo', type: 'text' },
        { name: 'etiqueta', type: 'text', localized: true, admin: { description: 'Label above the marquee' } },
        {
          name: 'items',
          type: 'array',
          label: 'Sponsor Names',
          fields: [
            { name: 'nombre', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
