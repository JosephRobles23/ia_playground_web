import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { hrefWithLocale } from "@/public/i18n/paths"

export function ProgramSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "program")
  if (!c || !("pilares" in c)) return null

  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="program">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">{c.titulo}</h2>
          <p className="max-w-3xl text-lg font-medium italic text-muted-foreground">{c.cita}</p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-6 md:grid-cols-3" staggerDelay={0.13} variant="scale-up">
          {c.pilares.map((p: { titulo: string; descripcion: string }) => (
            <Card key={p.titulo} className="rounded-3xl border-border/80 shadow-md">
              <CardHeader className="gap-2">
                <CardTitle className="text-xl font-medium">{p.titulo}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{p.descripcion}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </ScrollRevealGroup>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="fade-left" delay={0.05}>
            <div>
              <h3 className="mb-6 text-xl font-medium">{c.tituloHitos}</h3>
              <ol className="flex flex-col gap-4">
                {c.hitos.map((h: { numero: string; titulo: string; descripcion: string }) => (
                  <li key={h.numero} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <span className="font-mono text-sm font-semibold text-muted-foreground">{h.numero}</span>
                    <div>
                      <p className="font-medium">{h.titulo}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{h.descripcion}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={0.15}>
            <div>
              <h3 className="mb-6 text-xl font-medium">{c.tituloValidacion}</h3>
              <ul className="flex flex-col gap-3">
                {c.preguntasValidacion.map((q: string) => (
                  <li
                    key={q}
                    className="flex gap-3 rounded-xl border border-border bg-background p-3 text-sm leading-relaxed"
                  >
                    <span className="mt-0.5 text-primary" aria-hidden>
                      ✓
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <Separator className="my-12" />

        <ScrollRevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4" staggerDelay={0.08} variant="scale-up">
          {c.metricasEstructura.map((m: { valor: string; etiqueta: string }) => (
            <div key={m.etiqueta} className="rounded-2xl border border-border/60 bg-muted/20 p-4 text-center">
              <p className="text-2xl font-semibold md:text-3xl">{m.valor}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{m.etiqueta}</p>
            </div>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal variant="fade-up" delay={0.1} className="mt-10 flex justify-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href={hrefWithLocale(locale, c.cta.ancla)}>{c.cta.texto}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
