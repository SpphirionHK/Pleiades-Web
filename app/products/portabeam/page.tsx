import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecificationTable } from "@/components/SpecificationTable";
import { productFamilies, reticleOptions, portaBeam } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "PortaBeam Portable Collimator",
  description:
    "PortaBeam is a portable high-precision collimator for infinity-target simulation, optical calibration, alignment and field testing.",
  path: "/products/portabeam"
});

const workflow = [
  "Define target optical system, wavelength range and acceptance criteria",
  "Select collimator configuration, reticle and illumination module",
  "Mount PortaBeam and align to the payload or laboratory fixture",
  "Perform focus, boresight or imaging verification workflow",
  "Document results and refine configuration for future tests"
];

export default function PortaBeamPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: portaBeam.name,
    description: portaBeam.description,
    image: absoluteUrl(portaBeam.heroImage),
    brand: {
      "@type": "Brand",
      name: "Pleiades Optoelectronics"
    },
    category: portaBeam.category
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      {
        "@type": "ListItem",
        position: 3,
        name: "PortaBeam Portable Collimator",
        item: absoluteUrl("/products/portabeam")
      }
    ]
  };

  return (
    <>
      <section className="bg-industrial-50 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-orange">
              Portable Collimator
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-navy-900 md:text-6xl">
              PortaBeam Portable Collimator
            </h1>
            <p className="mt-6 text-xl leading-8 text-industrial-500">
              High-precision infinity-target simulation for laboratory and field calibration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request Technical Discussion</ButtonLink>
              <ButtonLink href="/downloads" variant="secondary">
                Download Brochure
              </ButtonLink>
            </div>
          </div>
          <ImagePanel
            src="/images/portabeam-hero.jpg"
            alt="PortaBeam portable collimator hero image"
            className="aspect-[4/3] shadow-soft"
            priority
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Product overview"
            title="Controlled collimated target generation in limited space"
          />
          <div className="space-y-5 text-lg leading-8 text-industrial-500">
            <p>{portaBeam.description}</p>
            <p>
              PortaBeam generates a controlled collimated optical target that allows cameras and
              optical systems to observe an equivalent distant target within a limited physical
              space.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key benefits" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Portable system architecture",
              "High optical accuracy",
              "Field-deployable calibration",
              "Visible and infrared configurations",
              "Interchangeable target reticles",
              "Reduced payload disassembly",
              "Short setup time",
              "Custom engineering options"
            ].map((benefit) => (
              <div key={benefit} className="flex gap-3 border border-industrial-200 bg-white p-5 text-sm font-semibold text-navy-900">
                <CheckCircle2 className="shrink-0 text-accent-blue" aria-hidden="true" size={18} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ImagePanel
            src="/images/portabeam-optical-layout.jpg"
            alt="Simplified optical layout for collimated target generation"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHeading title="Optical principle" />
            <p className="mt-6 leading-7 text-industrial-500">
              A target positioned at the focal plane of the collimator is transformed into a
              parallel beam. The tested imaging system therefore observes the target as if it were
              located at optical infinity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Product configurations" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productFamilies.map((family) => (
              <article key={family.name} className="border border-industrial-200 bg-white">
                <ImagePanel src={family.image} alt={`${family.name} configuration`} className="aspect-[16/10]" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy-900">{family.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-industrial-500">{family.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Technical specifications"
            description="Specification values are held in editable data files. Placeholder values should be replaced after model-level validation."
          />
          <div className="mt-10">
            <SpecificationTable specifications={portaBeam.specifications} />
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Reticle options" />
            <div className="mt-8 grid gap-3">
              {reticleOptions.map((option) => (
                <div key={option} className="border border-industrial-200 bg-white p-4 text-sm font-semibold text-navy-900">
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Application scenarios" />
            <div className="mt-8 grid gap-3">
              {portaBeam.applications.map((application) => (
                <div key={application} className="border border-industrial-200 bg-white p-4 text-sm font-semibold text-navy-900">
                  {application}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Setup workflow" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {workflow.map((step, index) => (
              <article key={step} className="border border-industrial-200 bg-white p-5">
                <p className="text-sm font-bold text-accent-orange">0{index + 1}</p>
                <h3 className="mt-4 text-base font-semibold leading-6 text-navy-900">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
