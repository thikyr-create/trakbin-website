export const SITE_URL = "https://trakbin.com";

export const ORG = {
  name: "Trakbin",
  url: "https://trakbin.com",
  tagline: "Building cities, not trucks.",
  description: "The digital infrastructure for modern waste management.",
  email: "pilot@trakbin.com",
  whatsapp: "+2347057719957",
  socials: [
    "https://linkedin.com/company/trakbin",
    "https://x.com/trakbin",
    "https://instagram.com/trakbin",
  ],
};

export type PageDef = { path: string; title: string; description: string };

export const PAGES: PageDef[] = [
  { path: "/", title: "Trakbin — The digital infrastructure for modern waste management", description: "Trakbin connects properties, waste operators, businesses and waste agencies through one intelligent operational system for collection, routing and field intelligence." },
  { path: "/platform", title: "Platform — One intelligent operational system · Trakbin", description: "Collection, routing, billing and field intelligence unified in a single platform shared by properties, operators and agencies." },
  { path: "/waste-operators", title: "For Waste Operators — Run your operation as one live system · Trakbin", description: "Fleet, drivers, zones, dispatch, routing, collection tracking, billing and analytics in one command deck." },
  { path: "/properties", title: "For Properties — Your building, connected to the network · Trakbin", description: "Collection schedules, service visibility, history, billing and a direct line to your waste provider." },
  { path: "/agencies-regulators", title: "For Waste Agencies & Regulators · Trakbin", description: "Geographic visibility, service coverage and operational intelligence across the waste system you regulate." },
  { path: "/field-intelligence", title: "Field Intelligence — Every collection creates intelligence · Trakbin", description: "Trakbin turns real-world collection activity into structured, confidence-scored operational intelligence." },
  { path: "/about", title: "About — Building cities, not trucks · Trakbin", description: "Trakbin connects the physical work of waste management to the data it generates." },
  { path: "/contact", title: "Request a Pilot — Trakbin", description: "Deploy Trakbin on a real zone. Start with a pilot, measure everything, build from real operations." },
];