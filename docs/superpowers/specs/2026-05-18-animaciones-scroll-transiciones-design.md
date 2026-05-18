# Spec: Sistema de Animaciones — Scroll, Transiciones y Splash Screen

**Proyecto:** El Hato y el Garabato  
**Fecha:** 2026-05-18  
**Stack:** React 18 + Vite 5 + React Router 6 + Framer Motion (nueva dep.)  
**Prioridad de diseño:** Mobile-first · Accesible · 60fps

---

## Resumen

Añadir un sistema de animaciones completo que guíe visualmente al visitante a través de la página. El sistema tiene cuatro partes independientes: splash screen de bienvenida, transiciones entre páginas, animaciones de scroll por sección e indicadores de navegación (barra de progreso + puntos laterales).

---

## Decisiones de diseño

| Aspecto | Decisión |
|---|---|
| Transición de página | Slide horizontal — página sale izquierda, entra derecha |
| Comportamiento scroll | Libre con reveals al llegar al viewport |
| Intensidad animaciones | Equilibrado: fade + translateY 28px + stagger en listas |
| Indicador de navegación | Barra de progreso (todos) + puntos laterales (desktop ≥1024px) |
| Splash screen | Letras stagger + auto-dismiss cuando carga completa |
| Librería | Framer Motion (AnimatePresence, whileInView, useScroll) |
| Accesibilidad | `prefers-reduced-motion` → fade 200ms en todo |
| Rendimiento | Solo `transform` y `opacity` — 0 layout thrashing |

---

## Parte 1 — SplashScreen

### Comportamiento

1. Se muestra al abrir la web. Se comprueba `sessionStorage.getItem('splash_shown')` — si existe, se salta completamente.
2. Muestra el nombre "El Hato / y el Garabato" con stagger letra a letra (80ms por carácter) sobre fondo `#2d1a14`.
3. En paralelo, lanza `Promise.all()` con el `import()` dinámico de todas las páginas lazy.
4. Condición de salida: se cumplen **ambas** — animación mínima completada (1.8s) y todos los imports resueltos.
5. Sale con un `clipPath` de abajo a arriba (cortina que sube) en 600ms, revelando la página debajo.
6. Escribe `sessionStorage.setItem('splash_shown', '1')` al salir para no repetirse.

### Componente: `src/components/layout/SplashScreen.jsx`

**Props:** `onComplete: () => void`

**Lógica interna:**
- `useState(false)` para `ready` (precarga completada)
- `useState(false)` para `animDone` (animación mínima completada)
- `useEffect` que lanza el `Promise.all` de imports + un `setTimeout(1800ms)` en paralelo
- Cuando los dos estados son `true` → llama `onComplete()`
- La salida es un `motion.div` con `exit` definido en `AnimatePresence`

**Páginas a precargar:**
```js
Promise.all([
  import('../../pages/Home'),
  import('../../pages/Tienda'),
  import('../../pages/SobreNosotros'),
  import('../../pages/BodegaYVinas'),
  import('../../pages/VisitaBodega'),
  import('../../pages/Contacto'),
  import('../../pages/Maridajes'),
  import('../../pages/AvisoLegal'),
  import('../../pages/TerminosCondiciones'),
])
```

**Visual:**
- Fondo: `#2d1a14` (var `--bg-dark`)
- Fuente: Cinzel, `letter-spacing: 0.3em`, color `#c8a255` (var `--gold`)
- "EL HATO" en tamaño grande, separador fino dorado, "Y EL GARABATO" más pequeño
- Cada letra es un `motion.span` con `initial={{ opacity: 0, y: 12 }}` y `animate={{ opacity: 1, y: 0 }}`
- Stagger gestionado con `variants` + `staggerChildren: 0.08` en el contenedor

**Integración en `main.jsx`:**
```jsx
// main.jsx
function AppWithSplash() {
  const [splashDone, setSplashDone] = useState(
    () => !!sessionStorage.getItem('splash_shown')
  )
  return (
    <AnimatePresence mode="wait">
      {!splashDone
        ? <SplashScreen key="splash" onComplete={() => setSplashDone(true)} />
        : <App key="app" />
      }
    </AnimatePresence>
  )
}
```

---

## Parte 2 — Transiciones de página (slide horizontal)

### Comportamiento

Al navegar entre rutas, la página actual sale deslizándose hacia la izquierda (`x: 0 → -60px` + `opacity: 1 → 0`) mientras la nueva entra desde la derecha (`x: 60px → 0` + `opacity: 0 → 1`). Las dos animaciones ocurren en paralelo gracias a `AnimatePresence mode="sync"`.

**Duración:** 420ms  
**Curva:** `cubic-bezier(0.16, 1, 0.3, 1)` — la `--ease-out` del proyecto  
**Desplazamiento:** 60px (no demasiado agresivo, encaja con elegancia bodega)

### Implementación en `Layout.jsx`

```jsx
// Wrapper en Layout.jsx
const location = useLocation()

<AnimatePresence mode="sync">
  <motion.div
    key={location.pathname}
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    <Outlet />
  </motion.div>
</AnimatePresence>
```

**Variantes en `src/animations/variants.js`:**
```js
export const pageVariants = {
  initial: { opacity: 0, x: 60 },
  enter:   { opacity: 1, x: 0, transition: { duration: 0.42, ease: EASE_OUT } },
  exit:    { opacity: 0, x: -60, transition: { duration: 0.28, ease: EASE_OUT } },
}
```

La salida es más rápida que la entrada (280ms vs 420ms) — regla de motion: salir rápido, entrar despacio.

**`prefers-reduced-motion`:** se detecta con `useReducedMotion()` de Framer en `Layout.jsx`. Si está activo, las variantes se sustituyen por `{ initial: { opacity: 0 }, enter: { opacity: 1 }, exit: { opacity: 0 } }` con duración 200ms.

**Auto-scroll al cambio de ruta:** el `useEffect` que hace `window.scrollTo(0, 0)` que ya existe en `Layout.jsx` se mueve para ejecutarse al inicio del `animate` (entrada), no al `exit`. Así la página saliente no salta de posición visualmente durante su animación de salida. Se implementa añadiendo `onAnimationStart` al `motion.div` de entrada, o usando un `useEffect` dependiente de `location.pathname` con un delay igual a la duración de salida (280ms).

---

## Parte 3 — Scroll reveals

### Componente: `src/components/ui/ScrollReveal.jsx`

Wrapper reutilizable basado en `motion` + `whileInView`. Sustituye las clases `.reveal`, `.reveal-left`, `.reveal-right` y el hook `useScrollReveal`.

**Props:**
```ts
{
  children:  ReactNode
  variant?:  Variant          // default: fadeUp
  delay?:    number           // default: 0 (segundos)
  amount?:   number           // % visible para trigger, default: 0.2
  as?:       keyof JSX.IntrinsicElements  // default: 'div'
  className?: string
}
```

**Variantes disponibles en `src/animations/variants.js`:**

```js
const EASE_OUT = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } }
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } }
}

export const fadeRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } }
}

export const imageReveal = {
  hidden:  { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.0, ease: EASE_OUT } }
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
}

export const reducedMotion = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } }
}
```

**Viewport:** `{ once: true, amount: 0.2 }` por defecto. `once: true` evita que la animación se repita al hacer scroll hacia arriba.

### Componentes adicionales

**`StaggerList` / `StaggerItem`** en `src/components/ui/StaggerList.jsx`:  
Para las tarjetas de vinos (`VinosGrid`), el equipo (`EquipoSection`) y las experiencias de visita. El contenedor lleva `staggerContainer`, cada hijo lleva `staggerItem`.

**`ImageReveal`** en `src/components/ui/ImageReveal.jsx`:  
Wrapper con `overflow: hidden` + `motion.img` con variante `imageReveal`. Para fotos de viñedos, botellas, bodega.

### Eliminación de código antiguo

- Eliminar `src/hooks/useScrollReveal.js`
- Eliminar las clases `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-delay-1/2/3` de `App.css`
- Eliminar `useScrollReveal()` de todas las páginas que lo usen

### Aplicación en páginas

Cada página envuelve sus bloques de contenido con `<ScrollReveal>`. Ejemplo mínimo:

```jsx
// Antes
<div className="reveal">
  <h2>Nuestros vinos</h2>
</div>

// Después
<ScrollReveal as="h2">Nuestros vinos</ScrollReveal>
```

Las secciones con listas de tarjetas usan `StaggerList` + `StaggerItem`. Las secciones con foto + texto usan `ImageReveal` para la imagen y `ScrollReveal` con delay escalonado para el texto.

---

## Parte 4 — Indicadores de navegación

### 4a — Barra de progreso: `src/components/layout/ScrollProgress.jsx`

- Div fijo en `position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 100`
- Color: `#c8a255` (var `--gold`)
- Implementación: `const { scrollYProgress } = useScroll()` de Framer Motion
- `<motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}>`
- GPU-accelerated, 0 JS en el hilo principal durante el scroll
- Se renderiza dentro de `Layout.jsx` encima del `<Navbar />`

### 4b — Puntos laterales: `src/components/layout/SectionDots.jsx`

**Comportamiento:**
- Puntos circulares pequeños (8px), posición `fixed` en el lado derecho
- Uno por sección principal con `id` en la página (Hero, Vinos, Bodega, Equipo, Visita, Contacto)
- El punto activo se ilumina en `--gold` con un anillo exterior sutil
- Los inactivos son circunferencias huecas en `rgba(200,162,85,0.35)`
- Clicables: hacen `element.scrollIntoView({ behavior: 'smooth' })`
- Solo visibles en `@media (min-width: 1024px)` — ocultos en móvil

**Implementación:**
- `IntersectionObserver` con `threshold: 0.5` sobre los `id` de sección
- `useState` con la sección activa actual
- Los `id` de sección se pasan como prop: `sections: Array<{ id: string, label: string }>`
- Cada página declara sus secciones; `Layout.jsx` las recibe del contexto o directamente del componente de página

**Integración:**  
`SectionDots` se renderiza en `Layout.jsx` y recibe las secciones de la ruta activa mediante `SectionContext`.

El contexto expone dos cosas:
```js
// src/context/SectionContext.jsx
const SectionContext = createContext()

// API pública:
// useSections()             → lee las secciones registradas (usado por SectionDots)
// useRegisterSections(arr)  → las páginas llaman esto al montarse con su lista de { id, label }
```

Cada página llama `useRegisterSections` una vez con su lista de secciones. `useEffect` con cleanup vacía el contexto al desmontar. `SectionDots` se suscribe a `useSections()` y re-renderiza cuando la ruta cambia. Si una página no llama `useRegisterSections`, `SectionDots` no muestra nada (comportamiento seguro).

---

## Archivos afectados

### Nuevos
| Archivo | Descripción |
|---|---|
| `src/animations/variants.js` | Todas las variantes de animación centralizadas |
| `src/components/layout/SplashScreen.jsx` | Splash de bienvenida con auto-dismiss |
| `src/components/layout/ScrollProgress.jsx` | Barra de progreso superior |
| `src/components/layout/SectionDots.jsx` | Puntos de navegación lateral |
| `src/components/ui/ScrollReveal.jsx` | Wrapper genérico whileInView |
| `src/components/ui/StaggerList.jsx` | Contenedor + ítem stagger |
| `src/components/ui/ImageReveal.jsx` | Reveal de imágenes con clip-path |
| `src/context/SectionContext.jsx` | Contexto para registrar secciones activas |

### Modificados
| Archivo | Cambio |
|---|---|
| `main.jsx` | Añadir `AppWithSplash` wrapper con `AnimatePresence` |
| `src/components/layout/Layout.jsx` | Añadir `AnimatePresence`, `ScrollProgress`, `SectionDots`, `useReducedMotion` |
| `src/App.css` | Eliminar clases `.reveal*`, añadir estilos de `SplashScreen` y `SectionDots` |
| `src/pages/Home.jsx` | Eliminar `useScrollReveal()`, añadir `ScrollReveal` y `StaggerList` |
| Resto de páginas | Mismo patrón que `Home.jsx` |

### Eliminados
| Archivo | Motivo |
|---|---|
| `src/hooks/useScrollReveal.js` | Reemplazado por `ScrollReveal` component |

---

## Dependencia nueva

```bash
npm install framer-motion
```

Tamaño: ~25 KB gzip. Se importa por módulo — solo el código usado llega al bundle.

---

## Accesibilidad y rendimiento

- `useReducedMotion()` de Framer detecta la preferencia del sistema. Cuando está activo: splash sin letras (solo fade del logo), transiciones de página en fade 200ms, scroll reveals en fade 150ms sin desplazamiento.
- Todas las animaciones usan exclusivamente `transform` y `opacity` — ninguna propiedad que cause reflow.
- La barra de progreso usa `scaleX` de Framer con `useScroll`, que corre en el compositor (off main thread).
- `viewport: { once: true }` en todos los reveals — no re-anima al hacer scroll hacia arriba.
- Los puntos laterales se ocultan en móvil con CSS puro, sin lógica JS adicional.
- El splash solo ocurre una vez por sesión (`sessionStorage`).
