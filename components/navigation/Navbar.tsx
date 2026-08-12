"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-forest-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-hidden={isHome}
          tabIndex={isHome ? -1 : 0}
          className={cn("font-display text-lg font-black tracking-tight text-white", isHome && "invisible")}
        >
          TRAKBIN
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[.18em] text-mint-100/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={CTA.href}
            className="hidden rounded-full bg-brand-500 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[.18em] text-forest-950 transition hover:bg-brand-400 lg:block"
          >
            {CTA.label}
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}