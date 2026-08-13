"use client";
import { motion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { EASE } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const photos = [
  { src: "/photos/a3.jpeg", title: "Field operations" },
  { src: "/photos/a8.jpeg", title: "Route execution" },
  { src: "/photos/a11.jpeg", title: "Collection in progress" },
  { src: "/photos/a13.jpeg", title: "Crew on site" },
  { src: "/photos/bins.jpg", title: "Standardized containers" },
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
                "group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line card-shadow",
                i === 4 && "col-span-2 lg:col-span-1"
              )}
            >
              <img src={p.src} alt={p.title} loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-4">
                <p className="font-display text-sm font-bold text-white drop-shadow">{p.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}