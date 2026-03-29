import { GlowingCard, HtmlSnippet, ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import ShinyText from "@/components/ShinyText"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function ProblemSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "problem")
  if (!c || !("pasos" in c)) return null

  return (
    <section className="border-y border-border/60 bg-muted/30 px-4 py-16 md:px-6 md:py-24" id="problem">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-12 flex flex-col gap-4 md:mb-16">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            <ShinyText text={c.tituloLinea1} speed={3} />
            <br />
            <ShinyText text={c.tituloLinea2} speed={3} delay={0.3} />
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            <HtmlSnippet html={c.subtituloHtml} />
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
          {c.pasos.map((paso: { numero: string; titulo: string; descripcion: string }) => (
            <GlowingCard key={paso.numero} innerClassName="p-4">
              <div className="flex gap-4">
                <span className="shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-primary">
                  {paso.numero}.
                </span>
                <div className="min-w-0">
                  <h3 className="font-medium leading-snug">{paso.titulo}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{paso.descripcion}</p>
                </div>
              </div>
            </GlowingCard>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal variant="fade-left" delay={0.1}>
          <blockquote className="mx-auto mt-12 max-w-3xl border-l-4 border-primary/40 pl-6 text-lg italic text-foreground md:text-xl">
            {c.cita}
          </blockquote>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-3" staggerDelay={0.1} variant="scale-up">
          {c.estadisticas.map((s: { valor: string; sufijo: string; etiqueta: string }) => (
            <div
              key={s.etiqueta}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {s.valor}
                {s.sufijo}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.etiqueta}</p>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
