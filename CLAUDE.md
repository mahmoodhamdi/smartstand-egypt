# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 16** single-page marketing website for Smart Stand Egypt (a display/marketing solutions company). The site uses the App Router with React 19 and Tailwind CSS 4.

### Key Architectural Patterns

**Lazy Loading Strategy**: Below-the-fold sections are dynamically imported in `src/app/page.tsx` using `next/dynamic` with loading skeletons. Only `HeroSection` and `AboutSection` are eagerly loaded for fast LCP.

**Component Organization**:
- `src/components/sections/` - Page sections (Hero, About, Services, etc.) - exported via barrel file
- `src/components/ui/` - Reusable UI components (Button, Card variants, Carousel, etc.) - exported via barrel file
- `src/components/layout/` - Header, Navigation, MobileMenu

**Data Layer**: All static content (services, partners, projects, capabilities, contact info) is centralized in `src/lib/constants.ts`. Components import and render this data.

**Styling System**:
- Tailwind CSS 4 with custom theme in `src/app/globals.css`
- Brand colors: `gold-light` (#FBF7D3), `gold` (#FBDD97), `gold-dark` (#906F1E), `dark-bg` (#0D0D0D)
- Pre-defined CSS classes: `.gold-gradient`, `.gold-text-gradient`, `.dark-section`
- Utility: `cn()` function from `src/lib/utils.ts` (clsx + tailwind-merge)

**Custom Hooks**:
- `useCarousel` - Handles horizontal scroll carousels with center-snap detection, auto-scroll, and touch support
- `useScrollAnimation` - Intersection Observer for scroll-triggered animations

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

### Types

TypeScript interfaces for domain models (Service, Project, Partner, Capability, etc.) are in `src/types/index.ts`.
