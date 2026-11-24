"use client";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { ImageCrossfade } from "@/components/animations/ImageCrossfade";
import type { Frame } from "@/components/animations/ImageCrossfade";

const frames: Frame[] = [
  { src: "/photos/a1.jpeg", alt: "Trakbin field operations" },
  { src: "/photos/a6.jpeg", alt: "Trakbin route execution" },
  { src: "/photos/a10.jpeg", alt: "Trakbin collection in progress" },
  { src: "/photos/a5.jpeg", alt: "Trakbin crew on site" },
  { src: "/photos/a9.jpeg", alt: "Trakbin standardized containers" },
];

export function LivingSystem() {
  return (
    <Section className="dot-grid-dark">
      <Container>
        <SectionHead center eyebrow="The living system"
          title="Waste is an inherent part of human existence."
          lead="Whatever humans create, sooner or later becomes waste. A problem most people try not to think about. Very few people wake up excited about garbage. Every city, no matter how wealthy or advanced, depends on waste being removed efficiently." />
        <ImageCrossfade frames={frames} className="aspect-[16/9] rounded-2xl border border-line card-shadow sm:aspect-[21/9]" />
      </Container>
    </Section>
  );
}