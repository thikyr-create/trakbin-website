import type { Metadata } from "next";
import { commandDeckPoints, operatorFeatures } from "@/content/operators";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { Icon } from "@/components/shared/Icon";
import { CTABand } from "@/components/shared/CTABand";
import { MotionCard } from "@/components/shared/MotionCard";

export const metadata: Metadata = { title: "For Waste Operators", description: "Run fleets, crews, zones, dispatch, routing, collections, billing and analytics as one live system." };

export default function OperatorsPage() {
  return (
    <>
      <PageHero eyebrow="For waste operators" title="Run your entire operation as one live system."
        lead="Fleet, drivers, zones, dispatch, routing, collection tracking, billing and analytics, finally in one command deck." />

      <Section className="dot-grid-dark">
        <Container>
          <SectionHead eyebrow="Operations" title="From standing by to on the road." />
          <FeatureGrid items={operatorFeatures} />
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="max-w-3xl">
          <SectionHead eyebrow="Command deck" title="Your company, at a glance."
            lead="The operator console is the live picture of the operation, not a report you wait for." />
          <MotionCard delay={0.1}>
            <ul className="space-y-4">
              {commandDeckPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-100 text-forest-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </MotionCard>
        </Container>
      </Section>

      <CTABand title="Modernize your operations."
        lead="Start with a pilot zone. Measure everything. Expand what works." primaryLabel="Modernize your operations" />
    </>
  );
}