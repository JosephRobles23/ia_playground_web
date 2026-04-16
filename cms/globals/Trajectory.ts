import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const TrajectoryGlobal: GlobalConfig = {
  slug: 'trajectory',
  label: 'Trajectory',
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
      name: 'estadisticas',
      type: 'array',
      label: 'Statistics',
      fields: [
        { name: 'valor', type: 'text', required: true },
        { name: 'sufijo', type: 'text', admin: { description: 'e.g. "+" or empty' } },
        { name: 'etiqueta', type: 'text', localized: true, required: true },
      ],
    },
    {
      name: 'eventosTimeline',
      type: 'array',
      label: 'Timeline Events',
      admin: { description: 'Events shown in the timeline' },
      fields: [
        { name: 'titulo', type: 'text', localized: true, required: true },
        { name: 'descripcion', type: 'textarea', localized: true, required: true },
        {
          name: 'etiquetas',
          type: 'array',
          label: 'Tags',
          fields: [
            { name: 'etiqueta', type: 'text', localized: true, required: true },
          ],
        },
      ],
    },
  ],
}
