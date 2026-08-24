# Plopsa Website Redesign — Prototype

An interactive prototype for the Plopsa website redesign, built with Astro. It includes a set of prototype pages (homepage, tickets, park info, overnight stays, visit planning, subscriptions) and a built-in "storybook" documenting the design system (colors, typography, spacing, icons, components) that powers them.


---


## 1.0 🛠 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | [Astro](https://astro.build) v7 — static site generation, no client-side JS framework |
| Components | Vanilla `.astro` components (no React/Vue/Svelte) |
| Styling | CSS custom properties (design tokens) |
| Fonts | Metropolis (body) · Ubuntu (headings) — self-hosted webfonts |
| Runtime | Node.js ≥ 22.12.0 |

> The project deliberately avoids a JS framework — components in `src/components/` are the single source of truth, shared by both the storybook and the prototype pages.


---


## 2.0 📁 Project Structure

```
.
├── project-inputs/                    ← Source design assets & tokens
│   ├── design-tokens.css              ← Design token source (colors, spacing, etc.)
│   ├── assets/, icons/, fonts/, webfonts/
│
└── project-outputs/
    └── prototype/                     ← The Astro app (the actual prototype)
        ├── src/
        │   ├── components/            ← Shared components (Button, Icon, Navigation)
        │   ├── layouts/                ← Page layouts
        │   ├── pages/
        │   │   ├── prototype/          ← Redesign pages (het-park, tickets, overnachten, …)
        │   │   └── storybook/          ← Design system reference (colors, typography, components)
        │   └── styles/                ← Global styles & token imports
        ├── public/                    ← Static assets (fonts, icons, favicon)
        ├── astro.config.mjs
        └── package.json
```


---


## 3.0 ⚙️ Setup

**Prerequisite:** Node.js ≥ 22.12.0

```bash
cd project-outputs/prototype
npm install
```


---


## 4.0 ▶️ Running the Prototype

| Command | What it does |
|---------|---------------|
| `npm run dev` | Starts the dev server at `http://localhost:4321` |
| `npm run build` | Builds a production version to `dist/` |
| `npm run preview` | Serves the built `dist/` locally |

Once running, the two main areas to explore are:

- **`/prototype/*`** — the redesigned pages (homepage, `het-park`, `tickets`, `overnachten`, `plan-je-bezoek`, `abonnementen`)
- **`/storybook/*`** — the design system reference (colors, typography, spacing, icons, component demos)


---


## 5.0 🎨 Design System Notes

- Design tokens live in `project-inputs/design-tokens.css` and are imported into `src/styles/`, extended with additional spacing/typography scales.
- Components in `src/components/` (e.g. `Button.astro`, `Icon.astro`, `Navigation.astro`) are shared between the storybook and the prototype pages — changes to a component are reflected everywhere it's used.
- The icon set is bundled as a single SVG sprite, generated via `scripts/build-icon-sprite.mjs` from source icons in `project-inputs/icons`.
