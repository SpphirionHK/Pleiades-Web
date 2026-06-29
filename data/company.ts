import { siteConfig } from "@/lib/site";

export const company = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  location: siteConfig.location,
  email: siteConfig.email,
  phone: siteConfig.phone,
  officeAddress: "Office address to be confirmed, Hong Kong",
  whatsapp: "WhatsApp contact to be confirmed",
  linkedin: "LinkedIn profile to be added",
  distributorInquiries: siteConfig.email,
  incubation:
    "Participates in the Hong Kong Science and Technology Parks Corporation incubation programme.",
  mission:
    "To make advanced optical calibration and testing more portable, efficient and accessible.",
  vision:
    "To become an internationally recognized provider of precision optical instruments and field-deployable optical testing solutions.",
  philosophy:
    "Pleiades approaches optical instruments as integrated systems: optical design, mechanical architecture, alignment process, illumination, reticle selection and verification must work together from the first requirement discussion.",
  capabilities: [
    "Precision optical instrument development",
    "Reflective collimator architecture",
    "Laser optical systems",
    "Infrared optical components",
    "Opto-mechanical design and integration",
    "Custom test fixtures and application engineering"
  ],
  milestones: [
    {
      year: "2024",
      label: "Company development",
      description:
        "Initial product and technology development for portable optical calibration systems.",
      status: "placeholder"
    },
    {
      year: "2025",
      label: "HKSTP incubation",
      description:
        "Participation in the Hong Kong innovation ecosystem through the HKSTP incubation programme.",
      status: "draft"
    },
    {
      year: "2026",
      label: "PortaBeam development",
      description:
        "Continued development of portable collimator product families and field-oriented optical testing capabilities.",
      status: "draft"
    }
  ]
} as const;
