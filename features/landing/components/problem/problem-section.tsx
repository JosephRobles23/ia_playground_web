import { LexicalContent, ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import ShinyText from "@/components/ShinyText"
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export async function ProblemSection({ locale }: { locale: Locale }) {
  const c = await getSectionContent(locale, "problem")
  if (!c || !("pasos" in c)) return null

  return (
    <section className="border-y border-border/60 bg-muted/30 px-4 py-16 md:px-6 md:py-24" id="problem">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative pb-20 md:pb-32">
          <div className="lg:sticky lg:top-40 flex flex-col gap-4 z-10 pt-4">
            <ScrollReveal variant="fade-up" className="flex flex-col gap-4">
              <SectionKicker>{c.etiqueta}</SectionKicker>
              <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight md:text-5xl">
                <ShinyText text={c.tituloLinea1} speed={3} />
                <br />
                <ShinyText text={c.tituloLinea2} speed={3} delay={0.3} />
              </h2>
              <p className="max-w-md text-base text-muted-foreground md:text-lg leading-relaxed mt-2">
                <LexicalContent content={c.subtituloHtml} />
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full relative min-w-0">
            <ScrollStack
              useWindowScroll={true}
              className="w-full"
              itemDistance={80}
              itemStackDistance={35}
              stackPosition="10%"
              baseScale={0.88}
              rotationAmount={0}
              blurAmount={2}
            >
              {c.pasos.map((paso: { numero: string; titulo: string; descripcion: string }) => (
                <ScrollStackItem
                  key={paso.numero}
                  itemClassName="bg-background/90 backdrop-blur-3xl border border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:bg-zinc-950/80 dark:border-zinc-800/60 flex flex-col justify-center"
                >
                  <div className="flex gap-4 md:gap-6 items-start md:items-center w-full">
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-[1rem] bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.15)] ring-1 ring-inset ring-white/10">
                      <span className="text-xl md:text-2xl font-bold tabular-nums tracking-tighter">
                        {paso.numero}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-1 text-foreground">{paso.titulo}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{paso.descripcion}</p>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>        <ScrollReveal variant="fade-left" delay={0.1}>
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
