import type { Metadata } from "next";
import { propertyFeatures } from "@/content/properties";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { ScreenshotFrame } from "@/components/shared/ScreenshotFrame";
import { CTABand } from "@/components/shared/CTABand";

export const metadata: Metadata = { title: "For Properties & Caretakers", description: "Collection schedules, service visibility, billing and communication for your buildings." };

export default function PropertiesPage() {
  return (
    <>
      <PageHero eyebrow="For properties" title="Your building, connected to the network."
        lead="Collection schedules, service visibility, history, billing and a direct line to your waste provider." />

      <Section className="dot-grid-dark">
        <Container>
          <SectionHead eyebrow="Service" title="Everything a property needs to know." />
          <FeatureGrid items={propertyFeatures} />
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Customer dashboard" title="Clarity for residents."
              lead="Next pickup, schedule, billing and wallet, visible at a glance, settled automatically." />
          </div>
          <ScreenshotFrame src="/screenshots/customer-dashboard.png" label="Property · Dashboard"
            caption="Customer dashboard" />
        </Container>
      </Section>

      <CTABand title="Bring your property into the network."
        lead="Connect your building to scheduled, visible, measurable waste service." primaryLabel="Bring your property into the network" />
    </>
  );
}