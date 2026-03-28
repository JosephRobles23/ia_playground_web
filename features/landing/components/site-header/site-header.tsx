import Link from "next/link"

import { Button } from "@/components/ui/button"
import { getSiteContent } from "@/public/i18n/load"
import { hrefWithLocale, resolveNavHref } from "@/public/i18n/paths"
import type { Locale } from "@/public/i18n/config"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader({ locale }: { locale: Locale }) {
  const { navegacion } = getSiteContent(locale)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight md:text-base">
          {navegacion.marca}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navegacion.enlaces.map((a: { texto: string; href: string }) => (
            <Button key={a.href} variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <Link href={resolveNavHref(locale, a.href)}>{a.texto}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden text-muted-foreground sm:inline-flex" asChild>
            <Link href={navegacion.alternarIdioma.ruta}>{navegacion.alternarIdioma.etiqueta}</Link>
          </Button>
          <Button size="sm" className="rounded-full px-4" asChild>
            <Link href={hrefWithLocale(locale, navegacion.cta.ancla)}>{navegacion.cta.texto}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
