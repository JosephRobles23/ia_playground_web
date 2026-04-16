import type { Locale } from "./config"

/** Ruta con prefijo de idioma y ancla (ej. `/es#program`). */
export function hrefWithLocale(locale: Locale, ancla: string | null | undefined) {
  if (!ancla) return `/${locale}`
  const hash = ancla.startsWith("#") ? ancla : `#${ancla}`
  return `/${locale}${hash}`
}

/** Ruta de página con prefijo de idioma (ej. `/es/program`). */
export function hrefPage(locale: Locale, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `/${locale}${clean}`
}

/**
 * Resolve a nav link `href` value to a locale-prefixed URL.
 * Handles both page paths ("/program") and anchor-path combos ("/#trajectory").
 */
export function resolveNavHref(locale: Locale, href: string) {
  if (href.startsWith("/#")) {
    // anchor on home: /es#trajectory
    return `/${locale}${href.slice(1)}`
  }
  if (href.startsWith("#")) {
    return `/${locale}${href}`
  }
  // plain page path: /es/program
  return `/${locale}${href}`
}
