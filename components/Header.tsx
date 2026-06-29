"use client";

import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(216,222,227,0.9)]">
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-5">
            <a className="inline-flex items-center gap-2 hover:text-accent-orange" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={14} /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2 text-white/78">
              <MapPin aria-hidden="true" size={14} /> Hong Kong
            </span>
            <span className="inline-flex items-center gap-2 text-white/60">
              <Phone aria-hidden="true" size={14} /> {siteConfig.phone}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Pleiades home">
          <span className="flex size-11 items-center justify-center bg-navy-800 text-lg font-bold text-white">
            P
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.16em] text-navy-900">
              Pleiades
            </span>
            <span className="block text-xs text-industrial-500">Optoelectronics HK</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.hasMega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex min-h-20 items-center gap-1 px-4 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "text-navy-900 shadow-[inset_0_-3px_0_#F28C28]"
                      : "text-industrial-900 hover:text-accent-orange"
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
                className={`flex min-h-20 items-center px-4 text-sm font-semibold transition ${
                  isActive(item.href)
                    ? "text-navy-900 shadow-[inset_0_-3px_0_#F28C28]"
                    : "text-industrial-900 hover:text-accent-orange"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center bg-accent-orange px-5 text-sm font-bold text-navy-900 transition hover:bg-[#df7b16]"
          >
            Request a Quote
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
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center bg-accent-orange px-5 text-sm font-bold text-navy-900"
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
