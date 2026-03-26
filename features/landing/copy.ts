export const BRANDS = [
  "Acme Corp",
  "Vercel",
  "Linear",
  "Stripe",
  "Raycast",
  "Framer",
] as const

export const HERO_PILLS = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
] as const

export const HOW_IT_WORKS_CARDS = [
  {
    title: "Subscribe",
    description:
      "Pick a plan and get started right away. No calls, no setup, just design on demand.",
    mock: "pricing" as const,
  },
  {
    title: "Request",
    description:
      "Submit any design task you need. Landing pages, product visuals, brand assets, and more.",
    mock: "pills" as const,
  },
  {
    title: "Receive",
    description:
      "Your design is delivered in a few business days. Simple, fast, and ready to use.",
    mock: "delivery" as const,
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      "I've loved working with Whenevr. I didn't need to explain things twice. The design just showed up looking exactly how I pictured it.",
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
    initials: "AF",
  },
  {
    quote:
      "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
    name: "Eli Ramos",
    role: "Founder, Minos",
    initials: "ER",
  },
  {
    quote:
      "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    initials: "MK",
  },
] as const

export const PRICING_FEATURES = [
  "Unlimited design requests",
  "One active task at a time",
  "Delivered in a few business days",
  "Source files included",
  "Cancel or pause anytime",
] as const

export const BLOG_POSTS = [
  {
    category: "Branding",
    title: "Why Most Startups Keep Getting Design Wrong",
    excerpt:
      "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
    meta: "5 min read",
    byline: "by whenevr®",
    coverClass: "from-violet-500/30 via-fuchsia-500/20 to-background",
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    excerpt:
      "Lean teams are using design subscriptions to stay fast without hiring.",
    meta: "",
    byline: "",
    coverClass: "from-amber-500/25 via-orange-500/15 to-background",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    excerpt:
      "A behind the scenes look at how founders use design subscriptions to move faster.",
    meta: "",
    byline: "",
    coverClass: "from-sky-500/25 via-cyan-500/15 to-background",
  },
  {
    category: "Growth",
    title: "The Real Cost of Bad Design (It's Not What You Think)",
    excerpt:
      "Poor design slows down decisions clutters your message and stalls growth.",
    meta: "",
    byline: "",
    coverClass: "from-emerald-500/25 via-teal-500/15 to-background",
  },
] as const

export const FAQ_ITEMS = [
  {
    q: "How many design requests can I submit?",
    a: "As many as you need. Work moves through one active task at a time so quality stays high and delivery stays predictable.",
  },
  {
    q: "What kind of design work is included?",
    a: "Product UI, marketing sites, decks, brand assets, illustrations, and more—anything our team can deliver in Figma and standard export formats.",
  },
  {
    q: "How fast will I receive my designs?",
    a: "Most requests ship within a few business days depending on scope. Larger initiatives are split into milestones so you always see steady progress.",
  },
  {
    q: "Can I pause my subscription?",
    a: "Yes. Pause or cancel whenever you need—your workflow shouldn't lock you into a plan that no longer fits.",
  },
  {
    q: "What if I need development too?",
    a: "We can hand off dev-ready files and partner with your engineers. Need a build partner? Ask us about referrals.",
  },
] as const
