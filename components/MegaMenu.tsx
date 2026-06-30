"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { productMenuFamilies } from "@/data/products";

export function MegaMenu() {
  const [activeFamilyIndex, setActiveFamilyIndex] = useState<number | null>(null);
  const [activeTypeIndex, setActiveTypeIndex] = useState<number | null>(null);

  const activeFamily =
    activeFamilyIndex === null ? null : productMenuFamilies[activeFamilyIndex] ?? null;
  const activeTypes = activeFamily?.types ?? [];
  const safeTypeIndex =
    activeTypeIndex === null ? null : Math.min(activeTypeIndex, Math.max(activeTypes.length - 1, 0));
  const activeType = safeTypeIndex === null ? null : activeTypes[safeTypeIndex];

  const activeModels = useMemo(() => activeType?.models ?? [], [activeType]);

  const selectFamily = (index: number) => {
    setActiveFamilyIndex(index);
    setActiveTypeIndex(null);
  };

  const menuWidth =
    activeFamilyIndex === null ? "w-[360px]" : activeTypeIndex === null ? "w-[690px]" : "w-[1120px]";
  const gridColumns =
    activeFamilyIndex === null
      ? "grid-cols-[360px]"
      : activeTypeIndex === null
        ? "grid-cols-[360px_330px]"
        : "grid-cols-[360px_330px_430px]";

  return (
    <div
      className={`absolute left-1/2 top-full z-40 hidden -translate-x-1/2 border border-industrial-200 bg-white shadow-soft transition-[width] duration-150 group-hover:block group-focus-within:block ${menuWidth}`}
      onMouseLeave={() => {
        setActiveFamilyIndex(null);
        setActiveTypeIndex(null);
      }}
    >
      <div className={`grid min-h-[460px] ${gridColumns}`}>
        <div className="p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
            Product Families
          </p>
          <div className="space-y-3">
            {productMenuFamilies.map((family, index) => {
              const active = index === activeFamilyIndex;

              return (
                <Link
                  key={family.name}
                  href={family.href}
                  onMouseEnter={() => selectFamily(index)}
                  onFocus={() => selectFamily(index)}
                  className={`grid min-h-24 grid-cols-[88px_1fr_auto] items-center gap-4 border p-3 transition ${
                    active
                      ? "border-accent-blue bg-industrial-50"
                      : "border-industrial-200 bg-white hover:border-accent-blue hover:bg-industrial-50"
                  }`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-industrial-100">
                    <Image
                      src={family.image}
                      alt={`${family.name} preview`}
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">
                      {family.name}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-industrial-500">
                      {family.description}
                    </span>
                  </span>
                  <ChevronRight aria-hidden="true" size={18} className="text-accent-blue" />
                </Link>
              );
            })}
          </div>
        </div>

        {activeFamily ? (
          <div className="border-l border-industrial-200 bg-industrial-50 p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
              Product Types
            </p>
            <div className="space-y-3">
              {activeTypes.map((type, index) => {
                const active = index === safeTypeIndex;

                return (
                  <button
                    key={type.name}
                    type="button"
                    onMouseEnter={() => setActiveTypeIndex(index)}
                    onFocus={() => setActiveTypeIndex(index)}
                    onClick={() => setActiveTypeIndex(index)}
                    className={`flex min-h-20 w-full items-start justify-between gap-3 border p-4 text-left transition ${
                      active
                        ? "border-accent-blue bg-white"
                        : "border-industrial-200 bg-white hover:border-accent-blue"
                    }`}
                  >
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        {type.name}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-industrial-500">
                        {type.description}
                      </span>
                    </span>
                    <ChevronRight
                      aria-hidden="true"
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-blue"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {activeType ? (
          <div className="border-l border-industrial-200 bg-white p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
              Models
            </p>
            <div className="space-y-3">
              {activeModels.map((model) => (
                <Link
                  key={model.slug}
                  href={`/products/models/${model.slug}`}
                  className="group/model flex min-h-20 items-start justify-between gap-4 border border-industrial-200 bg-white p-4 transition hover:border-accent-blue hover:bg-industrial-50"
                >
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">
                      {model.name}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-industrial-500">
                      {model.shortDescription}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-blue transition group-hover/model:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
