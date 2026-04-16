/**
 * WaitlistSection — Server Component wrapper.
 * Fetches content from Payload and passes it to WaitlistSectionClient.
 */
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { WaitlistSectionClient } from "./waitlist-section.client"

export async function WaitlistSection({ locale }: { locale: Locale }) {
  const c = await getSectionContent(locale, "waitlist")
  if (!c || !("formulario" in c)) return null
  return <WaitlistSectionClient content={c} />
}
