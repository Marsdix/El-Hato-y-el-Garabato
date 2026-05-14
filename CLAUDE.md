# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally (port 4173)
```

## Architecture Overview

**El Hato y el Garabato** is a React + Vite SPA (Single Page Application) that replaces the original WordPress site. It's a course capstone project built for a family winery.

### Core Stack
- **React 18.3** — UI framework with hooks
- **Vite 5.4** — Bundler with hot module replacement (HMR)
- **React Router 6.27** — Client-side routing with lazy-loaded pages
- **CSS** — Custom CSS with CSS variables (no Tailwind, no CSS Modules)
- **Google Fonts** — Cormorant Garamond (serif), Cinzel (caps), Jost (sans)

### Key Architectural Patterns

#### 1. Lazy Loading & Code Splitting
Pages are imported with `lazy()` and wrapped in `<Suspense>` in `src/App.jsx`. This creates automatic code chunks per page and improves initial load time. All pages are under `src/pages/`.

```jsx
const Home = lazy(() => import('./pages/Home'))
const Tienda = lazy(() => import('./pages/Tienda'))
// etc.
```

#### 2. Data Separation
Content is strictly separated from components. All data lives in `src/data/`:
- `vinos.js` — 7 wines with `featured` flag (controls which 3 appear on Home)
- `bodega.js`, `visitas.js`, `equipo.js` — Page-specific content
- `navigation.js` — Nav links and external URLs (Instagram, Facebook, etc.)
- `images.js` — Central image path management
- `medios.js`, `press.js` — Winery branding/press references

Never hardcode content in components. Always import from `/data`.

#### 3. Scroll Reveal Animations
The `useScrollReveal()` hook uses `IntersectionObserver` to trigger CSS animations when elements enter the viewport. Applied to sections on every page.

```jsx
export default function Home() {
  useScrollReveal()  // Activates .reveal, .reveal-left, .reveal-right classes
  return (
    <section>
      <div className="reveal">Content animates on scroll</div>
    </section>
  )
}
```

CSS classes:
- `.reveal` — fade in from center
- `.reveal-left` — slide in from left
- `.reveal-right` — slide in from right
- `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` — stagger animations

#### 4. Custom Cursor
The `useCursor()` hook (used once in `Layout.jsx`'s `<Cursor />`) creates a custom cursor with smooth trailing. It scales up on hover over interactive elements (`a`, `button`, `.vino-card`, `.visita-option`).

#### 5. Layout Wrapper
`Layout.jsx` wraps all routes and manages:
- Custom cursor (`<Cursor />`)
- Navigation bar (`<Navbar />`)
- Page content (`<Outlet />`)
- Footer (`<Footer />`)
- Auto-scroll to top on route change

### Directory Structure (Relevant Paths)

```
src/
├── App.jsx                    # Routes & lazy page imports
├── App.css                    # Global styles, CSS variables, button styles
├── main.jsx                   # React 18 entry point
├── components/
│   ├── layout/                # Navbar, Footer, Cursor, Layout, PageHero
│   ├── sections/              # Reusable page sections (Hero, VinosGrid, etc.)
│   └── ui/                    # Basic components (Button with variants, ArrowRight)
├── data/                      # All content; never hardcode in components
├── hooks/                     # useScrollReveal, useCursor
├── pages/                     # One page per route (lazy-loaded)
└── assets/images/             # Local images (currently sparse; many from WordPress)

vite.config.js                 # Vite config with vendor chunk splitting
vercel.json                    # Vercel deployment config
public/_redirects              # SPA routing for Netlify/Cloudflare
```

## Routing & Pages

React Router config is in `App.jsx`. All pages use the `Layout` wrapper.

| Route | File | Status |
|---|---|---|
| `/` | `Home.jsx` | Complete (hero, grid, sections) |
| `/nosotros` | `SobreNosotros.jsx` | Complete |
| `/bodega` | `BodegaYVinas.jsx` | Complete |
| `/tienda` | `Tienda.jsx` | Catalog only; purchases link to WooCommerce |
| `/visita` | `VisitaBodega.jsx` | Complete (experiences + map) |
| `/contacto` | `Contacto.jsx` | Form + embedded Google Maps |
| `/aviso-legal` | `AvisoLegal.jsx` | Static |
| `/terminos` | `TerminosCondiciones.jsx` | Static |
| `*` | `NotFound.jsx` | 404 fallback |

## Component Patterns

### Section Components (`src/components/sections/`)
Sections are self-contained chunks of a page. Each section:
- Has a className of `section` (for common spacing)
- Often has an id for analytics or hash navigation
- Is composed into pages (not routes)

Example:
```jsx
// src/components/sections/VinosGrid.jsx
export default function VinosGrid() {
  return (
    <section className="section vinos-section" id="vinos">
      <h2>Nuestros vinos</h2>
      {/* content */}
    </section>
  )
}

// Used in Home.jsx
import VinosGrid from '../components/sections/VinosGrid'
export default function Home() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <VinosGrid />
      {/* more sections */}
    </>
  )
}
```

### UI Components (`src/components/ui/`)
- `Button.jsx` exports `BtnPrimary` and `BtnGhost` — flexible components that work with `to` (React Router link), `href` (external), or `onClick` callback
- `ArrowRight.jsx` — small inline icon component

## CSS Architecture

**Global variables** in `src/App.css`:
```css
:root {
  --bg:        #faf8f3;
  --bg-alt:    #f0e8d8;
  --bg-dark:   #2d1a14;      /* quote section only */
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

All styles are in a single `src/App.css` file organized into sections. Use CSS variables for colors and fonts. Avoid inline styles except for dynamic animations. No Tailwind or CSS Modules.

## Deployment

**Production build:**
```bash
npm run build
```

Configured for three platforms:
1. **Vercel** — Uses `vercel.json` for SPA routing (auto-configured)
2. **Netlify / Cloudflare Pages** — Uses `public/_redirects` for SPA routing
3. Any static host supporting SPAs

Vite's `vite.config.js` splits vendor code (`react`, `react-dom`, `react-router-dom`) into a separate chunk for better browser caching.

## Important Notes

### Images
Currently, product/media images are served from WordPress CDN (`wp-content/uploads/`). The plan is to migrate them to `src/assets/images/` — see `src/data/images.js` which centralizes all image paths.

### Tienda (Shop)
The shop page (`/tienda`) is a static React catalog. Purchases redirect to WooCommerce (external links in vino objects). Full e-commerce integration would require a backend.

### Contact Form
Currently uses Google Maps iframe (no API key) and a contact form. See `ContactoSection.jsx` for Formspree integration option (requires backend or third-party service).

### Browser Compatibility
Targets modern browsers supporting ES2020. IntersectionObserver (scroll reveals) and requestAnimationFrame (cursor tracking) are used.

## Git & Versioning

This is a course capstone project (Técnico Superior en Desarrollo de Aplicaciones Web). Code follows React and Vite best practices. Key files:
- `README.md` — Project overview and deployment instructions
- `.env.example` — Template for environment variables (contact form service)

## Style Guide Summary

- **Component naming:** PascalCase (e.g., `VinosGrid.jsx`)
- **Data files:** camelCase exports (e.g., `VINOS`, `NAV_LINKS`)
- **CSS classes:** kebab-case (e.g., `.vino-card`, `.reveal-left`)
- **Files:** PascalCase for components, lowercase for hooks/utils
- **Comments:** Spanish in data files, English/Spanish in code as context requires
- **No hardcoding:** All content goes to `src/data/`

