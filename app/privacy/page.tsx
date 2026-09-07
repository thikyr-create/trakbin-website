import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";

const p = PAGES.find((x) => x.path === "/privacy")!;
export const metadata: Metadata = {
  title: p.title,
  description: p.description,
  alternates: { canonical: p.path },
  openGraph: {
    title: p.title,
    description: p.description,
    url: `${SITE_URL}${p.path}`,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }],
  },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section className="dot-grid-dark">
        <Container className="max-w-3xl space-y-12 text-base leading-relaxed text-ink-700 sm:text-lg">
          
          <p className="text-sm text-ink-500">Last Updated: September 2026</p>

          <div>
            <p className="mb-6">
              Trakbin ("we", "us", "our") operates the Trakbin platform and mobile applications (the "Services"). 
              This Privacy Policy explains how we collect, use, disclose, and protect information when you use our Services.
            </p>
            <p>
              By using the Services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">1. Information We Collect</h2>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-ink-900">Account credentials.</strong> Users provide authentication credentials such as 
                operational identifiers and passwords. These authenticate your session. Passwords are never stored in plain text.
              </p>
              <p>
                <strong className="text-ink-900">Location data.</strong> Our mobile applications may collect precise GPS location 
                during active service periods to track routes, detect deviations, and record proof of service. Location collection 
                stops when the service period ends.
              </p>
              <p>
                <strong className="text-ink-900">Photos.</strong> Our applications may collect proof-of-service photographs taken 
                through the in-app camera. These are uploaded as service evidence and are not used for any other purpose.
              </p>
              <p>
                <strong className="text-ink-900">Device and push tokens.</strong> We collect device tokens to deliver dispatch 
                and operational notifications, plus basic device information for diagnostics.
              </p>
              <p>
                <strong className="text-ink-900">Payment information.</strong> Where payments are processed, they are handled 
                directly by our PCI-DSS-compliant payment provider. Trakbin never receives or stores raw card numbers.
              </p>
              <p>
                <strong className="text-ink-900">Maps.</strong> Map rendering uses third-party mapping services; accordingly, 
                limited location and usage data is transmitted as required to display maps.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">2. How We Use Information</h2>
            <p className="mt-4 mb-4">We use information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Authenticate your account and maintain your session</li>
              <li>Track and verify waste-collection routes</li>
              <li>Record proof of service</li>
              <li>Send operational and dispatch notifications</li>
              <li>Process payments</li>
              <li>Diagnose and fix technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              <strong className="text-ink-900">We do not sell personal data.</strong> We do not use personal data for third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">3. How We Share Information</h2>
            <div className="mt-4 space-y-4">
              <p>
                We share information only with trusted service providers who help us operate our platform, such as cloud 
                infrastructure providers, payment processors, notification services, and mapping services. Each provider is 
                bound by confidentiality obligations and processes data only to deliver its service.
              </p>
              <p>
                We may also disclose information to authorities if required by law, or to protect the rights, property, or 
                safety of Trakbin, our users, or the public.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">4. Data Storage and Security</h2>
            <div className="mt-4 space-y-4">
              <p>
                Data is stored on secure servers in industry-standard cloud infrastructure. We use encryption in transit and 
                at rest, role-scoped access, and authenticated sessions. No system is perfectly secure, but we apply 
                industry-standard safeguards to protect your information.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">5. Data Retention</h2>
            <div className="mt-4 space-y-4">
              <p>
                We retain account and service records for as long as your account is active or as needed to provide services 
                and meet legal obligations. Location traces and photos are retained for a reasonable period after service 
                completion, then deleted or anonymized.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">6. Your Rights</h2>
            <div className="mt-4 space-y-4">
              <p>
                Depending on your location, you may have the right to access, correct, export, or delete your personal data. 
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@trakbin.com" className="text-brand-600 underline">
                  info@trakbin.com
                </a>
                . We will respond within 30 days. You may also delete your account from within the Apps, which triggers 
                deletion of associated personal data subject to legal retention requirements.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">7. Children's Privacy</h2>
            <div className="mt-4 space-y-4">
              <p>
                The Services are not directed at individuals under 13. We do not knowingly collect personal information from 
                children under 13. If we learn we have collected such data, we will delete it promptly. Contact us at{" "}
                <a href="mailto:info@trakbin.com" className="text-brand-600 underline">
                  info@trakbin.com
                </a>{" "}
                if you believe a child has provided us information.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">8. Changes to This Policy</h2>
            <div className="mt-4 space-y-4">
              <p>
                We may update this policy periodically. Material changes will be communicated through the Services. Continued 
                use after changes constitutes acceptance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">9. Contact</h2>
            <div className="mt-4 space-y-4">
              <p>
                Questions about this policy:{" "}
                <a href="mailto:info@trakbin.com" className="text-brand-600 underline">
                  info@trakbin.com
                </a>
              </p>
            </div>
          </div>

        </Container>
      </Section>
    </>
  );
}