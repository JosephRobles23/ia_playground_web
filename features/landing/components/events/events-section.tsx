import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function EventsSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "events")
  if (!c || !("jurado" in c)) return null

  return (
    <section
      className="border-y border-border/60 bg-[#18181B] px-4 py-16 text-white md:px-6 md:py-24"
      id="events"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker tone="dark">{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">{c.titulo}</h2>
          <p className="max-w-2xl text-lg text-zinc-400">{c.subtitulo}</p>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">{c.descripcion}</p>
        </ScrollReveal>

        <ScrollRevealGroup className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1} variant="scale-up">
          {c.estadisticas.map((s: { valor: string; etiqueta: string }) => (
            <div key={s.etiqueta} className="rounded-2xl border border-zinc-700/80 bg-zinc-800/40 p-6 text-center">
              <p className="text-2xl font-semibold md:text-3xl">{s.valor}</p>
              <p className="mt-2 text-sm text-zinc-400">{s.etiqueta}</p>
            </div>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal variant="fade-up" delay={0.05}>
          <h3 className="mb-6 text-xl font-medium">{c.tituloJurado}</h3>
        </ScrollReveal>
        <ScrollRevealGroup className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" staggerDelay={0.08}>
          {c.jurado.map((j: { nombre: string; rol: string; pais: string }) => (
            <Card key={j.nombre} className="rounded-2xl border-zinc-700/80 bg-zinc-800/50 text-zinc-100">
              <CardContent className="flex flex-col gap-1 p-4">
                <p className="font-medium">{j.nombre}</p>
                <p className="text-xs text-zinc-400">{j.rol}</p>
                <p className="text-xs text-zinc-500">{j.pais}</p>
              </CardContent>
            </Card>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <div>
            <h3 className="mb-4 text-center text-lg font-medium text-zinc-300">{c.tituloSponsors}</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-zinc-500">
              {c.sponsors.map((s: string) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15} className="mt-12 flex justify-center">
          <Button size="lg" className="rounded-full px-8" variant="secondary" asChild>
            <Link href={c.cta.url} target="_blank" rel="noopener noreferrer">
              {c.cta.texto}
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
