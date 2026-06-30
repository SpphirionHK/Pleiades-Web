import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "PortaBeam", href: "/products/portabeam" },
      { label: "Collimators", href: "/products/collimators" },
      { label: "Optical Components", href: "/products/optical-components" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Applications", href: "/applications" },
      { label: "Technology", href: "/technology" },
      { label: "About Us", href: "/about" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Downloads", href: "/downloads" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-white px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <Link href="/" className="flex items-center" aria-label="Pleiades home">
            <span className="relative block h-16 w-60 max-w-full">
              <Image
                src="/logo/company-logo-black.png"
                alt="Pleiades Optoelectronics"
                fill
                sizes="240px"
                className="object-contain object-left"
              />
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-industrial-500">
            Precision optical instruments, portable collimators and opto-mechatronic systems for
            aerospace, EO/IR, photonics and research applications.
          </p>
          <p className="mt-5 text-sm font-semibold text-navy-900">{company.officeAddress}</p>
          <a className="mt-2 block text-sm text-accent-blue hover:text-accent-orange" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <p className="mt-2 text-sm text-industrial-500">{company.phone}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-navy-900">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm text-industrial-500 hover:text-accent-orange" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-industrial-200 pt-6 text-xs text-industrial-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Pleiades Optoelectronics (Hong Kong) Limited.</p>
        <p>Precision optical instruments and opto-mechatronic systems.</p>
      </div>
    </footer>
  );
}
