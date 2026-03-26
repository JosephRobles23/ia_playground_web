import Link from "next/link"

import { Button } from "@/components/ui/button"

import { navegacion } from "@/features/landing/content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <Link href="#hero" className="text-sm font-semibold tracking-tight md:text-base">
          {navegacion.marca}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navegacion.enlaces.map((a) => (
            <Button key={a.ancla} variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <Link href={a.ancla}>{a.texto}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden text-muted-foreground sm:inline-flex" asChild>
            <Link href={navegacion.alternarIdioma.ruta}>{navegacion.alternarIdioma.etiqueta}</Link>
          </Button>
          <Button size="sm" className="rounded-full px-4" asChild>
            <Link href={navegacion.cta.ancla}>{navegacion.cta.texto}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
