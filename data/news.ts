import type { NewsItem } from "@/data/types";

export const newsItems: NewsItem[] = [
  {
    date: "2026-03-18",
    category: "Product development",
    title: "PortaBeam Product Development Update",
    description:
      "Pleiades continues development of portable reflective collimator configurations for laboratory and field calibration.",
    href: "/technology",
    status: "placeholder"
  },
  {
    date: "2025-10-06",
    category: "Company",
    title: "Pleiades Joins HKSTP Incubation Programme",
    description:
      "The company participates in Hong Kong's technology innovation ecosystem through the HKSTP incubation programme.",
    href: "/about",
    status: "draft"
  },
  {
    date: "2026-05-22",
    category: "Capabilities",
    title: "New Optical Testing Capabilities Under Development",
    description:
      "Additional optical alignment, reticle and infrared testing capabilities are being prepared for customer discussions.",
    href: "/applications",
    status: "placeholder"
  }
];
