import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";

const steps = [
  { num: "01", title: "Customers and properties", desc: "Residents, businesses, and estates connect to waste management and environmental services through Trakbin and Trakestate." },
  { num: "02", title: "Service providers", desc: "Waste management companies receive customer information, organize operations, manage collections, and coordinate their teams." },
  { num: "03", title: "Field operations", desc: "Drivers and collection teams execute assigned activities through Trakbin Driver, providing real-time operational updates from the field." },
  { num: "04", title: "Property management", desc: "Trakestate supports the organization and coordination of services within estates and residential communities." },
  { num: "05", title: "Environmental oversight", desc: "Trakstatus supports inspections, environmental monitoring, and compliance activities for relevant authorities." },
  { num: "06", title: "Operational intelligence", desc: "Information generated across all connected activities contributes to better planning, reporting, resource allocation, and decision-making." },
];

export function HowItWorks() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHead center eyebrow="How it connects" title="How the Trakbin ecosystem works" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative rounded-2xl border border-line bg-card p-6 card-shadow">
              <span className="font-mono text-4xl font-black text-brand-100/50">{s.num}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink-600">
          Together, these products create a connected operational network in which information moves seamlessly between customers, service providers, properties, and institutions.
        </p>
      </Container>
    </Section>
  );
}