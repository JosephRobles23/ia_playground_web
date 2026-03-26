import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getSiteContent } from "@/public/i18n/load"
import { isLocale } from "@/public/i18n/config"

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
  const site = getSiteContent(raw)
  return {
    title: site.meta.tituloPagina,
    description: site.meta.descripcion,
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return children
}
