# Pixel Perfect Solutions — Agency Website

A full, responsive marketing site for a digital agency serving local service
businesses (plumbing, HVAC, electrical, roofing, etc.), built with **Next.js
14 (App Router)**, **TypeScript**, and **Tailwind CSS v3**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata/SEO
    page.tsx           # Assembles all sections into the landing page
    globals.css         # Tailwind directives + base styles
  components/
    layout/             # Header (nav + mobile menu), Footer
    sections/            # Hero, Services, Stats, Industries, Process,
                          # CaseStudies, Blog, Testimonials, Contact
    ui/                   # Button, Container, SectionHeading, Reveal,
                          # CountUp, SocialIcons — shared primitives
  lib/
    data.ts              # All site copy/content in one place
    utils.ts              # `cn()` classname helper
```

## Editing content

Nearly all text — services, stats, industries, process steps, case
studies, blog posts, testimonials, footer links, contact form options —
lives in `src/lib/data.ts`. Update that file to change copy without
touching component markup.

## Notes

- **Fonts** are self-hosted via `@fontsource-variable/inter` and
  `@fontsource-variable/plus-jakarta-sans` (no external network calls at
  build or runtime).
- **Icons** are from `lucide-react`; the four social icons in the footer
  are small hand-drawn inline SVGs (`src/components/ui/SocialIcons.tsx`)
  since brand icons aren't part of `lucide-react`.
- The **contact form** validates client-side and shows a success state,
  but does not send data anywhere yet. To wire it up, replace the
  `setTimeout` in `src/components/sections/Contact.tsx`'s `handleSubmit`
  with a call to your API route / form service (Resend, Formspree, etc.).
- Animations use `framer-motion` (`whileInView` reveals, a count-up stat
  animation, and a hover-pausable testimonials marquee). All respect
  `prefers-reduced-motion`.
