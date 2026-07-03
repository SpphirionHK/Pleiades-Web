import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbBarProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbBar({ items }: BreadcrumbBarProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-y border-industrial-200 bg-[#acd3e9] px-6"
    >
      <ol className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold text-accent-blue">
        {items.map((item, index) => (
          <li key={`${item.href}-${item.label}`} className="flex items-center gap-3">
            {index > 0 ? (
              <ChevronRight aria-hidden="true" size={16} strokeWidth={3} />
            ) : null}
            <Link
              href={item.href}
              aria-current={index === items.length - 1 ? "page" : undefined}
              className="transition hover:text-navy-900 hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
