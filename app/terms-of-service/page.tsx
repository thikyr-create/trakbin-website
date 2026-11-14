import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";

const p = PAGES.find((x) => x.path === "/terms-of-service")!;
export const metadata: Metadata = {
  title: p.title, description: p.description, alternates: { canonical: p.path },
  openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Trakbin" }] },
  twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og/home.png"] },
};

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "link"; href: string; text: string };

const sections: { title: string; blocks: Block[] }[] = [
  { title: "INTRODUCTION", blocks: [
    { kind: "p", text: "Welcome to Trakbin." },
    { kind: "p", text: "These Terms of Service (\"Terms\") govern your access to and use of Trakbin's websites, mobile applications, digital platforms and related services operated by A.G.W.U TECHNOLOGY LTD (\"Company\", \"we\", \"us\" or \"our\")." },
    { kind: "p", text: "Trakbin is a technology platform designed to support waste management operations, service coordination, customer engagement, environmental compliance and infrastructure-related activities." },
    { kind: "p", text: "By accessing or using any part of the Trakbin ecosystem, you agree to these Terms. If you do not agree, you should discontinue using the services." },
  ]},
  { title: "ABOUT TRAKBIN", blocks: [
    { kind: "p", text: "Trakbin is a technology ecosystem owned and operated by A.G.W.U TECHNOLOGY LTD." },
    { kind: "p", text: "The ecosystem includes products and services such as:" },
    { kind: "ul", items: [
      "**Trakbin:** A platform connecting customers, waste management service providers and relevant stakeholders while supporting operational coordination.",
      "**Trakbin Driver:** A field operations application designed to support drivers and field personnel.",
      "**Trakstatus:** A platform supporting environmental compliance, monitoring, reporting and enforcement-related activities.",
      "**Other Trakbin Products:** Additional applications, digital tools and infrastructure services introduced by the Company.",
    ]},
    { kind: "p", text: "The availability and functionality of individual products may vary." },
  ]},
  { title: "ELIGIBILITY AND ACCOUNT REGISTRATION", blocks: [
    { kind: "p", text: "You must provide accurate information when creating an account or using services that require registration." },
    { kind: "p", text: "You agree to:" },
    { kind: "ul", items: [
      "Provide truthful and up-to-date information.",
      "Maintain the confidentiality of your login credentials.",
      "Notify us of suspected unauthorized access to your account.",
      "Avoid creating accounts for fraudulent or unlawful purposes.",
      "Take responsibility for activities conducted through your account, subject to applicable law.",
    ]},
    { kind: "p", text: "We reserve the right to restrict or suspend accounts where there is reasonable evidence of misuse, fraud or violation of these Terms." },
  ]},
  { title: "PLATFORM SERVICES", blocks: [
    { kind: "p", text: "Trakbin provides digital infrastructure and tools that support the coordination and management of waste-related services." },
    { kind: "p", text: "Depending on the application and your role, services may include:" },
    { kind: "ul", items: [
      "Waste collection coordination.",
      "Customer and service provider connections.",
      "Service requests and scheduling.",
      "Location and address management.",
      "Digital invoices and payment records.",
      "Operational reporting and tracking.",
      "Estate and community management tools.",
      "Environmental monitoring and compliance support.",
    ]},
    { kind: "p", text: "We may introduce, modify, improve or discontinue features as the platform develops." },
  ]},
  { title: "CUSTOMERS AND RESIDENTS", blocks: [
    { kind: "p", text: "Customers using Trakbin agree to:" },
    { kind: "ul", items: [
      "Provide accurate service and location information.",
      "Pay applicable invoices and charges through supported payment channels.",
      "Follow reasonable service instructions.",
      "Use the platform responsibly.",
      "Report service issues or discrepancies through available support channels.",
    ]},
    { kind: "p", text: "The existence of an invoice or service request does not automatically guarantee collection at a particular time. Service delivery may depend on the availability and operational capacity of the relevant service provider." },
  ]},
  { title: "WASTE MANAGEMENT SERVICE PROVIDERS", blocks: [
    { kind: "p", text: "Waste management companies, independent operators, contractors and other service providers using Trakbin are responsible for their own operational activities." },
    { kind: "p", text: "Service providers agree to:" },
    { kind: "ul", items: [
      "Provide accurate business and operational information.",
      "Deliver services in accordance with their agreements with customers.",
      "Maintain appropriate operational and safety standards.",
      "Update relevant collection and service records.",
      "Comply with applicable environmental and waste management regulations.",
      "Avoid fraudulent reporting or manipulation of platform records.",
    ]},
    { kind: "p", text: "Unless expressly agreed otherwise in writing, service providers remain responsible for their employees, vehicles, equipment, collection activities and actual waste handling." },
    { kind: "p", text: "Trakbin provides technology and coordination infrastructure. It does not automatically assume responsibility for the physical collection, transportation, treatment or disposal of waste performed by independent service providers." },
  ]},
  { title: "ESTATES, COMMUNITIES AND INSTITUTIONS", blocks: [
    { kind: "p", text: "Estates, residential communities, institutions and other organizations may use Trakbin to coordinate waste management activities and related infrastructure services." },
    { kind: "p", text: "Authorized representatives are responsible for ensuring that information submitted on behalf of their organizations is accurate and that they have appropriate authority to manage organizational accounts." },
    { kind: "p", text: "Any separate agreement between Trakbin and an estate, institution or organization may establish additional responsibilities and commercial arrangements." },
  ]},
  { title: "PAYMENTS, INVOICES AND DIGITAL RECORDS", blocks: [
    { kind: "p", text: "Trakbin may provide payment-related features, including invoice generation, payment processing integrations, transaction records and internal wallet or account balances." },
    { kind: "p", text: "By using these features, you acknowledge that:" },
    { kind: "ol", items: [
      "Payments may be processed through third-party payment service providers.",
      "Applicable transaction charges and service fees will be disclosed through the relevant payment process or agreement.",
      "Payment processing is subject to the terms and operational requirements of the relevant payment provider.",
      "Payment confirmation, settlement and reconciliation may occur at different times.",
      "Trakbin may maintain internal transaction records to reflect payments, invoices, credits and debits.",
      "Users must not manipulate, falsify or exploit payment records.",
    ]},
    { kind: "p", text: "A balance displayed within Trakbin represents the relevant records maintained by the platform. It should not automatically be interpreted as a bank deposit or independently redeemable financial account." },
    { kind: "p", text: "Where a payment is unsuccessful, reversed, disputed or incorrectly recorded, we may investigate and make appropriate corrections to platform records." },
    { kind: "p", text: "Refunds, reversals and payment disputes will be handled in accordance with applicable law, the relevant payment provider's rules and any applicable service agreement." },
    { kind: "p", text: "Trakbin does not guarantee uninterrupted availability of third-party payment services." },
  ]},
  { title: "LOCATION AND OPERATIONAL INFORMATION", blocks: [
    { kind: "p", text: "Certain Trakbin applications may use location information, GPS, maps, addresses and other geographical data to support service coordination and operational activities." },
    { kind: "p", text: "Users acknowledge that:" },
    { kind: "ul", items: [
      "Location accuracy may depend on device hardware, network availability and third-party mapping services.",
      "GPS information may occasionally be inaccurate or delayed.",
      "Mapping information is provided for operational assistance and should not be treated as a guarantee of exact geographical positioning.",
    ]},
    { kind: "p", text: "Users must not deliberately falsify or manipulate location information." },
  ]},
  { title: "THIRD-PARTY SERVICES", blocks: [
    { kind: "p", text: "Trakbin may integrate with third-party services, including payment processors, mapping providers, cloud infrastructure providers and communication services." },
    { kind: "p", text: "Your use of such services may also be subject to their respective terms and privacy policies." },
    { kind: "p", text: "A.G.W.U TECHNOLOGY LTD does not control every aspect of third-party services and cannot guarantee their continuous availability or performance." },
  ]},
  { title: "INTELLECTUAL PROPERTY", blocks: [
    { kind: "p", text: "All intellectual property rights in the Trakbin ecosystem, including its software, applications, designs, trademarks, logos, platform architecture, documentation and proprietary technology, belong to A.G.W.U TECHNOLOGY LTD or its respective licensors." },
    { kind: "p", text: "Nothing in these Terms transfers ownership of Trakbin's intellectual property to users." },
    { kind: "p", text: "You may not, without prior written authorization:" },
    { kind: "ul", items: [
      "Copy or reproduce substantial parts of the platform.",
      "Reverse engineer or attempt to extract proprietary source code, except where permitted by applicable law.",
      "Use Trakbin's trademarks without authorization.",
      "Distribute, resell or commercially exploit platform components without permission.",
      "Misrepresent ownership of Trakbin products or technology.",
    ]},
    { kind: "p", text: "Users retain ownership of their lawful content and information submitted to the platform, subject to the licenses and permissions reasonably necessary to operate and improve the services." },
  ]},
  { title: "ACCEPTABLE USE", blocks: [
    { kind: "p", text: "You agree not to:" },
    { kind: "ul", items: [
      "Use Trakbin for unlawful activities.",
      "Submit false or misleading information.",
      "Attempt unauthorized access to systems or accounts.",
      "Interfere with platform security or availability.",
      "Upload malicious software or harmful content.",
      "Manipulate payment, invoice or operational records.",
      "Harass, threaten or defraud other users.",
      "Use the platform to violate another person's rights.",
    ]},
    { kind: "p", text: "We may investigate suspected violations and take appropriate action." },
  ]},
  { title: "PRIVACY AND DATA PROTECTION", blocks: [
    { kind: "p", text: "Your use of Trakbin is also governed by our Privacy Policy." },
    { kind: "p", text: "We may collect and process information necessary to provide platform services, maintain accounts, coordinate operations, process transactions, improve functionality and comply with legal obligations." },
    { kind: "p", text: "We handle personal information in accordance with our Privacy Policy and applicable data protection laws, including the Nigeria Data Protection Act 2023 where applicable." },
    { kind: "p", text: "Our Privacy Policy is available at:" },
    { kind: "link", href: "https://trakbin.com/privacy-policy", text: "https://trakbin.com/privacy-policy" },
  ]},
  { title: "SERVICE AVAILABILITY AND MODIFICATIONS", blocks: [
    { kind: "p", text: "We aim to maintain reliable and accessible services. However, we do not guarantee that every application or feature will always be available without interruption." },
    { kind: "p", text: "Services may occasionally be affected by:" },
    { kind: "ul", items: [
      "Scheduled maintenance.",
      "Technical failures.",
      "Internet or network disruptions.",
      "Third-party service interruptions.",
      "Security incidents.",
      "Circumstances beyond our reasonable control.",
    ]},
    { kind: "p", text: "We reserve the right to modify, update, suspend or discontinue features where reasonably necessary." },
  ]},
  { title: "ACCOUNT SUSPENSION AND TERMINATION", blocks: [
    { kind: "p", text: "We may restrict, suspend or terminate access to Trakbin where:" },
    { kind: "ul", items: [
      "A user materially violates these Terms.",
      "An account is involved in suspected fraudulent activity.",
      "Continued access presents a security or operational risk.",
      "We are required to do so by law or a competent authority.",
    ]},
    { kind: "p", text: "Where reasonably practicable, users will be informed of significant restrictions." },
    { kind: "p", text: "Users may request account closure through our official support channel, subject to applicable legal, operational and record-retention requirements." },
  ]},
  { title: "LIMITATION OF LIABILITY", blocks: [
    { kind: "p", text: "To the extent permitted by applicable law, A.G.W.U TECHNOLOGY LTD will not be liable for indirect, incidental or consequential losses arising from:" },
    { kind: "ul", items: [
      "Temporary service interruptions.",
      "Inaccurate information supplied by users.",
      "Actions or omissions of independent service providers.",
      "Third-party payment or technology failures.",
      "Unauthorized access resulting from a user's failure to protect account credentials.",
      "Events outside the Company's reasonable control.",
    ]},
    { kind: "p", text: "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law." },
    { kind: "p", text: "These Terms do not remove any consumer rights available under applicable legislation." },
  ]},
  { title: "INDEMNIFICATION", blocks: [
    { kind: "p", text: "To the extent permitted by applicable law, users agree to be responsible for losses, claims and reasonable costs arising directly from their unlawful activities, fraud, material breach of these Terms or infringement of third-party rights." },
    { kind: "p", text: "This provision does not apply to the extent that a claim results from the Company's own negligence, misconduct or breach of applicable law." },
  ]},
  { title: "CHANGES TO THESE TERMS", blocks: [
    { kind: "p", text: "We may update these Terms as Trakbin develops, introduces new services or responds to legal and operational requirements." },
    { kind: "p", text: "Updated Terms will be published on our official website with a revised effective or last-updated date." },
    { kind: "p", text: "Where changes materially affect users, we will take reasonable steps to communicate those changes." },
    { kind: "p", text: "Continued use of the services after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law." },
  ]},
  { title: "GOVERNING LAW AND DISPUTE RESOLUTION", blocks: [
    { kind: "p", text: "These Terms are governed by the laws of the Federal Republic of Nigeria." },
    { kind: "p", text: "Where a dispute arises, the parties should first attempt to resolve it through good-faith communication." },
    { kind: "p", text: "Where an amicable resolution cannot be reached, the dispute may be referred to a court of competent jurisdiction in Nigeria." },
    { kind: "p", text: "Nothing in this section prevents users from exercising statutory rights or accessing legally available dispute resolution mechanisms." },
  ]},
  { title: "INTERNATIONAL AVAILABILITY", blocks: [
    { kind: "p", text: "Trakbin is initially focused on operations in Nigeria." },
    { kind: "p", text: "As the ecosystem expands into other countries, additional terms, regional requirements and country-specific policies may apply." },
    { kind: "p", text: "Users accessing Trakbin outside Nigeria remain responsible for complying with applicable local laws." },
    { kind: "p", text: "Where mandatory local consumer or data protection laws provide additional rights, those rights will remain unaffected." },
  ]},
  { title: "CONTACT INFORMATION", blocks: [
    { kind: "p", text: "For questions, complaints, clarification or requests concerning these Terms, please contact:" },
    { kind: "p", text: "**A.G.W.U TECHNOLOGY LTD**" },
    { kind: "p", text: "Trading as: Trakbin" },
    { kind: "p", text: "Registration Number: RC 8916517" },
    { kind: "p", text: "Email: info@trakbin.com" },
    { kind: "p", text: "Address: Ubanesse, Igbeke Road, Nsugbe, Anambra State, Nigeria." },
    { kind: "link", href: "https://trakbin.com", text: "https://trakbin.com" },
  ]},
];

const companyMeta = [
  ["Effective Date", "14 November 2026"],
  ["Last Updated", "14 November 2026"],
  ["Operated by", "A.G.W.U TECHNOLOGY LTD"],
  ["Registration Number", "RC 8916517"],
  ["Email", "info@trakbin.com"],
  ["Address", "Ubanesse, Igbeke Road, Nsugbe, Anambra State, Nigeria."],
];

function Rich({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <strong key={i} className="text-ink-900">{part}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <Section className="dot-grid-dark">
        <Container className="max-w-3xl space-y-12 text-base leading-relaxed text-ink-700 sm:text-lg">

          <div className="rounded-2xl border border-line bg-card p-6 card-shadow sm:p-8">
            <dl className="space-y-2 text-sm sm:text-base">
              {companyMeta.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-ink-900">{label}:</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-bold text-ink-900">{i + 1}. {s.title}</h2>
              <div className="mt-4 space-y-4">
                {s.blocks.map((b, j) => {
                  if (b.kind === "p") return <p key={j}><Rich text={b.text} /></p>;
                  if (b.kind === "link") return (
                    <p key={j}>
                      <a href={b.href} className="text-brand-600 underline">{b.text}</a>
                    </p>
                  );
                  const List = b.kind === "ul" ? "ul" : "ol";
                  return (
                    <List key={j} className={`${b.kind === "ul" ? "list-disc" : "list-decimal"} space-y-2 pl-5`}>
                      {b.items.map((item, k) => <li key={k}><Rich text={item} /></li>)}
                    </List>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="border-t border-line pt-8 text-sm text-ink-500">
            <p>© 2026 A.G.W.U TECHNOLOGY LTD. All rights reserved.</p>
            <p className="mt-2">Trakbin is a technology ecosystem owned and operated by A.G.W.U TECHNOLOGY LTD.</p>
          </div>

        </Container>
      </Section>
    </>
  );
}