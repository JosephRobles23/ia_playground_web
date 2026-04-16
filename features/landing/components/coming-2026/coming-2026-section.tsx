import Link from "next/link"

import { Button } from "@/components/ui/button"

import { GlowingCard, ScrollReveal, ScrollRevealGroup, SectionKicker } from "@/features/landing/components/shared"
import ShinyText from "@/components/ShinyText"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { hrefWithLocale } from "@/public/i18n/paths"

export async function Coming2026Section({ locale }: { locale: Locale }) {
  const c = await getSectionContent(locale, "coming2026")
  if (!c || !("iniciativas" in c)) return null

  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="coming2026">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            <ShinyText text={c.titulo} speed={3} />
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12} variant="scale-up">
          {c.iniciativas.map((item: { titulo: string; descripcion: string; categoria: string }) => (
            <GlowingCard key={item.titulo} innerClassName="flex flex-col gap-3 p-6">
              <p className="text-xs text-muted-foreground">{item.categoria}</p>
              <h3 className="text-lg font-medium leading-snug">{item.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.descripcion}</p>
            </GlowingCard>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal variant="fade-up" delay={0.1} className="mt-10 flex justify-center">
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href={hrefWithLocale(locale, c.cta.ancla)}>{c.cta.texto}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
