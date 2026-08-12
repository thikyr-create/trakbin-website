"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({ tone = "light", className, children }: { tone?: "light" | "dark" | "tint"; className?: string; children: ReactNode }) {
  const tones = { light: "bg-paper text-ink-900", dark: "hero-gradient text-white", tint: "bg-mint-50 text-ink-900" };
  return <section className={cn("relative py-24 sm:py-28", tones[tone], className)}>{children}</section>;
}

export function SectionHead({ eyebrow, title, lead, tone = "light", center }: {
  eyebrow: string; title: string; lead?: string; tone?: "light" | "dark"; center?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn("mb-14 max-w-3xl", center && "mx-auto text-center")}
    >
      <p className={cn("eyebrow", dark ? "text-brand-300" : "text-brand-600")}>{eyebrow}</p>
      <h2 className={cn("mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl", dark ? "text-white" : "text-ink-900")}>{title}</h2>
      {lead && <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-mint-100/75" : "text-ink-500")}>{lead}</p>}
    </motion.div>
  );
}