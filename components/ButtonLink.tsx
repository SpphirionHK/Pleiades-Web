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
    "bg-accent-blue text-white hover:bg-navy-800 focus-visible:outline-accent-blue",
  secondary:
    "border border-accent-blue bg-white text-accent-blue hover:bg-accent-blue hover:text-white",
  light:
    "border border-white/45 bg-transparent text-white hover:bg-white hover:text-accent-blue"
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
