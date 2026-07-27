# Amaze Property Management Services (Amaze PMS)

> **Enterprise Integrated Facility Management & Command Platform**  
> A high-performance Next.js 16 application engineered for multi-site operations, zero-downtime MEP engineering, smart security guarding, and statutory compliance tracking pan-India.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-azams--pms.netlify.app-00f2fe?style=for-the-badge&logo=netlify)](https://azams-pms.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Yarn](https://img.shields.io/badge/Yarn-Pkg_Manager-2C8EBB?style=for-the-badge&logo=yarn)](https://yarnpkg.com/)

---

## 🌐 Live Deployment

- **URL:** [https://azams-pms.netlify.app/](https://azams-pms.netlify.app/)
- **Platform:** Netlify Enterprise CI/CD
- **Environment:** Node.js 20.x

---

## 🚀 Key Architectural Features

### 💻 Advanced Next.js & React 19 Architecture

- **Next.js 16 App Router:** Server Components (RSC) for zero-JS core page delivery, combined with high-precision Client Components (`"use client"`) where interactive state is required.
- **Dynamic Routing:** Parametric routes for `/services/[slug]`, `/careers/[slug]`, and `/blog/[slug]` with dynamic metadata generation and 404 fallback handling.
- **SEO & Metadata API:** Fully configured OpenGraph, Twitter Cards, dynamic titles, and semantic structured schema tags across all dynamic routes.

### 🎥 Motion, 3D Canvas & Animation System

- **Three.js & React Three Fiber (R3F):** Interactive floating geometric 3D wireframe mesh nodes rendered dynamically inside hero sections.
- **Smooth GSAP ScrollTrigger:** Hardware-accelerated ScrollTrigger pin animations for step-by-step onboarding workflows, timeline indicators, and statistics counters running at a locked 60fps.
- **Framer Motion Micro-Interactions:** AnimatePresence layout transitions for interactive job board filter tabs, CTA configurators, and mobile menu overlays.

### 🛡️ Code Quality & Structural Blueprint

- **Centralized Data Directory (`/data` & `/constants`):** Single source of truth for services, client sectors, timeline histories, job listings, and blog insights.
- **100% Strict TypeScript:** Complete typings (`types/index.ts`) for all components, props, static data structures, and form handlers.
- **Arrow Function Uniformity:** Every component uses strict ES6 arrow function component expressions (`const ComponentName = () => {}`) for ESLint and Next.js compliance.

---

## 🎨 Design System & Accessibility

- **Tactical Command Palette:** High-contrast dark space background (`slate-950`), laser grid overlays, glowing cyan (`sky-400`) and emerald status badges, and subtle slate elevated cards.
- **Tactical Crosshair Design:** Blueprint HUD aesthetics with corner markers (`+`) and monospace telemetry indicators (`INFO // 01`, `PHASE // 02`).
- **Accessibility (a11y):**
  - Keyboard navigation support with visible focus outlines (`focus-visible:ring-2`).
  - Explicit ARIA roles (`aria-hidden`, `aria-invalid`, `aria-describedby`) for interactive forms and screen readers.
  - Contrast-compliant typography scaling across all screen sizes.

---

## 📂 Project Folder Structure

```text
├── app/                        # Next.js App Router
│   ├── about/                  # About Us Page (/about)
│   ├── blog/                   # Blog Directory Page (/blog)
│   │   └── [slug]/             # Dynamic Blog Article Page (/blog/[slug])
│   ├── careers/                # Careers Directory Page (/careers)
│   │   └── [slug]/             # Dynamic Career Details Page (/careers/[slug])
│   ├── clients/                # Clients & Regional Nodes Page (/clients)
│   ├── contact/                # Contact & Audit Page (/contact)
│   ├── services/               # Main Services Directory (/services)
│   │   └── [slug]/             # Dynamic Service Details Page (/services/[slug])
│   ├── favicon.svg             # Dynamic SVG Favicon Asset
│   ├── layout.tsx              # Root Layout with Font & Metadata Configuration
│   └── page.tsx                # Enterprise Home Page
├── components/                 # Single-Responsibility Modular Components
│   ├── sections/               # Page-Specific Layout Sections
│   │   ├── about/              # Founder Story, Mission/Vision, Timeline
│   │   ├── blog/               # Blog Grid, Blog Cards
│   │   ├── careers/            # Career Hero, Job Listings, Job Cards
│   │   ├── clients/            # Client Sectors, Regional Presence
│   │   ├── home/               # Hero, Capabilities, Process, Why Choose Us
│   │   ├── services/           # Pinned Showcase, Services Matrix
│   │   └── shared/             # PageHero, StatsBand, ContactCTA, TrustBar
│   └── ui/                     # Reusable UI Primitives (Container, Button, Reveal, GlassCard)
├── constants/                  # Static Application Constants & Branding Config
├── data/                       # Centralized Data Storage (Jobs, Services, Blog, Timeline)
├── lib/                        # Helper Utilities (GSAP registration, Motion presets, cn)
├── public/                     # Static Assets & Icons
├── types/                      # TypeScript Global Interfaces & Types
├── tailwind.config.ts          # Tailwind CSS Theme & Plugin Configuration
└── package.json                # Project Dependencies & Scripts
```
