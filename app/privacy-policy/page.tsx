import type { Metadata } from "next";
import { SITE_URL, PAGES } from "@/content/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Container, Section } from "@/components/shared/Section";

const p = PAGES.find((x) => x.path === "/privacy-policy")!;
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

type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "link"; href: string; text: string };

const sections: { title: string; blocks: Block[] }[] = [
  { title: "INTRODUCTION", blocks: [
    { kind: "p", text: "A.G.W.U TECHNOLOGY LTD respects your privacy and is committed to protecting personal information processed through the Trakbin ecosystem." },
    { kind: "p", text: "Trakbin is a technology ecosystem designed to support waste management operations, infrastructure coordination, customer engagement, environmental compliance, operational intelligence and related digital services." },
    { kind: "p", text: "Our platforms connect different categories of users, including residents, customers, waste management companies, drivers, estate administrators, institutions, government representatives and other authorized participants." },
    { kind: "p", text: "This Privacy Policy explains how we collect, receive, use, store, disclose, protect and otherwise process personal information when you access our websites, applications, products and related services." },
    { kind: "p", text: "We process personal information in accordance with applicable data protection laws, including the Nigeria Data Protection Act 2023 (NDPA), its applicable implementation directives and other relevant privacy regulations." },
    { kind: "p", text: "By using our services, you acknowledge that you have had an opportunity to read this Privacy Policy." },
    { kind: "p", text: "Where consent is required by law, we will obtain it through an appropriate mechanism. Accessing our services does not automatically constitute consent to every category of processing described in this document." },
  ]},
  { title: "WHO WE ARE", blocks: [
    { kind: "p", text: "Trakbin is owned and operated by:" },
    { kind: "p", text: "**A.G.W.U TECHNOLOGY LTD**" },
    { kind: "p", text: "Registration Number: RC 8916517" },
    { kind: "p", text: "Registered business address supplied for this policy: Ubanesse, Igbeke Road, Nsugbe, Anambra State, Nigeria." },
    { kind: "p", text: "Email: info@trakbin.com" },
    { kind: "link", href: "https://trakbin.com", text: "https://trakbin.com" },
    { kind: "p", text: "A.G.W.U TECHNOLOGY LTD determines how personal information is processed when operating its own platform accounts, applications, websites and business operations." },
    { kind: "p", text: "In certain circumstances, we also process personal information on behalf of organizations using Trakbin." },
    { kind: "p", text: "For example, an estate or waste management company may determine why particular resident or customer information is required. In those circumstances, the organization may act as the data controller while A.G.W.U TECHNOLOGY LTD acts as its data processor for the relevant processing activities." },
    { kind: "p", text: "Our responsibilities depend on the specific service, contractual arrangement and applicable law." },
  ]},
  { title: "THE SERVICES COVERED BY THIS POLICY", blocks: [
    { kind: "p", text: "This Privacy Policy applies to the Trakbin ecosystem, including:" },
    { kind: "h3", text: "Trakbin" },
    { kind: "p", text: "Our principal platform for customer engagement, waste management coordination, service provider connections, invoices, payments, operational records and related infrastructure services." },
    { kind: "h3", text: "Trakbin Driver" },
    { kind: "p", text: "Our field operations application, which may process driver account information, assigned routes, collection activities, operational records and location information." },
    { kind: "h3", text: "Trakstatus" },
    { kind: "p", text: "Our environmental compliance and monitoring platform, which may process inspection records, compliance reports, observations, location information and related institutional records." },
    { kind: "h3", text: "Trakbin Website and Web Applications" },
    { kind: "p", text: "Our websites, dashboards, account interfaces, administrative tools and other web-based services." },
    { kind: "h3", text: "Future Trakbin Products" },
    { kind: "p", text: "Additional applications, digital services and infrastructure products introduced under the Trakbin ecosystem." },
    { kind: "p", text: "Individual products may have additional privacy notices where their functionality requires more specific disclosures." },
  ]},
  { title: "INFORMATION WE COLLECT", blocks: [
    { kind: "p", text: "The information we collect depends on how you use Trakbin, your account type, your role and the features you access." },
    { kind: "h3", text: "4.1 Identity and Account Information" },
    { kind: "p", text: "We may collect:" },
    { kind: "ul", items: [
      "Full name.",
      "Username and account identifiers.",
      "Email address.",
      "Telephone number.",
      "Account registration information.",
      "Profile photographs, where provided.",
      "Organization or business affiliation.",
      "Account role and access permissions.",
      "Authentication and account security records.",
    ]},
    { kind: "p", text: "For business and institutional accounts, we may also collect business names, registration information, authorized representatives and relevant operational contact details." },
    { kind: "h3", text: "4.2 Address and Location Information" },
    { kind: "p", text: "Depending on the services used, we may process:" },
    { kind: "ul", items: [
      "Residential and business addresses.",
      "Estate, street and building information.",
      "Geographic coordinates.",
      "GPS location information.",
      "Collection points and service locations.",
      "Assigned operational zones.",
      "Route and movement information where required for field operations.",
    ]},
    { kind: "p", text: "Location information may be provided directly by users, generated through device location services or obtained through mapping and geographical service integrations." },
    { kind: "p", text: "For Trakbin Driver, location information may be processed to support assigned routes, collection verification, operational coordination and service monitoring." },
    { kind: "p", text: "Where an application requires location access, the relevant device permissions and disclosures will apply." },
    { kind: "p", text: "Background location processing, if introduced or enabled, will be separately disclosed and will require the applicable permissions and legal basis." },
    { kind: "h3", text: "4.3 Payment and Transaction Information" },
    { kind: "p", text: "When you make payments or use payment-related features, we may process:" },
    { kind: "ul", items: [
      "Invoice identifiers.",
      "Transaction references.",
      "Payment amounts.",
      "Payment dates and timestamps.",
      "Payment status.",
      "Wallet or internal ledger records.",
      "Payment method information returned by payment providers.",
      "Refund and reversal records.",
      "Relevant billing information.",
    ]},
    { kind: "p", text: "Payments may be processed through third-party payment service providers, including Paystack." },
    { kind: "p", text: "Depending on the payment integration, the payment provider may independently collect and process card, bank account or other payment credentials." },
    { kind: "p", text: "We do not intend to collect or store complete payment card credentials, PINs or banking authentication passwords through our ordinary platform records." },
    { kind: "p", text: "Payment processing and settlement information may be retained to maintain accurate transaction histories, reconcile payments, investigate disputes and comply with applicable financial and legal obligations." },
    { kind: "h3", text: "4.4 Service and Operational Information" },
    { kind: "p", text: "We may collect information relating to:" },
    { kind: "ul", items: [
      "Service requests.",
      "Waste collection schedules.",
      "Collection confirmations.",
      "Service provider assignments.",
      "Customer service history.",
      "Operational activities.",
      "Driver assignments.",
      "Collection reports.",
      "Equipment and asset records.",
      "Waste management activities.",
      "Compliance and inspection reports.",
    ]},
    { kind: "p", text: "This information helps maintain accurate operational records and coordinate activities between relevant users and organizations." },
    { kind: "h3", text: "4.5 Device and Technical Information" },
    { kind: "p", text: "When you access our services, we may automatically collect certain technical information, including:" },
    { kind: "ul", items: [
      "Device type and model.",
      "Operating system.",
      "Application version.",
      "Browser information.",
      "IP address.",
      "Device identifiers where permitted.",
      "Network information.",
      "Login timestamps.",
      "Crash reports.",
      "Diagnostic and performance information.",
      "Security and authentication logs.",
    ]},
    { kind: "p", text: "We use this information to maintain platform security, diagnose technical problems and improve service reliability." },
    { kind: "h3", text: "4.6 Communications and Support Information" },
    { kind: "p", text: "When you contact us, we may collect:" },
    { kind: "ul", items: [
      "Email correspondence.",
      "Support requests.",
      "Complaints.",
      "Feedback.",
      "Uploaded documents or attachments.",
      "Information voluntarily supplied during support interactions.",
    ]},
    { kind: "p", text: "We use this information to respond to inquiries, investigate complaints and improve our services." },
    { kind: "h3", text: "4.7 Information from Organizations and Third Parties" },
    { kind: "p", text: "We may receive information from:" },
    { kind: "ul", items: [
      "Estates and community administrators.",
      "Waste management companies.",
      "Authorized institutional representatives.",
      "Government agencies.",
      "Payment service providers.",
      "Mapping providers.",
      "Other authorized business partners.",
    ]},
    { kind: "p", text: "Such information may include customer records, service assignments, organizational information, payment confirmations and operational data." },
    { kind: "p", text: "Organizations providing personal information to Trakbin are responsible for ensuring they have an appropriate legal basis and authority to share that information." },
  ]},
  { title: "HOW WE USE PERSONAL INFORMATION", blocks: [
    { kind: "p", text: "We process personal information for specific and legitimate operational purposes." },
    { kind: "p", text: "These include:" },
    { kind: "h3", text: "5.1 Account Management" },
    { kind: "p", text: "To create and manage user accounts, authenticate users, maintain profiles and administer access permissions." },
    { kind: "h3", text: "5.2 Service Coordination" },
    { kind: "p", text: "To connect customers with relevant service providers, coordinate collection activities, manage service requests and support operational communication." },
    { kind: "h3", text: "5.3 Location and Route Operations" },
    { kind: "p", text: "To support geographical identification, route planning, field coordination, collection verification and operational monitoring." },
    { kind: "h3", text: "5.4 Payments and Financial Records" },
    { kind: "p", text: "To generate invoices, initiate or verify payment transactions, maintain internal ledger records, reconcile transactions and investigate payment disputes." },
    { kind: "h3", text: "5.5 Environmental Compliance" },
    { kind: "p", text: "To support inspection activities, environmental reporting, compliance monitoring and authorized institutional operations." },
    { kind: "h3", text: "5.6 Platform Security" },
    { kind: "p", text: "To detect suspicious activity, prevent unauthorized access, investigate potential fraud and protect the integrity of our infrastructure." },
    { kind: "h3", text: "5.7 Customer Support" },
    { kind: "p", text: "To respond to inquiries, investigate complaints and resolve technical or operational issues." },
    { kind: "h3", text: "5.8 Product Development" },
    { kind: "p", text: "To understand platform performance, identify technical problems, improve existing features and develop additional services." },
    { kind: "p", text: "Where analytics or aggregated operational insights are used, we aim to use information in a manner that minimizes unnecessary exposure of identifiable personal information." },
    { kind: "h3", text: "5.9 Legal and Regulatory Obligations" },
    { kind: "p", text: "To comply with applicable laws, lawful requests, regulatory requirements and legitimate legal processes." },
  ]},
  { title: "LEGAL BASES FOR PROCESSING", blocks: [
    { kind: "p", text: "We process personal information only where an appropriate legal basis exists under applicable data protection law." },
    { kind: "p", text: "Depending on the circumstances, these bases may include:" },
    { kind: "h3", text: "Consent" },
    { kind: "p", text: "Where you have freely and specifically agreed to a particular processing activity, including activities for which consent is legally required." },
    { kind: "h3", text: "Contractual Necessity" },
    { kind: "p", text: "Where processing is necessary to provide a service you requested or to perform a contract with you." },
    { kind: "h3", text: "Legal Obligation" },
    { kind: "p", text: "Where processing is necessary to comply with applicable legal or regulatory obligations." },
    { kind: "h3", text: "Legitimate Interests" },
    { kind: "p", text: "Where processing is necessary for legitimate business interests, provided those interests do not override your fundamental rights and freedoms." },
    { kind: "p", text: "Examples may include platform security, fraud prevention, operational improvement and service reliability." },
    { kind: "h3", text: "Vital Interests and Public Interest" },
    { kind: "p", text: "Where processing is necessary to protect vital interests or perform a task carried out in the public interest or under an applicable legal authority." },
    { kind: "p", text: "We assess the appropriate legal basis according to the specific purpose and circumstances of processing." },
    { kind: "p", text: "Where we rely on consent, you may withdraw it at any time. Withdrawal does not affect processing lawfully carried out before withdrawal." },
  ]},
  { title: "LOCATION DATA AND GPS PROCESSING", blocks: [
    { kind: "p", text: "Location information is important to certain Trakbin services." },
    { kind: "p", text: "We may process location information to:" },
    { kind: "ul", items: [
      "Identify service addresses and collection points.",
      "Support route planning and field assignments.",
      "Coordinate drivers and operational personnel.",
      "Verify service activities where appropriate.",
      "Improve geographical and operational accuracy.",
      "Support inspections and environmental monitoring.",
    ]},
    { kind: "p", text: "Location permissions are controlled through your device settings." },
    { kind: "p", text: "You may disable location access through your device settings, although doing so may affect features that depend on location information." },
    { kind: "p", text: "Where continuous or background location access is required for a particular feature, we will provide appropriate disclosures and request the permissions required by the applicable operating system and law." },
    { kind: "p", text: "We will not use location information for unrelated purposes without an appropriate legal basis." },
  ]},
  { title: "HOW WE SHARE PERSONAL INFORMATION", blocks: [
    { kind: "p", text: "We do not make personal information publicly available simply because someone uses Trakbin." },
    { kind: "p", text: "However, certain information must be shared to provide the services requested." },
    { kind: "p", text: "We may disclose relevant information to the following categories of recipients." },
    { kind: "h3", text: "8.1 Waste Management Service Providers" },
    { kind: "p", text: "Where necessary to coordinate services, we may share customer names, contact information, service addresses, invoices, collection instructions and relevant operational information with the assigned service provider." },
    { kind: "h3", text: "8.2 Estates and Community Administrators" },
    { kind: "p", text: "Authorized estate or community representatives may access relevant resident, property, service and payment information according to their organizational responsibilities and permissions." },
    { kind: "h3", text: "8.3 Drivers and Field Personnel" },
    { kind: "p", text: "Drivers and authorized field personnel may receive information necessary to perform assigned activities, including route details, collection addresses and service instructions." },
    { kind: "h3", text: "8.4 Payment Service Providers" },
    { kind: "p", text: "We may share transaction information with payment providers such as Paystack to initiate, process, verify and reconcile payments." },
    { kind: "p", text: "Payment providers may process information under their own privacy policies and applicable contractual arrangements." },
    { kind: "h3", text: "8.5 Technology and Infrastructure Providers" },
    { kind: "p", text: "We may use third-party infrastructure and technology providers to operate our services." },
    { kind: "p", text: "Depending on the features enabled, these may include:" },
    { kind: "ul", items: [
      "Supabase for database, authentication and backend infrastructure.",
      "Mapbox for mapping and geographical services.",
      "Google Maps and Google Cloud services for relevant mapping and infrastructure functionality.",
      "Cloud hosting and content delivery providers.",
      "Email and communication service providers.",
      "Security, diagnostics and technical monitoring providers.",
    ]},
    { kind: "p", text: "These providers may process personal information on our behalf or under their own applicable privacy arrangements." },
    { kind: "p", text: "We seek to use appropriate contractual, technical and organizational safeguards when engaging service providers." },
    { kind: "h3", text: "8.6 Government and Regulatory Authorities" },
    { kind: "p", text: "We may disclose information where required by law, regulation, valid legal process or an authorized government request." },
    { kind: "p", text: "We may also provide information where necessary to protect the rights, safety and security of users, the Company or the public, subject to applicable law." },
    { kind: "h3", text: "8.7 Corporate Transactions" },
    { kind: "p", text: "Personal information may be transferred as part of a merger, acquisition, restructuring, financing or transfer of business assets, subject to appropriate legal safeguards and applicable data protection requirements." },
    { kind: "p", text: "We do not sell personal information as a commercial product." },
  ]},
  { title: "INTERNATIONAL DATA TRANSFERS", blocks: [
    { kind: "p", text: "Some technology and infrastructure providers may operate servers or process information outside Nigeria." },
    { kind: "p", text: "Where personal information is transferred internationally, we will apply the requirements of applicable data protection legislation." },
    { kind: "p", text: "For transfers originating in Nigeria, this includes the cross-border transfer requirements under Part VIII of the Nigeria Data Protection Act 2023." },
    { kind: "p", text: "Depending on the circumstances, appropriate safeguards may include:" },
    { kind: "ul", items: [
      "Adequacy decisions or recognized levels of protection.",
      "Appropriate contractual protections.",
      "Standard contractual clauses or other legally recognized transfer mechanisms.",
      "Other permitted conditions under applicable law.",
    ]},
    { kind: "p", text: "We will take reasonable steps to ensure that international processing is subject to appropriate safeguards and that the rights of affected individuals remain protected." },
  ]},
  { title: "DATA RETENTION", blocks: [
    { kind: "p", text: "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, unless a longer retention period is required or permitted by law." },
    { kind: "p", text: "Retention periods depend on the nature of the information and the applicable operational, contractual and legal requirements." },
    { kind: "p", text: "Examples include:" },
    { kind: "h3", text: "Account Information" },
    { kind: "p", text: "Retained while an account remains active and for a reasonable period afterward where necessary for account administration, security, dispute resolution or legal compliance." },
    { kind: "h3", text: "Payment and Transaction Records" },
    { kind: "p", text: "Retained for applicable financial, accounting, reconciliation, fraud prevention and legal requirements." },
    { kind: "h3", text: "Location and Operational Records" },
    { kind: "p", text: "Retained for the period necessary to support service delivery, operational accountability, dispute resolution and relevant legal requirements." },
    { kind: "h3", text: "Support Communications" },
    { kind: "p", text: "Retained for the period necessary to resolve requests, maintain support records and address relevant disputes." },
    { kind: "h3", text: "Technical and Security Logs" },
    { kind: "p", text: "Retained for an appropriate period to investigate security incidents, diagnose technical problems and maintain platform integrity." },
    { kind: "p", text: "When personal information is no longer required, we will take reasonable steps to delete, anonymize or securely dispose of it." },
    { kind: "p", text: "Certain information may remain in protected backups for a limited period before being overwritten or deleted through our normal backup processes." },
  ]},
  { title: "DATA SECURITY", blocks: [
    { kind: "p", text: "We recognize that protecting personal information is an essential responsibility." },
    { kind: "p", text: "We implement and seek to maintain reasonable technical and organizational safeguards designed to protect information against unauthorized access, disclosure, alteration, loss or destruction." },
    { kind: "p", text: "Depending on the system and processing activity, safeguards may include:" },
    { kind: "ul", items: [
      "Encrypted communication channels.",
      "Authentication and access controls.",
      "Role-based permissions.",
      "Database access restrictions.",
      "Security monitoring and logging.",
      "Credential protection.",
      "Infrastructure security controls.",
      "Backup and recovery procedures.",
      "Restricted administrative access.",
      "Internal security and operational procedures.",
    ]},
    { kind: "p", text: "Access to personal information should be limited to authorized individuals and service providers who require it for legitimate operational purposes." },
    { kind: "p", text: "No electronic system, transmission method or storage infrastructure can be guaranteed to be completely secure." },
    { kind: "p", text: "We continuously seek to improve our security practices as our services and infrastructure develop." },
  ]},
  { title: "YOUR PRIVACY RIGHTS", blocks: [
    { kind: "p", text: "Subject to applicable law and relevant exemptions, you may have the right to:" },
    { kind: "ul", items: [
      "**Access:** Request information about whether we process your personal information and obtain access to relevant records.",
      "**Correction:** Request correction of inaccurate or incomplete personal information.",
      "**Deletion:** Request erasure of personal information where applicable legal conditions are satisfied.",
      "**Restriction:** Request restriction of certain processing activities.",
      "**Objection:** Object to processing based on legitimate interests or other applicable grounds.",
      "**Data Portability:** Request a copy of certain personal information in a structured, commonly used and machine-readable format where legally applicable.",
      "**Withdraw Consent:** Withdraw previously provided consent where processing relies on consent.",
      "**Complain:** Lodge a complaint with the relevant data protection authority.",
    ]},
    { kind: "p", text: "The exercise of these rights may be subject to identity verification, legal exceptions and the rights of other individuals." },
    { kind: "p", text: "We will not unlawfully discriminate against users for exercising their privacy rights." },
  ]},
  { title: "ACCOUNT DELETION AND PERSONAL DATA REMOVAL", blocks: [
    { kind: "p", text: "Users may request the deletion of their Trakbin accounts." },
    { kind: "p", text: "Account deletion requests can be submitted through available in-app account settings or by contacting:" },
    { kind: "link", href: "mailto:info@trakbin.com", text: "info@trakbin.com" },
    { kind: "p", text: "Where an application provides account creation, we will make available an appropriate account deletion process, including an external deletion request mechanism where required by the relevant app distribution platform." },
    { kind: "p", text: "When processing a valid deletion request, we will:" },
    { kind: "ol", items: [
      "Verify the identity and authority of the requester.",
      "Identify the relevant account and associated personal information.",
      "Delete or anonymize information that is no longer required.",
      "Retain information only where a lawful retention obligation or applicable exception exists.",
      "Explain any material limitations where complete deletion cannot immediately be performed.",
    ]},
    { kind: "p", text: "Deleting an account does not necessarily erase every transaction, financial or operational record that must legally be retained." },
    { kind: "p", text: "Information retained for legitimate legal or security reasons will remain subject to appropriate access restrictions and protection." },
  ]},
  { title: "COOKIES AND SIMILAR TECHNOLOGIES", blocks: [
    { kind: "p", text: "Our websites and web applications may use cookies, local storage and similar technologies." },
    { kind: "p", text: "These technologies may support:" },
    { kind: "ul", items: [
      "Authentication and session management.",
      "Website functionality.",
      "Security.",
      "User preferences.",
      "Performance monitoring.",
      "Analytics, where enabled.",
    ]},
    { kind: "p", text: "Where required, we will provide appropriate cookie disclosures and obtain consent before using non-essential cookies or similar technologies." },
    { kind: "p", text: "You may manage or disable certain cookies through your browser settings." },
    { kind: "p", text: "Disabling certain cookies may affect website functionality." },
  ]},
  { title: "CHILDREN'S PRIVACY", blocks: [
    { kind: "p", text: "Trakbin's services are primarily designed for adults, organizations, businesses and authorized institutional users." },
    { kind: "p", text: "We do not knowingly design our services to collect personal information directly from children in circumstances where parental or guardian authorization is required without implementing the necessary protections." },
    { kind: "p", text: "Where a service involves information relating to minors, such as residential or household records supplied by an authorized adult or organization, that information must be handled in accordance with applicable child protection and data protection requirements." },
    { kind: "p", text: "If we become aware that personal information has been collected unlawfully from a child, we will take appropriate steps to investigate and address the issue." },
  ]},
  { title: "AUTOMATED PROCESSING AND PLATFORM DECISIONS", blocks: [
    { kind: "p", text: "Trakbin may use automated systems to support operational coordination, service assignment, fraud detection, reporting, analytics and platform administration." },
    { kind: "p", text: "Where automated processing is used, we will ensure that it has an appropriate legal basis and is subject to applicable safeguards." },
    { kind: "p", text: "We will provide additional information and appropriate opportunities to challenge decisions where required by applicable law, particularly where a decision is based solely on automated processing and produces legal or similarly significant effects." },
  ]},
  { title: "THIRD-PARTY WEBSITES AND SERVICES", blocks: [
    { kind: "p", text: "Our applications and websites may contain links to third-party websites, applications or services." },
    { kind: "p", text: "Those services operate under their own privacy policies and terms." },
    { kind: "p", text: "We are not responsible for the independent privacy practices of third parties." },
    { kind: "p", text: "We encourage users to review the privacy policies of external services before providing them with personal information." },
  ]},
  { title: "PERSONAL DATA BREACHES", blocks: [
    { kind: "p", text: "We maintain procedures intended to identify, investigate and respond to personal data breaches." },
    { kind: "p", text: "Where a breach occurs, we will assess its nature, scope, potential consequences and risks to affected individuals." },
    { kind: "p", text: "Where required by applicable law, we will notify the Nigeria Data Protection Commission and affected individuals within the applicable statutory timelines." },
    { kind: "p", text: "We will also take reasonable remedial measures to contain the incident, reduce potential harm and prevent recurrence." },
  ]},
  { title: "DATA PROTECTION COMPLIANCE", blocks: [
    { kind: "p", text: "A.G.W.U TECHNOLOGY LTD seeks to maintain appropriate data protection governance and accountability measures in accordance with applicable law." },
    { kind: "p", text: "These measures may include:" },
    { kind: "ul", items: [
      "Data processing records.",
      "Access management procedures.",
      "Vendor and processor assessments.",
      "Data protection agreements.",
      "Security reviews.",
      "Privacy impact assessments where required.",
      "Staff and contractor confidentiality obligations.",
      "Data retention and deletion procedures.",
      "Processes for responding to data subject requests.",
    ]},
    { kind: "p", text: "Where applicable, we will maintain the registrations, appointments, audits and regulatory filings required by the Nigeria Data Protection Act and its implementation directives." },
  ]},
  { title: "CHANGES TO THIS PRIVACY POLICY", blocks: [
    { kind: "p", text: "We may update this Privacy Policy as our products, infrastructure, business operations and legal obligations evolve." },
    { kind: "p", text: "When material changes are made, we will update the effective or last-updated date and take reasonable steps to communicate significant changes through appropriate channels." },
    { kind: "p", text: "The updated policy will be published on our official website." },
    { kind: "p", text: "Where changes require renewed consent or additional notice under applicable law, we will take the necessary steps." },
  ]},
  { title: "CONTACT AND PRIVACY REQUESTS", blocks: [
    { kind: "p", text: "For privacy questions, access requests, correction requests, deletion requests, complaints or other data protection matters, contact:" },
    { kind: "p", text: "**A.G.W.U TECHNOLOGY LTD**" },
    { kind: "p", text: "Trakbin Privacy and Support" },
    { kind: "p", text: "Email: info@trakbin.com" },
    { kind: "p", text: "Address: Ubanesse, Igbeke Road, Nsugbe, Anambra State, Nigeria." },
    { kind: "link", href: "https://trakbin.com", text: "https://trakbin.com" },
    { kind: "p", text: "Please include sufficient information to help us identify your request. We may request additional information to verify your identity before disclosing or modifying personal information." },
    { kind: "p", text: "Where a privacy complaint cannot be resolved directly with us, you may have the right to contact the Nigeria Data Protection Commission." },
  ]},
  { title: "GOVERNING DATA PROTECTION FRAMEWORK", blocks: [
    { kind: "p", text: "This Privacy Policy is intended to operate in accordance with applicable data protection laws, including:" },
    { kind: "ul", items: [
      "Nigeria Data Protection Act 2023.",
      "Nigeria Data Protection Commission's applicable General Application and Implementation Directive 2025.",
      "Other applicable national and international data protection requirements where relevant.",
    ]},
    { kind: "p", text: "Nothing in this Privacy Policy removes or limits any mandatory privacy rights available to individuals under applicable law." },
  ]},
];

const companyMeta = [
  ["Effective Date", "14 November 2026"],
  ["Last Updated", "14 November 2026"],
  ["Operated by", "A.G.W.U TECHNOLOGY LTD"],
  ["Registration Number", "RC 8916517"],
  ["Official Website", "https://trakbin.com"],
  ["Privacy Contact", "info@trakbin.com"],
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

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
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
                  if (b.kind === "h3") return (
                    <h3 key={j} className="font-display text-lg font-bold text-ink-900">{b.text}</h3>
                  );
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
            <p className="font-semibold text-ink-900">A.G.W.U TECHNOLOGY LTD</p>
            <p className="mt-2 font-semibold text-ink-900">Trakbin: Building cities, not waste.</p>
            <p className="mt-2">© 2026 A.G.W.U TECHNOLOGY LTD. All rights reserved.</p>
          </div>

        </Container>
      </Section>
    </>
  );
}