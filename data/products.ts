import type { Product, ProductCategory } from "@/data/types";

export const portaBeam: Product = {
  slug: "portabeam",
  name: "PortaBeam Portable Collimator",
  shortDescription:
    "High-precision infinity-target simulation for laboratory and field calibration.",
  description:
    "PortaBeam is a portable high-precision collimator developed for the calibration, alignment and testing of airborne cameras, UAV payloads, EO/IR gimbals, infrared sensors and laser communication optical systems.",
  heroImage: "/images/portabeam-hero.jpg",
  category: "Portable Collimators",
  applications: [
    "UAV camera calibration",
    "Airborne EO/IR payload testing",
    "Thermal imaging system alignment",
    "Camera focus verification",
    "Laser communication terminal alignment",
    "Optical laboratory testing"
  ],
  features: [
    "Simulates an infinity target within limited indoor space",
    "Portable reflective optical architecture",
    "Suitable for visible and infrared applications",
    "Interchangeable reticles and target modules",
    "Supports on-site calibration without disassembling the payload",
    "Multiple focal length and aperture configurations"
  ],
  specifications: [
    { label: "Model", value: "PortaBeam family configurations", status: "draft" },
    { label: "Optical configuration", value: "Cassegrain / off-axis reflective / double-reflective options", status: "draft" },
    { label: "Effective aperture", value: "To be confirmed per model", status: "placeholder" },
    { label: "Effective focal length", value: "To be confirmed per model", status: "placeholder" },
    { label: "Spectral range", value: "UV / VIS / NIR / IR configurations available by design", status: "draft" },
    { label: "Wavefront error", value: "Defined per customer acceptance criteria", status: "placeholder" },
    { label: "Field of view", value: "To be confirmed per optical layout", status: "placeholder" },
    { label: "Central obstruction", value: "Configuration dependent", status: "draft" },
    { label: "Reticle type", value: "Crosshair, radial, resolution, star-point or custom", status: "draft" },
    { label: "Illumination source", value: "Application-specific illumination module", status: "placeholder" },
    { label: "Instrument dimensions", value: "To be confirmed per model", status: "placeholder" },
    { label: "Weight", value: "To be confirmed per model", status: "placeholder" },
    { label: "Operating temperature", value: "Application-specific range to be defined", status: "placeholder" },
    { label: "Mounting interface", value: "Tripod, bench or custom fixture options", status: "draft" },
    { label: "Power input", value: "To be confirmed by illumination configuration", status: "placeholder" }
  ],
  downloads: [
    {
      title: "PortaBeam Product Brochure",
      url: "/documents/portabeam-product-brochure.pdf",
      status: "placeholder"
    }
  ],
  status: "draft"
};

export const products: Product[] = [portaBeam];

export const productFamilies = [
  {
    name: "PortaBeam Gen 1",
    description: "Cassegrain coaxial reflective architecture.",
    image: "/images/collimator-product.jpg"
  },
  {
    name: "PortaBeam Gen 1.5",
    description:
      "Enhanced Cassegrain architecture with improved mechanical and optical performance.",
    image: "/images/portabeam-field-demo.jpg"
  },
  {
    name: "PortaBeam IR Series",
    description: "Off-axis reflective configuration without central obstruction.",
    image: "/images/infrared-testing.jpg"
  },
  {
    name: "PortaBeam IR-DR",
    description:
      "Double-reflective off-axis configuration for advanced infrared applications.",
    image: "/images/portabeam-optical-layout.jpg"
  }
];

export const reticleOptions = [
  "Crosshair reticle",
  "Radial reticle",
  "Resolution reticle",
  "Star-point reticle",
  "Custom reticle"
];

export const productCategories: ProductCategory[] = [
  {
    slug: "portable-collimators",
    name: "Portable Collimators",
    image: "/images/collimator-product.jpg",
    description:
      "Field-deployable collimators for infinity-target simulation, alignment and calibration.",
    href: "/products/portabeam",
    status: "draft"
  },
  {
    slug: "optical-testing-systems",
    name: "Optical Testing Systems",
    image: "/images/optical-laboratory.jpg",
    description:
      "Autocollimation, optical alignment and wavefront testing systems for laboratories and production.",
    href: "/products/collimators",
    status: "draft"
  },
  {
    slug: "laser-optical-systems",
    name: "Laser Optical Systems",
    image: "/images/laser-communication.jpg",
    description:
      "Beam expansion, alignment and verification solutions for advanced photonics systems.",
    href: "/products/optical-components",
    status: "draft"
  },
  {
    slug: "infrared-optical-components",
    name: "Infrared Optical Components",
    image: "/images/infrared-testing.jpg",
    description:
      "Infrared windows, optical assemblies and test configurations for NIR through LWIR applications.",
    href: "/products/optical-components",
    status: "draft"
  },
  {
    slug: "precision-optical-components",
    name: "Precision Optical Components",
    image: "/images/portabeam-optical-layout.jpg",
    description:
      "Optical windows, wedge prism assemblies, pellicles and attenuation components.",
    href: "/products/optical-components",
    status: "draft"
  },
  {
    slug: "custom-opto-mechanical-systems",
    name: "Custom Opto-Mechanical Systems",
    image: "/images/engineering-team.jpg",
    description:
      "Custom optical design, mechanical integration and fixture development for demanding programs.",
    href: "/technology",
    status: "draft"
  }
];
