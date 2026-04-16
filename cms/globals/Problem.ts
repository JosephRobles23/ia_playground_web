import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const ProblemGlobal: GlobalConfig = {
  slug: 'problem',
  label: 'Problem',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'etiqueta',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Section kicker / badge' },
    },
    {
      name: 'tituloLinea1',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'First line of the section title' },
    },
    {
      name: 'tituloLinea2',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Second line of the section title' },
    },
    {
      name: 'subtituloHtml',
      type: 'richText',
      localized: true,
      required: true,
      admin: { description: 'Subtitle with emphasis (em/strong). Use the rich text editor for formatting.' },
    },
    {
      name: 'pasos',
      type: 'array',
      label: 'Steps',
      admin: { description: 'The numbered problem steps (scroll stack cards)' },
      fields: [
        { name: 'numero', type: 'text', required: true, admin: { description: 'Step number (e.g. "1")' } },
        { name: 'titulo', type: 'text', localized: true, required: true },
        { name: 'descripcion', type: 'text', localized: true, required: true },
      ],
    },
    {
      name: 'cita',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Blockquote text' },
    },
    {
      name: 'estadisticas',
      type: 'array',
      label: 'Statistics',
      admin: { description: 'Stats displayed at the bottom (e.g. "73% can\'t explain their code")' },
      fields: [
        { name: 'valor', type: 'text', required: true, admin: { description: 'Number value (e.g. "73")' } },
        { name: 'sufijo', type: 'text', required: true, admin: { description: 'Suffix (e.g. "%")' } },
        { name: 'etiqueta', type: 'text', localized: true, required: true },
      ],
    },
  ],
}
