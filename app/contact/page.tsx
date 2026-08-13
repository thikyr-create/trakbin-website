import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { site } from "@/content/site";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { MotionCard } from "@/components/shared/MotionCard";
import { PilotForm } from "@/components/contact/PilotForm";

const p = PAGES.find((x) => x.path === "/contact")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

const channels = [
  { icon: "mail", label: "Pilot inquiries", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: "mail", label: "Information", value: site.contact.infoEmail, href: `mailto:${site.contact.infoEmail}` },
  { icon: "phone", label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
  { icon: "message", label: "WhatsApp", value: site.contact.phone, href: `https://wa.me/${site.contact.whatsapp}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build better waste operations."
        lead="Interested in deploying Trakbin? Start with a pilot." />
      <Section className="dot-grid-dark">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <MotionCard>
            <PilotForm />
          </MotionCard>
          <aside className="space-y-4">
            {channels.map((c, i) => (
              <MotionCard key={c.label} delay={0.1 + i * 0.08} hover>
                <a href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 card-shadow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                    <Icon name={c.icon} />
                  </span>
                  <span>
                    <span className="eyebrow block text-ink-500">{c.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-900">{c.value}</span>
                  </span>
                </a>
              </MotionCard>
            ))}
            <MotionCard delay={0.1 + channels.length * 0.08}>
              <div className="rounded-2xl border border-line bg-card p-5 card-shadow">
                <p className="eyebrow text-ink-500">Follow</p>
                <div className="mt-4 flex gap-3">
                  {site.socials.map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition hover:bg-ink-900/5">
                      <Icon name={s.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </MotionCard>
          </aside>
        </Container>
      </Section>
    </>
  );
}