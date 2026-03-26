import { notFound } from "next/navigation"

import { LandingPage } from "@/features/landing"
import { isLocale } from "@/public/i18n/config"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <LandingPage locale={locale} />
}
