import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const FaqGlobal: GlobalConfig = {
  slug: 'faq',
  label: 'FAQ',
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
      name: 'items',
      type: 'array',
      label: 'FAQ Items',
      admin: { description: 'Add, remove, or reorder FAQ questions' },
      fields: [
        {
          name: 'pregunta',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'The question' },
        },
        {
          name: 'respuesta',
          type: 'textarea',
          localized: true,
          required: true,
          admin: { description: 'The answer' },
        },
      ],
    },
  ],
}
