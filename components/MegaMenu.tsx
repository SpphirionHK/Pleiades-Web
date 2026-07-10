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

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-full z-40 w-[1120px] -translate-x-1/2 -translate-y-3 border border-industrial-200 bg-white opacity-0 shadow-[0_18px_45px_rgba(17,24,32,0.16)] transition-[opacity,transform] duration-500 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"
      onMouseLeave={() => {
        setActiveFamilyIndex(null);
        setActiveTypeIndex(null);
      }}
    >
      <div className="grid min-h-[430px] grid-cols-[380px_360px_380px]">
        <div className="p-7">
          <div className="border-y border-industrial-200">
            {productMenuFamilies.map((family, index) => {
              const active = index === activeFamilyIndex;

              return (
                <Link
                  key={family.name}
                  href={family.href}
                  onMouseEnter={() => selectFamily(index)}
                  onFocus={() => selectFamily(index)}
                  className={`group/family grid min-h-[74px] grid-cols-[1fr_auto] items-center gap-5 border-b border-industrial-200 px-5 py-4 transition last:border-b-0 ${
                    active
                      ? "bg-accent-blue text-white"
                      : "bg-white text-navy-900 hover:bg-accent-blue hover:text-white"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-semibold">
                      {family.name}
                    </span>
                    <span className={`mt-1 block text-xs leading-5 ${active ? "text-white/78" : "text-industrial-500 group-hover/family:text-white/78"}`}>
                      {family.description}
                    </span>
                  </span>
                  <ChevronRight aria-hidden="true" size={18} className="shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-l border-industrial-200 bg-white p-7">
          {activeFamily ? (
            <div className="border-y border-industrial-200">
              {activeTypes.map((type, index) => {
                const active = index === safeTypeIndex;
                const typeItemClassName = `group/type grid min-h-[68px] w-full grid-cols-[1fr_auto] items-center gap-5 border-b border-industrial-200 px-5 py-4 text-left transition last:border-b-0 ${
                  active
                    ? "bg-accent-blue text-white"
                    : "bg-white text-navy-900 hover:bg-accent-blue hover:text-white"
                }`;
                const typeItemContent = (
                  <>
                    <span>
                      <span className="block text-sm font-semibold">
                        {type.name}
                      </span>
                      <span className={`mt-1 block text-xs leading-5 ${active ? "text-white/78" : "text-industrial-500 group-hover/type:text-white/78"}`}>
                        {type.description}
                      </span>
                    </span>
                    <ChevronRight
                      aria-hidden="true"
                      size={18}
                      className="shrink-0"
                    />
                  </>
                );

                return type.href ? (
                  <Link
                    key={type.name}
                    href={type.href}
                    onMouseEnter={() => setActiveTypeIndex(index)}
                    onFocus={() => setActiveTypeIndex(index)}
                    className={typeItemClassName}
                  >
                    {typeItemContent}
                  </Link>
                ) : (
                  <button
                    key={type.name}
                    type="button"
                    onMouseEnter={() => setActiveTypeIndex(index)}
                    onFocus={() => setActiveTypeIndex(index)}
                    onClick={() => setActiveTypeIndex(index)}
                    className={typeItemClassName}
                  >
                    {typeItemContent}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-[280px] items-center border-y border-industrial-200 px-5 py-8 text-sm leading-6 text-industrial-500">
              Move over a product family to view its product types.
            </div>
          )}
        </div>

        <div className="border-l border-industrial-200 bg-white p-7">
          {activeType ? (
            activeModels.length > 0 ? (
              <div className="border-y border-industrial-200">
                {activeModels.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/products/models/${model.slug}`}
                    className="group/model grid min-h-[68px] grid-cols-[1fr_auto] items-center gap-5 border-b border-industrial-200 px-5 py-4 transition last:border-b-0 hover:bg-accent-blue hover:text-white"
                  >
                    <span>
                      <span className="block text-sm font-semibold">
                        {model.name}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-industrial-500 group-hover/model:text-white/78">
                        {model.shortDescription}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 text-accent-blue transition group-hover/model:translate-x-1 group-hover/model:text-white"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[330px] flex-col justify-center border-y border-industrial-200 py-8">
                {activeType.image ? (
                  <div className="relative mb-8 h-40 w-full">
                    <Image
                      src={activeType.image}
                      alt={activeType.name}
                      fill
                      sizes="340px"
                      className="object-contain"
                    />
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold text-accent-blue">
                  {activeType.name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-industrial-500">
                  {activeType.description}
                </p>
              </div>
            )
          ) : (
            <div className="flex min-h-[280px] items-center border-y border-industrial-200 px-5 py-8 text-sm leading-6 text-industrial-500">
              Move over a product type to view available models.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
