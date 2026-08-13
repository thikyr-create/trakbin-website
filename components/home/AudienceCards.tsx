"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { EASE } from "@/components/shared/Reveal";

const audiences = [
  {
    href: "/waste-operators", icon: "truck", title: "For Waste Operators",
    detail: "Run fleets, crews, zones, dispatch and billing as one live system.",
    cta: "Modernize your operations", img: "/photos/a14.png", alt: "Waste operators loading collections",
  },
  {
    href: "/properties", icon: "building", title: "For Properties",
    detail: "Schedules, service visibility, billing and communication for your buildings.",
    cta: "Bring your property into the network", img: "/photos/a15.jpeg", alt: "Standardized property bins",
  },
  {
    href: "/agencies-regulators", icon: "shield", title: "For Waste Agencies & Regulators",
    detail: "Geographic visibility and operational intelligence across the whole system.",
    cta: "See regulatory visibility", img: "/photos/a2.jpeg", alt: "Street-level collection activity",
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
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-line card-shadow">
                <img src={a.img} alt={a.alt} loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/45 to-forest-950/10" />
                <div className="relative p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100/90 text-forest-700">
                    <Icon name={a.icon} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mint-100/85">{a.detail}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.2em] text-brand-300">
                    {a.cta}
                    <Icon name="arrowUpRight" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}