import type { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <article
            key={feature.title}
            className="border border-industrial-200 bg-white p-6 transition hover:border-accent-orange hover:shadow-soft"
          >
            <div className="flex size-11 items-center justify-center border border-industrial-200 text-accent-blue">
              <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-navy-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-industrial-500">{feature.description}</p>
          </article>
        );
      })}
    </div>
  );
}
