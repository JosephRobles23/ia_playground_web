import type { GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidateLanding: GlobalAfterChangeHook = ({ req }) => {
  req.payload.logger.info('Revalidating landing pages (/es and /en)...')
  revalidatePath('/es', 'page')
  revalidatePath('/en', 'page')
}
