/**
 * Data layer — Payload CMS Local API
 *
 * Replaces the static JSON imports with async calls to Payload's Local API.
 * `unstable_cache` provides a per-request cache tagged 'landing-content'
 * so that on-demand revalidation (via afterChange hooks) purges it instantly.
 *
 * NOTE: Both getSectionContent and getSiteContent are now ASYNC functions.
 * All consumers must `await` them.
 */
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import type { Locale } from './config'

// Cache tag used by revalidateLanding hook for targeted purge
export const LANDING_CACHE_TAG = 'landing-content'

async function fetchGlobal(slug: string, locale: Locale) {
  const payload = await getPayload({ config: configPromise })
  return payload.findGlobal({ slug, locale, depth: 2 })
}

/**
 * Get the content for a landing page section global (hero, problem, etc.)
 * Results are cached and invalidated on CMS save via revalidatePath.
 */
export const getSectionContent = unstable_cache(
  async (locale: Locale, section: string) => {
    return fetchGlobal(section, locale)
  },
  ['section-content'],
  { tags: [LANDING_CACHE_TAG] },
)

/**
 * Get the site-wide content (header, meta) from the site global.
 */
export const getSiteContent = unstable_cache(
  async (locale: Locale) => {
    return fetchGlobal('site', locale)
  },
  ['site-content'],
  { tags: [LANDING_CACHE_TAG] },
)
