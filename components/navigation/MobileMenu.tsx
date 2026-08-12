"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { CTA, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/15"
      >
        <span className={cn("h-px w-5 bg-white transition", open && "translate-y-[3.5px] rotate-45")} />
        <span className={cn("h-px w-5 bg-white transition", open && "-translate-y-[3.5px] -rotate-45")} />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-forest-950/95 px-6 py-10 backdrop-blur-lg">
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-brand-500 px-6 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[.2em] text-forest-950"
              >
                {CTA.label}
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}