import { GlowingCard, HtmlSnippet, SectionKicker } from "@/features/landing/components/shared"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"

export function UmbralSection({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "umbral")
  if (!c || !("mockupUi" in c)) return null
  const m = c.mockupUi

  return (
    <section className="border-y border-border/60 bg-muted/20 px-4 py-16 md:px-6 md:py-24" id="umbral">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionKicker>{c.etiqueta}</SectionKicker>
          <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">{c.titulo}</h2>
          <p className="text-lg font-medium italic text-muted-foreground">{c.eslogan}</p>
          <div className="text-base leading-relaxed text-muted-foreground">
            <HtmlSnippet html={c.descripcionHtml} as="div" />
          </div>
          <ul className="flex flex-col gap-4">
            {c.caracteristicas.map((f: { titulo: string; descripcion: string }) => (
              <li key={f.titulo}>
                <p className="font-medium">{f.titulo}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{f.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl ring-1 ring-border/40">
          <div className="border-b border-border bg-muted/40 px-3 py-2">
            <span className="font-mono text-xs text-muted-foreground">{m.urlBarra}</span>
          </div>
          <div className="space-y-4 p-4 md:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{m.cabeceraPortafolio}</h3>
              <span className="text-xs font-medium text-primary">{m.cohorte}</span>
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {m.etiquetaFundamentos}
            </p>
            <div className="space-y-3">
              <GlowingCard
                className="border-border/60"
                innerClassName="bg-muted/30 p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">{m.proyecto1.nombre}</span>
                  <span className="text-xs text-emerald-700 dark:text-emerald-300">{m.proyecto1.estado}</span>
                </div>
                <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">{m.proyecto1.etiquetas.join(" · ")}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${m.proyecto1.porcentaje}%` }}
                  />
                </div>
              </GlowingCard>
              <GlowingCard
                className="border-border/60"
                innerClassName="bg-muted/30 p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">{m.proyecto2.nombre}</span>
                  <span className="text-xs text-amber-800 dark:text-amber-200">{m.proyecto2.estado}</span>
                </div>
                <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">{m.proyecto2.etiquetas.join(" · ")}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary/70"
                    style={{ width: `${m.proyecto2.porcentaje}%` }}
                  />
                </div>
              </GlowingCard>
            </div>
            <GlowingCard
              className="border-dashed border-border/80"
              innerClassName="border border-dashed border-border/80 bg-muted/20 p-3 text-center"
            >
              <div className="grid grid-cols-3 gap-2">
                {m.miniEstadisticas.etiquetas.map((label: string, i: number) => (
                  <div key={label}>
                    <p className="text-lg font-semibold tabular-nums">{i === 0 ? "2" : i === 1 ? "12" : "47"}</p>
                    <p className="text-[0.65rem] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </GlowingCard>
            <p className="text-center text-[0.65rem] text-muted-foreground">{m.miniEstadisticas.nota}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
