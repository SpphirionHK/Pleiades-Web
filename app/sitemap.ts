import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/products",
  "/products/portabeam",
  "/products/collimators",
  "/products/optical-components",
  "/applications",
  "/technology",
  "/downloads",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date("2026-06-29"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
