"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { EASE } from "@/components/shared/Reveal";
import { ImageCrossfade } from "@/components/animations/ImageCrossfade";
import type { Frame } from "@/components/animations/ImageCrossfade";

const audiences: { href: string; icon: string; title: string; detail: string; cta: string; frames: Frame[] }[] = [
  {
    href: "/waste-operators", icon: "truck", title: "For Waste Operators",
    detail: "Run fleets, crews, zones, dispatch and billing as one live system.", cta: "Modernize your operations",
    frames: [
      { src: "/photos/collection.jpg", alt: "Truck collecting waste" },
      { src: "/screenshots/operator-console.png", alt: "Fleet command deck" },
    ],
  },
  {
    href: "/properties", icon: "building", title: "For Properties",
    detail: "Schedules, service visibility, billing and communication for your buildings.", cta: "Bring your property into the network",
    frames: [
      { src: "/photos/bins.jpg", alt: "Property bins" },
      { src: "/screenshots/customer-dashboard.png", alt: "Property dashboard" },
    ],
  },
  {
    href: "/agencies-regulators", icon: "shield", title: "For Waste Agencies & Regulators",
    detail: "Geographic visibility and operational intelligence across the whole system.", cta: "See regulatory visibility",
    frames: [
      { src: "/photos/street.jpg", alt: "Street-level collection" },
      { src: "/screenshots/operator-console.png", alt: "Operational oversight view" },
    ],
  },
];

export function AudienceCards() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHead center eyebrow="Who it's for" title="One network, three command positions." />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <Link href={a.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 card-shadow transition hover:-translate-y-1">
                <ImageCrossfade frames={a.frames} interval={5000} className="mb-6 aspect-[16/9] rounded-xl" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                  <Icon name={a.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.detail}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-brand-600">
                  {a.cta}
                  <Icon name="arrowUpRight" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}