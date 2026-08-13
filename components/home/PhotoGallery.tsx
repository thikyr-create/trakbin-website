"use client";
import { motion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { EASE } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const photos = [
  { src: "/photos/a3.jpeg", alt: "ESG" },
  { src: "/photos/a8.jpeg", alt: "Crew on site" },
  { src: "/photos/a11.jpeg", alt: "Collection in progress" },
  { src: "/photos/a13.jpeg", alt: "Route execution" },
  { src: "/photos/bins.jpg", alt: "Standardized containers" },
];

export function PhotoGallery() {
  return (
    <Section className="dot-grid-dark">
      <Container>
        <SectionHead center eyebrow="The reality" title="Built in the field. Proven on the street." />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className={cn(
                "relative aspect-[3/4] overflow-hidden rounded-2xl border border-line card-shadow",
                i === 4 && "col-span-2 lg:col-span-1"
              )}
            >
              <img src={p.src} alt={p.alt} loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}