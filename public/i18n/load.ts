/**
 * Data layer — Payload CMS Local API
 *
 * Fetches content from Payload globals for each landing page section.
 * Functions are async — all consumers must `await` them.
 */
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Locale } from './config'

async function fetchGlobal(slug: string, locale: Locale) {
  try {
    const payload = await getPayload({ config: configPromise })
    return payload.findGlobal({ slug, locale, depth: 2 })
  } catch (err) {
    console.error(`[CMS] Failed to fetch global "${slug}" (locale: ${locale}):`, err)
    return null
  }
}

/**
 * Get the content for a landing page section global.
 * Returns null if the DB is unavailable or the global is not yet seeded.
 */
export async function getSectionContent(locale: Locale, section: string) {
  return fetchGlobal(section, locale)
}

/**
 * Get the site-wide content (header, meta) from the site global.
 * Returns null if the DB is unavailable or the global is not yet seeded.
 */
export async function getSiteContent(locale: Locale) {
  return fetchGlobal('site', locale)
}
