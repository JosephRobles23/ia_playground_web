import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const SiteGlobal: GlobalConfig = {
  slug: 'site',
  label: 'Site Settings',
  admin: { group: 'Site' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Metadata',
      fields: [
        { name: 'tituloPagina', type: 'text', localized: true, required: true, admin: { description: 'Page title (shown in browser tab)' } },
        { name: 'descripcion', type: 'textarea', localized: true, required: true, admin: { description: 'Meta description for SEO' } },
      ],
    },
    {
      name: 'navegacion',
      type: 'group',
      label: 'Navigation',
      fields: [
        { name: 'marca', type: 'text', required: true, admin: { description: 'Brand name (e.g. "AI PlayGrounds")' } },
        {
          name: 'enlaces',
          type: 'array',
          label: 'Nav Links',
          fields: [
            { name: 'texto', type: 'text', localized: true, required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
        {
          name: 'alternarIdioma',
          type: 'group',
          label: 'Language Toggle',
          fields: [
            { name: 'etiqueta', type: 'text', localized: true, required: true, admin: { description: 'Label shown (e.g. "EN" or "ES")' } },
            { name: 'ruta', type: 'text', localized: true, required: true, admin: { description: 'Route (e.g. "/en" or "/es")' } },
          ],
        },
        {
          name: 'cta',
          type: 'group',
          label: 'Nav CTA',
          fields: [
            { name: 'texto', type: 'text', localized: true, required: true },
            { name: 'ancla', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
