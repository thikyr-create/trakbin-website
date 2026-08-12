import type { Feature } from "@/lib/utils";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";

const pains: Feature[] = [
  { icon: "layers", title: "Fragmented operations", detail: "Properties, caretakers, operators and agencies work in silos, with no shared source of truth." },
  { icon: "eye", title: "Poor visibility", detail: "No one can see what was collected, missed or delayed across the network in real time." },
  { icon: "route", title: "Inefficient routing", detail: "Trucks follow static routes while real demand changes daily." },
  { icon: "database", title: "Missing field data", detail: "What happens on the street never becomes structured, usable information." },
  { icon: "users", title: "Disconnected stakeholders", detail: "Residents call caretakers, caretakers call operators, operators guess." },
  { icon: "clock", title: "Reactive scheduling", detail: "Collections run on fixed habit, not on real-world need." },
];

export function Problem() {
  return (
    <Section className="dot-grid-dark">
      <Container>
        <SectionHead eyebrow="The problem" title="Waste collection shouldn't be reactive."
          lead="Most waste operations still run on phone calls, paper schedules and habit. The result is a fragmented system where no one has the full picture." />
        <FeatureGrid items={pains} />
      </Container>
    </Section>
  );
}