# Accesibilidad y Responsive — Revisión Completa

**Fecha:** 2026-05-26
**Rama:** fix/blog-filter (base) → nueva rama `fix/a11y-responsive`
**WCAG target:** AA (4.5:1 texto normal, 3:1 texto grande/UI)
**Breakpoints:** 375px · 768px · 1024px · 1440px

---

## Ya completado (esta sesión, no repetir)

- Skip link `<a href="#main-content">` en Layout.astro
- `id="main-content"` en `<main>`
- `:focus-visible` global con outline gold
- `.sr-only` utility class
- `<nav aria-label="Navegación principal">`
- `aria-labelledby="age-gate-title"` en AgeGate dialog
- Labels ocultos (`.sr-only`) en formulario Contacto
- `aria-live="polite"` en filtro de blog
- `.nav-right` wrapper: controles idioma/tema + burger siempre pegados en tablet

---

## Fase 1 — Componentes compartidos

### Footer
- Verificar que el elemento raíz es `<footer>` semántico
- Añadir `aria-label="Navegación footer"` a los nav/ul internos
- Comprobar layout a 768px — el grid de 4 columnas pasa a 2 cols a ≤900px; verificar que en 768px no se rompe

### CookieBanner
- Añadir `role="alertdialog"` + `aria-labelledby` apuntando al título del banner
- Al aparecer el banner, mover el foco al primer botón de acción (`useRef` + `useEffect`)
- Verificar que botones tienen texto visible descriptivo ✓

### SplashScreen
- Añadir `aria-hidden="true"` al contenedor mientras está activo
- Añadir `aria-busy="true"` en `<main>` durante la pantalla de carga, eliminarlo al terminar

### Cursor personalizado
- En `@media (hover: none) and (pointer: coarse)`: restaurar `cursor: auto` en `*` para táctiles
- En `@media (prefers-reduced-motion: reduce)`: desactivar `transition` del cursor-ring

### ScrollReveal / Framer Motion
- `opacity: 0` en `initial` no aplica `aria-hidden` → contenido accesible para screen readers ✓ (no cambio necesario)

---

## Fase 2 — Páginas

### Tienda (`/tienda`)
- Cards: cambiar texto de enlace `"Ver vino"` → `aria-label="Ver [nombre vino]"`
- Cambiar `"Comprar"` → `aria-label="Comprar [nombre vino]"`

### VinoDetalle (`/tienda/:id`)
- Imagen principal: `alt` con nombre del vino (no vacío)
- Botones stepper cantidad: `aria-label="Aumentar cantidad"` / `"Reducir cantidad"`
- Añadir `aria-live="polite"` al número de cantidad para anunciar cambios

### Visita / Reservas (`/visita`, `/visita/bodega`, `/visita/vina-bodega`)
- Revisar todos los `<input>` tienen `<label>` asociado (mismo patrón que Contacto)
- Counter de personas: `aria-label` en botones +/- + `aria-live="polite"` en el número

### Carrito (`/carrito`)
- Botón eliminar: `aria-label="Eliminar [nombre vino] del carrito"`
- Stepper cantidad: mismo patrón que VinoDetalle

### Blog (`/blog`)
- Imágenes de posts externos: añadir `alt` descriptivo (actualmente `alt=""`)

### BlogPost (`/blog/:id`)
- Verificar jerarquía h1→h2→h3 sin saltos en contenido de posts
- Imágenes dentro del post: `alt` significativo

### Nosotros (`/nosotros`)
- Fotos de equipo: `alt` con nombre de la persona y cargo
- Verificar jerarquía de headings en secciones

### Home, Bodega, Maridajes
- Verificar jerarquía de headings — no saltar niveles (h1→h3 sin h2)
- Bodega stats: verificar que los números (`<strong>`) tienen contexto legible para screen readers

### Aviso Legal / Términos
- Verificar uso de `<article>` o `<section>` con heading propio
- Estructura semántica correcta

### 404
- `<h1>` claro con mensaje de error
- Enlace descriptivo de vuelta al inicio

### Responsive pendiente
| Página | Problema a verificar |
|---|---|
| Home Hero | Texto y CTA en 375px — padding/tamaño |
| Tienda | Padding cards en 375px |
| Reservas | Layout formulario en 375px y 768px |
| BlogPost | Tipografía y márgenes en 375px |
| VinoDetalle | Botones add-to-cart accesibles en 375px (44px touch target) |

---

## Fase 3 — Contraste de colores

### Fallos identificados

| Variable | Hex | Ratio vs --bg | Estado |
|---|---|---|---|
| `--text-3` | #9a9085 | ~2.9:1 | ❌ Falla AA normal y grande |
| `--gold` como texto | #c8a255 | ~2.2:1 | ❌ Falla AA |

### Fixes

**`--text-3`:** Cambiar #9a9085 → `#706860` (ratio ~4.5:1 sobre --bg)
- Afecta: fechas, metadatos, subtítulos, texto terciario

**`--gold` como texto:** Reemplazar con `--gold-text` (#8a6510) en todos los sitios donde sea texto legible
- Exentos (no cambian): `border-color`, `box-shadow`, separadores decorativos, SVG strokes decorativos

### Pasan (no cambiar)
| Color | Ratio | Nota |
|---|---|---|
| `--text` #1c1510 | ~14:1 | ✓ |
| `--text-2` #5a4f48 | ~6.7:1 | ✓ |
| `--gold-text` #8a6510 | ~4.5:1 | ✓ borderline, mantener |
| Blanco sobre `--bg-dark` | >10:1 | ✓ |
| `--gold` sobre `--bg-dark` | ~3.2:1 | ✓ para UI/large text |

### Dark mode
- Verificar que los overrides de `html[data-theme="dark"]` en App.css mantienen ratios válidos
- En dark mode, `--text-3` sobre fondo oscuro probablemente pasa — verificar y ajustar variable de dark si es necesario

---

## Criterios de éxito

- [ ] 0 errores WCAG AA en axe DevTools en todas las páginas
- [ ] Navegación completa por teclado (Tab / Shift+Tab / Enter / Espacio / Escape) sin trampas de foco
- [ ] Layout sin overflow horizontal en 375px en todas las páginas
- [ ] Todos los textos de UI ≥ 4.5:1 contraste (o 3:1 si son ≥ 18px/24px bold)
- [ ] Screen reader anuncia cambios dinámicos (filtros, cantidad, formularios)
