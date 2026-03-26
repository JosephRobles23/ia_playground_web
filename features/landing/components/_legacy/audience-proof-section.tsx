import Link from "next/link"

import { Button } from "@/components/ui/button"

export function AudienceProofSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/40 px-4 py-16 md:px-6 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <div className="absolute left-[8%] top-[12%] size-16 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 blur-2xl md:size-24" />
        <div className="absolute left-[22%] top-[28%] size-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 blur-2xl md:size-20" />
        <div className="absolute right-[18%] top-[8%] size-20 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 blur-2xl md:size-28" />
        <div className="absolute bottom-[20%] left-[35%] size-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 blur-2xl md:size-16" />
        <div className="absolute bottom-[12%] right-[30%] size-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 blur-2xl md:size-22" />
        <div className="absolute right-[8%] top-[40%] size-14 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 blur-2xl md:size-18" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
          100+ clients getting <span className="italic text-muted-foreground">better</span>
          design, faster.
        </h2>
        <Button variant="outline" size="lg" className="rounded-full shadow-sm" asChild>
          <Link href="#intro">Open calendar</Link>
        </Button>
      </div>
    </section>
  )
}
