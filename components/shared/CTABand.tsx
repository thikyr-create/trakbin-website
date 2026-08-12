import { Container, Section } from "./Section";
import { ButtonLink } from "./Buttons";

export function CTABand({ title, lead, primaryLabel = "Request a Pilot" }: {
  title: string; lead: string; primaryLabel?: string;
}) {
  return (
    <Section tone="dark" className="dot-grid-light">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mint-100/80 sm:text-lg">{lead}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact">{primaryLabel}</ButtonLink>
          <ButtonLink href="/platform" variant="ghost-dark">Explore Trakbin</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}