"use client";

import { ChevronDown, Mail, MapPin, Menu, Phone, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MegaMenu } from "@/components/MegaMenu";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Products", href: "/products", hasMega: true },
  { label: "Applications", href: "/applications" },
  { label: "Technology", href: "/technology" },
  { label: "About Us", href: "/about" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" }
];

const mobileProductLinks = [
  { label: "PortaBeam Portable Collimator", href: "/products/portabeam" },
  { label: "Collimators and Testing Systems", href: "/products/collimators" },
  { label: "Optical Components", href: "/products/optical-components" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(17,24,32,0.12)]">
      <div className="hidden bg-accent-blue text-white md:block">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-sm">
          <div className="flex flex-wrap items-center gap-9">
            <a className="inline-flex items-center gap-3 hover:text-white/80" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={18} strokeWidth={2.4} /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-3 text-white">
              <MapPin aria-hidden="true" size={18} strokeWidth={2.4} /> {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-3 text-white">
              <Phone aria-hidden="true" size={18} strokeWidth={2.4} /> {siteConfig.phone}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="mx-auto flex min-h-28 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Pleiades home">
          <span className="relative block h-20 w-72 max-w-[58vw]">
            <Image
              src="/logo/company-logo-black.png"
              alt="Pleiades Optoelectronics"
              fill
              priority
              sizes="(min-width: 1024px) 288px, 58vw"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.hasMega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex min-h-28 items-center gap-2 px-2 text-sm font-semibold uppercase tracking-normal transition ${
                    isActive(item.href)
                      ? "text-navy-900 shadow-[inset_0_-4px_0_#006FB7]"
                      : "text-navy-900 hover:text-accent-blue"
                  }`}
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" size={16} />
                </Link>
                <MegaMenu />
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-28 items-center px-2 text-sm font-semibold uppercase tracking-normal transition ${
                  isActive(item.href)
                    ? "text-navy-900 shadow-[inset_0_-4px_0_#006FB7]"
                    : "text-navy-900 hover:text-accent-blue"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/downloads" className="text-navy-900 transition hover:text-accent-blue" aria-label="Search downloads">
            <Search aria-hidden="true" size={26} strokeWidth={2.5} />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-industrial-200 text-navy-900 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-industrial-200 bg-white px-6 py-4 lg:hidden">
          <nav className="mx-auto max-w-7xl" aria-label="Mobile navigation">
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between border-b border-industrial-200 text-left text-sm font-semibold text-navy-900"
              onClick={() => setProductsOpen((value) => !value)}
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDown
                aria-hidden="true"
                size={18}
                className={`transition ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {productsOpen ? (
              <div className="border-b border-industrial-200 py-2">
                {mobileProductLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block min-h-11 px-4 py-3 text-sm text-industrial-500"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {navItems
              .filter((item) => !item.hasMega)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block min-h-12 border-b border-industrial-200 py-3 text-sm font-semibold text-navy-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center bg-accent-blue px-5 text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
