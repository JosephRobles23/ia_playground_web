import type { GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidateLanding: GlobalAfterChangeHook = ({ req }) => {
  try {
    req.payload.logger.info('Revalidating landing pages (/es and /en)...')
    revalidatePath('/es', 'page')
    revalidatePath('/en', 'page')
  } catch {
    // revalidatePath only works inside a Next.js request context.
    // When called from standalone scripts (e.g. pnpm seed), it's safely skipped.
    req.payload.logger.info(
      'Skipping revalidation — not in a Next.js request context (seed script)'
    )
  }
}
