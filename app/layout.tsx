import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Pleiades Optoelectronics | Precision Optical Instruments and Portable Collimators",
    template: "%s | Pleiades Optoelectronics"
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hong Kong",
      addressCountry: "HK"
    }
  };

  return (
    <html lang="en-HK">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
