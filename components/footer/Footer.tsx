import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";

const cols = [
  { title: "Platform", links: [
    { href: "/platform", label: "Platform" },
    { href: "/field-intelligence", label: "Field Intelligence" },
    { href: "/waste-operators", label: "Waste Operators" },
    { href: "/properties", label: "Properties" },
    { href: "/agencies-regulators", label: "Agencies & Regulators" },
  ]},
  { title: "Company", links: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Request a Pilot" },
  ]},
];

export function Footer() {
  return (
    <footer className="dot-grid-light bg-forest-950 text-white">
      <Container className="py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="font-display text-3xl font-black tracking-tight">TRAKBIN</p>
            <p className="eyebrow mt-4 text-mint-200/70">{site.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="eyebrow text-brand-300">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-mint-100/70 transition hover:text-white">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="eyebrow text-brand-300">Connect</p>
              <div className="mt-4 flex gap-3">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mint-100/70 transition hover:bg-white/10 hover:text-white">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-white/40">© {new Date().getFullYear()} Trakbin</p>
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-white/40">Digital infrastructure for modern waste management</p>
        </div>
      </Container>
    </footer>
  );
}