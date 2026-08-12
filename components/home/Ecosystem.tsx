import type { FlowStep } from "@/lib/utils";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FlowChain } from "@/components/shared/FlowChain";

const steps: FlowStep[] = [
  { title: "Properties", detail: "Buildings and businesses enter the network with schedules and service records." },
  { title: "Caretakers", detail: "On-site managers gain visibility and a direct channel to operators." },
  { title: "Waste Operators", detail: "Companies plan, dispatch and track collection as a live operation." },
  { title: "Drivers", detail: "Field crews execute routes with confirmations and observations." },
  { title: "Field Intelligence", detail: "Every action in the field becomes structured data." },
  { title: "Operational Data", detail: "Routes, pickups, misses and conditions accumulate into a living dataset." },
  { title: "Better Decisions", detail: "Operators, properties and agencies act on evidence—not habit." },
];

export function Ecosystem() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHead center eyebrow="The system" title="One connected operational network."
          lead="Trakbin is not an app for one actor. It is infrastructure that connects every participant in the waste chain." />
        <FlowChain steps={steps} />
      </Container>
    </Section>
  );
}