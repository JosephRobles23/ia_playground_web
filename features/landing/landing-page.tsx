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

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ProblemSection />
        <ProgramSection />
        <UmbralSection />
        <TrajectorySection />
        <EventsSection />
        <Coming2026Section />
        <CommunitySection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </div>
  )
}
