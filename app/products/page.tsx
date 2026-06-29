import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { productCategories } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Explore Pleiades portable collimators, optical testing systems, infrared components and custom opto-mechanical solutions.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <>
      <section className="technical-grid bg-industrial-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="Precision optical products for laboratory and field deployment"
            description="Pleiades develops optical instruments and engineering solutions for aerospace, EO/IR, photonics and research customers."
          />
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
