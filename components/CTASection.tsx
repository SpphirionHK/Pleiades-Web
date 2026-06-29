import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="bg-navy-900 px-6 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-orange">
            Engineering inquiry
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Discuss your optical testing requirements with our engineering team
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/72">
            Tell us about your optical system, aperture, focal length, wavelength range and testing
            environment. Our team will help identify a suitable standard or customized solution.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary">
            Request a Quote
          </ButtonLink>
          <ButtonLink href="/contact" variant="light">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
