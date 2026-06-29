import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Pleiades Optoelectronics, a Hong Kong precision optics technology company developing portable optical calibration and testing systems.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="About Pleiades"
            title="A Hong Kong technology company focused on precision optical engineering"
            description="Pleiades Optoelectronics develops precision optical instruments, collimators, laser optical systems, infrared optical components and opto-mechatronic systems."
          />
          <ImagePanel src="/images/hong-kong-science-park.jpg" alt="Hong Kong Science Park and technology ecosystem placeholder" className="aspect-[4/3] shadow-soft" />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Statement title="Mission" text={company.mission} />
          <Statement title="Vision" text={company.vision} />
        </div>
      </section>
      <section className="bg-industrial-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            title="Engineering philosophy"
            description={company.philosophy}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {company.capabilities.map((capability) => (
              <div key={capability} className="border border-industrial-200 bg-white p-5 text-sm font-semibold text-navy-900">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              title="Hong Kong and Greater Bay Area advantages"
              description="Hong Kong provides access to international customers, advanced research institutions, global logistics and the Greater Bay Area manufacturing ecosystem."
            />
            <p className="mt-6 leading-7 text-industrial-500">{company.incubation}</p>
          </div>
          <div className="border border-industrial-200 bg-white">
            {company.milestones.map((milestone) => (
              <div key={`${milestone.year}-${milestone.label}`} className="grid gap-3 border-b border-industrial-200 p-5 last:border-b-0 md:grid-cols-[110px_1fr]">
                <p className="font-bold text-accent-orange">{milestone.year}</p>
                <div>
                  <h3 className="font-semibold text-navy-900">{milestone.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-industrial-500">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Statement({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-industrial-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-navy-900">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-industrial-500">{text}</p>
    </article>
  );
}
