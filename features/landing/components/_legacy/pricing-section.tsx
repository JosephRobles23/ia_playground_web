"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import { PRICING_FEATURES } from "../../copy"

const BASE = 2995
const ADDON = 995

export function PricingSection() {
  const [extraTask, setExtraTask] = React.useState(false)
  const total = BASE + (extraTask ? ADDON : 0)

  return (
    <div className="px-4 pb-20 pt-4 md:px-6 md:pb-24" id="pricing">
      <div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-[40px] border border-zinc-700/80 bg-[#18181B] text-white shadow-2xl lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-medium italic">whenevr</span>
              <span className="text-sm font-medium text-zinc-400">®</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Submit any design task you need. Landing pages, product visuals, brand assets, and
              more.
            </p>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium md:text-5xl">
                ${total.toLocaleString("en-US")}
              </span>
              <span className="text-lg text-zinc-400">/month</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-700 pt-6">
              <div className="flex flex-wrap items-baseline gap-2 text-sm">
                <span className="text-zinc-400">Additional Active Task</span>
                <span className="text-zinc-500">+${ADDON}</span>
              </div>
              <Switch
                checked={extraTask}
                onCheckedChange={setExtraTask}
                aria-label="Activar tarea adicional"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-zinc-700/60 bg-zinc-800/40 p-8 md:p-10">
          <ul className="flex flex-col gap-4">
            {PRICING_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm font-medium">
                <HugeiconsIcon
                  icon={Tick02Icon}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-white"
                />
                {f}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link href="#intro">Join today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
