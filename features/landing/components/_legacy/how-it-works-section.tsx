import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { HOW_IT_WORKS_CARDS } from "../../copy"

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground shadow-sm">
      {children}
    </span>
  )
}

function MockPricing() {
  return (
    <div className="rounded-2xl border border-border bg-background p-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium italic">whenevr®</span>
        <Badge variant="secondary" className="text-[0.625rem]">
          Popular
        </Badge>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-medium">$2,995</span>
        <span className="text-xs text-muted-foreground">/mo</span>
      </div>
      <Button className="mt-4 w-full rounded-lg" size="sm">
        Join today
      </Button>
    </div>
  )
}

function MockPills() {
  const labels = [
    "Social Graphics",
    "UX Design",
    "Pitch Decks",
    "Landing Pages",
    "Illustrations",
    "Branding",
    "App Design",
    "Icon Design",
    "Style Guides",
  ]
  return (
    <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-muted/40 p-3">
      {labels.map((l) => (
        <Pill key={l}>{l}</Pill>
      ))}
    </div>
  )
}

function MockDelivery() {
  return (
    <div className="relative rounded-2xl border border-border bg-muted/30 p-4">
      <div className="mb-3 h-24 rounded-xl border border-dashed border-border bg-muted/50" />
      <div className="rounded-xl border border-border bg-background p-3 text-xs font-medium shadow-sm">
        Design Delivery
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-16">
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium shadow-sm">
            How it works
          </span>
          <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            Welcome to the <span className="italic text-muted-foreground">better</span> way of{" "}
            getting design done.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS_CARDS.map((card) => (
            <Card
              key={card.title}
              className="overflow-hidden rounded-3xl border-border/80 shadow-md ring-1 ring-border/40"
            >
              <div className="border-b border-border/60 bg-muted/20 p-4">
                {card.mock === "pricing" ? (
                  <MockPricing />
                ) : card.mock === "pills" ? (
                  <MockPills />
                ) : (
                  <MockDelivery />
                )}
              </div>
              <CardHeader className="gap-2">
                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
