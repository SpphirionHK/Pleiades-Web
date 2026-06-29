import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Laser and Optical Components",
  description:
    "Laser beam expanders, precision optical windows, wedge prism assemblies and infrared optical components for custom optical systems.",
  path: "/products/optical-components"
});

const components = [
  "Laser beam expanders",
  "High-precision optical windows",
  "Wedge prism assemblies",
  "Pellicle and attenuation components",
  "Infrared optical components",
  "Application-specific optical assemblies"
];

export default function OpticalComponentsPage() {
  return (
    <>
      <section className="bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Optical Components"
            title="Laser, infrared and precision optical components"
            description="Component and assembly concepts for optical systems where material, coating, alignment and mechanical integration must be considered together."
          />
          <ImagePanel src="/images/laser-communication.jpg" alt="Laser optical system placeholder" className="aspect-[4/3] shadow-soft" />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <div key={component} className="border border-industrial-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-navy-900">{component}</h2>
              <p className="mt-3 text-sm leading-6 text-industrial-500">
                Detailed specifications are confirmed per project after wavelength, aperture,
                environment and integration constraints are reviewed.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
