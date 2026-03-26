import { BRANDS } from "../../copy"

export function SocialBrandsSection() {
  const items = [...BRANDS, ...BRANDS]
  return (
    <section
      className="border-t border-border/60 bg-background px-4 py-10 md:px-6 md:py-12"
      aria-label="Marcas que confían"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-sm font-medium text-muted-foreground md:max-w-[12rem]">
          Trusted by the biggest brands worldwide
        </p>
        <div className="relative min-h-11 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="landing-marquee-track items-center gap-12 opacity-60 md:gap-16">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-xl font-medium uppercase tracking-[-0.05em] text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
