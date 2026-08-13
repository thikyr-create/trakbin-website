import type { MetadataRoute } from "next";
import { SITE_URL, PAGES } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.path === "/" ? 1 : p.path === "/contact" ? 0.5 : 0.8,
  }));
}