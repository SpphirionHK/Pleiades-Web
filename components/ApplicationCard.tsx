import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Application } from "@/data/types";
import { ImagePanel } from "@/components/ImagePanel";

export function ApplicationCard({
  application,
  reversed = false
}: {
  application: Application;
  reversed?: boolean;
}) {
  return (
    <article className="grid overflow-hidden border border-industrial-200 bg-white lg:grid-cols-2">
      <ImagePanel
        src={application.image}
        alt={`${application.name} optical application`}
        className={`min-h-72 ${reversed ? "lg:order-2" : ""}`}
      />
      <div className="flex flex-col justify-center p-7 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-orange">
          Application
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-navy-900">{application.name}</h3>
        <p className="mt-4 leading-7 text-industrial-500">{application.shortDescription}</p>
        <Link
          href={`/applications#${application.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-orange"
        >
          Explore application <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
