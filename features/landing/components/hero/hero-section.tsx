import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { hrefWithLocale } from "@/public/i18n/paths"
import { ScrollReveal } from "@/features/landing/components/shared"
import { WavyBackgroundClient } from "@/features/landing/components/hero/wavy-background-client"
import Shuffle from "@/components/Shuffle"

export function HeroSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "hero")
  if (!c || !("mockupCodigo" in c)) return null

  const items = [...c.pasarelaLogos.items, ...c.pasarelaLogos.items]

  return (
    <section
      className="relative isolate flex h-dvh min-h-0 -mt-14 md:-mt-16 flex-col justify-center overflow-hidden px-4 md:px-6"
      id="hero"
    >
      {/* <div
        className="pointer-events-none absolute left-2/2 top-[-10rem] -z-10 size-[min(100vw,1200px)] -translate-x-1/2 opacity-30 "
        aria-hidden
      >
        <Image
          src="/images/figma/hero-decoration-72c2fd.png"
          alt=""
          width={1000}
          height={667}
          className="h-auto w-full blur-[45px]"
          priority
        />
      </div> */}

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center -translate-y-22">
        {/* <ScrollReveal variant="fade-in" duration={0.5}>
          <p className="mb-6 text-sm text-muted-foreground">{c.badge}</p>
        </ScrollReveal> */}

        <ScrollReveal variant="fade-up" delay={0.08} duration={0.85}>
          <h1 className="max-w-6xl text-balance font-medium tracking-tight text-foreground">
            <Shuffle
              tag="span"
              text={c.titularLinea1}
              className="block text-4xl leading-[1.1] sm:text-5xl md:text-6xl font-[family-name:var(--font-press-start-2p)] tracking-wide"
              shuffleDirection="up"
              duration={1}
              stagger={0.04}
              animationMode="evenodd"
            />
            <Shuffle
              tag="span"
              text={c.titularLinea2}
              className="mt-[0.9] block text-4xl leading-[1.1] sm:text-5xl md:text-6xl font-[family-name:var(--font-press-start-2p)] tracking-wide"
              shuffleDirection="up"
              duration={1}
              stagger={0.04}
              maxDelay={0.1}
              animationMode="evenodd"
            />
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.18} duration={0.55}>
          <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {c.subtitulo}{" "}
            <span className="font-medium text-foreground">{c.subtituloEnfasis}</span>
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.28} duration={0.5}>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row z-10">
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-6 shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              asChild
            >
              <Link href={hrefWithLocale(locale, c.ctaPrincipal.ancla)}>{c.ctaPrincipal.texto}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border bg-background/80 px-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-foreground/10"
              asChild
            >
              <Link href={hrefWithLocale(locale, c.ctaSecundario.ancla)}>{c.ctaSecundario.texto}</Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* <ScrollReveal variant="scale-up" delay={0.38} duration={0.6}>
          <div className="mt-12 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-muted/40 p-4 text-left shadow-sm ring-1 ring-border/40">
            <div className="mb-3 border-b border-border/60 pb-2">
              <span className="font-mono text-xs text-muted-foreground">{c.mockupCodigo.nombreArchivo}</span>
            </div>
            <pre className="font-mono text-xs leading-relaxed text-foreground md:text-sm">
              {c.mockupCodigo.comentarios.join("\n")}
            </pre>
          </div>
        </ScrollReveal> */}
      </div>

      {/*
        ─── Wavy Background ──────────────────────────────────────────────────
        Positioned absolutely so it sits as a decorative layer BETWEEN the
        CTA buttons (above) and the sponsors marquee (below). pointer-events-none
        ensures it never blocks clicks. z-[-1] keeps it behind all content.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 translate-y-[200px] "
        aria-hidden
      >
        <WavyBackgroundClient />
      </div>

      {/* Sponsors marquee — pinned to the bottom of the hero section */}
      <div className="absolute inset-x-0 bottom-0 z-20 pb-6">
        <ScrollReveal variant="fade-in" delay={0.5} duration={0.6}>
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-sm font-medium text-muted-foreground">{c.pasarelaLogos.etiqueta}</p>
            <div className="relative min-h-11 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-16" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-16" />
              <div className="landing-marquee-track items-center gap-10 opacity-80 md:gap-14">
                {items.map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="shrink-0 text-lg font-medium tracking-tight text-muted-foreground md:text-xl"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
