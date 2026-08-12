import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jbm = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jbm", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Trakbin ,  The digital infrastructure for modern waste management", template: "%s · Trakbin" },
  description: "Trakbin connects properties, waste operators, businesses and waste agencies through one intelligent operational system.",
  openGraph: { title: "Trakbin", description: "Building cities, not trucks. The digital infrastructure for modern waste management.", images: ["/og/home.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jbm.variable}`}>
      <body className="bg-paper font-body text-ink-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}