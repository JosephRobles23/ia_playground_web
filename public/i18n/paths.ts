import type { Locale } from "./config"

/** Ruta con prefijo de idioma y ancla (ej. `/es#program`). */
export function hrefWithLocale(locale: Locale, ancla: string) {
  const hash = ancla.startsWith("#") ? ancla : `#${ancla}`
  return `/${locale}${hash}`
}
