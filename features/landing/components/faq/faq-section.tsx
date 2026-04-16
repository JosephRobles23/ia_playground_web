/**
 * FaqSection — Server Component wrapper.
 *
 * FaqSection needs 'use client' for the Accordion interaction, but
 * getSectionContent is async (Payload Local API). The pattern is:
 *   1. This server wrapper fetches the data.
 *   2. Passes content as props to FaqSectionClient (the interactive part).
 */
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { FaqSectionClient } from "./faq-section.client"

export async function FaqSection({ locale }: { locale: Locale }) {
  const c = await getSectionContent(locale, "faq")
  if (!c || !("items" in c)) return null
  return <FaqSectionClient locale={locale} content={c} />
}
