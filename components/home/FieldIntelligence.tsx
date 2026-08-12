import { Fragment } from "react";
import { pipeline } from "@/content/intelligence";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { ButtonLink } from "@/components/shared/Buttons";
import { Icon } from "@/components/shared/Icon";

export function FieldIntelligence() {
  return (
    <Section tone="dark" className="dot-grid-light">
      <Container>
        <SectionHead tone="dark" eyebrow="Field intelligence" title="Every collection creates intelligence."
          lead="Trakbin is designed to turn real-world collection activity into structured operational intelligence." />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
          {pipeline.map((p, i) => (
            <Fragment key={p.title}>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[.18em] text-mint-100">
                {p.title}
              </span>
              {i < pipeline.length - 1 && <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-brand-300" />}
            </Fragment>
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink href="/field-intelligence" variant="ghost-dark">Explore Field Intelligence</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}