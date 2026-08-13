import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { agencyCapabilities, roadmap } from "@/content/agencies";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { Icon } from "@/components/shared/Icon";
import { CTABand } from "@/components/shared/CTABand";
import { MotionCard } from "@/components/shared/MotionCard";

const p = PAGES.find((x) => x.path === "/agencies-regulators")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

export default function AgenciesPage() {
  return (
    <>
      <PageHero eyebrow="For waste agencies & regulators" title="Oversight built on evidence, not anecdotes."
        lead="Geographic visibility, service coverage and operational intelligence across the waste system you regulate." />
      <Section className="dot-grid-dark">
        <Container>
          <SectionHead eyebrow="Oversight" title="See the system the way it actually runs." />
          <FeatureGrid items={agencyCapabilities} />
        </Container>
      </Section>
      <Section tone="tint">
        <Container className="max-w-4xl">
          <MotionCard>
            <div className="rounded-2xl border border-line bg-card p-8 card-shadow sm:p-10">
              <p className="eyebrow text-brand-600">On the roadmap</p>
              <h2 className="mt-4 font-display text-2xl font-black tracking-tight text-ink-900 sm:text-3xl">
                We only promise what we've deployed.
              </h2>
              <p className="mt-4 text-ink-500">
                These capabilities are in active design and pilot, not marketing fiction:
              </p>
              <ul className="mt-6 space-y-4">
                {roadmap.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-100 text-forest-700">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionCard>
        </Container>
      </Section>
      <CTABand title="Partner on the infrastructure layer."
        lead="Work with Trakbin to bring measurable, connected waste operations to your jurisdiction." primaryLabel="Talk to Trakbin" />
    </>
  );
}