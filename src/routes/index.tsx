import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Languages,
  Menu,
  Pause,
  PhoneCall,
  Play,
  Volume2,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { CountUp } from "@/components/CountUp";
import { ChaosField } from "@/components/ChaosField";
import { type FormEvent, useRef, useState } from "react";

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
    body: "We create the videos and run Meta ads that put your practice in front of multilingual patients in your area. No guessing, no boosting posts and hoping.",
  },
  {
    title: "We Optimize",
    body: "Complete hand-off. We take full control of your ad account and stay on it daily — when an ad slips, we fix it.",
  },
  {
    title: "We Talk to Them",
    body: "AI calling agents + conversational AI messaging + voicemail drops + human supervision = every lead gets nurtured. Nobody falls through the cracks.",
  },
  {
    title: "We Book",
    body: "The appointment lands directly on your calendar. Then we work the confirmations until the patient actually walks in.",
  },
  {
    title: "We Monitor",
    body: "Real people — our team — review every AI interaction for professionalism and accuracy.",
  },
];

const calendlyUrl = "https://calendly.com/tanyasharma0195/30min";
const leadWebhookUrl = "https://hook.us2.make.com/7eawd3ygcwicaw1k6xvevpn5i60cxp7x";

const languages = [
  ["🇺🇸", "English", "Hello"],
  ["🇪🇸", "Spanish", "Hola"],
  ["🇵🇹", "Portuguese", "Ola"],
  ["🇫🇷", "French", "Bonjour"],
  ["🇰🇷", "Korean", "Annyeong"],
  ["🇻🇳", "Vietnamese", "Xin chao"],
  ["🇨🇳", "Mandarin", "Ni hao"],
  ["🇵🇭", "Tagalog", "Kamusta"],
  ["🇮🇳", "Hindi", "Namaste"],
  ["🇸🇦", "Arabic", "Marhaban"],
  ["🇩🇪", "German", "Hallo"],
  ["🇮🇹", "Italian", "Ciao"],
];

const pmsIntegrations = [
  "Open Dental",
  "Dentrix",
  "Eaglesoft",
  "Denticon",
  "Curve",
  "Dentrix Ascend",
  "CareStack",
  "iDentalSoft",
];

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement>(null);

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(leadWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      void audioRef.current.play();
    }
  };

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
              href="#multilingual"
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
                ["Multilingual AI", "#multilingual", "multilingual"],
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
                Stop guessing which ads bring patients in. Stop wasting staff time answering phones.
                We turn attention on Instagram or Facebook into booked appointments.
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

      {/* PMS integrations */}
      <section className="border-y border-border bg-surface/40 py-12">
        <p className="px-6 text-center font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
          Built for DSOs · Integrates with your PMS
        </p>
        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="hd-marquee flex w-max gap-14 pr-14 group-hover:[animation-play-state:paused]">
            {[...pmsIntegrations, ...pmsIntegrations].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="font-display text-xl font-bold tracking-tight whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Audio demo */}
      <section className="border-y border-border bg-surface/35 px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Hear it in action
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              A natural first call in any language.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Listen to the patient experience your front desk is currently trying to provide
              between appointments.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border-strong bg-surface p-6 shadow-panel">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-primary/15 text-primary">
                  <PhoneCall className="size-5" />
                </span>
                <div>
                  <p className="font-display font-bold">Live patient call</p>
                  <p className="text-xs text-muted-foreground">New patient intake in Spanish</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-background/60 p-5">
                <div className="flex items-end justify-center gap-1.5">
                  {[22, 38, 15, 50, 30, 64, 26, 44, 18, 56, 34, 48, 20, 42, 28, 62].map(
                    (height, index) => (
                      <span
                        key={index}
                        className={`${isPlaying ? "hd-wave" : "opacity-60"} block w-1.5 rounded-full bg-primary`}
                        style={{ height: `${height}px`, animationDelay: `${index * 45}ms` }}
                      />
                    ),
                  )}
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <button
                    type="button"
                    onClick={toggleAudio}
                    aria-label={isPlaying ? "Pause patient call" : "Play patient call"}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
                      {isPlaying ? (
                        <Pause className="size-3.5" />
                      ) : (
                        <Play className="ml-0.5 size-3.5 fill-current" />
                      )}
                    </span>
                    <Volume2 className="size-3.5 text-primary" /> Natural conversation
                  </button>
                  <span>2:29</span>
                </div>
              </div>
              <audio
                ref={audioRef}
                preload="metadata"
                className="hidden"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/recording_pearl.wav" type="audio/wav" />
                Your browser does not support audio playback.
              </audio>
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
                <Check className="size-4 shrink-0 text-primary" />
                <span>Appointment booked for Saturday at 10:00 AM</span>
              </div>
            </div>
          </Reveal>
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

      {/* Multilingual */}
      <section id="multilingual" className="border-y border-border bg-surface/35 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Multilingual AI
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Every patient heard. Every call handled.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Patients can start in Spanish, switch to English, or call after hours in the language
              they are most comfortable using.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {languages.map(([flag, language, greeting]) => (
              <div
                key={language}
                className="rounded-xl border border-border bg-background/50 p-5 transition-colors hover:border-primary/50"
              >
                <span className="text-3xl leading-none" aria-hidden="true">
                  {flag}
                </span>
                <p className="mt-6 font-display font-bold">{language}</p>
                <p className="mt-1 text-sm text-muted-foreground">{greeting}</p>
              </div>
            ))}
          </div>
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
                  "1,700 leads called in 90 days, 184 appointments booked. That was my job before — sitting with a call list while patients waited at the desk and the phones kept ringing. Now it runs without me, and I actually get to be present for the people in the office.",
                name: "Fabian Fernandez",
                role: "Front Desk, DM Dentistry, San Ramon",
              },
              {
                quote:
                  "Our recall list was a spreadsheet nobody touched. Everyone agreed it mattered, nobody had the hours. Now it's a queue that works itself — patients get called, texted, and booked without anyone on my team lifting a finger, and it fills the schedule every single week.",
                name: "Dr. Sanjeev Sharma",
                role: "2-dental Practice Owner, Bay Area",
              },
              {
                quote:
                  "Calls get answered while my assistant is chairside with a patient, which never used to happen — we'd either interrupt treatment or lose the caller. New patients don't wait on hold anymore, and the ones who used to hang up and call the next practice on the list now end up on my schedule.",
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
              Start small. See the difference.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We build the system first, show you what it produces, and then agree on a reasonable
              monthly plan for your practice.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl border border-border bg-surface p-8">
              <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                Month 1 · Getting started
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tighter">$500</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="mt-4 text-muted-foreground">One-time setup and full system build</p>
              <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
                <div className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Ongoing fee</dt>
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
                After we show results
              </p>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
                A reasonable plan for your practice
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                After the first month, we review the calls, booked appointments, and impact on your
                schedule together. Then we set a straightforward monthly price that makes sense for
                your practice.
              </p>
              <div className="mt-8 divide-y divide-border border-y border-border text-sm">
                <div className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">Patients get followed up with</p>
                    <p className="mt-1 text-muted-foreground">Calls, texts, and reminders</p>
                  </div>
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                </div>
                <div className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">Your schedule stays full</p>
                    <p className="mt-1 text-muted-foreground">We keep improving what works</p>
                  </div>
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 grid gap-8 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-2">
            <div>
              <p className="font-display font-bold text-foreground">
                Plus your ad budget, paid directly to Meta.
              </p>
              <p className="mt-2">
                Your ad budget is never marked up. You set the monthly spend, it goes straight to
                Meta, and every dollar of it buys reach.
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-foreground">What your plan includes</p>
              <p className="mt-2">
                Ad creative, campaign management, daily improvements, follow-up, appointment
                booking, confirmations, reminders, and human review.
              </p>
              <p className="mt-3">
                You stay focused on patients while we handle the work between the ad click and the
                appointment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-border-strong bg-surface p-8 shadow-panel md:p-10">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Get started
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Tell us about your practice.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Leave your details and we&apos;ll follow up with a simple plan for bringing more
              patients through your door.
            </p>
            <form onSubmit={submitLead} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  aria-label="Your name"
                  className="h-12 rounded-md border border-input bg-background px-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
                <input
                  name="practice"
                  type="text"
                  required
                  placeholder="Practice name"
                  aria-label="Practice name"
                  className="h-12 rounded-md border border-input bg-background px-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Work email"
                  aria-label="Work email"
                  className="h-12 rounded-md border border-input bg-background px-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="h-12 rounded-md border border-input bg-background px-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display font-bold text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-wait disabled:opacity-70"
              >
                {formStatus === "submitting" ? "Sending..." : "Request a conversation"}
                <ArrowRight className="size-4" />
              </button>
              {formStatus === "success" && (
                <p className="text-sm font-semibold text-primary" role="status">
                  Thanks. We&apos;ll be in touch shortly.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-sm font-semibold text-destructive" role="alert">
                  Something went wrong. Please try again or book directly below.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-[2rem] border border-primary/30 bg-primary/5 p-8 md:p-10"
          >
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Prefer a time on the calendar?
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Book a live demo.
            </h2>
            <p className="mt-5 text-muted-foreground">
              See exactly how we turn ad attention into answered calls, followed-up leads, and
              booked appointments.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
            >
              Choose a time <ArrowRight className="size-4" />
            </a>
            <p className="mt-8 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              No commitment · Setup in 7 days · HIPAA conscious
            </p>
          </Reveal>
        </div>
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
