# Josh Yeung's Portfolio Website

Personal portfolio website showcasing my projects, blog posts, and professional experience.

Live at: https://yeungjosh.github.io/

## Tech Stack Summary

### Core Framework
- **Next.js 14.2.3** with App Router (static export mode)
- **React 18** with TypeScript
- **Static Site Generation** - deploys to GitHub Pages

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI primitives
- **Custom theme system** with dark mode via `next-themes`
- **Color palette**: Deep navy (#090040), purple (#471396), violet (#B13BFF), yellow (#FFCC00)

### Components & Libraries
- **Radix UI** - Accessible component primitives (Dialog, Slot, Icons)
- **Lucide React** - Icon system
- **Framer Motion** - Animations
- **class-variance-authority** + **clsx** + **tailwind-merge** - Class name utilities

### Interactive Features
- **Mapbox GL** (v3.16.0) - Interactive maps
- **Three.js** (v0.180.0) + **Vanta.js** (v0.5.24) - 3D background effects
- **TravelGlobe** component with location data

### Development & Deployment
- **TypeScript 5** - Type safety
- **ESLint** - Code linting
- **GitHub Actions** - Automated deployment to GitHub Pages
- **PostCSS** - CSS processing

### Architecture Notes
- All main content lives in `website/src/components/component.tsx`
- Blog posts are individual Next.js routes at `src/app/blog/[slug]/page.tsx`
- Client-side rendering with `'use client'` directives
- No server-side features (API routes, ISR, Server Actions) due to static export

## Development

```bash
cd website
npm install
npm run dev
```

Visit http://localhost:3000 to see the site locally.

## Deployment

The site deploys automatically via GitHub Actions on every push to `master`.