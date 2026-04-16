import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const ProgramGlobal: GlobalConfig = {
  slug: 'program',
  label: 'Program',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'etiqueta',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Section kicker' },
    },
    {
      name: 'titulo',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'cita',
      type: 'textarea',
      localized: true,
      admin: { description: 'Inspirational quote below title' },
    },
    {
      name: 'pilares',
      type: 'array',
      label: 'Pillars',
      admin: { description: 'The 3 main pillars (cards)' },
      fields: [
        { name: 'icono', type: 'text', admin: { description: 'Emoji icon' } },
        { name: 'titulo', type: 'text', localized: true, required: true },
        { name: 'descripcion', type: 'textarea', localized: true, required: true },
      ],
    },
    {
      name: 'tituloHitos',
      type: 'text',
      localized: true,
      admin: { description: 'Title for the milestones section' },
    },
    {
      name: 'hitos',
      type: 'array',
      label: 'Milestones',
      admin: { description: 'The 4 project milestones' },
      fields: [
        { name: 'numero', type: 'text', required: true, admin: { description: 'e.g. "01"' } },
        { name: 'titulo', type: 'text', localized: true, required: true },
        { name: 'descripcion', type: 'text', localized: true, required: true },
      ],
    },
    {
      name: 'tituloValidacion',
      type: 'text',
      localized: true,
      admin: { description: 'Title for the validation section' },
    },
    {
      name: 'preguntasValidacion',
      type: 'array',
      label: 'Validation Questions',
      fields: [
        { name: 'pregunta', type: 'text', localized: true, required: true },
      ],
    },
    {
      name: 'metricasEstructura',
      type: 'array',
      label: 'Structure Metrics',
      admin: { description: 'Bottom stats (e.g. "3 months per cycle")' },
      fields: [
        { name: 'valor', type: 'text', required: true },
        { name: 'etiqueta', type: 'text', localized: true, required: true },
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
