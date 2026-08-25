import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Play, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { CountUp } from "@/components/CountUp";
import { ChaosField } from "@/components/ChaosField";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HyperscaleDental — AI That Books Patients, Not Leads" },
      {
        name: "description",
        content:
          "AI patient recall, ad optimization and 24/7 call answering for DSOs. 22% recall conversion, $247K production recovered in 90 days. Live in 48 hours.",
      },
      { property: "og:title", content: "HyperscaleDental — AI That Books Patients, Not Leads" },
      {
        property: "og:description",
        content:
          "From Instagram scroller to scheduled appointment. HIPAA-compliant AI patient engine built for Dental Support Organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problems = [
  {
    tag: "Distribution",
    title: "Ads That Don't Convert",
    body: "You're paying for clicks, but the phone isn't ringing. No one is optimizing your campaigns daily.",
  },
  {
    tag: "Capacity",
    title: "Missed Calls = Missed Revenue",
    body: "Your front desk can't answer every call. Each missed call is a patient going to your competitor.",
  },
  {
    tag: "Retention",
    title: "Leads Falling Through the Cracks",
    body: "No follow-up system. No nurturing. Leads get cold, and you never know why.",
  },
  {
    tag: "Operations",
    title: "Staff Burnout",
    body: "Your team is overwhelmed with admin work instead of doing what they do best — patient care.",
  },
];

const steps = [
  {
    title: "We Run the Ads",
    body: "We create videos and run Meta ads targeting Spanish-speaking patients. No more guessing.",
  },
  {
    title: "We Optimize",
    body: "If an ad underperforms, we change it — instantly. No waiting for your team to ask.",
  },
  {
    title: "We Talk to Them",
    body: "AI calling agents + conversational AI + human oversight = every lead gets nurtured.",
  },
  {
    title: "We Book",
    body: "Appointment scheduled directly in your system. We confirm the patient shows up.",
  },
  {
    title: "We Monitor",
    body: "Real people watch every AI interaction to ensure professionalism and accuracy.",
  },
];

const calendlyUrl = "https://calendly.com/tanyasharma0195/30min";

function Logo() {
  return (
    <a
      href="#top"
      className="flex h-24 w-64 max-w-[44vw] items-center sm:max-w-[52vw] md:max-w-none"
    >
      <img
        src="/HyperScale_Logo.png"
        alt="Hyperscale Ops AI Marketing Company"
        className="max-h-full max-w-full object-contain object-left"
      />
    </a>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a
              href="#problem"
              onClick={() => setActiveTab("problem")}
              className={
                activeTab === "problem"
                  ? "rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-semibold text-primary"
                  : "transition-colors hover:text-foreground"
              }
            >
              Problem
            </a>
            <a
              href="#engine"
              onClick={() => setActiveTab("engine")}
              className={
                activeTab === "engine"
                  ? "rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-semibold text-primary"
                  : "transition-colors hover:text-foreground"
              }
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={() => setActiveTab("pricing")}
              className={
                activeTab === "pricing"
                  ? "rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-semibold text-primary"
                  : "transition-colors hover:text-foreground"
              }
            >
              Pricing
            </a>
            <a
              href="/multilingual-ai-phone-agent"
              onClick={() => setActiveTab("multilingual")}
              className={
                activeTab === "multilingual"
                  ? "rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-semibold text-primary"
                  : "transition-colors hover:text-foreground"
              }
            >
              Multilingual AI
            </a>
          </div>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 font-display text-xs font-bold whitespace-nowrap text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 sm:gap-2 sm:px-4 sm:text-sm"
          >
            Book a Demo <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileNavOpen((isOpen) => !isOpen)}
            className="ml-2 grid size-10 shrink-0 place-items-center rounded-md border border-border-strong bg-surface text-foreground md:hidden"
          >
            {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {mobileNavOpen && (
          <div id="mobile-navigation" className="border-t border-border px-6 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col text-sm text-muted-foreground">
              {[
                ["Problem", "#problem", "problem"],
                ["How It Works", "#engine", "engine"],
                ["Pricing", "#pricing", "pricing"],
                ["Multilingual AI", "/multilingual-ai-phone-agent", "multilingual"],
              ].map(([label, href, tab]) => (
                <a
                  key={tab}
                  href={href}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileNavOpen(false);
                  }}
                  className={`border-b border-border py-3 last:border-b-0 ${activeTab === tab ? "font-semibold text-primary" : ""}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-30%] left-1/2 size-[820px] -translate-x-1/2 rounded-full bg-primary/6 blur-[140px]"
        />
        <ChaosField />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delay={80}>
              <h1 className="mt-7 text-3xl leading-tight font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="flex flex-col items-center justify-center gap-1 font-display text-foreground">
                  <span className="text-[inherit]">We</span>
                  <Typewriter
                    texts={[
                      "generate ads for you",
                      "do lead nurture",
                      "schedule appointments",
                      "optimize ads",
                      "monitor end-to-end",
                    ]}
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
                Stop guessing if your ads work. Stop wasting staff time on phones. We handle
                everything — from Instagram scroller to scheduled appointment.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Get Your new 30+ Patients <ArrowRight className="size-4" />
                </a>
                <a
                  href="#engine"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong bg-surface px-7 py-3.5 font-display font-bold transition-colors hover:bg-surface-raised"
                >
                  <Play className="size-3.5 fill-current" /> See How It Works
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {[
                  "HIPAA-compliant patient intake",
                  "Live setup in 7 days",
                  "No long-term contracts",
                  "English + Spanish support",
                  "Integrates with your PMS",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-sm font-semibold tracking-[0.01em] text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* USP panel */}
          {/* <Reveal delay={300}>
            <div className="mx-auto flex w-full max-w-lg items-center justify-center">
              <div className="w-full rounded-[2rem] border border-border-strong bg-surface p-7 shadow-panel">
                <p className="text-center font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                  The patient engine
                </p>
                <h3 className="mt-4 text-center font-display text-3xl font-bold tracking-tight">
                  Everything your DSO needs
                </h3>

                <div className="mt-7 space-y-3 text-left text-sm text-muted-foreground">
                  {[
                    "We generate ads for you",
                    "We do lead nurture",
                    "We schedule appointments",
                    "We optimize ads",
                    "We monitor end-to-end",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3"
                    >
                      <span className="grid size-7 place-items-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal> */}
        </div>

        {/* Metrics */}
        <div className="relative mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[
            {
              value: <CountUp to={22} suffix="%" />,
              label: "recall conversion (vs. 3% for humans)",
            },
            {
              value: <CountUp to={247} prefix="$" suffix="K" />,
              label: "production recovered in 90 days",
            },
            { value: <>24/7</>, label: "AI never sleeps — zero missed calls" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 100} className="bg-surface p-8">
              <div className="font-display text-5xl font-bold tracking-tighter text-primary">
                {m.value}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              The Problem
            </p>
            <h2 className="mt-4 max-w-[22ch] font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              What&apos;s not working today
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg text-muted-foreground">
              You&apos;re spending money on ads, but you don&apos;t know if they convert. Your staff
              is buried in calls instead of treating patients.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                  {p.tag}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we're different */}
      <section className="border-t border-border bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Why We&apos;re Different
            </p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              We run the full patient acquisition engine.
            </h2>
            <p className="mt-5 max-w-[60ch] text-lg text-muted-foreground">
              Most vendors stop at one layer — ads, calls, or CRM. We own the full system from
              acquisition to booked appointment, with humans watching the AI so nothing slips.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h3 className="font-display text-2xl font-bold">Typical competitors</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span>Run ads, then hand you a lead list and leave conversion to your team.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span>Miss calls and lose patients because nobody answers after hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span>
                    Set up one tool, then expect your staff to manage the workflow manually.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span>
                    Promote “AI” without real oversight, follow-up, or dental-specific logic.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/35 bg-primary/5 p-8 shadow-glow">
              <h3 className="font-display text-2xl font-bold text-foreground">Hyperscale Dental</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90">
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>
                    End-to-end patient engine: ad creative, targeting, follow-up, and booking.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>
                    AI calls, SMS, recall campaigns, and live human oversight from one system.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>
                    Built for DSOs with PMS integrations and multi-location operations in mind.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>
                    Fast launch, no long contracts, and a team that keeps performance improving.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { label: "Ads + creative", value: "Full-stack" },
              { label: "Call handling", value: "24/7 AI + humans" },
              { label: "Recall & follow-up", value: "Automated" },
              { label: "Contracts", value: "No lock-in" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-surface p-5 text-center"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                  {item.label}
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine */}
      <section id="engine" className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              How We Do It
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              The 5-Step Patient Engine
            </h2>
            <p className="mt-5 max-w-[44ch] text-lg text-muted-foreground">
              From Instagram scroller to scheduled appointment — we handle every step.
            </p>
          </Reveal>

          <ol className="space-y-10 border-l border-border pl-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} as="li" className="relative">
                <span className="absolute top-0 -left-[49px] grid size-8 place-items-center rounded-full border border-border-strong bg-surface font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-[56ch] leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Real practices
            </p>
            <h2 className="mt-4 max-w-[20ch] font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Production recovered, not leads promised.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "1,700 calls answered in 90 days and 184 appointments booked. That volume used to hit voicemail.",
                name: "Fabian Fernandez",
                role: "Front Desk, DM Dentistry, San Ramon",
              },
              {
                quote:
                  "Our recall list went from a spreadsheet nobody touched to a queue that fills the schedule every week.",
                name: "Dr. Sanjeev Sharma",
                role: "2-dental Practice Owner, Bay Area",
              },
              {
                quote:
                  "The front desk finally stops mid-day. Calls get answered while they're with a patient in the chair.",
                name: "Dr. Kohli",
                role: "Pearl Dental, San Jose",
              },
            ].map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7"
              >
                <p className="text-lg leading-relaxed text-balance">“{t.quote}”</p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Pricing</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Simple pricing. No management fee to start.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl border border-border bg-surface p-8">
              <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                Month 1 · Onboarding
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tighter">$500</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Onboarding, audit &amp; full system build
              </p>
              <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
                <div className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Management fee</dt>
                  <dd className="font-semibold">$0</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Meta ads management</dt>
                  <dd className="font-semibold">Included</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">AI nurture engine</dt>
                  <dd className="font-semibold">Included</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal
              delay={100}
              className="relative rounded-3xl border border-primary/60 bg-surface p-8 shadow-glow"
            >
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-primary-foreground uppercase">
                Second month onwards
              </span>
              <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                Month 2 onwards
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tighter">$1,800</span>
                <span className="text-muted-foreground">per month</span>
              </div>
              <div className="mt-8 divide-y divide-border border-y border-border text-sm">
                <div className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">AI nurture engine</p>
                    <p className="mt-1 text-muted-foreground">Calls, SMS, voicemail &amp; email</p>
                  </div>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">Meta ads creation &amp; management</p>
                  </div>
                  <span className="font-semibold">$800</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-4 text-base">
                  <p className="font-display font-bold">Total monthly fee to Hyperscale</p>
                  <span className="font-display font-bold">$1,800</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 grid gap-8 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-2">
            <div>
              <p className="font-display font-bold text-foreground">
                Plus your Meta ad budget, paid directly to Meta.
              </p>
              <p className="mt-2">
                Your ad budget is never marked up. You set the monthly spend, it goes straight to
                Meta, and every dollar of it buys reach.
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-foreground">What the monthly fee covers</p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Advertising — $800:</span> Ad
                creative production, copywriting, campaign build, audience and budget structure,
                daily monitoring, creative testing and performance reporting.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-foreground">Nurture — $1,000:</span> AI calling,
                conversational and SMS agents, email and voicemail sequences, calendar integration,
                confirmation and reminder flows, plus human review of AI conversations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="px-6 pb-24">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border-strong bg-surface px-8 py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-60%] left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-[20ch] font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
              Ready to fill your schedule?
            </h2>
            <p className="mx-auto mt-6 max-w-[58ch] text-lg text-muted-foreground">
              Stop wasting money on ads that don&apos;t convert and staff that&apos;s too busy to
              answer the phone. Get your first 10 patients with Hyperscale Dental.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 font-display text-lg font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
            >
              Book Your Demo Now <ArrowRight className="size-5" />
            </a>
            <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              No commitment · Setup in 7 days · HIPAA compliant
            </p>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <p>© 2026 Hyperscale Dental. All rights reserved.</p>
          <p className="text-xs">Built for DSOs · HIPAA Compliant · AI-First</p>
        </div>
      </footer>
    </div>
  );
}
