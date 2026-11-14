import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";

const p = PAGES.find((x) => x.path === "/cookie-policy")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <Section className="dot-grid-dark">
        <Container className="max-w-3xl space-y-10 text-base leading-relaxed text-ink-700 sm:text-lg">
          <p>
            This Cookie Policy explains how Trakbin ("we", "us", "our") uses cookies and similar technologies 
            when you visit our website. It should be read alongside our{" "}
            <a href="/privacy-policy" className="text-brand-600 underline">Privacy Policy</a>.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">1. What Are Cookies?</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device by your browser. They help websites function 
              efficiently, remember your preferences, and provide anonymous usage data to site owners.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">2. Categories of Technologies We Use</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-ink-900">Strictly Necessary</h3>
                <p className="mt-1 text-sm">
                  These are essential for the website to function. They enable core features like page navigation 
                  and access to secure areas. The website cannot function properly without these, and they do not 
                  require your consent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">Analytics</h3>
                <p className="mt-1 text-sm">
                  We use Vercel Web Analytics to understand how visitors interact with our site. This helps us 
                  identify technical problems and improve performance. This data is anonymized and aggregated. 
                  We only activate this with your explicit consent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">Functional & Marketing</h3>
                <p className="mt-1 text-sm">
                  Currently, Trakbin does not use third-party functional or marketing cookies. If we introduce 
                  them in the future, we will update this policy and request your consent beforehand.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">3. How to Manage Your Preferences</h2>
            <p className="mt-3">
              You can change your cookie preferences at any time by clicking the{" "}
              <strong className="text-ink-900">Cookie Preferences</strong> link in the website footer. 
              You can also disable cookies entirely through your browser settings, though this may affect 
              website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">4. Contact Us</h2>
            <p className="mt-3">
              For questions about this policy, please contact us at{" "}
              <a href="mailto:info@trakbin.com" className="text-brand-600 underline">info@trakbin.com</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}