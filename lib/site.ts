export const siteConfig = {
  name: "Pleiades Optoelectronics (Hong Kong) Limited",
  shortName: "Pleiades Optoelectronics",
  domain: "https://www.pleiades-opto.com",
  email: "haixin.wang.hk@gmail.com",
  location: "Hong Kong",
  phone: "+852 XXXX XXXX",
  description:
    "Pleiades Optoelectronics develops portable collimators, precision optical instruments, infrared optical components and custom opto-mechatronic systems for aerospace, EO/IR and research applications.",
  defaultOgImage: "/images/portabeam-hero.jpg"
};

export function absoluteUrl(path = "") {
  return `${siteConfig.domain}${path}`;
}
