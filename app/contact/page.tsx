import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";
import { Icon } from "@/components/shared/Icon";
import { PilotForm } from "@/components/contact/PilotForm";

export const metadata: Metadata = { title: "Contact", description: "Let's build better waste operations." };

const channels = [
  { icon: "mail", label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: "phone", label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
  { icon: "message", label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.contact.whatsapp}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build better waste operations."
        lead="Interested in deploying Trakbin? Start with a pilot." />

      <Section className="dot-grid-dark">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <PilotForm />
          <aside className="space-y-4">
            {channels.map((c) => (
              <a key={c.label} href={c.href}
                className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 card-shadow transition hover:-translate-y-0.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
                  <Icon name={c.icon} />
                </span>
                <span>
                  <span className="eyebrow block text-ink-500">{c.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-ink-900">{c.value}</span>
                </span>
              </a>
            ))}
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
          </aside>
        </Container>
      </Section>
    </>
  );
}