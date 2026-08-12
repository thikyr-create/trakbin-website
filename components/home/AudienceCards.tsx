import Link from "next/link";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";

const audiences = [
  { href: "/waste-operators", icon: "truck", title: "For Waste Operators", detail: "Run fleets, crews, zones, dispatch and billing as one live system.", cta: "Modernize your operations" },
  { href: "/properties", icon: "building", title: "For Properties & Caretakers", detail: "Schedules, service visibility, billing and communication for your buildings.", cta: "Bring your property into the network" },
  { href: "/agencies-regulators", icon: "shield", title: "For Waste Agencies & Regulators", detail: "Geographic visibility and operational intelligence across the whole system.", cta: "See regulatory visibility" },
];

export function AudienceCards() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHead center eyebrow="Who it's for" title="One network, three command positions." />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <Link key={a.href} href={a.href}
              className="group flex flex-col rounded-2xl border border-line bg-card p-8 card-shadow transition hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                <Icon name={a.icon} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.detail}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-brand-600">
                {a.cta}
                <Icon name="arrowUpRight" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}