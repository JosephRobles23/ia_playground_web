import type { Locale } from "./config"

import siteEn from "../locales/en/site.json"
import siteEs from "../locales/es/site.json"
import coming2026En from "../locales/en/coming2026.json"
import coming2026Es from "../locales/es/coming2026.json"
import communityEn from "../locales/en/community.json"
import communityEs from "../locales/es/community.json"
import eventsEn from "../locales/en/events.json"
import eventsEs from "../locales/es/events.json"
import faqEn from "../locales/en/faq.json"
import faqEs from "../locales/es/faq.json"
import footerEn from "../locales/en/footer.json"
import footerEs from "../locales/es/footer.json"
import heroEn from "../locales/en/hero.json"
import heroEs from "../locales/es/hero.json"
import problemEn from "../locales/en/problem.json"
import problemEs from "../locales/es/problem.json"
import programEn from "../locales/en/program.json"
import programEs from "../locales/es/program.json"
import trajectoryEn from "../locales/en/trajectory.json"
import trajectoryEs from "../locales/es/trajectory.json"
import umbralEn from "../locales/en/umbral.json"
import umbralEs from "../locales/es/umbral.json"
import waitlistEn from "../locales/en/waitlist.json"
import waitlistEs from "../locales/es/waitlist.json"

const siteByLocale = {
  es: siteEs,
  en: siteEn,
} as const

const sectionsByLocale: Record<Locale, Record<string, unknown>> = {
  es: {
    hero: heroEs,
    problem: problemEs,
    program: programEs,
    umbral: umbralEs,
    trajectory: trajectoryEs,
    events: eventsEs,
    coming2026: coming2026Es,
    community: communityEs,
    faq: faqEs,
    waitlist: waitlistEs,
    footer: footerEs,
  },
  en: {
    hero: heroEn,
    problem: problemEn,
    program: programEn,
    umbral: umbralEn,
    trajectory: trajectoryEn,
    events: eventsEn,
    coming2026: coming2026En,
    community: communityEn,
    faq: faqEn,
    waitlist: waitlistEn,
    footer: footerEn,
  },
}

export function getSiteContent(locale: Locale) {
  return siteByLocale[locale]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- contenido heterogéneo por sección
export function getSectionContent(locale: Locale, id: string): any {
  return sectionsByLocale[locale][id] ?? null
}
