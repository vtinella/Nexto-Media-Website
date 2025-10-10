# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nexto Media Website - A digital marketing agency website built with Next.js 15, TypeScript, and Tailwind CSS. This is a marketing site with a single-page application structure showcasing services, case studies, and client information.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Page Structure
The site uses Next.js App Router with a single-page homepage (`app/page.tsx`) that assembles all sections in order:
1. Navigation (fixed header)
2. Hero
3. ClientLogos
4. Approach
5. CaseStudies
6. Services
7. WhyChooseUs
8. CTA (Call-to-Action)
9. Footer

### Component Organization
All UI components live in `/components` directory. Each section is a separate component that can be independently modified. The main page (`app/page.tsx`) imports and arranges these components in the desired order.

### Styling Approach
- Uses Tailwind CSS utility classes exclusively
- Color scheme: Blue (#3B82F6) as primary, Purple (#9333EA) as accent, Gray scale for neutrals
- Gradient backgrounds: `from-blue-X to-purple-X` pattern is used throughout
- Responsive design: Mobile-first with `md:` and `lg:` breakpoints
- Consistent spacing: Sections use `py-20` for vertical padding, max-width container is `max-w-7xl`

### Client-Side Components
Components that use React hooks (useState, etc.) are marked with `'use client'` directive:
- `Navigation.tsx` - Has mobile menu toggle state
- `ClientLogos.tsx` - Prepared for future animation/slider functionality

### Path Aliases
TypeScript path aliases configured with `@/*` mapping to root directory. All component imports use this pattern: `import Component from '@/components/Component'`

## Key Customization Points

When updating content or branding:
- **Contact Information**: Update in `components/CTA.tsx` and `components/Footer.tsx`
- **Client Logos**: Replace placeholder text in `components/ClientLogos.tsx` with actual logo images
- **Project Showcases**: Update case study data in `components/CaseStudies.tsx`
- **Services**: Modify service offerings in `components/Services.tsx`
- **Brand Colors**: Adjust Tailwind theme in `tailwind.config.ts`
- **Metadata**: Update SEO information in `app/layout.tsx`

## Design Patterns

- All sections follow a consistent structure: wrapper div with max-width container and padding
- Buttons use rounded-full with consistent padding (px-8 py-4)
- Cards have hover effects with `transform hover:scale-105` or `hover:-translate-y-1`
- Text hierarchy: h2 uses `text-4xl md:text-5xl`, h3 uses `text-2xl`, body text uses `text-lg` or `text-xl`
