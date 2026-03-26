"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function WaitlistSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "waitlist")
  if (!c || !("formulario" in c)) return null

  return (
    <section className="border-t border-border bg-muted/30 px-4 py-16 md:px-6 md:py-24" id="waitlist">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
          {c.titularLinea1}
          <br />
          {c.titularLinea2}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">{c.subtitulo}</p>

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
          <Button type="submit" size="lg" className="h-12 shrink-0 rounded-full px-8">
            {c.formulario.boton}
          </Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">{c.formulario.notaPrivacidad}</p>

        <div className="mt-14 rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8">
          <p className="font-medium text-foreground">{c.bloqueAlianzas.textoEnfasis}</p>
          <p className="mt-2 text-sm text-muted-foreground">{c.bloqueAlianzas.texto}</p>
          <Button variant="outline" className="mt-4 rounded-full" asChild>
            <Link href={`mailto:${c.bloqueAlianzas.cta.mailto}`}>{c.bloqueAlianzas.cta.texto}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
