import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './cms/collections/Users'

// Globals
import { HeroGlobal } from './cms/globals/Hero'
import { ProblemGlobal } from './cms/globals/Problem'
import { ProgramGlobal } from './cms/globals/Program'
import { TrajectoryGlobal } from './cms/globals/Trajectory'
import { Coming2026Global } from './cms/globals/Coming2026'
import { FaqGlobal } from './cms/globals/Faq'
import { WaitlistGlobal } from './cms/globals/Waitlist'
import { FooterGlobal } from './cms/globals/Footer'
import { SiteGlobal } from './cms/globals/Site'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: { titleSuffix: ' — AI PlayGrounds CMS' },
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  editor: lexicalEditor(),

  localization: {
    locales: [
      { label: 'Español', code: 'es' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'es',
    fallback: true,
  },

  collections: [Users],

  globals: [
    SiteGlobal,
    HeroGlobal,
    ProblemGlobal,
    ProgramGlobal,
    TrajectoryGlobal,
    Coming2026Global,
    FaqGlobal,
    WaitlistGlobal,
    FooterGlobal,
  ],

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
