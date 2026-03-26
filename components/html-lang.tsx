"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { DEFAULT_LOCALE, isLocale } from "@/public/i18n/config"

export function HtmlLang() {
  const pathname = usePathname()

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0]
    document.documentElement.lang = segment && isLocale(segment) ? segment : DEFAULT_LOCALE
  }, [pathname])

  return null
}
