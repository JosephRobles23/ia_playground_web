import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Locale } from "@/public/i18n/config"
import { getSectionContent } from "@/public/i18n/load"
import { hrefWithLocale } from "@/public/i18n/paths"
import { ScrollReveal } from "@/features/landing/components/shared"

function resolveFooterHref(locale: Locale, href: string) {
  if (href.startsWith("#")) {
    return hrefWithLocale(locale, href)
  }
  return href
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = getSectionContent(locale, "footer")
  if (!c || !("columnas" in c)) return null

  const cols = c.columnas as Record<string, { etiqueta: string; href: string }[]>

  return (
    <footer className="bg-background px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
            <div className="lg:col-span-1">
              <p className="font-semibold">AI PlayGrounds</p>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{c.eslogan}</p>
              <form className="mt-6 flex max-w-sm flex-col gap-2 sm:flex-row" action="#" method="post">
                <Input
                  type="email"
                  placeholder={c.newsletter.placeholderEmail}
                  className="rounded-full"
                  aria-label="Email newsletter"
                />
                <Button type="submit" className="rounded-full sm:shrink-0">
                  {c.newsletter.boton}
                </Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">{c.newsletter.texto}</p>
            </div>

            {Object.entries(cols).map(([title, links]: [string, { etiqueta: string; href: string }[]]) => (
              <div key={title}>
                <p className="text-sm font-semibold">{title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {links.map((l: { etiqueta: string; href: string }) => (
                    <li key={l.etiqueta}>
                      <Link
                        href={resolveFooterHref(locale, l.href)}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {l.etiqueta}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm font-medium text-muted-foreground">{c.etiquetaAliados}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {c.aliados.map((a: string) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div> */}

        <ScrollReveal variant="fade-in" delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
            <p>{c.copyright}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {c.enlacesPieSociales.map((name: string) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
