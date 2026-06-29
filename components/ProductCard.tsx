import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProductCategory } from "@/data/types";
import { ImagePanel } from "@/components/ImagePanel";

export function ProductCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={category.href}
      className="group block border border-industrial-200 bg-white transition hover:-translate-y-1 hover:border-accent-orange hover:shadow-soft"
    >
      <ImagePanel
        src={category.image}
        alt={`${category.name} product category`}
        className="aspect-[16/10]"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-navy-900">{category.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-industrial-500">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue group-hover:text-accent-orange">
          View Products <ArrowRight aria-hidden="true" size={16} />
        </span>
      </div>
    </Link>
  );
}
