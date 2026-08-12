import type { Metadata } from "next";
import { dashboards, platformFeatures } from "@/content/platform";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { ScreenshotFrame } from "@/components/shared/ScreenshotFrame";
import { ButtonLink } from "@/components/shared/Buttons";
import { CTABand } from "@/components/shared/CTABand";

export const metadata: Metadata = { title: "Platform", description: "One intelligent operational system for the entire waste chain." };

export default function PlatformPage() {
  return (
    <>
      <PageHero eyebrow="The platform" title="One intelligent operational system for the entire waste chain."
        lead="Collection, routing, billing and field intelligence, unified in a single platform shared by properties, operators and agencies.">
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Request a Pilot</ButtonLink>
          <ButtonLink href="/field-intelligence" variant="ghost-dark">Explore Field Intelligence</ButtonLink>
        </div>
      </PageHero>

      <Section className="dot-grid-dark">
        <Container>
          <SectionHead eyebrow="Capabilities" title="Everything the operation needs. Nothing it doesn't." />
          <FeatureGrid items={platformFeatures} />
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <SectionHead center eyebrow="Command views" title="The same truth, seen from both sides." />
          <div className="grid gap-10 lg:grid-cols-2">
            {dashboards.map((d) => <ScreenshotFrame key={d.src} {...d} />)}
          </div>
        </Container>
      </Section>

      <CTABand title="See it running on your own routes."
        lead="A pilot deploys Trakbin on a real zone with a real operator, measured from day one." />
    </>
  );
}