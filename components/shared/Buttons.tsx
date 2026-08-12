import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-brand-500 text-forest-950 hover:bg-brand-400",
  "ghost-dark": "border border-white/25 text-white hover:bg-white/10",
  "ghost-light": "border border-ink-900/20 text-ink-900 hover:bg-ink-900/5",
};

export function ButtonLink({ href, variant = "primary", className, children }: {
  href: string; variant?: keyof typeof styles; className?: string; children: ReactNode;
}) {
  return (
    <Link href={href} className={cn(
      "inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.2em] transition",
      styles[variant], className,
    )}>
      {children}
    </Link>
  );
}