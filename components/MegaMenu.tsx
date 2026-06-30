import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productMenuFamilies } from "@/data/products";

export function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-40 hidden w-[1120px] -translate-x-1/2 border border-industrial-200 bg-white shadow-soft group-hover:block group-focus-within:block">
      <div className="relative min-h-[460px]">
        <div className="w-[360px] p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
            Product Families
          </p>
          <div className="space-y-3">
            {productMenuFamilies.map((family) => (
              <div key={family.name} className="group/family">
                <Link
                  href={family.href}
                  className="grid min-h-24 grid-cols-[88px_1fr_auto] items-center gap-4 border border-industrial-200 bg-white p-3 transition hover:border-accent-blue hover:bg-industrial-50"
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

                <div className="absolute left-[360px] top-0 hidden h-full w-[330px] border-l border-industrial-200 bg-industrial-50 p-5 group-hover/family:block group-focus-within/family:block">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
                    Product Types
                  </p>
                  <div className="space-y-3">
                    {family.types.map((type) => (
                      <div key={type.name} className="group/type">
                        <div className="flex min-h-20 items-start justify-between gap-3 border border-industrial-200 bg-white p-4 transition group-hover/type:border-accent-blue group-hover/type:bg-white">
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
                        </div>

                        <div className="absolute left-full top-0 hidden h-full w-[430px] border-l border-industrial-200 bg-white p-5 group-hover/type:block group-focus-within/type:block">
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-blue">
                            Models
                          </p>
                          <div className="space-y-3">
                            {type.models.map((model) => (
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
