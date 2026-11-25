import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-gradient dot-grid-light relative overflow-hidden text-white">
      <style>{`
        .hero-dot-static { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .hero-dot-move { display: none; }
          .hero-dot-static { display: inline; }
        }
      `}</style>

      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <path id="heroRoute"
          d="M-60 880C260 700 380 560 620 470 860 380 1040 300 1240 210c120-54 200-90 280-130"
          stroke="#6ee7b7" strokeOpacity=".28" strokeWidth="2" strokeDasharray="1 12" strokeLinecap="round" />
        <circle className="hero-dot-move" cx="0" cy="0" r="6" fill="#34d399" fillOpacity=".85">
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#heroRoute" />
          </animateMotion>
        </circle>
        <circle className="hero-dot-static" cx="1125" cy="255" r="7" fill="#34d399" fillOpacity=".5" />
      </svg>

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6">
        <h1 className="font-display text-[clamp(3rem,11vw,10rem)] font-black leading-[.95] tracking-[-.02em] text-white">
          TRAKBIN
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-300/70 sm:w-14" />
          <p className="eyebrow tracking-[.45em] text-mint-200">{site.tagline}</p>
          <span className="h-px w-10 bg-brand-300/70 sm:w-14" />
        </div>

        <h2 className="mt-14 max-w-3xl font-display text-2xl font-bold text-white sm:text-3xl">
          The digital infrastructure for modern waste management.
        </h2>

        <p className="mt-10 font-mono text-sm font-semibold uppercase tracking-[.2em] text-brand-300">
          One ecosystem. Connected operations. Better-managed communities.
        </p>
      </div>
    </section>
  );
}