import type { Locale } from "@/public/i18n/config"
import {
  Coming2026Section,
  FaqSection,
  HeroSection,
  ProblemSection,
  ProgramSection,
  SiteFooter,
  TrajectorySection,
  WaitlistSection,
} from "./components"

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <ProblemSection locale={locale} />
      <ProgramSection locale={locale} />
      <TrajectorySection locale={locale} />
      <Coming2026Section locale={locale} />
      <FaqSection locale={locale} />
      <WaitlistSection locale={locale} />
      <SiteFooter locale={locale} />
    </>
  )
}
