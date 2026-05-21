# El Hato y el Garabato — Rediseño web en React

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)
![React Router](https://img.shields.io/badge/React_Router-6.27-CA4245?logo=react-router&logoColor=white&labelColor=1a1a2e)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-22272E?logo=github&logoColor=white)

**Proyecto de Fin de Curso · Técnico Superior en Desarrollo de Aplicaciones Web**

> Migración y rediseño completo de la web de la bodega artesanal familiar **El Hato y el Garabato**, ubicada en el Parque Natural Arribes del Duero (Formariz, Zamora). La web original estaba construida en WordPress + Astra; este proyecto la reescribe desde cero en React + Vite con un diseño editorial propio.

---

## Demo en vivo

**[marsdix.github.io/El-Hato-y-el-Garabato](https://marsdix.github.io/El-Hato-y-el-Garabato/)**

Se actualiza automáticamente con cada push a `main` mediante GitHub Actions.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 18.3 | Librería principal de UI |
| [Vite](https://vitejs.dev) | 7.3 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com) | 6.27 | Navegación SPA con lazy loading por ruta |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animaciones, transiciones y efectos de scroll |
| CSS personalizado | — | Variables CSS globales, sin frameworks de utilidades |
| Google Fonts | — | Cormorant Garamond · Cinzel · Jost |

---

## Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Hero parallax, vinos destacados, introducción y maridajes |
| `/nosotros` | Quiénes somos | Historia, presencia en medios y equipo de la bodega |
| `/bodega` | Bodega y Viñas | Instalaciones, estadísticas animadas y proceso de elaboración |
| `/tienda` | Catálogo | Fichas completas de los 7 vinos; compra enlaza a WooCommerce |
| `/tienda/:id` | Ficha de vino | Detalle individual con notas de cata y datos analíticos |
| `/blog` | Blog | Grid de artículos de prensa y posts propios |
| `/blog/:id` | Post de blog | Plantilla de post con bloques de contenido bilingüe y comentarios |
| `/maridajes` | Maridajes | Sugerencias de maridaje por categoría con vídeo |
| `/visita` | Enoturismo | Experiencias disponibles y mapa de localización |
| `/contacto` | Contacto | Formulario funcional (Formspree) y mapa embebido de Google Maps |
| `/carrito` | Carrito | Gestión de pedidos con formulario de envío a Formspree |
| `/aviso-legal` | Aviso legal | Página estática bilingüe |
| `/terminos` | Términos y condiciones | Página estática bilingüe |

---

## Funcionalidades

### Acceso y legal
- **Verificación de edad (+18)** — pantalla de bienvenida obligatoria antes de acceder al sitio. Persiste durante la sesión de navegación (estado React en memoria) y vuelve a aparecer al refrescar o abrir nueva pestaña. Diseño premium con imagen de viñedo de fondo, tarjeta con borde dorado y cursor personalizado visible desde el primer momento.

### Animaciones e interacción
- **Parallax en heroes** — el fondo se desplaza a velocidad reducida con `useScroll` + `useTransform` de Framer Motion.
- **Scroll reveals** — elementos aparecen con fade, slide o clip-path al entrar en el viewport (`ScrollReveal`, `StaggerList`).
- **Animaciones de imagen mixtas** — cada sección usa el efecto más adecuado a su contexto:
  - Gris → color al hacer scroll (bodega interior, viñedo, fotos de equipo).
  - Wipe clip-path ascendente en la foto del viñedo.
  - Tilt 3D al mover el ratón sobre las fotos de equipo (`useTilt` con Framer Motion springs).
  - Zoom + marco dorado al hover en tarjetas de vino y maridajes.
- **CountUp animado** — estadísticas numéricas cuentan desde un valor inicial con easing cúbico al entrar en pantalla.
- **Filtro animado en Maridajes** — `AnimatePresence mode="popLayout"` con transiciones de escala por tarjeta. Solo expande el video de la tarjeta seleccionada.

### UI y navegación
- **Splash screen** — pantalla de carga con animación de letras que precarga JS y las imágenes críticas antes de mostrarse. Solo aparece en la primera visita de la sesión.
- **Barra de progreso de scroll** — indicador fino en la parte superior que refleja el avance en la página.
- **Botón volver arriba** — aparece tras 400 px de scroll, animado con Framer Motion.
- **Cursor personalizado** — anillo que sigue al puntero con suavizado por `requestAnimationFrame`. Escala en elementos interactivos, visible sobre todas las capas (z-index superior al age gate y al splash).
- **Scroll al top instantáneo** — al cambiar de página o pulsar una pestaña ya activa en el menú.
- **Títulos dinámicos por página** — `usePageTitle` actualiza `document.title` en ES/EN al navegar, mejorando el SEO y la usabilidad con varias pestañas abiertas.

### Internacionalización y tema
- **Bilingüe ES / EN** — sistema de traducciones propio con `LanguageContext` y hook `useLanguage`. Persistencia en `localStorage`. Cambia idioma sin recargar. El contenido del blog admite objetos `{es, en}` directamente en los datos, sin tocar el diccionario. Páginas legales completamente traducidas con selector de idioma en tiempo real.
- **Modo oscuro / claro** — tema completo con variables CSS y atributo `data-theme`. Persiste entre sesiones.

### Formularios
- **Contacto funcional** — envía a [Formspree](https://formspree.io) si `VITE_FORMSPREE_ID` está configurado; si no, abre el cliente de correo con los campos pre-rellenados (`mailto:` fallback). Estados de carga, éxito y error.
- **Carrito / Pedidos** — los pedidos se envían por email con el detalle de productos, cantidades, total y datos del comprador.

### Rendimiento
- **Lazy loading por ruta** — cada página es un chunk independiente (`React.lazy` + `Suspense`).
- **Code splitting** — vendor (`react`, `react-dom`, `react-router-dom`) en chunk separado para mejor caché.
- **Diseño responsive** — navbar con menú hamburguesa, tipografía fluida (`clamp`) y layouts adaptativos.

### SEO
- **Open Graph y Twitter Card** — metaetiquetas completas en `index.html` para previsualizaciones ricas al compartir en redes sociales.
- **Sitemap** — `public/sitemap.xml` con las 10 rutas principales, los 7 vinos y los 18 posts del blog.
- **Títulos por página** — cada ruta tiene su propio `<title>` en ES e EN mediante el hook `usePageTitle`.

### Seguridad
Cabeceras HTTP configuradas en `vercel.json` y `public/_headers` (Netlify/Cloudflare):

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
├── App.jsx                        # Rutas y lazy imports
├── App.css                        # Estilos globales y variables CSS
├── main.jsx                       # Punto de entrada: AgeGate → SplashScreen → App
├── animations/
│   └── variants.js                # Variantes de Framer Motion reutilizables
├── components/
│   ├── layout/                    # Navbar, Footer, Cursor, Layout, PageHero,
│   │                              # SplashScreen, AgeGate, ScrollProgress, SectionDots
│   ├── sections/                  # Secciones de página (Hero, VinosGrid, Intro…)
│   └── ui/                        # Button, ScrollReveal, StaggerList,
│                                  # CountUp, BackToTop, ImageReveal, ArrowRight
├── context/
│   ├── LanguageContext.jsx        # Idioma y tema (ES/EN, dark/light)
│   └── SectionContext.jsx         # Secciones activas para indicadores de navegación
├── data/                          # Todo el contenido separado del código
│   ├── vinos.js                   # 7 vinos con flag featured, notas de cata y analítica
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
│   ├── useScrollReveal.js         # Animaciones de entrada con IntersectionObserver
│   └── useTilt.js                 # Tilt 3D con Framer Motion springs
└── pages/                         # Una página por ruta (lazy-loaded)

public/
├── sitemap.xml                    # Sitemap completo (rutas, vinos, blog)
├── CNAME                          # Dominio personalizado para GitHub Pages
├── og-cover.jpg                   # Imagen Open Graph (1200×630 recomendado)
├── robots.txt                     # Directivas para crawlers
├── _redirects                     # SPA routing para Netlify/Cloudflare
└── _headers                       # Cabeceras de seguridad para Netlify/Cloudflare
```

La separación estricta entre **datos** (`/data`), **lógica** (`/hooks`) y **presentación** (`/components`, `/pages`) permite añadir páginas o contenido sin tocar código existente.

---

## Variables de entorno

Crea un archivo `.env` en la raíz (ver `.env.example`):

```env
# ID del formulario de Formspree (https://formspree.io)
# Si no se define, el formulario de contacto usa mailto: como fallback
# y el carrito muestra el pedido sin enviarlo
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
npm run dev          # http://localhost:5173

# Otros comandos
npm run build        # Genera /dist listo para producción
npm run preview      # Previsualiza la build en local (puerto 4173)
```

---

## Despliegue

El proyecto soporta varias plataformas de hosting estático:

**GitHub Pages** — el workflow `.github/workflows/deploy.yml` compila con Node.js 24 y publica automáticamente en cada push a `main`. Requiere activar *GitHub Pages → Source: GitHub Actions* en los ajustes del repositorio.

**Vercel** — conectar el repositorio en [vercel.com](https://vercel.com). El archivo `vercel.json` gestiona el enrutado SPA y las cabeceras de seguridad sin configuración adicional.

**Netlify / Cloudflare Pages** — el archivo `public/_redirects` redirige todas las rutas a `index.html`. Las cabeceras de seguridad se aplican mediante `public/_headers`.

> **Nota sobre el dominio propio:** cuando `elhatoyelgarabato.com` esté apuntando al hosting, cambiar `base` en `vite.config.js` de la detección `GITHUB_ACTIONS` a `'/'` fijo y actualizar las URLs en `index.html`, `sitemap.xml` y `robots.txt`.

---

## Contexto académico

Trabajo de Fin de Ciclo del título **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

El cliente real es la bodega familiar *El Hato y el Garabato*. Su web original en WordPress ha servido como referencia de contenido. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: arquitectura de componentes, gestión de estado con Context API, enrutado en SPA, animaciones con Framer Motion y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
[github.com/Marsdix](https://github.com/Marsdix) · 2025–2026

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
