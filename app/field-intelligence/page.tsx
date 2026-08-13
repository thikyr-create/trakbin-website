import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { pipeline, principles } from "@/content/intelligence";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FlowChain } from "@/components/shared/FlowChain";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTABand } from "@/components/shared/CTABand";

const p = PAGES.find((x) => x.path === "/field-intelligence")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

export default function FieldIntelligencePage() {
  return (
    <>
      <PageHero eyebrow="Field intelligence" title="Every collection creates intelligence."
        lead="Trakbin turns real-world collection activity, movement, confirmations, observations, into structured operational intelligence." />
      <Section className="dot-grid-dark">
        <Container>
          <SectionHead center eyebrow="The pipeline" title="From street to signal." />
          <FlowChain steps={pipeline} />
        </Container>
      </Section>
      <Section tone="tint">
        <Container>
          <SectionHead eyebrow="Principles" title="Intelligence you can trust." />
          <FeatureGrid items={principles} cols={2} />
        </Container>
      </Section>
      <CTABand title="Put your operation on the learning curve."
        lead="The earlier your collections enter the system, the smarter every route becomes." />
    </>
  );
}