"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Section, SectionHead } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { EASE } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type NodeSpec = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  reveal: "list" | "route" | "pipeline" | "network";
  items?: string[];
};

const nodes: NodeSpec[] = [
  { id: "properties", icon: "building", title: "Properties", tagline: "Buildings and businesses enter the network.", reveal: "list", items: ["Service requests", "Schedules", "Collection history"] },
  { id: "operators", icon: "truck", title: "Waste Operators", tagline: "Companies run collection as a live operation.", reveal: "list", items: ["Fleet", "Drivers", "Routes", "Zones"] },
  { id: "drivers", icon: "route", title: "Drivers", tagline: "Crews execute routes with confirmations.", reveal: "route" },
  { id: "intelligence", icon: "signal", title: "Field Intelligence", tagline: "Every collection creates intelligence.", reveal: "pipeline", items: ["Driver movement", "Pickup confirmed", "Field observation", "Data captured", "Operational intelligence"] },
  { id: "agencies", icon: "shield", title: "Agencies & Regulators", tagline: "Oversight across the whole system.", reveal: "network" },
  { id: "data", icon: "database", title: "Operational Data", tagline: "Activity accumulates into a living dataset.", reveal: "list", items: ["Pickups", "Misses", "Conditions", "Coverage"] },
  { id: "decisions", icon: "check", title: "Better Decisions", tagline: "The network acts on evidence, not habit.", reveal: "list", items: ["Evidence, not habit"] },
];

export function Ecosystem() {
  const [open, setOpen] = useState<string | null>("intelligence");

  return (
    <Section tone="tint">
      <Container>
        <SectionHead center eyebrow="The system" title="One connected operational network."
          lead="Trakbin is not an app for one actor. It is infrastructure that connects every participant in the waste chain." />
        <p className="eyebrow mb-8 text-center text-ink-500">Tap each node</p>

        <ol className="mx-auto flex max-w-xl flex-col">
          {nodes.map((n, i) => (
            <li key={n.id}>
              {i > 0 && (
                <div className="flex flex-col items-center py-1" aria-hidden>
                  <motion.span
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="h-7 w-px origin-top bg-ink-900/20"
                  />
                  <Icon name="chevronDown" className="-mt-1 h-4 w-4 text-brand-600" />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={cn("rounded-2xl border bg-card card-shadow", open === n.id ? "border-brand-500/60" : "border-line")}
              >
                <button
                  onClick={() => setOpen(open === n.id ? null : n.id)}
                  aria-expanded={open === n.id}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                    <Icon name={n.icon} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-bold text-ink-900">{n.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-500">{n.tagline}</span>
                  </span>
                  <Icon name="chevronDown" className={cn("h-4 w-4 text-ink-500 transition-transform duration-300", open === n.id && "rotate-180")} />
                </button>

                <AnimatePresence initial={false}>
                  {open === n.id && (
                    <motion.div
                      key="reveal"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <RevealBody node={n} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function RevealBody({ node }: { node: NodeSpec }) {
  if (node.reveal === "route") return <RouteReveal />;
  if (node.reveal === "pipeline") return <PipelineReveal items={node.items ?? []} />;
  if (node.reveal === "network") return <NetworkReveal />;
  return <ListReveal items={node.items ?? []} />;
}

function ListReveal({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.07, duration: 0.35, ease: EASE }}
          className="rounded-full border border-ink-900/10 bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-[.14em] text-ink-700"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

function PipelineReveal({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((t, i) => (
        <li key={t}>
          {i > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 + i * 0.12 }}
              className="ml-[7px] flex h-4 items-center"
              aria-hidden
            >
              <span className="h-full border-l border-dashed border-ink-900/25" />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.35, ease: EASE }}
            className="flex items-center gap-2.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span className="text-sm text-ink-700">{t}</span>
          </motion.div>
        </li>
      ))}
    </ol>
  );
}

function RouteReveal() {
  return (
    <svg viewBox="0 0 220 64" className="w-full" fill="none" aria-hidden>
      <motion.path
        d="M10 52 C 60 12, 120 60, 210 16"
        stroke="#0a9e6c" strokeWidth="1.5" strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
      <circle cx="10" cy="52" r="3" fill="#0a4f3a" />
      <circle cx="210" cy="16" r="3" fill="#0a4f3a" />
      <motion.circle
        r="4" fill="#10b981"
        initial={{ x: 10, y: 52 }}
        animate={{ x: [10, 60, 120, 210], y: [52, 20, 52, 16] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
      />
    </svg>
  );
}

function NetworkReveal() {
  const sats = [
    { x: 30, y: 18 },
    { x: 170, y: 18 },
    { x: 100, y: 66 },
  ];
  return (
    <svg viewBox="0 0 200 80" className="w-full" fill="none" aria-hidden>
      {sats.map((s, i) => (
        <motion.path
          key={`l${i}`}
          d={`M100 40 L ${s.x} ${s.y}`}
          stroke="#0a9e6c" strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.4, ease: EASE }}
        />
      ))}
      {sats.map((s, i) => (
        <motion.circle
          key={`c${i}`}
          cx={s.x} cy={s.y} r="4" fill="#10b981"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 + i * 0.12 }}
        />
      ))}
      <circle cx="100" cy="40" r="5" fill="#0a4f3a" />
    </svg>
  );
}