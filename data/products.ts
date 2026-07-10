import type { Product, ProductCategory, ProductMenuFamily, ProductModel } from "@/data/types";

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

export const productModels: ProductModel[] = [
  {
    slug: "portabeam-pb-c100",
    name: "Portable Coaxial Collimator",
    family: "Portable Collimators",
    type: "Cassegrain Portable Collimators",
    shortDescription: "Compact Cassegrain portable collimator for visible and near-infrared alignment.",
    description:
      "PB-C100 is a compact coaxial reflective collimator concept for laboratory and field calibration workflows that require a portable infinity-target source.",
    image: "/images/collimator-product.jpg",
    applications: ["UAV camera calibration", "Visible camera focus verification", "Portable alignment benches"],
    features: ["Coaxial reflective architecture", "Compact mechanical envelope", "Interchangeable reticle support"],
    specifications: [
      { label: "Optical architecture", value: "Cassegrain reflective", status: "draft" },
      { label: "Nominal aperture", value: "100 mm class", status: "draft" },
      { label: "Spectral configuration", value: "VIS / NIR by design", status: "draft" },
      { label: "Mounting", value: "Tripod or bench interface", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "portabeam-pb-c150",
    name: "Off-Axis Collimator",
    family: "Portable Collimators",
    type: "Cassegrain Portable Collimators",
    shortDescription: "Larger-aperture Cassegrain configuration for higher-resolution target simulation.",
    description:
      "PB-C150 extends the PortaBeam coaxial architecture for applications that need a larger aperture and a more capable portable calibration setup.",
    image: "/images/portabeam-field-demo.jpg",
    applications: ["EO payload verification", "Camera boresight checks", "Laboratory acceptance testing"],
    features: ["Larger aperture configuration", "Field-deployable structure", "Application-specific illumination"],
    specifications: [
      { label: "Optical architecture", value: "Cassegrain reflective", status: "draft" },
      { label: "Nominal aperture", value: "150 mm class", status: "draft" },
      { label: "Reticles", value: "Crosshair, radial, resolution or custom", status: "draft" },
      { label: "Deployment", value: "Laboratory and field use", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "portabeam-pb-oa80",
    name: "Cassegrain Target Collimator",
    family: "Portable Collimators",
    type: "Cassegrain Portable Collimators",
    shortDescription: "Cassegrain target collimator for repeatable infinity-target simulation.",
    description:
      "Cassegrain Target Collimator is a coaxial reflective target collimator concept for visible and near-infrared calibration, focus verification and optical-axis alignment.",
    image: "/images/collimator-product.jpg",
    applications: ["Camera focus verification", "Optical-axis alignment", "Infinity-target simulation"],
    features: ["Cassegrain target architecture", "Compact coaxial optical path", "Interchangeable target support"],
    specifications: [
      { label: "Optical architecture", value: "Cassegrain target collimator", status: "draft" },
      { label: "Nominal aperture", value: "80 mm class", status: "draft" },
      { label: "Spectral configuration", value: "VIS / NIR by design", status: "draft" },
      { label: "Target module", value: "Crosshair, radial, resolution or custom", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "portabeam-pb-oa120",
    name: "Maksutov Target Collimator",
    family: "Portable Collimators",
    type: "Off-Axis Reflective Collimators",
    shortDescription: "Maksutov target collimator for compact EO/IR alignment and calibration.",
    description:
      "Maksutov Target Collimator is a compact catadioptric target collimator concept for EO/IR calibration workflows that need stable target projection, portable setup and flexible mounting.",
    image: "/images/portabeam-optical-layout.jpg",
    applications: ["EO/IR payload calibration", "Boresight alignment", "Compact target simulation"],
    features: ["Maksutov catadioptric architecture", "Compact target projection", "Custom target module support"],
    specifications: [
      { label: "Optical architecture", value: "Maksutov catadioptric", status: "draft" },
      { label: "Nominal aperture", value: "120 mm class", status: "draft" },
      { label: "Target module", value: "Application-specific reticle and illumination", status: "draft" },
      { label: "Use case", value: "EO/IR field and laboratory testing", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "portabeam-pb-dr100",
    name: "Short-Focal-Length Collimator",
    family: "Portable Collimators",
    type: "Double-Reflective Collimators",
    shortDescription: "Short-focal-length collimator for compact target simulation and alignment.",
    description:
      "Short-Focal-Length Collimator is a compact collimator concept for short working-distance target simulation, optical alignment and portable laboratory calibration workflows.",
    image: "/images/portabeam-optical-layout.jpg",
    applications: ["Compact target simulation", "Short-range optical alignment", "Portable laboratory calibration"],
    features: ["Short focal length layout", "Compact optical path", "Application-specific target support"],
    specifications: [
      { label: "Optical architecture", value: "Short-focal-length collimator", status: "draft" },
      { label: "Nominal aperture", value: "100 mm class", status: "draft" },
      { label: "Spectral configuration", value: "VIS / NIR / IR by design", status: "draft" },
      { label: "Layout", value: "Compact folded optical path", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "autocollimation-ac-200",
    name: "AC-200 Autocollimation System",
    family: "Optical Testing Systems",
    type: "Autocollimation Systems",
    shortDescription: "Bench-oriented autocollimation configuration for angular alignment workflows.",
    description:
      "AC-200 is a configurable autocollimation system concept for checking angular alignment, fixture repeatability and optical-axis references.",
    image: "/images/optical-laboratory.jpg",
    applications: ["Angular alignment", "Fixture verification", "Optical-axis reference setup"],
    features: ["Bench setup", "Precision angular reference", "Configurable target and detector options"],
    specifications: [
      { label: "System type", value: "Autocollimation", status: "draft" },
      { label: "Setup", value: "Bench or fixture-mounted", status: "draft" },
      { label: "Configuration", value: "Customer-defined acceptance criteria", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "alignment-oa-kit",
    name: "OA Alignment Kit",
    family: "Optical Testing Systems",
    type: "Optical Alignment Systems",
    shortDescription: "Modular optical alignment kit for payload and laboratory integration.",
    description:
      "OA Alignment Kit is a modular system concept for building repeatable optical alignment workflows around customer payloads and fixtures.",
    image: "/images/engineering-team.jpg",
    applications: ["Payload integration", "Laboratory alignment", "Custom optical fixtures"],
    features: ["Modular fixture architecture", "Custom reference tooling", "Portable workflow support"],
    specifications: [
      { label: "System type", value: "Modular alignment kit", status: "draft" },
      { label: "Fixture", value: "Application-specific", status: "draft" },
      { label: "Documentation", value: "Workflow and acceptance records", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "wavefront-wt-100",
    name: "WT-100 Wavefront Test Bench",
    family: "Optical Testing Systems",
    type: "Wavefront Testing Solutions",
    shortDescription: "Configurable wavefront test bench for optical subsystem verification.",
    description:
      "WT-100 is a wavefront testing bench concept for verifying optical subsystem quality with configurable source, fixture and acceptance setup.",
    image: "/images/optical-laboratory.jpg",
    applications: ["Wavefront verification", "Optical subsystem acceptance", "Research laboratory testing"],
    features: ["Configurable bench layout", "Traceable test workflow", "Application-specific fixture integration"],
    specifications: [
      { label: "System type", value: "Wavefront test bench", status: "draft" },
      { label: "Configuration", value: "Source, fixture and detector dependent", status: "draft" },
      { label: "Output", value: "Inspection and acceptance records", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "laser-beam-expander-lbx",
    name: "All-Reflective Confocal Objective",
    family: "Optical Lenses and Objectives",
    type: "Microscope Objectives",
    shortDescription: "All-reflective confocal objective for broadband microscope imaging workflows.",
    description:
      "The All-Reflective Microscope Objective supports precision imaging and multi-wavelength analysis from UV to infrared. Its reflective design eliminates chromatic aberration, making it ideal for hyperspectral imaging, confocal microscopy, and advanced inspection applications.",
    image: "/images/products/all-reflective-confocal-objective/arco-01.png",
    galleryImages: [
      "/images/products/all-reflective-confocal-objective/arco-01.png",
      "/images/products/all-reflective-confocal-objective/arco-03.jpg",
      "/images/products/all-reflective-confocal-objective/arco-02.png"
    ],
    hideDefaultIntroNote: true,
    applications: ["Confocal microscopy", "Precision optical inspection", "Broadband reflective imaging"],
    features: ["All-reflective optical path", "Broadband wavelength support", "Confocal imaging integration"],
    specifications: [
      { label: "Optical Design", value: "Cassegrain all-reflective", status: "draft" },
      { label: "Magnification", value: "15×", status: "draft" },
      { label: "Focal Length", value: "200 mm", status: "draft" },
      { label: "Spectral Range", value: "200 nm – 14 μm", status: "draft" },
      { label: "Configuration", value: "Infinity-corrected", status: "draft" },
      { label: "Imaging Capability", value: "Multi-wavelength confocal imaging", status: "draft" },
      { label: "Wavefront Error", value: "RMS < λ/15", status: "draft" },
      { label: "Chromatic Performance", value: "No chromatic aberration by reflective design", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "infrared-window-iw-series",
    name: "IW Series Infrared Window",
    family: "Laser and Optical Components",
    type: "Infrared Optical Components",
    shortDescription: "Infrared window component family for NIR through LWIR configurations.",
    description:
      "IW Series covers infrared window concepts and assemblies for sensor protection, transmission and environmental adaptation.",
    image: "/images/infrared-testing.jpg",
    applications: ["IR sensor windows", "Environmental optical interfaces", "Thermal imaging systems"],
    features: ["Material selection support", "Coating selection", "Custom aperture and mounting"],
    specifications: [
      { label: "Component type", value: "Infrared window", status: "draft" },
      { label: "Spectral band", value: "NIR / MWIR / LWIR by material", status: "draft" },
      { label: "Mounting", value: "Custom mechanical interface", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "wedge-prism-wp-series",
    name: "WP Series Wedge Prism Assembly",
    family: "Laser and Optical Components",
    type: "Precision Optical Components",
    shortDescription: "Precision wedge prism assemblies for beam steering and alignment.",
    description:
      "WP Series is a configurable wedge prism assembly concept for beam steering, alignment correction and precision optical paths.",
    image: "/images/portabeam-optical-layout.jpg",
    applications: ["Beam steering", "Alignment correction", "Precision optical modules"],
    features: ["Custom wedge angle", "Coating selection", "Assembly and mounting support"],
    specifications: [
      { label: "Component type", value: "Wedge prism assembly", status: "draft" },
      { label: "Geometry", value: "Application-specific wedge angle", status: "draft" },
      { label: "Coating", value: "Defined by wavelength and environment", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "ops-1z",
    name: "OPS-1Z",
    family: "Support Fixtures",
    type: "Optical Positioning Stages",
    shortDescription: "High-load single-axis optical lab jack for stable vertical adjustment.",
    description:
      "OPS-1Z is designed for high-load and high-accuracy applications in optical experiments, laser calibration, and metrology platforms. Featuring a robust lifting mechanism and precise adjustment control, it enables stable and repeatable vertical movement under heavy loads.",
    image: "/images/products/ops-1z/stage-01.jpg",
    galleryImages: ["/images/products/ops-1z/stage-01.jpg"],
    hideDefaultIntroNote: true,
    applications: ["Optical experiments", "Laser calibration", "Metrology platforms"],
    features: [
      "High-load vertical adjustment",
      "Robust lifting mechanism",
      "Stable repeatable positioning"
    ],
    specifications: [
      { label: "Adjustment Axis", value: "1D Z-axis vertical lift", status: "draft" },
      { label: "Accuracy", value: "Flatness deviation <= 0.03 mm over any 50 mm lift; zero backlash throughout range", status: "draft" },
      { label: "Platform Size", value: "200 mm x 320 mm", status: "draft" },
      { label: "Initial Height", value: "150 mm", status: "draft" },
      { label: "Lifting Range", value: "150-390 mm", status: "draft" },
      { label: "Platform Weight", value: "11 kg", status: "draft" },
      { label: "Load Capacity", value: "35 kg", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "ops-2xz",
    name: "OPS-2XZ",
    family: "Support Fixtures",
    type: "Optical Positioning Stages",
    shortDescription: "Dual-axis optical lab jack for vertical elevation and horizontal translation.",
    description:
      "OPS-2XZ combines vertical elevation and forward–backward translation for precise optical positioning. With smooth counterbalanced adjustment, platform flatness below 0.05 mm, and a load capacity of up to 35 kg, it is ideal for optical alignment, laser calibration, and imaging-system stability testing.",
    image: "/images/products/ops-2xz/stage-01.jpg",
    galleryImages: ["/images/products/ops-2xz/stage-01.jpg"],
    hideDefaultIntroNote: true,
    applications: ["Optical alignment", "Laser system calibration", "Imaging-system stability testing"],
    features: [
      "Dual-axis vertical and horizontal adjustment",
      "Counterbalanced lifting mechanism",
      "Backlash-free precision positioning"
    ],
    specifications: [
      { label: "Adjustment Dimensions", value: "Dual-axis vertical Z-lift and horizontal X-shift", status: "draft" },
      { label: "Lifting Accuracy", value: "<= 0.03 mm flatness error per 50 mm movement, backlash-free", status: "draft" },
      { label: "Platform Size", value: "200 mm x 320 mm (height: 200 mm)", status: "draft" },
      { label: "Base Size", value: "300 mm x 320 mm", status: "draft" },
      { label: "Horizontal Travel", value: "100 mm", status: "draft" },
      { label: "Lifting Range", value: "200-420 mm", status: "draft" },
      { label: "Platform Weight", value: "16 kg", status: "draft" },
      { label: "Load Capacity", value: "35 kg", status: "draft" }
    ],
    status: "draft"
  },
  {
    slug: "ias-5d",
    name: "IAS-5D",
    family: "Support Fixtures",
    type: "Interferometer Alignment Stages",
    shortDescription: "Five-degree interferometer alignment stage for precision setup workflows.",
    description:
      "This Interferometer Alignment Stage supports X, Y, Z-axis linear movement and tilt adjustments in both X and Y directions. It is designed for precision instrumentation like interferometers and optical metrology systems where stability and multi-degree fine adjustment are critical.",
    image: "/images/products/ias-5d/stage-01.jpg",
    galleryImages: [
      "/images/products/ias-5d/stage-01.jpg",
      "/images/products/ias-5d/stage-02.jpg",
      "/images/products/ias-5d/stage-03.jpg"
    ],
    hideDefaultIntroNote: true,
    applications: ["Interferometer alignment", "Optical-axis setup", "Precision measurement fixtures"],
    features: ["Five-degree adjustment", "Interferometer workflow support", "Stable optical alignment platform"],
    specifications: [
      { label: "Platform Size", value: "520 mm (L) x 340 mm (W) x 320 mm (H)", status: "draft" },
      { label: "X-Axis Travel (L-R)", value: "100 mm", status: "draft" },
      { label: "Y-Axis Travel (F-B)", value: "200 mm", status: "draft" },
      { label: "Z-Axis Elevation", value: "160 mm", status: "draft" },
      { label: "Tilt Range (X/Y)", value: ">10 degrees", status: "draft" },
      { label: "Net Weight", value: "50 kg", status: "draft" },
      { label: "Load Capacity", value: "50 kg", status: "draft" }
    ],
    status: "draft"
  }
];

export const productMenuFamilies: ProductMenuFamily[] = [
  {
    name: "Optical Measurement Instrument",
    description: "Field-deployable collimators for infinity-target simulation, alignment and calibration.",
    image: "/images/collimator-product.jpg",
    href: "/products/portabeam",
    types: [
      {
        name: "Reflective Collimators",
        description: "Coaxial reflective architecture for compact portable calibration.",
        models: productModels.filter((model) => model.type === "Cassegrain Portable Collimators")
      },
      {
        name: "Catadioptric Collimators",
        description: "Unobstructed reflective path for VIS, NIR and IR testing.",
        models: productModels.filter((model) => model.type === "Off-Axis Reflective Collimators")
      },
      {
        name: "Refractive Collimators",
        description: "Folded reflective designs for advanced infrared and compact layouts.",
        models: productModels.filter((model) => model.type === "Double-Reflective Collimators")
      }
    ]
  },
  {
    name: "Optical Testing Accessories",
    description: "Autocollimation, alignment and wavefront testing systems for labs and integration teams.",
    image: "/images/optical-laboratory.jpg",
    href: "/products/collimators",
    types: [
      {
        name: "Optical Reticles",
        description: "Precision reticles for target projection, alignment and calibration.",
        image: "/images/products/optical-testing-accessories/optical-reticles.jpg",
        models: productModels.filter((model) => model.type === "Optical Reticles")
      },
      {
        name: "Hollow Corner Cube Retroreflectors",
        description: "Hollow retroreflectors for stable optical return paths and alignment references.",
        image: "/images/products/optical-testing-accessories/hollow-corner-cube-retroreflectors.jpg",
        models: productModels.filter((model) => model.type === "Hollow Corner Cube Retroreflectors")
      },
      {
        name: "Optical Retarders",
        description: "Retarder components for polarization control and optical testing workflows.",
        image: "/images/products/optical-testing-accessories/optical-retarders.jpg",
        models: productModels.filter((model) => model.type === "Optical Retarders")
      },
      {
        name: "Flat Mirrors",
        description: "Precision flat mirrors for alignment, beam folding and optical test benches.",
        image: "/images/products/optical-testing-accessories/flat-mirrors.jpg",
        models: productModels.filter((model) => model.type === "Flat Mirrors")
      }
    ]
  },
  {
    name: "Optical Lenses and Objectives",
    description: "Beam conditioning, infrared windows and precision optical assemblies.",
    image: "/images/laser-communication.jpg",
    href: "/products/optical-components",
    types: [
      {
        name: "Microscope Objectives",
        description: "Objective lens assemblies for confocal imaging and optical inspection.",
        models: productModels.filter((model) => model.type === "Microscope Objectives")
      }
    ]
  },
  {
    name: "Support Fixtures",
    description: "Application-specific optical design, integration and test fixtures.",
    image: "/images/engineering-team.jpg",
    href: "/technology",
    types: [
      {
        name: "Optical Positioning Stages",
        description: "Positioning stages for controlled optical alignment and fixture integration.",
        models: productModels.filter((model) => model.type === "Optical Positioning Stages")
      },
      {
        name: "Interferometer Alignment Stages",
        description: "Multi-degree alignment stages for interferometer setup and measurement workflows.",
        models: productModels.filter((model) => model.type === "Interferometer Alignment Stages")
      }
    ]
  }
];
