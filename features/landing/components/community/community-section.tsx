import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { getSectionContent } from "@/features/landing/content"
import { SectionKicker } from "@/features/landing/components/shared"

export function CommunitySection() {
  const c = getSectionContent("community")
  if (!c || !("redes" in c)) return null

  return (
    <section className="border-t border-border/60 bg-muted/20 px-4 py-16 md:px-6 md:py-24" id="community">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">{c.titulo}</h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">{c.subtitulo}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.redes.map((r: { nombre: string; descripcionCorta: string }) => (
            <Card key={r.nombre} className="rounded-2xl border-border/80 shadow-sm">
              <CardHeader className="gap-2">
                <CardTitle className="text-base font-medium">{r.nombre}</CardTitle>
                <CardDescription>{r.descripcionCorta}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
