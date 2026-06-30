import { Mail, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Pleiades Optoelectronics to request a quotation, product demonstration, brochure or technical discussion.",
  path: "/contact"
});

const productOptions = [
  "PortaBeam Portable Collimator",
  "Optical Testing Systems",
  "Laser Optical Systems",
  "Infrared Optical Components",
  "Custom Opto-Mechanical Systems"
];

export default function ContactPage() {
  return (
    <>
      <section className="technical-grid bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Request a quotation or technical discussion"
              description="Share your optical system, wavelength range, aperture, focal length and testing environment so the engineering team can respond with a suitable direction."
            />
            <div className="mt-8 grid gap-4">
              <ContactLine icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactLine icon={MapPin} label="Address" value={company.officeAddress} />
              <ContactLine icon={Phone} label="Telephone" value={company.phone} />
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
      <MapSection />
      <CTASection />
    </>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon aria-hidden="true" size={20} className="text-accent-blue" />
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-industrial-500">
          {label}
        </span>
        <span className="mt-1 block font-semibold text-navy-900">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4 border border-industrial-200 bg-white p-5 hover:border-accent-orange">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4 border border-industrial-200 bg-white p-5">{content}</div>;
}

function InquiryForm() {
  return (
    <form
      action={`mailto:${company.email}`}
      method="post"
      encType="text/plain"
      className="border border-industrial-200 bg-white p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Company" name="company" required />
        <Field label="Job title" name="job_title" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Country or region" name="country_region" />
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Product of interest
          <select
            name="product_of_interest"
            required
            className="min-h-11 border border-industrial-200 bg-white px-3 text-sm font-normal text-industrial-900"
          >
            <option value="">Select a product</option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <Field label="Application" name="application" />
        <Field label="Required wavelength range" name="required_wavelength_range" />
        <Field label="Required aperture" name="required_aperture" />
        <Field label="Required focal length" name="required_focal_length" />
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-navy-900">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y border border-industrial-200 px-3 py-3 text-sm font-normal text-industrial-900"
        />
      </label>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-industrial-500">
        <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-accent-orange" />
        I agree that Pleiades may use the information provided to respond to my inquiry.
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center bg-accent-blue px-5 text-sm font-bold text-white transition hover:bg-navy-800 md:w-auto"
      >
        Send Inquiry
      </button>
      <p className="mt-4 text-xs leading-5 text-industrial-500">
        Static form fallback: this opens your email client. Replace with Formspree, Web3Forms or a
        serverless endpoint when ready.
      </p>
    </form>
  );
}

function MapSection() {
  const mapQuery = encodeURIComponent(company.officeAddress);
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-industrial-200 bg-white shadow-soft lg:grid-cols-[0.72fr_1.28fr]">
        <div className="bg-accent-blue p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            Location
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Visit Pleiades Optoelectronics
          </h2>
          <div className="mt-8 grid gap-5">
            <InfoBlock icon={MapPin} label="Address" value={company.officeAddress} />
            <InfoBlock icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
            <InfoBlock icon={Phone} label="Telephone" value={company.phone} href={`tel:${company.phone}`} />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            className="mt-8 inline-flex min-h-11 items-center justify-center border border-white/45 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-accent-blue"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="min-h-[420px] bg-industrial-100">
          <iframe
            title="Google map showing HKSTP 19W"
            src={mapUrl}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon aria-hidden="true" size={22} className="mt-1 shrink-0" />
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/62">
          {label}
        </span>
        <span className="mt-1 block text-base font-semibold leading-6 text-white">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-4 text-white transition hover:text-white/78">
        {content}
      </a>
    );
  }

  return <div className="flex gap-4 text-white">{content}</div>;
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy-900">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 border border-industrial-200 px-3 text-sm font-normal text-industrial-900"
      />
    </label>
  );
}
