"use client"

import dynamic from "next/dynamic"

// ssr: false is only valid inside Client Components — hence this wrapper
const WavyBackground = dynamic(
  () => import("@/components/ui/wavy-background").then((m) => ({ default: m.WavyBackground })),
  { ssr: false }
)

export function WavyBackgroundClient() {
  return (
    <WavyBackground
      containerClassName="h-full w-full"
      className="hidden"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#c888d1ff", "#22d3ee"]}
      backgroundFill="transparent"
      waveOpacity={0.28}
      blur={8}
      speed="slow"
      waveWidth={40}
    />
  )
}
