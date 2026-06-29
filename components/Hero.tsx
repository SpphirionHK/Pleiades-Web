import { ButtonLink } from "@/components/ButtonLink";
import { ImagePanel } from "@/components/ImagePanel";

export function Hero() {
  return (
    <section className="bg-industrial-50">
      <div className="mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-7xl gap-10 px-6 py-12 md:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-16">
        <div className="fade-in">
          <p className="inline-flex border-l-4 border-accent-orange bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-navy-800 shadow-sm">
            Incubated by Hong Kong Science and Technology Parks Corporation
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-navy-900 md:text-6xl lg:text-7xl">
            Portable Precision.
            <br />
            Laboratory Accuracy.
            <br />
            Field Deployment.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-industrial-500">
            Pleiades develops high-precision optical instruments and opto-mechatronic systems for
            aerospace imaging, infrared sensing, optical alignment and advanced photonics
            applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/products/portabeam">Explore PortaBeam</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Our Engineering Team
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <ImagePanel
            src="/images/portabeam-hero.jpg"
            alt="Precision optical collimator in a controlled optical laboratory environment"
            className="aspect-[4/3] shadow-soft"
            priority
          />
          <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 border border-industrial-200 bg-white shadow-soft">
            {["Reflective optics", "Field setup", "EO/IR ready"].map((item) => (
              <div key={item} className="border-r border-industrial-200 p-4 last:border-r-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-blue">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
