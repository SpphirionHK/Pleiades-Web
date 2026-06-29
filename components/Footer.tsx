import Link from "next/link";
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
    <footer className="bg-industrial-100 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Pleiades home">
            <span className="flex size-11 items-center justify-center bg-navy-800 text-lg font-bold text-white">
              P
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-navy-900">
                Pleiades
              </span>
              <span className="block text-xs text-industrial-500">Optoelectronics HK</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-industrial-500">
            Precision optical instruments, portable collimators and opto-mechatronic systems for
            aerospace, EO/IR, photonics and research applications.
          </p>
          <p className="mt-5 text-sm font-semibold text-navy-900">{company.location}</p>
          <a className="mt-2 block text-sm text-accent-blue hover:text-accent-orange" href={`mailto:${company.email}`}>
            {company.email}
          </a>
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
        <p>Placeholder content should be reviewed before publication.</p>
      </div>
    </footer>
  );
}
