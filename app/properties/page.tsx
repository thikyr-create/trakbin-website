import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { propertyFeatures } from "@/content/properties";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTABand } from "@/components/shared/CTABand";

const p = PAGES.find((x) => x.path === "/properties")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

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
      <CTABand title="Bring your property into the network."
        lead="Connect your building to scheduled, visible, measurable waste service." primaryLabel="Bring your property into the network" />
    </>
  );
}