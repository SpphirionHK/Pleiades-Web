export const siteConfig = {
  name: "Pleiades Optoelectronics (Hong Kong) Limited",
  shortName: "Pleiades Optoelectronics",
  domain: "https://www.pleiades-opto.com",
  email: "haixin.wang@pleiades-corporation.com",
  location: "HKSTP 19W",
  phone: "852-51917626",
  description:
    "Pleiades Optoelectronics develops portable collimators, precision optical instruments, infrared optical components and custom opto-mechatronic systems for aerospace, EO/IR and research applications.",
  defaultOgImage: "/images/portabeam-hero.jpg"
};

export function absoluteUrl(path = "") {
  return `${siteConfig.domain}${path}`;
}
