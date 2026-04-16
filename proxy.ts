import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { DEFAULT_LOCALE, LOCALES } from "@/public/i18n/config"

function pathnameHasLocale(pathname: string) {
  return LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathnameHasLocale(pathname)) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next()
  }

  if (pathname.includes(".")) {
    return NextResponse.next()
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url))
  }

  // Payload CMS routes must NOT be prefixed with a locale
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/payload") ||
    pathname.startsWith("/(payload)")
  ) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url))
}

export const config = {
  matcher: ["/", "/((?!_next|.*\\..*).*)"],
}
