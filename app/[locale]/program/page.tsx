import { notFound } from "next/navigation"

import { isLocale } from "@/public/i18n/config"
import { ProgramSection } from "@/features/landing/components/program/program-section"
import { WaitlistSection } from "@/features/landing/components/waitlist/waitlist-section"
import { SiteFooter } from "@/features/landing/components/site-footer/site-footer"

type Props = { params: Promise<{ locale: string }> }

export default async function ProgramPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <>
      <ProgramSection locale={locale} />
      <WaitlistSection locale={locale} />
      <SiteFooter locale={locale} />
    </>
  )
}
