import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { MotionCard } from "@/components/shared/MotionCard";

const products = [
  { title: "TRAKBIN", subtitle: "Waste Management & Service Coordination",
    desc: "The central platform connecting customers, properties, and waste management companies. It enables service requests, customer management, collection coordination, operational communication, and billing.", icon: "building" },
  { title: "TRAKBIN DRIVER", subtitle: "Field Operations & Collection Execution",
    desc: "The field application connecting drivers and collection teams to daily operations. It supports assigned routes, collection activities, location tracking, service confirmations, and field reporting.", icon: "truck" },
  { title: "TRAKESTATE", subtitle: "Estate & Community Management",
    desc: "A property-focused solution designed to connect estates, residents, property administrators, and service providers. It supports property records, community-level visibility, and service coordination within residential developments.", icon: "home" },
  { title: "TRAKSTATUS", subtitle: "Environmental Compliance & Oversight",
    desc: "A monitoring and compliance solution designed to support environmental enforcement, inspections, and reporting. It provides institutions with tools to monitor activities and make better-informed decisions.", icon: "shield" },
];

// Push each card's text away from the central circular cut (inner corner).
const innerPad = [
  "md:pr-36 md:pb-36", // top-left: cut at bottom-right
  "md:pl-36 md:pb-36", // top-right: cut at bottom-left
  "md:pr-36 md:pt-36", // bottom-left: cut at top-right
  "md:pl-36 md:pt-36", // bottom-right: cut at top-left
];

function EcosystemHub() {
  return (
    <div className="relative h-full w-full rounded-full border border-line bg-paper pointer-events-none">
      {/* Connection lines + particles */}
      <svg className="absolute -inset-16 h-[calc(100%+8rem)] w-[calc(100%+8rem)] overflow-visible" viewBox="0 0 400 400">
        <g stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 4">
          <line x1="200" y1="200" x2="0" y2="0" /><line x1="200" y1="200" x2="400" y2="0" />
          <line x1="200" y1="200" x2="0" y2="400" /><line x1="200" y1="200" x2="400" y2="400" />
        </g>
        <circle r="3.5" fill="#34d399"><animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 0 0" /><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></circle>
        <circle r="3.5" fill="#34d399"><animateMotion dur="3.5s" repeatCount="indefinite" path="M 200 200 L 400 0" /><animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" /></circle>
        <circle r="3.5" fill="#34d399"><animateMotion dur="2.8s" repeatCount="indefinite" path="M 200 200 L 0 400" /><animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" /></circle>
        <circle r="3.5" fill="#34d399"><animateMotion dur="3.2s" repeatCount="indefinite" path="M 200 200 L 400 400" /><animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite" /></circle>
      </svg>

      {/* Rotating outer rings */}
      <div className="absolute inset-0 rounded-full border border-brand-500/30 animate-spin-slow" />
      <div className="absolute inset-2 rounded-full border border-dashed border-brand-500/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />

      {/* Core imagery */}
      <div className="absolute inset-3 overflow-hidden rounded-full">
        <img src="/images/hub-core-dark.png" alt="" className="absolute inset-0 h-full w-full object-cover animate-hub-dark" />
        <img src="/images/hub-core-light.png" alt="" className="absolute inset-0 h-full w-full object-cover animate-hub-light opacity-0" />
      </div>

      {/* Wording: white on dark phase */}
      <div className="absolute inset-0 z-10 flex items-center justify-center animate-hub-text-dark">
        <div className="text-center px-4">
          <p className="font-display text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">TRAKBIN</p>
          <p className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-300">Ecosystem</p>
        </div>
      </div>
      {/* Wording: deep green on light phase (always readable) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center animate-hub-text-light opacity-0">
        <div className="text-center px-4">
          <p className="font-display text-2xl md:text-3xl font-black tracking-tight text-forest-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">TRAKBIN</p>
          <p className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-600">Ecosystem</p>
        </div>
      </div>

      {/* Pulsing status */}
      <div className="absolute bottom-4 right-6 h-3 w-3 rounded-full bg-brand-500 animate-pulse-status shadow-[0_0_10px_#10b981]" />
    </div>
  );
}

export function EcosystemProducts() {
  return (
    <Section className="bg-paper relative">
      <Container>
        <SectionHead center eyebrow="The Trakbin Ecosystem" title="One ecosystem. Multiple connected solutions."
          lead="Trakbin brings different parts of the waste management and environmental services industry into one connected technology network. Each product serves a specific operational purpose while contributing to a wider system of connected services and information." />

        <div className="relative mt-12">
          {/* Desktop: circular cut-out hub centered over the 4-card intersection */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[300px] w-[300px]">
            <EcosystemHub />
          </div>

          <div className="grid gap-6 md:grid-cols-2 relative z-0">
            {products.map((p, i) => (
              <MotionCard key={p.title} delay={i * 0.1} className="h-full">
                <div className={`flex h-full flex-col rounded-2xl border border-line bg-card p-8 card-shadow transition hover:border-brand-200 sm:p-10 ${innerPad[i]}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-black tracking-tight text-ink-900 sm:text-4xl">{p.title}</h3>
                  <p className="mt-2 eyebrow text-brand-600">{p.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed text-ink-600">{p.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>

          {/* Mobile: hub flows naturally, no overlap */}
          <div className="md:hidden mt-8 flex justify-center">
            <div className="h-64 w-64"><EcosystemHub /></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}