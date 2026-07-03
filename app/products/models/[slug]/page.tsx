import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ImagePanel } from "@/components/ImagePanel";
import { ProductMediaSpecifications } from "@/components/ProductMediaSpecifications";
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
  const showIntroductionInHero = model.slug === "ias-5d" || model.slug === "ops-2xz";

  return (
    <>
      <BreadcrumbBar items={breadcrumbItems} />
      <section className="technical-grid bg-industrial-50 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-navy-900 md:text-6xl">
              {model.name}
            </h1>
            <p className="mt-6 text-xl leading-8 text-industrial-500">
              {model.shortDescription}
            </p>
            {showIntroductionInHero ? null : (
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Request Technical Discussion</ButtonLink>
                <ButtonLink href="/products" variant="secondary">
                  Back to Products
                </ButtonLink>
              </div>
            )}
            {showIntroductionInHero ? (
              <div className="mt-12 max-w-2xl border-t border-accent-blue/45 pt-8">
                <p className="text-lg leading-8 text-industrial-500">
                  {model.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact">Request Technical Discussion</ButtonLink>
                  <ButtonLink href="/products" variant="secondary">
                    Back to Products
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </div>
          <div>
            <ImagePanel
              src={model.image}
              alt={`${model.name} product image`}
              className="aspect-[4/3] shadow-soft"
              priority
            />
          </div>
        </div>
      </section>

      {showIntroductionInHero ? null : (
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading title="Product introduction" align="center" />
            <div className="mt-8 text-lg leading-8 text-industrial-500">
              <p>{model.description}</p>
            </div>
            {model.hideDefaultIntroNote ? null : (
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-industrial-500">
                This page is structured as a model-level landing page so product copy,
                specifications, images and downloads can be refined independently for each SKU.
              </p>
            )}
          </div>
        </section>
      )}

      {model.galleryImages && model.galleryImages.length > 0 ? (
        <ProductMediaSpecifications
          images={model.galleryImages}
          imageAlt={`${model.name} product image`}
          specifications={model.specifications}
        />
      ) : (
        <section className="bg-industrial-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Specifications" />
            <div className="mt-8 shadow-[0_16px_40px_rgba(17,24,32,0.08)]">
              <SpecificationTable specifications={model.specifications} />
            </div>
          </div>
        </section>
      )}

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
