import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getSiteContent } from "@/public/i18n/load"
import { isLocale } from "@/public/i18n/config"
import { SiteHeader } from "@/features/landing/components/site-header/site-header"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isLocale(raw)) return {}
  const site = await getSiteContent(raw)
  return {
    title: site.meta.tituloPagina,
    description: site.meta.descripcion,
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} />
      <main className="flex flex-1 flex-col pt-14 md:pt-16">{children}</main>
    </div>
  )
}
