# CodingCurves — Marketing Website

[CodingCurves](https://www.codingcurves.com) is a product studio for ambitious
teams. We design, build, and scale web, mobile, and AI-powered products for
startups and growing engineering teams — covering web & mobile development,
product design & branding, AI & data pipelines, product building, DevOps &
infrastructure, and product scaling.

This repo is the company's marketing site: a single-page, lead-generation
site built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS v3**. There's no login or account system — the one goal of
the site is to get a visitor to the contact form at the bottom and turn
them into a lead.

## Prerequisites

- **Node.js 18.17 or later** (required by Next.js 14)
- npm (ships with Node)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server
hot-reloads on save.

## Production build

```bash
npm run build
npm run start
```

`npm run build` also type-checks the project; run `npx tsc --noEmit` on
its own if you just want the type check without a full build.

## Other scripts

```bash
npm run lint    # ESLint (next/core-web-vitals rules)
```

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata
    page.tsx           # Assembles all sections into the one-page site
    globals.css         # Tailwind directives + base styles
    icon.tsx             # Generated favicon
    apple-icon.tsx        # Generated Apple touch icon
  components/
    layout/             # Header (nav + mobile menu), Footer
    sections/            # Hero, TrustedBy, Services, Stats, Industries,
                          # Process, Compare, CaseStudies, Blog,
                          # Testimonials, Engagement, Contact
    ui/                   # Button, Container, SectionHeading, Reveal,
                          # CountUp, SocialIcons — shared primitives
  lib/
    data.ts              # All site copy/content in one place
    utils.ts              # `cn()` classname helper
```

## Editing content

Nearly all text — services, stats, industries, process steps, comparison
table, case studies, blog posts, testimonials, engagement models, footer
links, and contact form options — lives in `src/lib/data.ts`. Update that
file to change copy without touching component markup.

## Notes

- **Fonts** are self-hosted via `@fontsource-variable/inter` (body) and
  `@fontsource-variable/fraunces` (serif display headings) — no external
  network calls at build or runtime.
- **Icons** are from `lucide-react`; the four social icons in the footer
  are small hand-drawn inline SVGs (`src/components/ui/SocialIcons.tsx`)
  since brand icons aren't part of `lucide-react`.
- The **contact form** (`src/components/sections/Contact.tsx`) is the
  site's only lead-capture mechanism. It validates client-side and shows
  a success state, but doesn't send data anywhere yet — replace the
  `setTimeout` in its `handleSubmit` with a call to your API route or a
  form service (Resend, Formspree, etc.) to wire it up for real.
- Animations use `framer-motion` (`whileInView` reveals, a count-up stat
  animation, and hover-pausable marquees for the client logos and
  testimonials). All respect `prefers-reduced-motion`.
