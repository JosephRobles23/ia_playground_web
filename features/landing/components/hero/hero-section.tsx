import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { getSectionContent } from "@/features/landing/content"

export function HeroSection() {
  const c = getSectionContent("hero")
  if (!c || !("mockupCodigo" in c)) return null

  const items = [...c.pasarelaLogos.items, ...c.pasarelaLogos.items]

  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-12 pt-16 md:px-6 md:pb-20 md:pt-24 lg:pt-28"
      id="hero"
    >
      <div
        className="pointer-events-none absolute left-2/2 top-[-8rem] -z-10 size-[min(100vw,900px)] -translate-x-2/2 opacity-30"
        aria-hidden
      >
        <Image
          src="/images/figma/hero-decoration-72c2fd.png"
          alt=""
          width={800}
          height={534}
          className="h-auto w-full blur-[64px]"
          priority
        />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-6 text-sm text-muted-foreground">{c.badge}</p>

        <h1 className="max-w-3xl text-balance font-medium tracking-tight text-foreground">
          <span className="block text-4xl leading-[1.1] sm:text-5xl md:text-6xl">{c.titularLinea1}</span>
          <span className="mt-1 block text-4xl leading-[1.1] sm:text-5xl md:text-6xl">{c.titularLinea2}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          {c.subtitulo}{" "}
          <span className="font-medium text-foreground">{c.subtituloEnfasis}</span>
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="default" size="lg" className="rounded-full px-6" asChild>
            <Link href={c.ctaPrincipal.ancla}>{c.ctaPrincipal.texto}</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-border bg-background/80 px-6 shadow-sm backdrop-blur-sm"
            asChild
          >
            <Link href={c.ctaSecundario.ancla}>{c.ctaSecundario.texto}</Link>
          </Button>
        </div>

        <div className="mt-12 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-muted/40 p-4 text-left shadow-sm ring-1 ring-border/40">
          <div className="mb-3 border-b border-border/60 pb-2">
            <span className="font-mono text-xs text-muted-foreground">{c.mockupCodigo.nombreArchivo}</span>
          </div>
          <pre className="font-mono text-xs leading-relaxed text-foreground md:text-sm">
            {c.mockupCodigo.comentarios.join("\n")}
          </pre>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-border/60 pt-10">
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
    </section>
  )
}
