import { Download } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { downloads } from "@/data/downloads";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Downloads",
  description:
    "Download placeholder brochures, technical overviews, application notes and company profile documents for Pleiades Optoelectronics.",
  path: "/downloads"
});

export default function DownloadsPage() {
  return (
    <>
      <section className="technical-grid bg-industrial-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Downloads"
            title="Brochures, technical overviews and application notes"
            description="The current files are placeholder PDFs and should be replaced with reviewed documents before publication."
          />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <article key={item.title} className="flex flex-col border border-industrial-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-orange">
                {item.type}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-navy-900">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-industrial-500">{item.description}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-industrial-500">
                {item.fileSize}
              </p>
              <a
                href={item.url}
                download
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 border border-navy-800/25 px-4 text-sm font-semibold text-navy-800 transition hover:border-accent-orange hover:text-accent-orange"
              >
                <Download aria-hidden="true" size={17} />
                Download
              </a>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
