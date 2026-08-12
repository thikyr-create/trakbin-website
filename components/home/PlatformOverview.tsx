import { dashboards } from "@/content/platform";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { ScreenshotFrame } from "@/components/shared/ScreenshotFrame";
import { ButtonLink } from "@/components/shared/Buttons";

export function PlatformOverview() {
  return (
    <Section>
      <Container>
        <SectionHead eyebrow="The platform" title="Two command views. One source of truth."
          lead="Operators run the network. Properties experience the network. Both see the same reality." />
        <div className="grid gap-10 lg:grid-cols-2">
          {dashboards.map((d) => <ScreenshotFrame key={d.src} {...d} />)}
        </div>
        <div className="mt-12">
          <ButtonLink href="/platform" variant="ghost-light">Explore the platform</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}