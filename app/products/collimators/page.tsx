import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Collimators and Optical Testing Systems",
  description:
    "Reflective collimators, autocollimation systems, optical alignment systems and wavefront testing solutions from Pleiades.",
  path: "/products/collimators"
});

const systems = [
  "Cassegrain portable collimators",
  "Off-axis reflective collimators",
  "Autocollimation systems",
  "Optical alignment systems",
  "Wavefront testing solutions",
  "Custom testing fixtures"
];

export default function CollimatorsPage() {
  return (
    <>
      <section className="bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Optical Testing Systems"
            title="Reflective collimator architecture for demanding optical workflows"
            description="Pleiades develops collimator and testing-system concepts for laboratories, integration benches and field calibration environments."
          />
          <ImagePanel src="/images/collimator-product.jpg" alt="Reflective collimator product placeholder" className="aspect-[4/3] shadow-soft" />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <div key={system} className="border border-industrial-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-navy-900">{system}</h2>
              <p className="mt-3 text-sm leading-6 text-industrial-500">
                Configuration and specifications are defined by application requirements and can be
                documented in the editable product data files.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
