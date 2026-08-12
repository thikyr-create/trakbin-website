import type { ReactNode } from "react";
import { Container } from "./Section";

export function PageHero({ eyebrow, title, lead, children }: {
  eyebrow: string; title: string; lead?: string; children?: ReactNode;
}) {
  return (
    <div className="hero-gradient dot-grid-light relative overflow-hidden pb-20 pt-40 text-white">
      <Container className="relative">
        <p className="eyebrow text-brand-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mint-100/80">{lead}</p>}
        {children}
      </Container>
    </div>
  );
}