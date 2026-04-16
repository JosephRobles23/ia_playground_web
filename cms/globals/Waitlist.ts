import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const WaitlistGlobal: GlobalConfig = {
  slug: 'waitlist',
  label: 'Waitlist',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'titularLinea1',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'titularLinea2',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'subtitulo',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'formulario',
      type: 'group',
      label: 'Form',
      fields: [
        { name: 'placeholderEmail', type: 'text', localized: true },
        { name: 'boton', type: 'text', localized: true, required: true },
        { name: 'notaPrivacidad', type: 'text', localized: true },
      ],
    },
    {
      name: 'bloqueAlianzas',
      type: 'group',
      label: 'Partnerships Block',
      admin: { description: 'Partnership CTA block (currently commented out in UI)' },
      fields: [
        { name: 'textoEnfasis', type: 'text', localized: true },
        { name: 'texto', type: 'text', localized: true },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'texto', type: 'text', localized: true },
            { name: 'mailto', type: 'email' },
          ],
        },
      ],
    },
  ],
}
