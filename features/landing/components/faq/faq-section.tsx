"use client"

import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { ScrollReveal, SectionKicker } from "@/features/landing/components/shared"
import ShinyText from "@/components/ShinyText"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function FaqSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "faq")
  if (!c || !("items" in c)) return null

  return (
    <section className="border-t border-border bg-background px-4 py-16 md:px-6 md:py-24" id="faq">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <ScrollReveal variant="fade-left" className="flex flex-col gap-6">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
            <ShinyText text={c.titulo} speed={3} />
          </h2>
          <Separator />
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Email</span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input readOnly value="contact@aiplaygrounds.com" className="max-w-sm rounded-full" />
              <Button asChild className="rounded-full">
                <Link href="mailto:contact@aiplaygrounds.com">
                  {locale === "en" ? "Contact" : "Contacto"}
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-right" delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3 border-0 bg-transparent shadow-none"
          >
            {c.items.map((item: { pregunta: string; respuesta: string }, index: number) => (
              <AccordionItem
                key={item.pregunta}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-4 shadow-sm"
              >
                <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline">
                  {item.pregunta}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">{item.respuesta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
