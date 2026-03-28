import { notFound } from "next/navigation"

import { isLocale } from "@/public/i18n/config"
import { EventsSection } from "@/features/landing/components/events/events-section"
import { WaitlistSection } from "@/features/landing/components/waitlist/waitlist-section"
import { SiteFooter } from "@/features/landing/components/site-footer/site-footer"

type Props = { params: Promise<{ locale: string }> }

export default async function EventsPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <>
      <EventsSection locale={locale} />
      <WaitlistSection locale={locale} />
      <SiteFooter locale={locale} />
    </>
  )
}
