import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { commandDeckPoints, operatorFeatures } from "@/content/operators";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { Icon } from "@/components/shared/Icon";
import { CTABand } from "@/components/shared/CTABand";
import { MotionCard } from "@/components/shared/MotionCard";

const p = PAGES.find((x) => x.path === "/waste-operators")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

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
              {commandDeckPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-100 text-forest-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">{pt}</span>
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