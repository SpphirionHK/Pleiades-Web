import type { Application } from "@/data/types";

export const applications: Application[] = [
  {
    slug: "aerial-imaging",
    name: "Aerial Imaging",
    image: "/images/uav-calibration.jpg",
    shortDescription:
      "Portable calibration and alignment solutions for airborne cameras and remote-sensing optical systems.",
    customerProblem:
      "Aerial imaging teams need stable camera performance after transport, mounting and field operation.",
    testingChallenge:
      "Traditional calibration can require payload removal and laboratory scheduling, which may not match field conditions.",
    solution:
      "Pleiades portable collimator systems support infinity-target simulation close to the platform or integration environment.",
    recommendedProducts: ["PortaBeam Portable Collimator"],
    status: "draft"
  },
  {
    slug: "uav-payloads",
    name: "UAV Payloads",
    image: "/images/uav-calibration.jpg",
    shortDescription:
      "Field-oriented focus verification and payload alignment for compact UAV optical payloads.",
    customerProblem:
      "UAV payloads are space constrained and often need verification without full disassembly.",
    testingChallenge:
      "Limited indoor space makes distant-target testing difficult for payload teams.",
    solution:
      "Reflective collimator architecture provides an equivalent distant target in a compact setup.",
    recommendedProducts: ["PortaBeam Portable Collimator", "Custom Testing Fixtures"],
    status: "draft"
  },
  {
    slug: "eo-ir-gimbals",
    name: "EO/IR Gimbal Systems",
    image: "/images/eo-ir-gimbal-application.jpg",
    shortDescription:
      "Testing and boresight alignment for visible, near-infrared and thermal imaging channels.",
    customerProblem:
      "Multi-sensor gimbals require channel alignment and repeatable focus verification.",
    testingChallenge:
      "Visible and infrared optical paths may require different targets, illumination and acceptance methods.",
    solution:
      "Pleiades supports configurable target and illumination modules for application-specific testing.",
    recommendedProducts: ["PortaBeam IR Series", "Reticle and Illumination Modules"],
    status: "draft"
  },
  {
    slug: "infrared-cameras",
    name: "Infrared Cameras",
    image: "/images/infrared-testing.jpg",
    shortDescription:
      "Optical testing solutions for NIR, SWIR, MWIR and LWIR imaging systems.",
    customerProblem:
      "Infrared camera teams need controlled test conditions across spectral bands.",
    testingChallenge:
      "Material, coating and source choices affect measurement quality across infrared ranges.",
    solution:
      "Pleiades develops reflective and off-axis configurations to support infrared optical testing requirements.",
    recommendedProducts: ["PortaBeam IR Series", "Infrared Optical Components"],
    status: "draft"
  },
  {
    slug: "laser-communication",
    name: "Laser Communication",
    image: "/images/laser-communication.jpg",
    shortDescription:
      "Alignment and verification of optical terminals for air-to-ground and satellite communication applications.",
    customerProblem:
      "Laser communication terminals require precise optical alignment and repeatable verification.",
    testingChallenge:
      "Small angular deviations can reduce link quality and complicate terminal integration.",
    solution:
      "Pleiades supports optical alignment fixtures and collimated test paths for terminal verification.",
    recommendedProducts: ["Laser Optical Systems", "Custom Opto-Mechanical Systems"],
    status: "draft"
  },
  {
    slug: "satellite-optical-payloads",
    name: "Satellite Optical Payloads",
    image: "/images/portabeam-optical-layout.jpg",
    shortDescription:
      "Optical alignment and verification support for compact payload and terminal development.",
    customerProblem:
      "Satellite payload teams need careful optical verification within strict integration constraints.",
    testingChallenge:
      "Payload-level testing may require specialized fixtures and traceable acceptance criteria.",
    solution:
      "Pleiades provides custom optical engineering support from requirement definition through verification.",
    recommendedProducts: ["Custom Testing Fixtures", "Reflective Collimator Systems"],
    status: "draft"
  },
  {
    slug: "optical-manufacturing",
    name: "Optical Manufacturing",
    image: "/images/optical-laboratory.jpg",
    shortDescription:
      "Inspection, system alignment and quality-control solutions for optical component and instrument manufacturers.",
    customerProblem:
      "Manufacturers need repeatable alignment and inspection setups for product quality control.",
    testingChallenge:
      "Production constraints demand fixtures that are practical, repeatable and easy to operate.",
    solution:
      "Pleiades designs application-specific optical fixtures and validation workflows.",
    recommendedProducts: ["Optical Testing Systems", "Custom Opto-Mechanical Systems"],
    status: "draft"
  },
  {
    slug: "research-laboratories",
    name: "Research Laboratories",
    image: "/images/optical-laboratory.jpg",
    shortDescription:
      "Flexible optical instruments and custom solutions for universities, institutes and advanced photonics laboratories.",
    customerProblem:
      "Research teams often need adaptable optical systems for evolving experimental requirements.",
    testingChallenge:
      "Standard instruments may not match the optical geometry or spectral range required by a project.",
    solution:
      "Pleiades supports custom optical engineering, reticle selection and opto-mechanical integration.",
    recommendedProducts: ["PortaBeam Portable Collimator", "Custom Optical Engineering"],
    status: "draft"
  }
];
