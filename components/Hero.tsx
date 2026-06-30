import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[720px] md:min-h-[620px]">
        <Image
          src="/images/portabeam-hero.jpg"
          alt="Precision optical collimator in a controlled optical laboratory environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-x-0 bottom-10 px-6 md:bottom-16">
          <div className="mx-auto max-w-7xl">
            <div className="fade-in max-w-4xl bg-accent-blue px-6 py-7 text-white md:px-12 md:py-12">
              <p className="text-base font-semibold md:text-lg">Pleiades Optoelectronics</p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:mt-5 md:text-6xl">
                Portable Precision. Laboratory Accuracy.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 md:mt-6 md:text-lg md:leading-8">
                High-precision optical instruments and opto-mechatronic systems for aerospace
                imaging, infrared sensing, optical alignment and advanced photonics applications.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
                <ButtonLink href="/products/portabeam" variant="secondary">
                  Explore PortaBeam
                </ButtonLink>
                <ButtonLink href="/contact" variant="light">
                  Contact Our Engineering Team
                </ButtonLink>
              </div>
            </div>
            <div className="h-8 max-w-4xl bg-[#acd3e9]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
