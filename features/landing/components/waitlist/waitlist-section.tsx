"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ScrollReveal } from "@/features/landing/components/shared"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function WaitlistSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "waitlist")
  if (!c || !("formulario" in c)) return null

  return (
    <section className="relative isolate overflow-hidden px-4 py-16 md:px-6 md:py-24" id="waitlist">
      {/* Square grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-background to-transparent" aria-hidden />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden />

      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
            {c.titularLinea1}
            <br />
            {c.titularLinea2}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.15}>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <Input
              type="email"
              required
              placeholder={c.formulario.placeholderEmail}
              className="h-12 rounded-full px-4"
              name="email"
              autoComplete="email"
            />
            <Button type="submit" size="lg" className="h-12 shrink-0 rounded-full px-8 hover:scale-105 transition-transform duration-300">
              {c.formulario.boton}
            </Button>
          </form>
        </ScrollReveal>

        {/* <ScrollReveal variant="fade-up" delay={0.25}>
          <div className="mt-14 rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8">
            <p className="font-medium text-foreground">{c.bloqueAlianzas.textoEnfasis}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.bloqueAlianzas.texto}</p>
            <Button variant="outline" className="mt-4 rounded-full" asChild>
              <Link href={`mailto:${c.bloqueAlianzas.cta.mailto}`}>{c.bloqueAlianzas.cta.texto}</Link>
            </Button>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  )
}
