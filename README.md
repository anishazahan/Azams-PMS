# Amaze PMS — Redesign

A premium, animation-driven redesign of [amazepms.com](https://www.amazepms.com) — the corporate site for
Amaze Property Management Solutions Pvt Ltd — built as a frontend assignment for Dacitos Technologies.

The visual direction takes cues from Stripe, Linear, Vercel, and Framer: a dark, high-contrast theme,
large typography, glassmorphic cards, generous whitespace, and scroll-driven motion — applied to a real
facility-management business (security, housekeeping, MEP, landscaping, pest control, help desk,
parking, and utility management) rather than a generic SaaS product.

Business content (services, founder story, stats, contact details) is sourced from the live site to
keep the redesign's substance accurate; the visual system, copy structure, and all code are original.

## Tech Stack

- **Next.js 16** (App Router, Turbopack, React 19.2)
- **TypeScript** (strict mode)
- **Tailwind CSS v3**
- **Framer Motion** — scroll reveals, hover/micro-interactions, page-level transitions
- **GSAP + ScrollTrigger** — pinned horizontal scroll showcase, scroll-linked parallax
- **Lenis** — inertia smooth scrolling, synced to GSAP's ticker
- **Lucide React** — icon set

No component libraries (shadcn, MUI, etc.) and no photography — all visuals are built from CSS
gradients, SVG, and Lucide icons, which keeps the bundle light and the look original.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
yarn build   # production build (Turbopack)
yarn start   # serve the production build
yarn lint    # ESLint (flat config)
```

Requires Node.js 20.9+ (Next.js 16 minimum).

## Project Structure

```
app/                       Routes (App Router)
  page.tsx                 Home
  about/                   About
  services/                Services list
  services/[slug]/         Service detail (dynamic route, generateStaticParams)
  contact/                 Contact (client-validated form)
  careers/                 Careers (filterable job listings)
  blog/, blog/[slug]/      Blog list + detail (dynamic route)
  testimonials/, clients/  Supporting pages
  sitemap.ts, robots.ts    SEO
  opengraph-image.tsx      Generated OG card
  not-found.tsx            Branded 404

components/
  ui/                      Reusable primitives (Button, Reveal, TextReveal, GlassCard, ...)
  layout/                  Header, MobileMenu, Footer
  providers/               Lenis + GSAP smooth-scroll provider
  sections/
    home/, about/, services/, contact/, careers/, blog/, clients/
    shared/                Cross-page sections (PageHero, CTASection, StatsBand, ProcessSteps, ...)

data/                      Content as data (services, testimonials, jobs, blog posts, stats, ...)
types/                     Shared TypeScript interfaces
constants/                 Site-wide config (nav, contact info, footer links)
lib/                       cn() helper, Framer Motion variants
hooks/                     useCounter (animated stat counters)
```

Every service's content lives in `data/services.ts` and is rendered through a single
`app/services/[slug]/page.tsx` template — there are no per-service page files to duplicate.

## Animation Approach

- **Framer Motion** handles anything tied to component state or viewport entry: fade/slide reveals
  (`components/ui/Reveal.tsx`), the word-by-word headline reveal (`TextReveal.tsx`), hover
  micro-interactions, and the AnimatePresence-driven mobile menu and job-filter transitions.
- **GSAP + ScrollTrigger** handles scroll-scrubbed and pinned animation: the home page's service
  showcase pins the section and translates the card track horizontally as you scroll
  (`components/sections/home/PinnedShowcase.tsx`), and the hero's background orbs parallax against
  scroll position. Both fall back to a plain horizontally-scrollable/static layout under
  `prefers-reduced-motion`.
- **Lenis** provides the inertia/smooth-scroll feel, synced to GSAP's ticker so ScrollTrigger stays in
  step with the smoothed scroll position. Disabled entirely under `prefers-reduced-motion`.

## Accessibility & Performance Notes

- Respects `prefers-reduced-motion` at the smooth-scroll, GSAP, and CSS animation layers.
- Skip-to-content link, semantic landmarks, visible focus states, and labelled form errors
  (`aria-invalid` / `aria-describedby`) on the contact form.
- No client-side data fetching on any page — all content is statically known at build time, so every
  route is fully static/prerendered (`yarn build` output shows `○ Static` / `● SSG` for all routes).
- Fonts loaded via `next/font` (Geist), self-hosted with no layout shift.

## Design Choices Worth Noting

- **No stock photography.** Property-management sites lean heavily on generic stock photos; instead,
  the design uses gradient meshes, grid overlays, and glass cards to hit "premium" without relying on
  imagery that isn't actually the client's.
- **Client names on `/clients` are sector categories**, not fabricated company names — real client
  names weren't available from the source site, and inventing specific named "clients" would be
  misleading in a real business context.
- **Contact form is UI-complete but front-end only**: client-side validation and a simulated submit
  state, no backend wired up (would need an email/API provider and credentials the assignment didn't
  ask for).

## Deployment

Deploys as-is to Vercel (`vercel deploy`) or Netlify — no environment variables or external services
required.
