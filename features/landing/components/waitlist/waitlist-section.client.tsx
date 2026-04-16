"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/features/landing/components/shared"
import ShinyText from "@/components/ShinyText"

type WaitlistContent = {
  titularLinea1: string
  titularLinea2: string
  subtitulo: string
  formulario: {
    placeholderEmail?: string
    boton: string
    notaPrivacidad?: string
  }
}

type Props = {
  content: WaitlistContent
}

export function WaitlistSectionClient({ content: c }: Props) {
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
            <ShinyText text={c.titularLinea1} speed={3} />
            <br />
            <ShinyText text={c.titularLinea2} speed={3} delay={0.3} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.15}>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={(e) => { e.preventDefault() }}
          >
            <Input
              type="email"
              required
              placeholder={c.formulario.placeholderEmail ?? "you@email.com"}
              className="h-12 rounded-full px-4"
              name="email"
              autoComplete="email"
            />
            <Button type="submit" size="lg" className="h-12 shrink-0 rounded-full px-8 hover:scale-105 transition-transform duration-300">
              {c.formulario.boton}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
