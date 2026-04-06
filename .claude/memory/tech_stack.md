---
name: Tech Stack
description: Dependencies, build tools, and configuration for the project
type: reference
---

## Core Dependencies
- **Framework**: Next.js 16.2.2
- **React**: 19.2.4, react-dom 19.2.4
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4 (with @tailwindcss/postcss 4)
- **CSS**: tailwind-merge 3.5.0, tw-animate-css 1.4.0

## Animation & Motion
- **Framer Motion**: 12.38.0 (React animation library)
- **GSAP**: 3.14.2 (GreenSock animation platform)
- **Lenis**: 1.3.21 (smooth scrolling library)

## UI & Components
- **Base UI**: @base-ui/react 1.3.0 (unstyled accessible components)
- **shadcn**: 4.1.2 (copy-paste component library)
- **Embla Carousel**: 8.6.0 (carousel/slider component)
- **Lucide Icons**: 1.7.0 (icon library)
- **Class Variance**: 0.7.1 (utility for component styling variants)
- **clsx**: 2.1.1 (className utility)

## Dev Tools
- **ESLint**: 9.x with eslint-config-next 16.2.2
- **TypeScript**: 5.x
- **PostCSS**: 4 (via @tailwindcss/postcss)
- **Node Types**: 20.x
- **React Types**: 19.x

## Build & Dev Commands
```
npm run dev     # Start dev server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Configuration Files
- `next.config.ts` — Remote image patterns (unsplash.com, pixabay.com)
- `tsconfig.json` — Strict mode, @ path alias
- `eslint.config.mjs` — Next.js vitals + TypeScript config
- `postcss.config.mjs` — Tailwind PostCSS setup
- `components.json` — Component library metadata
