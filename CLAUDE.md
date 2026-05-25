# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
npm run dev       # Start Astro dev server (http://localhost:4321)
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
```

## Architecture Overview

**El Hato y el Garabato** is an Astro SSG site backed by React components. It's a course capstone project built for a family winery, migrated from a React+Vite SPA.

### Core Stack
- **Astro 6** — Static site generator; handles routing, builds, and HTML generation
- **React 18.3** — UI components rendered client-side via `client:only="react"`
- **Framer Motion** — Animations and page transitions
- **Lenis** — Smooth scroll
- **Sanity CMS** — Blog posts and vino data fetched via `@sanity/client`
- **Nanostores** — Shared client state (cart, UI) between React islands
- **CSS** — Custom CSS with CSS variables (no Tailwind, no CSS Modules)
- **Google Fonts** — Cormorant Garamond (serif), Cinzel (caps), Jost (sans)

### Key Architectural Patterns

#### 1. Astro Pages + React Islands
Each route is an `.astro` file in `src/pages/`. The page imports a `*Client.jsx` React component and mounts it with `client:only="react"`. This means all React runs client-side only — no SSR hydration.

```astro
---
// src/pages/bodega.astro
import Layout from '../layouts/Layout.astro'
import BodegaClient from '../components/pages/BodegaClient.jsx'
---
<Layout title="...">
  <BodegaClient client:only="react" />
</Layout>
```

#### 2. Client Component Wrappers (`src/components/pages/`)
Each `*Client.jsx` provides the React context tree (Language, Cart, Section) and mounts the page content. Most delegate to a `src/react-pages/` component; `HomeClient` composes sections directly.

```jsx
// src/components/pages/BodegaClient.jsx
export default function BodegaClient() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <BodegaYVinas />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
```

#### 3. Global Client Components (`AstroGlobalWrapper`)
`src/components/layout/AstroGlobalWrapper.jsx` is mounted once in `src/layouts/Layout.astro` with `client:only="react"`. It manages: Lenis smooth scroll, custom cursor, splash screen, age gate, scroll progress bar, and back-to-top button.

#### 4. Data Separation
Content is strictly separated from components. All data lives in `src/data/`:
- `vinos.js` — Wine catalog with `featured` flag (controls which appear on Home)
- `bodega.js`, `visitas.js`, `equipo.js` — Page-specific content
- `navigation.js` — Nav links and external URLs (Instagram, Facebook, etc.)
- `images.js` — Central image path management
- `medios.js`, `press.js` — Winery branding/press references
- `blog.js`, `maridajes.js`, `translations.js` — Blog, food pairings, i18n strings

Never hardcode content in components. Always import from `src/data/`.

#### 5. Sanity CMS
Blog posts and vino data can come from Sanity. Client is in `src/lib/sanityClient.js`, queries in `src/lib/queries.js`, and the `useSanityFetch` hook in `src/hooks/` handles fetching with loading/error state.

#### 6. Shared State (Nanostores)
`src/stores/cart.js` and `src/stores/ui.js` use nanostores for state shared between React islands (e.g., cart count in Navbar while cart logic lives in another island).

### Directory Structure

```
src/
├── layouts/
│   └── Layout.astro               # Astro layout: head, global wrappers, slot
├── pages/                         # One .astro file per route
│   ├── index.astro
│   ├── tienda/[id].astro          # Dynamic route (vino detail)
│   ├── blog/[id].astro            # Dynamic route (blog post)
│   └── 404.astro
├── components/
│   ├── layout/                    # Navbar, Footer, Cursor, AstroGlobalWrapper, etc.
│   ├── pages/                     # *Client.jsx wrappers (one per route)
│   ├── sections/                  # Reusable page sections (Hero, VinosGrid, etc.)
│   └── ui/                        # Button, ArrowRight, ScrollReveal, etc.
├── react-pages/                   # React page components (used by *Client.jsx wrappers)
├── context/                       # LanguageContext, CartContext, SectionContext
├── stores/                        # Nanostores (cart.js, ui.js)
├── hooks/                         # useCursor, useLanguage, useSanityFetch, etc.
├── lib/                           # sanityClient.js, queries.js
├── data/                          # All content — never hardcode in components
├── animations/                    # Framer Motion variants (variants.js)
├── utils/                         # url.js helpers
├── App.css                        # Global styles and CSS variables
└── assets/images/                 # Local images

astro.config.mjs                   # Astro config (base URL, React integration)
vercel.json                        # Vercel deployment config
```

## Routing & Pages

All routes are Astro pages in `src/pages/`. Each mounts a React `*Client.jsx` island.

| Route | Astro file | Client component |
|---|---|---|
| `/` | `index.astro` | `HomeClient.jsx` |
| `/nosotros` | `nosotros.astro` | `NosotrosClient.jsx` |
| `/bodega` | `bodega.astro` | `BodegaClient.jsx` |
| `/tienda` | `tienda.astro` | `TiendaClient.jsx` |
| `/tienda/:id` | `tienda/[id].astro` | `VinoDetalleClient.jsx` |
| `/visita` | `visita.astro` | `VisitaClient.jsx` |
| `/contacto` | `contacto.astro` | `ContactoClient.jsx` |
| `/blog` | `blog.astro` | `BlogClient.jsx` |
| `/blog/:id` | `blog/[id].astro` | `BlogPostClient.jsx` |
| `/carrito` | `carrito.astro` | `CarritoClient.jsx` |
| `/maridajes` | `maridajes.astro` | `MaridajesClient.jsx` |
| `/aviso-legal` | `aviso-legal.astro` | `AvisoLegalClient.jsx` |
| `/terminos` | `terminos.astro` | `TerminosClient.jsx` |
| `*` | `404.astro` | — |

## CSS Architecture

**Global variables** in `src/App.css`:
```css
:root {
  --bg:        #faf8f3;
  --bg-alt:    #f0e8d8;
  --bg-dark:   #2d1a14;
  --text:      #1c1510;
  --text-2:    #5a4f48;
  --text-3:    #9a9085;
  --gold:      #c8a255;
  --gold-text: #8a6510;
  --border:    rgba(100, 70, 40, 0.14);
  --ff-serif:  'Cormorant Garamond', Georgia, serif;
  --ff-caps:   'Cinzel', serif;
  --ff-sans:   'Jost', sans-serif;
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
}
```

All styles are in `src/App.css` (imported in `Layout.astro`). Use CSS variables for colors and fonts. No Tailwind or CSS Modules.

## Deployment

**Production build:**
```bash
npm run build
```

- **Vercel** — Uses `vercel.json`. Primary deployment target.
- **GitHub Pages** — `astro.config.mjs` sets `base` to `/El-Hato-y-el-Garabato` when `GITHUB_ACTIONS=true`.

## Important Notes

### Images
Images live in `src/assets/images/`. All paths are centralized in `src/data/images.js` — never hardcode image paths in components.

### Tienda (Shop)
`/tienda` is a static catalog. Individual vino pages at `/tienda/:id` are statically generated. Purchases link out to WooCommerce (external URLs in vino data objects).

### Contact Form
`ContactoSection.jsx` uses a Google Maps iframe and a contact form. Formspree integration is an option (see `.env.example`).

### i18n
Language switching is handled by `LanguageContext` + `src/data/translations.js`. The `useLanguage()` hook provides `t('key')` throughout React components.

## Git & Versioning

Course capstone project (Técnico Superior en Desarrollo de Aplicaciones Web). Key files:
- `README.md` — Project overview
- `.env.example` — Template for environment variables

## Style Guide

- **Component naming:** PascalCase (`VinosGrid.jsx`)
- **Data files:** UPPER_CASE exports (`VINOS`, `NAV_LINKS`)
- **CSS classes:** kebab-case (`.vino-card`, `.reveal-left`)
- **Files:** PascalCase for components, lowercase for hooks/utils/data
- **Comments:** Spanish in data files, English/Spanish in code as context requires
- **No hardcoding:** All content goes to `src/data/`
