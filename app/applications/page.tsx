import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionHeading } from "@/components/SectionHeading";
import { applications } from "@/data/applications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Applications",
  description:
    "Optical calibration, alignment and testing applications for aerospace imaging, UAV payloads, EO/IR gimbals, infrared cameras, laser communication and research laboratories.",
  path: "/applications"
});

export default function ApplicationsPage() {
  return (
    <>
      <section className="technical-grid bg-industrial-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Applications"
            title="Field-deployable optical testing for advanced platforms and laboratories"
            description="Each application section outlines the customer problem, testing challenge, Pleiades solution and recommended product direction."
          />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8">
          {applications.map((application, index) => (
            <article
              key={application.slug}
              id={application.slug}
              className="scroll-mt-28 overflow-hidden border border-industrial-200 bg-white"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <ImagePanel
                  src={application.image}
                  alt={`${application.name} application environment`}
                  className={`min-h-80 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                />
                <div className="p-7 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-orange">
                    {application.name}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-navy-900">
                    {application.shortDescription}
                  </h2>
                  <div className="mt-8 grid gap-5">
                    <Detail label="Customer problem" value={application.customerProblem} />
                    <Detail label="Testing challenge" value={application.testingChallenge} />
                    <Detail label="Pleiades solution" value={application.solution} />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy-900">
                        Recommended products
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-industrial-500">
                        {application.recommendedProducts.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy-900">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-industrial-500">{value}</p>
    </div>
  );
}
