import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-accent-orange text-navy-900 hover:bg-[#df7b16] focus-visible:outline-accent-orange",
  secondary:
    "border border-navy-800/25 bg-white text-navy-800 hover:border-accent-orange hover:text-navy-900",
  light:
    "border border-white/35 bg-white/10 text-white hover:border-accent-orange hover:bg-white/15"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
