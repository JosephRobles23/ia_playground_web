import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const Coming2026Global: GlobalConfig = {
  slug: 'coming2026',
  label: 'Coming 2026',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'etiqueta',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'titulo',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'subtitulo',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'iniciativas',
      type: 'array',
      label: 'Initiatives',
      admin: { description: 'Cards for upcoming initiatives' },
      fields: [
        { name: 'icono', type: 'text', admin: { description: 'Emoji icon' } },
        { name: 'titulo', type: 'text', localized: true, required: true },
        { name: 'descripcion', type: 'textarea', localized: true, required: true },
        { name: 'categoria', type: 'text', localized: true, admin: { description: 'Category badge' } },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Button',
      fields: [
        { name: 'texto', type: 'text', localized: true, required: true },
        { name: 'ancla', type: 'text', required: true },
      ],
    },
  ],
}
