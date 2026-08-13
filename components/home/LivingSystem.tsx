"use client";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { ImageCrossfade } from "@/components/animations/ImageCrossfade";
import type { Frame } from "@/components/animations/ImageCrossfade";

const frames: Frame[] = [
  { src: "/photos/collection.jpg", alt: "Crew loading collections onto a truck", caption: "Physical world" },
  { src: "/screenshots/operator-console.png", alt: "Trakbin operator command deck", caption: "Trakbin" },
  { src: "/photos/street.jpg", alt: "Street-level collection operation", caption: "Physical world" },
  { src: "/screenshots/customer-dashboard.png", alt: "Trakbin property dashboard", caption: "Data" },
  { src: "/photos/crew.jpg", alt: "Field team at a recycling facility", caption: "Physical world" },
];

export function LivingSystem() {
  return (
    <Section className="dot-grid-dark">
      <Container>
        <SectionHead center eyebrow="The living system"
          title="Physical world, Trakbin, data. In one loop."
          lead="Every collection on the street becomes operational intelligence, and every decision returns to the street." />
        <ImageCrossfade frames={frames} className="aspect-[16/9] rounded-2xl border border-line card-shadow sm:aspect-[21/9]" />
      </Container>
    </Section>
  );
}