# El Hato y el Garabato — Rediseño web en Astro + React

![Astro](https://img.shields.io/badge/Astro-6-FF5D01?logo=astro&logoColor=white&labelColor=1a1a2e)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity_CMS-7-F03E2F?logo=sanity&logoColor=white&labelColor=1a1a2e)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-22272E?logo=github&logoColor=white)

**Proyecto de Fin de Curso · Técnico Superior en Desarrollo de Aplicaciones Web**

> Migración y rediseño completo de la web de la bodega artesanal familiar **El Hato y el Garabato**, ubicada en el Parque Natural Arribes del Duero (Formariz, Zamora). La web original estaba construida en WordPress + Astra; este proyecto la reescribe desde cero en Astro SSG con componentes React y un diseño editorial propio.

---

## Demo en vivo

**[marsdix.github.io/El-Hato-y-el-Garabato](https://marsdix.github.io/El-Hato-y-el-Garabato/)**

Se actualiza automáticamente con cada push a `main` mediante GitHub Actions.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Astro](https://astro.build) | 6 | Generador estático: routing, build y HTML |
| [React](https://react.dev) | 18.3 | Componentes de UI renderizados en el cliente |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animaciones, transiciones y efectos de scroll |
| [Lenis](https://lenis.darkroom.engineering) | 1.3 | Scroll suave |
| [Sanity CMS](https://www.sanity.io) | 7 | Contenido del blog y catálogo de vinos |
| [Nanostores](https://github.com/nanostores/nanostores) | 1.3 | Estado compartido entre islas React (carrito, UI) |
| CSS personalizado | — | Variables CSS globales, sin frameworks de utilidades |
| Google Fonts | — | Cormorant Garamond · Cinzel · Jost |

---

## Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Hero parallax, vinos destacados, introducción y maridajes |
| `/nosotros` | Quiénes somos | Historia, presencia en medios y equipo de la bodega |
| `/bodega` | Bodega y Viñas | Instalaciones, estadísticas animadas y proceso de elaboración |
| `/tienda` | Catálogo | Fichas completas de los vinos; compra enlaza a WooCommerce |
| `/tienda/:id` | Ficha de vino | Detalle individual con notas de cata y datos analíticos |
| `/blog` | Blog | Grid de artículos de prensa y posts propios |
| `/blog/:id` | Post de blog | Plantilla de post con bloques de contenido bilingüe |
| `/maridajes` | Maridajes | Sugerencias de maridaje por categoría con vídeo |
| `/visita` | Enoturismo | Experiencias disponibles y mapa de localización |
| `/visita/bodega` | Reserva visita bodega | Formulario de reserva para visita de 1 h con cata guiada |
| `/visita/vina-bodega` | Reserva visita viña + bodega | Formulario de reserva para visita de 2 h con recorrido por el viñedo |
| `/contacto` | Contacto | Formulario funcional (Formspree) y mapa embebido de Google Maps |
| `/carrito` | Carrito | Gestión de pedidos con formulario de envío a Formspree |
| `/aviso-legal` | Aviso legal | Página estática bilingüe |
| `/terminos` | Términos y condiciones | Página estática bilingüe |

---

## Funcionalidades

### Acceso y legal
- **Verificación de edad (+18)** — pantalla de bienvenida obligatoria antes de acceder al sitio. Persiste durante la sesión de navegación y vuelve a aparecer al refrescar o abrir nueva pestaña. Diseño premium con imagen de viñedo de fondo, tarjeta con borde dorado y cursor personalizado visible desde el primer momento.

### Animaciones e interacción
- **Parallax en heroes** — el fondo se desplaza a velocidad reducida con `useScroll` + `useTransform` de Framer Motion.
- **Scroll reveals** — elementos aparecen con fade, slide o clip-path al entrar en el viewport (`ScrollReveal`, `StaggerList`).
- **Animaciones de imagen mixtas** — cada sección usa el efecto más adecuado a su contexto:
  - Gris → color al hacer scroll (bodega interior, viñedo, fotos de equipo).
  - Wipe clip-path ascendente en la foto del viñedo.
  - Tilt 3D al mover el ratón sobre las fotos de equipo (`useTilt` con Framer Motion springs).
  - Zoom + marco dorado al hover en tarjetas de vino y maridajes.
- **CountUp animado** — estadísticas numéricas cuentan desde un valor inicial con easing cúbico al entrar en pantalla.
- **Filtro multi-selección animado** — blog y maridajes usan `AnimatePresence mode="popLayout"` con transiciones de escala por tarjeta. El blog permite seleccionar varias categorías simultáneamente.

### UI y navegación
- **Splash screen** — pantalla de carga con animación de letras. Solo aparece en la primera visita de la sesión.
- **Barra de progreso de scroll** — indicador fino en la parte superior que refleja el avance en la página.
- **Botón volver arriba** — aparece tras 400 px de scroll, animado con Framer Motion.
- **Cursor personalizado** — anillo que sigue al puntero con suavizado por `requestAnimationFrame`. Escala en elementos interactivos.
- **Scroll al top instantáneo** — al cambiar de página mediante el `ClientRouter` de Astro.
- **Títulos dinámicos por página** — `usePageTitle` actualiza `document.title` en ES/EN al navegar.

### Internacionalización y tema
- **Bilingüe ES / EN** — sistema de traducciones propio con `LanguageContext` y hook `useLanguage`. Persistencia en `localStorage`. Cambia idioma sin recargar.
- **Modo oscuro / claro** — tema completo con variables CSS y atributo `data-theme`. Persiste entre sesiones.

### Formularios
- **Contacto funcional** — envía a [Formspree](https://formspree.io) si `VITE_FORMSPREE_ID` está configurado; si no, abre el cliente de correo con los campos pre-rellenados (`mailto:` fallback).
- **Carrito / Pedidos** — los pedidos se envían por email con el detalle de productos, cantidades, total y datos del comprador.
- **Reservas de visita** — formularios dedicados para cada experiencia enoturística; envían a Formspree o abren `mailto:` como fallback.

### Accesibilidad (WCAG AA)
- **Skip link** — enlace "Saltar al contenido" visible al recibir foco de teclado.
- **Focus visible global** — outline dorado en todos los elementos interactivos con `:focus-visible`.
- **ARIA semántico** — `role="dialog"` / `role="alertdialog"`, `aria-labelledby`, `aria-live="polite"` en filtros, contadores y formularios; `aria-hidden` en elementos decorativos.
- **Labels accesibles** — todos los inputs tienen `<label>` asociado (visible o `.sr-only`).
- **Jerarquía de headings** correcta en todas las páginas (h1 → h2 → h3 sin saltos).
- **Cursor táctil** — en dispositivos sin ratón (`hover: none`) se restaura el cursor nativo y se oculta el cursor personalizado.
- **Contraste AA** — `--text-3` oscurecido a `#706860` (~4.5:1) y usos de `--gold` sobre fondo claro sustituidos por `--gold-text` (#8a6510).

### Rendimiento
- **Astro SSG** — cada ruta genera HTML estático; el JS de React solo se carga por página.
- **Diseño responsive** — navbar con menú hamburguesa, tipografía fluida (`clamp`) y layouts adaptativos.

### SEO
- **Open Graph y Twitter Card** — metaetiquetas completas en `Layout.astro` para previsualizaciones ricas al compartir en redes sociales.
- **Sitemap** — `public/sitemap.xml` con las rutas principales, vinos y posts del blog.
- **Títulos por página** — cada ruta tiene su propio `<title>` en ES e EN.

### Seguridad
Cabeceras HTTP configuradas en `vercel.json` y `public/_headers`:

| Cabecera | Valor |
|---|---|
| `Content-Security-Policy` | Política estricta: solo orígenes conocidos (Sanity, YouTube nocookie, Google Fonts, Formspree) |
| `Strict-Transport-Security` | HSTS con `max-age=31536000; includeSubDomains; preload` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Geolocation, micrófono, cámara y pagos desactivados |
| `Cache-Control` | `immutable` en `/assets/*` (1 año) |

---

## Arquitectura del proyecto

```
src/
├── layouts/
│   └── Layout.astro               # Layout Astro: head, wrappers globales, slot
├── pages/                         # Un .astro por ruta
│   ├── index.astro
│   ├── tienda/[id].astro          # Ruta dinámica (ficha de vino)
│   ├── blog/[id].astro            # Ruta dinámica (post de blog)
│   └── 404.astro
├── components/
│   ├── layout/                    # Navbar, Footer, Cursor, AstroGlobalWrapper,
│   │                              # SplashScreen, AgeGate, ScrollProgress, SectionDots
│   ├── pages/                     # *Client.jsx: wrappers React por ruta
│   ├── sections/                  # Secciones de página (Hero, VinosGrid, Intro…)
│   └── ui/                        # Button, ScrollReveal, StaggerList,
│                                  # CountUp, BackToTop, ArrowRight
├── react-pages/                   # Componentes de página React (usados por *Client.jsx)
├── context/
│   ├── LanguageContext.jsx        # Idioma y tema (ES/EN, dark/light)
│   ├── CartContext.jsx            # Estado del carrito
│   └── SectionContext.jsx         # Secciones activas para indicadores de navegación
├── stores/                        # Nanostores (cart.js, ui.js)
├── animations/
│   └── variants.js                # Variantes de Framer Motion reutilizables
├── data/                          # Todo el contenido separado del código
│   ├── vinos.js                   # Catálogo de vinos con flag featured y notas de cata
│   ├── blog.js                    # Posts del blog con contenido por bloques (ES/EN)
│   ├── bodega.js                  # Textos y estadísticas de Bodega y Viñas
│   ├── visitas.js                 # Experiencias de enoturismo
│   ├── equipo.js                  # Miembros del equipo
│   ├── maridajes.js               # Vinos con maridajes, categorías y videos
│   ├── medios.js                  # Logos de medios donde aparece la bodega
│   ├── navigation.js              # Links de navegación y URLs externas
│   ├── images.js                  # Gestión centralizada de rutas de imágenes
│   └── translations.js            # Diccionario ES / EN
├── hooks/
│   ├── useCursor.js               # Cursor personalizado con requestAnimationFrame
│   ├── useLanguage.js             # Acceso al contexto de idioma y tema
│   ├── usePageTitle.js            # Actualiza document.title por página (ES/EN)
│   ├── useSanityFetch.js          # Fetch de datos desde Sanity con loading/error
│   ├── useScrollColor.js          # Color de navbar según posición de scroll
│   └── useTilt.js                 # Tilt 3D con Framer Motion springs
├── lib/
│   ├── sanityClient.js            # Cliente Sanity configurado
│   └── queries.js                 # Queries GROQ para Sanity
├── utils/
│   └── url.js                     # Helpers de URL
└── App.css                        # Estilos globales y variables CSS

public/
├── sitemap.xml                    # Sitemap completo (rutas, vinos, blog)
├── CNAME                          # Dominio personalizado para GitHub Pages
├── og-cover.jpg                   # Imagen Open Graph (1200×630)
├── robots.txt                     # Directivas para crawlers
└── _headers                       # Cabeceras de seguridad para Netlify/Cloudflare
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz (ver `.env.example`):

```env
# ID del formulario de Formspree (https://formspree.io)
# Si no se define, el formulario de contacto usa mailto: como fallback
VITE_FORMSPREE_ID=xxxxxxxx

# Opcional: proyecto y dataset de Sanity (por defecto usan los valores hardcoded)
VITE_SANITY_PROJECT_ID=rw1g8gn6
VITE_SANITY_DATASET=production
```

---

## Instalación y desarrollo

**Requisitos:** Node.js v18 o superior.

```bash
# Clonar el repositorio
git clone https://github.com/Marsdix/El-Hato-y-el-Garabato.git
cd El-Hato-y-el-Garabato

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev          # http://localhost:4321

# Otros comandos
npm run build        # Genera /dist listo para producción
npm run preview      # Previsualiza la build en local
```

---

## Despliegue

**GitHub Pages** — el workflow `.github/workflows/deploy.yml` compila con Node.js y publica automáticamente en cada push a `main`. Requiere activar *GitHub Pages → Source: GitHub Actions* en los ajustes del repositorio.

**Vercel** — conectar el repositorio en [vercel.com](https://vercel.com). El archivo `vercel.json` gestiona el enrutado y las cabeceras de seguridad sin configuración adicional.

> **Nota sobre el dominio propio:** cuando `elhatoyelgarabato.com` esté apuntando al hosting, actualizar `site` en `astro.config.mjs` y las URLs en `sitemap.xml` y `robots.txt`.

---
## Ramas principales

| Rama | Propósito |
|---|---|
| `main` | Producción — se despliega automáticamente a GitHub Pages |
| `accesibilidad` | Implementación WCAG AA completa (pendiente de merge a main) |
| `wordpress` | Tema WordPress que sirve los HTML estáticos de Astro (experimental) |

---

## Imágenes personalizables

Todas las imágenes del proyecto se gestionan en `src/data/images.js`. Para cambiar cualquier hero basta con sustituir el import correspondiente por el de la nueva imagen:

| Sección | Variable |
|---|---|
| Home hero | `imgHomeHero` |
| Nosotros hero | `imgNosotrosHero` |
| Bodega hero | `imgBodegaVinaHero` |
| Tienda hero | `imgCotexaTumbada` |
| Vino detalle hero | `imgVinoDetalleHero` |
| Blog hero | `imgBlogHero` |
| Maridajes hero | `imgVinas` |
| Visita hero | `imgVisitaHero` |
| Contacto hero | `imgContactoHero` |
| OG cover (redes sociales) | `public/og-cover.jpg` |

---

## Contexto académico

Trabajo de Fin de Ciclo del título **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

El cliente real es la bodega familiar *El Hato y el Garabato*. Su web original en WordPress ha servido como referencia de contenido. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: arquitectura Astro SSG con islas React, gestión de estado con Context API y Nanostores, animaciones con Framer Motion, integración con Sanity CMS y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
[github.com/Marsdix](https://github.com/Marsdix) · 2025–2026

---
