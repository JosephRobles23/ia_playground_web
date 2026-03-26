import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { getSectionContent } from "@/features/landing/content"
import { SectionKicker } from "@/features/landing/components/shared"

export function Coming2026Section() {
  const c = getSectionContent("coming2026")
  if (!c || !("iniciativas" in c)) return null

  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="coming2026">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">{c.titulo}</h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.iniciativas.map((item: { titulo: string; descripcion: string; categoria: string }) => (
            <Card key={item.titulo} className="rounded-3xl border-border/80 shadow-md">
              <CardHeader className="gap-2">
                <p className="text-xs text-muted-foreground">{item.categoria}</p>
                <CardTitle className="text-lg font-medium">{item.titulo}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{item.descripcion}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href={c.cta.ancla}>{c.cta.texto}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
