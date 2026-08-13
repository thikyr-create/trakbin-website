import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { SITE_URL, ORG, PAGES } from "@/content/seo";
import type { WithContext, Organization } from "schema-dts";

const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jbm = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jbm", display: "swap" });

const home = PAGES[0];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s" },
  description: home.description,
  applicationName: "Trakbin",
  authors: [{ name: "Trakbin" }],
  creator: "Trakbin",
  publisher: "Trakbin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: ORG.name,
    title: home.title,
    description: home.description,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: ORG.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: ["/og/home.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const orgJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG.name,
  url: ORG.url,
  slogan: ORG.tagline,
  description: ORG.description,
  email: ORG.email,
  sameAs: ORG.socials,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jbm.variable}`}>
      <body className="bg-paper font-body text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}