"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  function toggle() {
    // Cycle: system → light → dark → system ...
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    } else if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full"
    >
      {/* Sun icon — visible in dark mode, fades and scales out in light */}
      <Sun
        className="absolute h-[1.1rem] w-[1.1rem] transition-all duration-300"
        style={{
          opacity: mounted && isDark ? 1 : 0,
          transform: mounted && isDark ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
        }}
        aria-hidden
      />
      {/* Moon icon — visible in light mode */}
      <Moon
        className="absolute h-[1.1rem] w-[1.1rem] transition-all duration-300"
        style={{
          opacity: mounted && !isDark ? 1 : 0,
          transform: mounted && !isDark ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(90deg)",
        }}
        aria-hidden
      />
      <span className="sr-only">{isDark ? "Tema claro" : "Tema oscuro"}</span>
    </Button>
  )
}
