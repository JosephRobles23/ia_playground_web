import type { ReactNode } from "react"

/** Etiqueta de sección sin estilo de pastilla. */
export function SectionKicker({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode
  className?: string
  tone?: "default" | "dark"
}) {
  const c = tone === "dark" ? "text-zinc-500" : "text-muted-foreground"
  return (
    <p className={`text-xs font-semibold uppercase tracking-wider ${c} ${className}`}>{children}</p>
  )
}
