import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import ShinyText from "@/components/ShinyText"

export function TrajectorySection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "trajectory")
  if (!c || !("eventosTimeline" in c)) return null

  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="trajectory">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            <ShinyText text={c.titulo} speed={3} />
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </ScrollReveal>

        <ScrollRevealGroup className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1} variant="scale-up">
          {c.estadisticas.map((s: { valor: string; sufijo: string; etiqueta: string }) => (
            <div key={s.etiqueta} className="rounded-2xl border border-border bg-muted/30 p-6 text-center">
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {s.valor}
                {s.sufijo}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.etiqueta}</p>
            </div>
          ))}
        </ScrollRevealGroup>

        <div>
          <ul className="flex flex-col gap-8">
            {c.eventosTimeline.map(
              (
                ev: { titulo: string; descripcion: string; etiquetas: string[] },
                index: number,
              ) => (
                <ScrollReveal key={ev.titulo} variant="fade-left" delay={index * 0.07}>
                  <li className="relative flex gap-6 md:gap-8">
                    <span className="relative z-10 mt-1.5 hidden w-8 shrink-0 pt-0.5 text-xs font-medium tabular-nums text-muted-foreground md:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Card className="flex-1 rounded-2xl border-border/80 shadow-sm">
                      <CardHeader className="gap-2">
                        <CardTitle className="text-lg font-medium">{ev.titulo}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{ev.descripcion}</CardDescription>
                        <p className="pt-2 text-xs text-muted-foreground">{ev.etiquetas.join(" · ")}</p>
                      </CardHeader>
                    </Card>
                  </li>
                </ScrollReveal>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
