import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Crosshair,
  DraftingCompass,
  Factory,
  Gauge,
  Microscope,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { ApplicationCard } from "@/components/ApplicationCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImagePanel } from "@/components/ImagePanel";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { applications } from "@/data/applications";
import { newsItems } from "@/data/news";
import { portaBeam, productCategories } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pleiades Optoelectronics | Precision Optical Instruments and Portable Collimators",
  description:
    "Pleiades Optoelectronics develops portable collimators, precision optical instruments, infrared optical components and custom opto-mechatronic systems for aerospace, EO/IR and research applications.",
  path: "/"
});

const values = [
  {
    title: "Precision",
    description:
      "High-accuracy optical design and measurement capability for demanding calibration and testing applications.",
    icon: Crosshair
  },
  {
    title: "Portability",
    description:
      "Compact and lightweight instrument architecture designed for on-site operation.",
    icon: Compass
  },
  {
    title: "Technology",
    description:
      "Continuous development in reflective collimators, optical alignment and full-spectrum optical systems.",
    icon: Microscope
  },
  {
    title: "Engineering Quality",
    description:
      "Structured design, assembly, alignment, testing and quality-control processes.",
    icon: ShieldCheck
  }
];

const specStrip = [
  ["Optical Architecture", "Cassegrain / Off-Axis Reflective"],
  ["Spectral Capability", "UV / VIS / NIR / IR configurations"],
  ["Typical Setup", "Less than 15 minutes"],
  ["Deployment", "Laboratory and field use"]
];

const process = [
  "Requirement Definition",
  "Optical Design",
  "Opto-Mechanical Design",
  "Assembly and Alignment",
  "Verification and Delivery"
];

const capabilities = [
  "Optical simulation",
  "Stray-light evaluation",
  "Mechanical tolerance design",
  "Optical coating selection",
  "Precision assembly",
  "Wavefront and surface testing",
  "Environmental adaptation",
  "System integration"
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Precision Optical Engineering"
            title="Advanced optical instruments for demanding real-world applications"
          />
          <div>
            <p className="text-lg leading-8 text-industrial-500">
              Pleiades Optoelectronics (Hong Kong) Limited specializes in the research, design,
              manufacturing and system integration of precision optical instruments, laser systems,
              infrared optical components and opto-mechatronic equipment.
            </p>
            <p className="mt-5 leading-7 text-industrial-500">
              We support research institutes, universities and technology companies with optical
              engineering solutions designed for laboratory testing and field deployment.
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              About Pleiades
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FeatureGrid features={values} />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-industrial-200 bg-white shadow-soft lg:grid-cols-2">
            <ImagePanel
              src="/images/portabeam-field-demo.jpg"
              alt="PortaBeam portable collimator setup for field optical calibration"
              className="min-h-[420px]"
            />
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-orange">
                Featured Product
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-navy-900 md:text-4xl">
                Bring optical calibration from the laboratory to the field
              </h2>
              <p className="mt-5 leading-7 text-industrial-500">{portaBeam.description}</p>
              <ul className="mt-7 grid gap-3">
                {portaBeam.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-industrial-500">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accent-blue" aria-hidden="true" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/products/portabeam">View PortaBeam</ButtonLink>
                <ButtonLink href="/downloads" variant="secondary">
                  Download Brochure
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="grid border-x border-b border-industrial-200 bg-industrial-50 md:grid-cols-4">
            {specStrip.map(([label, value]) => (
              <div key={label} className="border-b border-r border-industrial-200 p-5 last:border-r-0 md:border-b-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-blue">{label}</p>
                <p className="mt-2 text-sm font-semibold text-navy-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Precision optical products and engineering solutions"
            description="Configurable optical instruments, components and custom systems for laboratories, integrators and field teams."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Solutions for advanced optical applications"
              description="Portable calibration, alignment and optical testing support for platforms and laboratories where precision has to travel."
            />
            <ButtonLink href="/applications" variant="secondary">
              Explore Applications
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6">
            {applications.slice(0, 6).map((application, index) => (
              <ApplicationCard
                key={application.slug}
                application={application}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Portable calibration reduces operational friction"
            description="A field-deployable optical test setup can lower the logistical burden around payload verification and system integration."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ComparisonPanel
              title="Traditional laboratory calibration"
              tone="muted"
              items={[
                "Equipment must be removed from the platform",
                "Transportation and fixture costs",
                "Long laboratory scheduling cycles",
                "Test environment differs from operating conditions"
              ]}
            />
            <ComparisonPanel
              title="Pleiades portable calibration"
              tone="active"
              items={[
                "On-site deployment",
                "Reduced disassembly risk",
                "Faster setup",
                "Tests closer to the actual operating environment",
                "Lower logistical burden"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="From optical concept to validated system" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="border border-industrial-200 bg-white p-5">
                <p className="text-sm font-bold text-accent-orange">0{index + 1}</p>
                <h3 className="mt-4 min-h-14 text-lg font-semibold text-navy-900">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability} className="flex items-center gap-3 border border-industrial-200 bg-industrial-50 p-4 text-sm font-semibold text-navy-900">
                <DraftingCompass aria-hidden="true" size={17} className="text-accent-blue" />
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Quality built into every optical system"
            description="Every Pleiades instrument is developed through controlled optical design, mechanical integration, alignment and verification processes. Product-specific inspection and acceptance criteria are established according to customer requirements and application conditions."
            inverse
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Precision optical alignment",
              "Traceable testing records",
              "Application-specific validation"
            ].map((item) => (
              <div key={item} className="border border-white/14 bg-white/6 p-6 text-white">
                <Gauge aria-hidden="true" className="text-accent-orange" />
                <h3 className="mt-5 text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="Engineering in Hong Kong. Serving global optical markets."
              description="Pleiades Optoelectronics is based in Hong Kong and participates in the HKSTP incubation programme. Hong Kong provides access to international customers, advanced research institutions, global logistics and the Greater Bay Area manufacturing ecosystem."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["/images/hong-kong-science-park.jpg", "Hong Kong innovation and technology ecosystem"],
              ["/images/engineering-team.jpg", "Engineering team reviewing optical assembly"],
              ["/images/optical-laboratory.jpg", "Optical laboratory test environment"],
              ["/images/collimator-product.jpg", "Precision optical product assembly"]
            ].map(([src, alt]) => (
              <ImagePanel key={src} src={src} alt={alt} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Development updates" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.title} className="border border-industrial-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-orange">
                  {item.category}
                </p>
                <time className="mt-3 block text-sm text-industrial-500" dateTime={item.date}>
                  {item.date}
                </time>
                <h3 className="mt-4 text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-industrial-500">{item.description}</p>
                <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-orange">
                  Read More <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ComparisonPanel({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "muted" | "active";
}) {
  const active = tone === "active";

  return (
    <article className={`border p-7 ${active ? "border-accent-orange bg-white" : "border-industrial-200 bg-white/70"}`}>
      <h3 className="flex items-center gap-3 text-xl font-semibold text-navy-900">
        {active ? <Factory aria-hidden="true" className="text-accent-orange" /> : null}
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-industrial-500">
            <CheckCircle2 aria-hidden="true" size={18} className={active ? "text-accent-orange" : "text-industrial-500"} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
