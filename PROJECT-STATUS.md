# 📋 Project Status

> This file is maintained by Claude throughout the project.  
> It serves as a living memory of what has been done, decided, and what comes next.


---


## 1.0 📌 Project Overview

Plopsa website redesign — interactive prototype built with Astro, featuring a built-in design system ("storybook") and prototype pages that share the same components.


---


## 2.0 ✅ Completed Work

| Date | Task |
|------|------|
| 2026-08-22 | Set up Astro project with design tokens from Figma V3 design system |
| 2026-08-22 | Created storybook-style design system with token pages (colors, typography, spacing) |
| 2026-08-22 | Built shared Button and Input components with variants/states |
| 2026-08-22 | Created storybook component documentation pages with live demos + props tables |
| 2026-08-22 | Created prototype section with sample homepage using shared components |
| 2026-08-22 | Built Navigation component from Figma design with 5 nav pages |
| 2026-08-22 | Built SVG icon sprite system (133 icons from project-inputs/icons) |
| 2026-08-22 | Styled hero sections (beige-200 bg, body text, primary-purple-300 H1) |
| 2026-08-22 | Integrated custom webfonts (Metropolis for body, Ubuntu for headings) |
| 2026-08-22 | Replaced Button component with Primary Button based on Figma design (node 242:1046) |


---


## 3.0 🎯 Key Decisions

- **No framework** — vanilla Astro components + CSS custom properties, no React/Vue/Svelte
- **Shared components** — `src/components/` is the single source of truth for both storybook and prototype
- **CSS custom properties** as token system — imported from `project-inputs/design-tokens.css`, extended with spacing/typography scale
- **Fonts** — Metropolis (body, weights 400/600/700) and Ubuntu (headings, weights 400/700) loaded via @font-face with font-display: swap
- **Button/Primary** — pill-shaped (48px radius), 5 color variants (purple/red/burgundy/blue/white), 2 sizes (lg 56px uppercase, sm 48px normal), radial gradient backgrounds, icon slots


---


## 4.0 ➡️ Next Steps

1. Add more components (cards, modals, footer, etc.) as needed for prototype pages
2. Build out prototype pages (park pages, ticket flow, etc.)
3. Add secondary/ghost button variants as separate components when needed
4. Add more design token categories if needed (breakpoints, z-index, etc.)
