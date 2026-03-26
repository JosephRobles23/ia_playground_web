import type { Locale } from "./i18n/config"
import {
  Coming2026Section,
  CommunitySection,
  EventsSection,
  FaqSection,
  HeroSection,
  ProblemSection,
  ProgramSection,
  SiteFooter,
  SiteHeader,
  TrajectorySection,
  UmbralSection,
  WaitlistSection,
} from "./components"

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} />
      <main className="flex flex-1 flex-col">
        <HeroSection locale={locale} />
        <ProblemSection locale={locale} />
        <ProgramSection locale={locale} />
        <UmbralSection locale={locale} />
        <TrajectorySection locale={locale} />
        <EventsSection locale={locale} />
        <Coming2026Section locale={locale} />
        <CommunitySection locale={locale} />
        <FaqSection locale={locale} />
        <WaitlistSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  )
}
