import { ArrowRight } from "lucide-react";
import Link from "next/link";

const productGroups = [
  {
    title: "PortaBeam Portable Collimators",
    href: "/products/portabeam",
    items: [
      "Cassegrain Portable Collimators",
      "Off-Axis Reflective Collimators",
      "Double-Reflective Collimators"
    ]
  },
  {
    title: "Optical Testing Systems",
    href: "/products/collimators",
    items: ["Autocollimation Systems", "Optical Alignment Systems", "Wavefront Testing Solutions"]
  },
  {
    title: "Laser and Optical Components",
    href: "/products/optical-components",
    items: [
      "Laser Beam Expanders",
      "High-Precision Optical Windows",
      "Wedge Prism Assemblies",
      "Pellicle and Attenuation Components"
    ]
  },
  {
    title: "Custom Engineering",
    href: "/technology",
    items: ["Optical Design", "Opto-Mechanical Design", "System Integration", "Custom Testing Fixtures"]
  }
];

export function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-40 hidden w-[920px] -translate-x-1/2 border border-industrial-200 bg-white p-6 shadow-soft group-hover:block group-focus-within:block">
      <div className="grid grid-cols-4 gap-5">
        {productGroups.map((group) => (
          <div key={group.title}>
            <Link
              href={group.href}
              className="group/link flex min-h-12 items-start justify-between gap-2 text-sm font-semibold text-navy-900 hover:text-accent-orange"
            >
              {group.title}
              <ArrowRight aria-hidden="true" size={15} className="mt-0.5 shrink-0" />
            </Link>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-5 text-industrial-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
