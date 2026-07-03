import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecificationTable } from "@/components/SpecificationTable";
import { productMenuFamilies, productModels } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

type ProductModelPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productModels.map((model) => ({
    slug: model.slug
  }));
}

export async function generateMetadata({ params }: ProductModelPageProps) {
  const { slug } = await params;
  const model = productModels.find((item) => item.slug === slug);

  if (!model) {
    return pageMetadata({
      title: "Product Model",
      description: "Pleiades product model details.",
      path: "/products"
    });
  }

  return pageMetadata({
    title: `${model.name} | Pleiades Optoelectronics`,
    description: model.shortDescription,
    path: `/products/models/${model.slug}`
  });
}

export default async function ProductModelPage({ params }: ProductModelPageProps) {
  const { slug } = await params;
  const model = productModels.find((item) => item.slug === slug);

  if (!model) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: model.description,
    image: absoluteUrl(model.galleryImages?.[0] ?? model.image),
    brand: {
      "@type": "Brand",
      name: "Pleiades Optoelectronics"
    },
    category: model.family,
    model: model.name
  };
  const menuFamily = productMenuFamilies.find((family) =>
    family.types.some((type) => type.models.some((item) => item.slug === model.slug))
  );
  const menuType = menuFamily?.types.find((type) =>
    type.models.some((item) => item.slug === model.slug)
  );
  const typeHref = menuType?.models[0]
    ? `/products/models/${menuType.models[0].slug}`
    : `/products/models/${model.slug}`;
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: menuFamily?.name ?? model.family, href: menuFamily?.href ?? "/products" },
    { label: menuType?.name ?? model.type, href: typeHref },
    { label: model.name, href: `/products/models/${model.slug}` }
  ];

  return (
    <>
      <BreadcrumbBar items={breadcrumbItems} />
      <section className="technical-grid bg-industrial-50 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-navy-900 md:text-6xl">
              {model.name}
            </h1>
            <p className="mt-6 text-xl leading-8 text-industrial-500">
              {model.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request Technical Discussion</ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                Back to Products
              </ButtonLink>
            </div>
          </div>
          {model.galleryImages && model.galleryImages.length > 1 ? (
            <ProductImageCarousel
              images={model.galleryImages}
              alt={`${model.name} product image`}
              className="aspect-[4/3] shadow-soft"
              priority
            />
          ) : (
            <ImagePanel
              src={model.image}
              alt={`${model.name} product image`}
              className="aspect-[4/3] shadow-soft"
              priority
            />
          )}
        </div>
      </section>

      <section className="bg-industrial-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="border-l-4 border-accent-blue pl-6">
            <SectionHeading eyebrow="Model overview" title="Product introduction" />
            <div className="mt-7 space-y-5 text-lg leading-8 text-industrial-500">
              <p>{model.description}</p>
              {model.hideDefaultIntroNote ? null : (
                <p>
                  This page is structured as a model-level landing page so product copy,
                  specifications, images and downloads can be refined independently for each SKU.
                </p>
              )}
            </div>
          </div>

          <div>
            <SectionHeading title="Specifications" />
            <div className="mt-8 shadow-[0_16px_40px_rgba(17,24,32,0.08)]">
              <SpecificationTable specifications={model.specifications} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Key features" />
            <div className="mt-8 grid gap-3">
              {model.features.map((feature) => (
                <div key={feature} className="flex gap-3 border border-industrial-200 bg-white p-5 text-sm font-semibold text-navy-900">
                  <CheckCircle2 className="shrink-0 text-accent-blue" aria-hidden="true" size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Typical applications" />
            <div className="mt-8 grid gap-3">
              {model.applications.map((application) => (
                <div key={application} className="border border-industrial-200 bg-white p-5 text-sm font-semibold text-navy-900">
                  {application}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
