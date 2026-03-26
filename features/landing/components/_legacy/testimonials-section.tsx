import { Card, CardContent } from "@/components/ui/card"

import { TESTIMONIALS } from "../../copy"

export function TestimonialsSection() {
  return (
    <div className="px-4 pb-12 pt-8 md:px-6 md:pb-16">
      <div className="mx-auto mb-10 max-w-6xl md:mb-14">
        <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-white shadow-sm backdrop-blur-md">
          Testimonials
        </span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-white md:text-4xl">
          Turns out, people like getting things{" "}
          <span className="italic text-zinc-400">done.</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#18181B] to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#18181B] to-transparent md:w-16" />
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.name}
              className="min-w-[min(100%,320px)] shrink-0 snap-center rounded-3xl border-zinc-700/80 bg-zinc-800/50 text-zinc-100 shadow-lg md:min-w-0"
            >
              <CardContent className="flex flex-col gap-6 p-6">
                <p className="text-sm leading-relaxed text-zinc-300">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold text-white"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col gap-0.5 text-left">
                    <span className="text-sm font-medium text-white">{t.name}</span>
                    <span className="text-xs text-zinc-400">{t.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
