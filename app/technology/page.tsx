import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "Explore Pleiades reflective collimator architecture, infinity-target simulation, reticle systems, alignment and opto-mechanical integration capabilities.",
  path: "/technology"
});

const topics = [
  "Reflective collimator architecture",
  "Cassegrain folded optical path",
  "Off-axis reflective design",
  "Infinity-target simulation",
  "Full-spectrum optical configurations",
  "Precision alignment",
  "Reticle and illumination systems",
  "Opto-mechanical integration",
  "Wavefront testing",
  "Custom optical engineering"
];

export default function TechnologyPage() {
  return (
    <>
      <section className="technical-grid bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Technology"
            title="Optical architecture built around practical deployment"
            description="Pleiades combines reflective optical design, reticle and illumination modules, mechanical tolerance control and verification workflows for demanding calibration applications."
          />
          <OpticalDiagram />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic} className="border border-industrial-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-navy-900">{topic}</h2>
              <p className="mt-3 text-sm leading-6 text-industrial-500">
                Engineering details are refined per customer application, optical band, system
                geometry and acceptance requirements.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue">
                Configurable capability <ArrowRight aria-hidden="true" size={16} />
              </span>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-navy-900 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Infinity-target simulation"
            description="A reticle or target at the focal plane of the collimator is converted into a parallel optical beam, allowing the device under test to observe the target as if it were at optical infinity."
            inverse
          />
          <div className="border border-white/14 bg-white/6 p-8">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-sm font-semibold">
              <div className="border border-white/24 p-4">Target</div>
              <ArrowRight aria-hidden="true" className="text-accent-orange" />
              <div className="border border-white/24 p-4">Collimator</div>
              <ArrowRight aria-hidden="true" className="text-accent-orange" />
              <div className="border border-white/24 p-4">Parallel beam</div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function OpticalDiagram() {
  return (
    <div className="relative min-h-[360px] overflow-hidden border border-industrial-200 bg-white p-8 shadow-soft">
      <div className="absolute inset-0 technical-grid opacity-60" />
      <div className="relative h-full min-h-[300px]">
        <div className="absolute left-4 top-1/2 h-16 w-4 -translate-y-1/2 bg-accent-orange" />
        <div className="absolute left-20 top-1/2 h-1 w-48 -translate-y-1/2 bg-accent-blue" />
        <div className="absolute left-[17rem] top-1/2 size-32 -translate-y-1/2 rounded-full border-[10px] border-navy-800" />
        <div className="absolute left-[21rem] top-[7.6rem] h-1 w-48 rotate-[-18deg] bg-accent-blue" />
        <div className="absolute right-8 top-20 h-52 w-8 border border-navy-800 bg-industrial-100" />
        <p className="absolute bottom-0 left-0 max-w-sm text-sm leading-6 text-industrial-500">
          Original simplified CSS diagram representing target, folded optical path and collimated
          beam output.
        </p>
      </div>
    </div>
  );
}
