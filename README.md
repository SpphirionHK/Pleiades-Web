# Pleiades Optoelectronics Website

Production-ready static corporate website for Pleiades Optoelectronics (Hong Kong) Limited, built with Next.js App Router, TypeScript and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
```

The site is Vercel-compatible and uses static pages, local data files and a mailto contact-form fallback. No database, CMS, user accounts or payment functions are included.

## Folder Structure

```text
app/                 App Router pages, SEO routes and global layout
components/          Reusable navigation, hero, cards, tables and CTA components
data/                Editable product, application, download, news and company content
lib/                 Site config and metadata helpers
messages/            Bilingual-readiness message files
public/images/       Generated placeholder JPG images and replacement guide
public/documents/    Placeholder PDF downloads
public/logo/         Placeholder favicon/logo asset
```

## Content Editing Guide

- Company and contact details: edit `data/company.ts` and `lib/site.ts`.
- Product content and specifications: edit `data/products.ts`.
- Applications: edit `data/applications.ts`.
- Download cards: edit `data/downloads.ts`.
- Development updates/news: edit `data/news.ts`.
- Placeholder/draft/verified status is stored in data files and intentionally not shown publicly.

Avoid publishing unverified specifications, certifications, patents, customer names, awards, factory size, employee count or market leadership claims.

## Image Replacement Guide

Generated placeholder JPG files are stored in `public/images/`. Replace them with final photography or rendered product images using the same filenames, or update the image paths in the relevant data files and pages.

See `public/images/README.md` for recommended orientation, aspect ratio, subject and resolution.

## PDF Replacement Guide

Generated placeholder PDFs are stored in `public/documents/`. Replace them with final reviewed PDFs using the same filenames, or update `data/downloads.ts`.

## Logo Replacement

Replace `public/logo/favicon.svg` and the lettermark in `components/Header.tsx` and `components/Footer.tsx` when final brand assets are ready.

## Contact Form Setup

The contact form in `app/contact/page.tsx` currently uses a static `mailto:` fallback, which works without API keys or backend services.

Recommended production options:

- Formspree: replace the form `action` with the provided Formspree endpoint.
- Web3Forms: replace the form `action` and add the provider's public access key according to their docs.
- Resend/serverless: add a serverless endpoint and keep API keys in Vercel environment variables.

Do not expose private API keys in frontend code.

## Domain and SEO

The placeholder domain is configured in `lib/site.ts`:

```ts
domain: "https://www.pleiades-opto.com"
```

Update this value when the production domain changes. Metadata, canonical URLs, Open Graph image URLs, robots and sitemap use this central setting.

## Vercel Deployment

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import the project in Vercel.
3. Use the default Next.js framework settings.
4. Run command: `npm run build`.
5. Add the production domain in Vercel project settings.
6. Update `lib/site.ts` if the final domain differs from the placeholder.

## Bilingual Readiness

Initial message files exist in:

- `messages/en.json`
- `messages/zh-HK.json`

The language switcher is present and non-breaking. Traditional Chinese content should be added manually in a future localization pass.

## Remaining Placeholders

- Product numerical specifications in `data/products.ts`
- Telephone, office address, WhatsApp and LinkedIn in `data/company.ts`
- Final product photography and lab imagery in `public/images/`
- Final PDF brochures and application notes in `public/documents/`
- Final logo and brand assets in `public/logo/`
