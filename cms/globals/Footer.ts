import type { GlobalConfig } from 'payload'
import { revalidateLanding } from '../hooks/revalidate-landing'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: { group: 'Landing Page' },
  hooks: { afterChange: [revalidateLanding] },
  fields: [
    {
      name: 'eslogan',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'newsletter',
      type: 'group',
      label: 'Newsletter',
      fields: [
        { name: 'texto', type: 'text', localized: true },
        { name: 'boton', type: 'text', localized: true },
        { name: 'placeholderEmail', type: 'text', localized: true },
      ],
    },
    {
      name: 'columnas',
      type: 'array',
      label: 'Footer Columns',
      admin: { description: 'Footer navigation columns (Program, Events, Community, Legal)' },
      fields: [
        {
          name: 'titulo',
          type: 'text',
          localized: true,
          required: true,
          admin: { description: 'Column title (e.g. "Program", "Events")' },
        },
        {
          name: 'enlaces',
          type: 'array',
          label: 'Links',
          fields: [
            { name: 'etiqueta', type: 'text', localized: true, required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'etiquetaAliados',
      type: 'text',
      localized: true,
    },
    {
      name: 'aliados',
      type: 'array',
      label: 'Partners',
      fields: [
        { name: 'nombre', type: 'text', required: true },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'enlacesPieSociales',
      type: 'array',
      label: 'Social Links',
      fields: [
        { name: 'nombre', type: 'text', required: true },
      ],
    },
  ],
}
