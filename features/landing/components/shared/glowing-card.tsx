"use client"

import type { ReactNode } from "react"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"

type GlowingCardProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
}

/** Contenedor con borde animado (misma idea que `components/glowing-effect-demo.tsx`). */
export function GlowingCard({ children, className, innerClassName }: GlowingCardProps) {
  return (
    <div
      className={cn(
        "relative h-full min-h-0 rounded-2xl border border-border/80 p-2 md:rounded-3xl md:p-3",
        className,
      )}
    >
      <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} disabled={false} />
      <div
        className={cn(
          "relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_#2D2D2D]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}
