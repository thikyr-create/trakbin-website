"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pipeline } from "@/content/intelligence";
import { Icon } from "@/components/shared/Icon";
import { ImageFocusCycle } from "@/components/animations/ImageFocusCycle";
import type { CycleFrame } from "@/components/animations/ImageFocusCycle";
import { EASE } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const frames: CycleFrame[] = [
  { src: "/photos/a16.jpeg", alt: "Collection vehicle operating in a dense city" },
  { src: "/photos/a17.jpeg", alt: "Geographic intelligence map with zone overlays" },
  { src: "/photos/a18.jpeg", alt: "Operational analytics dashboards" },
];

export function FieldIntelligence() {
  const [i, setI] = useState(0);

  return (
    <section className="relative overflow-hidden text-white">
      <ImageFocusCycle frames={frames} interval={3000} showDots={false} index={i} onIndexChange={setI}
        className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/55" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-brand-300">Field intelligence</p>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
            Every collection creates intelligence.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mint-100/80 sm:text-lg">
            Trakbin is designed to turn real-world collection activity into structured operational intelligence.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {pipeline.map((s, d) => (
            <Fragment key={s.title}>
              {d > 0 && <Icon name="arrowRight" className="h-4 w-4 text-brand-300" />}
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[.18em] text-mint-100 backdrop-blur-sm">
                {s.title}
              </span>
            </Fragment>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Link href="/field-intelligence"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.2em] text-white transition hover:bg-white/10">
            Explore Field Intelligence
          </Link>
          <div className="flex gap-2">
            {frames.map((f, d) => (
              <button key={f.src} aria-label={`Show image ${d + 1}`} onClick={() => setI(d)}
                className={cn("h-1.5 rounded-full transition-all duration-300",
                  d === i ? "w-8 bg-brand-400" : "w-3 bg-white/30 hover:bg-white/60")} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}