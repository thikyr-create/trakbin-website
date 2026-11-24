import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";

const capabilities = [
  { title: "Waste management", desc: "Customer management, collection coordination, and service tracking.", icon: "recycle" },
  { title: "Property infrastructure", desc: "Estate records, community services, and property-level coordination.", icon: "building" },
  { title: "Field operations", desc: "Driver assignments, GPS tracking, field reporting, and service verification.", icon: "mapPin" },
  { title: "Environmental compliance", desc: "Inspections, monitoring, reporting, and enforcement support.", icon: "shield" },
  { title: "Operational intelligence", desc: "Data collection, reporting, analytics, and decision support.", icon: "barChart" },
  { title: "Resource coordination", desc: "Waste collection assets, operational equipment, and service resources.", icon: "truck" },
  { title: "Financial coordination", desc: "Service billing, payment collection, and transparent transaction records.", icon: "creditCard" },
];

export function Capabilities() {
  return (
    <Section className="bg-paper">
      <Container>
        <SectionHead center eyebrow="What we support" title="Connected infrastructure capabilities" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className="flex gap-4 rounded-xl border border-line bg-card p-6 transition hover:border-brand-200">
              <div className="shrink-0 rounded-lg bg-brand-50 p-2.5 text-brand-600">
                <Icon name={c.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-ink-900">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}