import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Globe2,
  Languages,
  Menu,
  MessageCircle,
  Pause,
  PhoneCall,
  Play,
  ShieldCheck,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

const calendlyUrl = "https://calendly.com/tanyasharma0195/30min";

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

const faqs = [
  {
    question: "Can the agent switch languages during one call?",
    answer:
      "Yes. It detects the language a patient is using and follows natural switches between languages without sending them to a menu or another person.",
  },
  {
    question: "Can it book appointments for multilingual patients?",
    answer:
      "Yes. It can answer common questions, collect patient details, book the right appointment, and send confirmations in the language the patient is using.",
  },
  {
    question: "Is multilingual support an extra charge?",
    answer:
      "No. Multilingual call handling is included in the patient engine. There is no language pack or per-language add-on fee.",
  },
  {
    question: "What happens when the patient needs a human?",
    answer:
      "The conversation is summarized for your team and escalated with the relevant context, so staff can step in without making the patient repeat everything.",
  },
];

export const Route = createFileRoute("/multilingual-ai-phone-agent")({
  head: () => ({
    meta: [
      { title: "Multilingual AI Phone Agent for Dental Practices | HyperscaleDental" },
      {
        name: "description",
        content:
          "Answer every dental call in the language your patient prefers. HyperscaleDental's multilingual AI phone agent books appointments, handles questions, and supports your team 24/7.",
      },
      {
        property: "og:title",
        content: "One dental phone agent. Every patient language.",
      },
      {
        property: "og:description",
        content:
          "Give every patient a fast, natural path to a booked appointment, in the language they prefer.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MultilingualPhoneAgent,
});

function Logo() {
  return (
    <a href="/" className="flex h-24 w-64 max-w-[44vw] items-center sm:max-w-[52vw] md:max-w-none">
      <img
        src="/HyperScale_Logo.png"
        alt="Hyperscale Ops AI Marketing Company"
        className="max-h-full max-w-full object-contain object-left"
      />
    </a>
  );
}

function MultilingualPhoneAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("multilingual");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      void audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a
              href="/#problem"
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
              href="/#engine"
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
              href="/#pricing"
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
              aria-current="page"
              className={
                activeTab === "multilingual"
                  ? "rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-semibold text-primary"
                  : "transition-colors hover:text-foreground"
              }
            >
              Multilingual AI
            </a>
          </div>
          <button
            type="button"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileNavOpen((isOpen) => !isOpen)}
            className="ml-auto mr-2 grid size-10 place-items-center rounded-md border border-border-strong bg-surface text-foreground md:hidden"
          >
            {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 font-display text-xs font-bold whitespace-nowrap text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 sm:gap-2 sm:px-4 sm:text-sm"
          >
            Book a Demo <ArrowRight className="size-4" />
          </a>
        </nav>
        {mobileNavOpen && (
          <div id="mobile-navigation" className="border-t border-border px-6 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col text-sm text-muted-foreground">
              {[
                ["Problem", "/#problem", "problem"],
                ["How It Works", "/#engine", "engine"],
                ["Pricing", "/#pricing", "pricing"],
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

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-48 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Multilingual AI phone agent
              </p>
              <h1 className="mt-5 max-w-[12ch] font-display text-5xl font-bold leading-[0.95] tracking-tighter text-balance md:text-7xl">
                Every patient heard. Every call handled.
              </h1>
              <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">
                Your patients can start in Spanish, switch to English, or call after hours in the
                language they are most comfortable using. HyperscaleDental keeps the conversation
                natural and the schedule moving.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Hear it in action <ArrowRight className="size-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong bg-surface px-6 py-3.5 font-display font-bold transition-colors hover:bg-surface-raised"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> HIPAA-conscious workflows
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="size-4 text-primary" /> 30+ languages
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-surface p-6 shadow-panel">
                <div className="absolute inset-x-0 top-0 h-px bg-primary/70" />
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-primary/15 text-primary">
                      <PhoneCall className="size-5" />
                    </span>
                    <div>
                      <p className="font-display font-bold">Live patient call</p>
                      <p className="text-xs text-muted-foreground">New patient intake</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-primary uppercase">
                    <span className="size-1.5 rounded-full bg-primary" /> Active
                  </span>
                </div>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                      Patient
                    </p>
                    <p className="mt-2 font-display text-xl font-bold">Jesus</p>
                    <p className="mt-1 text-sm text-muted-foreground">Speaking Spanish</p>
                  </div>
                  <Languages className="size-9 text-primary" />
                  <div className="text-right">
                    <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                      Agent
                    </p>
                    <p className="mt-2 font-display text-xl font-bold">Diego</p>
                    <p className="mt-1 text-sm text-muted-foreground">Responding in Spanish</p>
                  </div>
                </div>
                <div className="mt-8 rounded-xl border border-border bg-background/60 p-5">
                  <div className="flex items-end justify-center gap-1.5">
                    {[
                      22, 38, 15, 50, 30, 64, 26, 44, 18, 56, 34, 48, 20, 42, 28, 62, 24, 38, 16,
                      52,
                    ].map((height, index) => (
                      <span
                        key={index}
                        className={`${isPlaying ? "hd-wave" : "opacity-60"} block w-1.5 rounded-full bg-primary`}
                        style={{ height: `${height}px`, animationDelay: `${index * 45}ms` }}
                      />
                    ))}
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

        <section id="how-it-works" className="border-y border-border bg-surface/35 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                How it works
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                No language menu. No awkward handoff.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The agent recognizes the patient&apos;s language, keeps up when they switch, and
                completes the same useful dental workflow in every supported language.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                [
                  "01",
                  "A patient calls",
                  "The call starts naturally. No keypad prompts or language selection required.",
                ],
                [
                  "02",
                  "The agent adapts",
                  "Language detection happens in the conversation, including bilingual code-switching.",
                ],
                [
                  "03",
                  "The visit gets booked",
                  "Questions, intake, scheduling, reminders, and escalation all happen in one flow.",
                ],
              ].map(([number, title, body], index) => (
                <Reveal key={number} delay={index * 90} className="border-t border-border pt-5">
                  <span className="font-mono text-xs text-primary">{number}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Language coverage
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Meet your community where they are.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A welcoming first call matters. Give families, older patients, and busy
                professionals a way to reach your practice without asking them to translate their
                care.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">30+</p>
                  <p className="mt-1 text-xs text-muted-foreground">languages supported</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">24/7</p>
                  <p className="mt-1 text-xs text-muted-foreground">phone coverage</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">$0</p>
                  <p className="mt-1 text-xs text-muted-foreground">multilingual add-on</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {languages.map(([flag, language, greeting]) => (
                <div
                  key={language}
                  className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {flag}
                  </span>
                  <p className="mt-7 font-display font-bold">{language}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{greeting}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-surface/35 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Built for dental workflows
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                The calls your front desk cannot afford to lose.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                [
                  "The family booking",
                  "A parent calls to schedule two cleanings in Spanish. The agent finds matching times and sends confirmations before the family hangs up.",
                ],
                [
                  "The language switch",
                  "A patient starts in English, then explains their concern in Portuguese. The agent follows the shift and captures the right appointment context.",
                ],
                [
                  "The late emergency",
                  "A patient calls after hours with urgent symptoms. The agent handles the first response, routes the escalation, and keeps the practice informed.",
                ],
              ].map(([title, body], index) => (
                <Reveal
                  key={title}
                  delay={index * 90}
                  className="flex flex-col rounded-2xl border border-border bg-background/50 p-7"
                >
                  <MessageCircle className="size-6 text-primary" />
                  <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-7 border-t border-border pt-4 text-sm font-semibold text-primary">
                    Patient cared for. Appointment protected.
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Questions, answered
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                A better first conversation.
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left font-display font-bold"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="max-w-2xl pb-5 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/40 bg-surface px-8 py-20 text-center shadow-glow">
            <Sparkles className="mx-auto size-7 text-primary" />
            <h2 className="mx-auto mt-6 max-w-[18ch] font-display text-4xl font-bold tracking-tighter md:text-6xl">
              Make every language a welcome mat.
            </h2>
            <p className="mx-auto mt-6 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">
              Book a live demo and hear how a multilingual AI phone agent can fit into your practice
              without adding another person to the front desk.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Book a live demo <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <p>© 2026 Hyperscale Dental. All rights reserved.</p>
          <a href="/" className="transition-colors hover:text-foreground">
            Back to main site
          </a>
        </div>
      </footer>
    </div>
  );
}
