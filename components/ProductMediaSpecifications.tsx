"use client";

import { X } from "lucide-react";
import { useState } from "react";
import type { Specification } from "@/data/types";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { SpecificationTable } from "@/components/SpecificationTable";

type ProductMediaSpecificationsProps = {
  images: string[];
  imageAlt: string;
  specifications: Specification[];
};

export function ProductMediaSpecifications({
  images,
  imageAlt,
  specifications
}: ProductMediaSpecificationsProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section className="bg-industrial-50 px-6 py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-industrial-200 bg-white shadow-[0_18px_50px_rgba(17,24,32,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
        <ProductImageCarousel
          images={images}
          alt={imageAlt}
          className="min-h-[420px] lg:min-h-[560px]"
        />

        <div className="flex flex-col justify-center bg-industrial-50 px-6 py-12 md:px-12">
          <h2 className="text-3xl font-semibold text-navy-900">Specifications</h2>
          <div className="mt-8 border-y border-accent-blue/80">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid gap-3 border-b border-accent-blue/60 py-4 text-sm last:border-b-0 md:grid-cols-[0.38fr_0.62fr]"
              >
                <span className="font-semibold text-navy-900">{spec.label}</span>
                <span
                  className={`leading-6 text-industrial-500 ${
                    spec.label === "Platform Size" ? "md:whitespace-nowrap" : ""
                  }`}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsDetailsOpen(true)}
            className="mt-8 w-fit cursor-pointer bg-accent-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            Details
          </button>
        </div>
      </div>

      {isDetailsOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/65 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="specification-details-title"
          onClick={() => setIsDetailsOpen(false)}
        >
          <div
            className="relative max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close specification details"
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-0 top-0 flex size-14 cursor-pointer items-center justify-center rounded-tr-lg bg-accent-blue text-white transition hover:bg-navy-900"
            >
              <X aria-hidden="true" size={28} />
            </button>
            <h2
              id="specification-details-title"
              className="pr-12 text-3xl font-semibold text-navy-900"
            >
              Specifications
            </h2>
            <div className="mt-8">
              <SpecificationTable specifications={specifications} tone="blue" />
            </div>
            <p className="mt-5 text-sm italic text-industrial-500">
              Subject to technical changes
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
