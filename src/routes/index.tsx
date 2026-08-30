import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Bank91 — India's 1st AI First Consumer Banking Ecosystem";
const DESCRIPTION =
  "Bank91 is building India's first AI-first consumer banking ecosystem. Coming soon — stay tuned, or write to us at ai@bank91.com.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bank91" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="b91 relative min-h-screen w-full overflow-hidden bg-ink font-body text-mist antialiased">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--backdrop-halo)" }}
        />
        <div
          className="absolute inset-0 animate-breathe"
          style={{ backgroundImage: "var(--backdrop-glow)" }}
        />
        <div
          className="absolute inset-0 bg-[size:46px_46px] [mask-image:radial-gradient(75%_75%_at_50%_45%,#000_30%,transparent_80%)]"
          style={{ backgroundImage: "var(--backdrop-grid)" }}
        />
        <div
          className="absolute inset-0 rotate-45 animate-linework [mask-image:radial-gradient(60%_60%_at_50%_45%,#000_20%,transparent_75%)]"
          style={{ backgroundImage: "var(--backdrop-linework)" }}
        />
        <div className="absolute left-1/2 top-[43%] size-[46vw] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-mist/10" />
        <div className="absolute left-1/2 top-[43%] size-[70vw] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-mist/5" />
        <span
          className="absolute left-1/2 top-[43%] size-2 animate-orbit rounded-full bg-marigold shadow-[0_0_16px_color-mix(in_oklab,var(--marigold)_90%,transparent)]"
          style={{ "--r": "19vw" } as React.CSSProperties}
        />
        <span
          className="absolute left-1/2 top-[43%] size-1.5 animate-orbit2 rounded-full bg-mist/70"
          style={{ "--r": "30vw" } as React.CSSProperties}
        />
        <span
          className="absolute left-1/2 top-[43%] size-1.5 animate-orbit2 rounded-full bg-rangi/80 shadow-[0_0_10px_color-mix(in_oklab,var(--rangi)_70%,transparent)]"
          style={{ "--r": "35vw", animationDuration: "52s" } as React.CSSProperties}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="flex animate-rise flex-col items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.55em] text-mist/50">
            Bank91
          </div>
          <div className="mt-1 font-display text-2xl font-bold tracking-[0.14em] text-mist">
            BANK<span className="text-marigold">91</span>
          </div>
        </div>

        <div
          className="mt-12 h-px w-24 animate-rise bg-gradient-to-r from-transparent via-marigold/70 to-transparent"
          style={{ animationDelay: "200ms" }}
        />

        <h1 className="relative mt-10 animate-rise [animation-delay:320ms]">
          <span className="relative z-10 block text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-mist sm:text-6xl md:text-7xl">
            India's 1st <span className="text-marigold">AI&#8209;First</span> Consumer Banking
            Ecosystem
          </span>
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-marigold/25 to-transparent" />
          </span>
        </h1>

        <p className="mt-8 max-w-[46ch] text-pretty text-base leading-relaxed text-faded animate-rise [animation-delay:460ms]">
          A banking layer rebuilt for the AI age — conversational, personal, and quietly fast.
          Money that reads your intentions before you reach for the app.
        </p>

        <p className="mt-6 max-w-[52ch] text-pretty text-sm font-semibold leading-relaxed text-mist/90 animate-rise [animation-delay:520ms]">
          People behind Bank91 — Seasoned BFSI and Tech experts with 20+ years of experience
          building for India and Global markets, and fintech ecosystems for 100+ million users.
        </p>

        <div className="mt-10 inline-flex animate-rise items-center gap-3 rounded-full border border-mist/15 bg-ink-2/70 px-5 py-2.5 [animation-delay:640ms]">
          <span className="size-2 animate-pulse-dot rounded-full bg-marigold" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-mist/85">
            Coming soon · Stay tuned
          </span>
        </div>

        <a
          href="mailto:ai@bank91.com"
          className="group mt-12 inline-flex animate-rise items-center gap-3 [animation-delay:700ms]"
        >
          <span className="font-body text-sm text-faded transition-colors duration-300 group-hover:text-mist">
            Write to us at
          </span>
          <span className="font-mono text-base text-marigold underline decoration-marigold/40 underline-offset-8 transition-colors duration-300 group-hover:decoration-marigold/90">
            ai@bank91.com
          </span>
        </a>

        <div className="mt-16 animate-rise font-mono text-[10px] uppercase tracking-[0.35em] text-mist/30 [animation-delay:820ms]">
          Bank91 · Banking, reimagined for the AI era
        </div>
      </div>
    </main>
  );
}
