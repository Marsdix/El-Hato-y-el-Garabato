# El Hato y el Garabato — Rediseño web en React

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)
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
| [Vite](https://vitejs.dev) | 5.4 | Bundler y servidor de desarrollo |
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
| `/visita` | Enoturismo | Experiencias disponibles y mapa de localización |
| `/contacto` | Contacto | Formulario y mapa embebido de Google Maps |
| `/aviso-legal` | Aviso legal | Página estática |
| `/terminos` | Términos y condiciones | Página estática |

---

## Funcionalidades

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
- **Splash screen** — pantalla de carga con barra de progreso en la primera visita de la sesión.
- **Barra de progreso de scroll** — indicador fino en la parte superior que refleja el avance en la página.
- **Botón volver arriba** — aparece tras 400 px de scroll, animado con Framer Motion.
- **Cursor personalizado** — anillo que sigue al puntero con suavizado por `requestAnimationFrame`. Escala en elementos interactivos y no interfiere con cursores del sistema.
- **Scroll al top instantáneo** — al cambiar de página o pulsar una pestaña ya activa en el menú.

### Internacionalización y tema
- **Bilingüe ES / EN** — sistema de traducciones propio con `LanguageContext` y hook `useLanguage`. Persistencia en `localStorage`. Cambia idioma sin recargar.
- **Modo oscuro / claro** — tema completo con variables CSS y atributo `data-theme`. Persiste entre sesiones.

### Rendimiento
- **Lazy loading por ruta** — cada página es un chunk independiente (`React.lazy` + `Suspense`).
- **Code splitting** — vendor (`react`, `react-dom`, `react-router-dom`) en chunk separado para mejor caché.
- **Diseño responsive** — navbar con menú hamburguesa, tipografía fluida (`clamp`) y layouts adaptativos.

---

## Arquitectura del proyecto

```
src/
├── App.jsx                        # Rutas y lazy imports
├── App.css                        # Estilos globales y variables CSS
├── main.jsx                       # Punto de entrada React 18 + SplashScreen
├── animations/
│   └── variants.js                # Variantes de Framer Motion reutilizables
├── components/
│   ├── layout/                    # Navbar, Footer, Cursor, Layout, PageHero,
│   │                              # SplashScreen, ScrollProgress, SectionDots
│   ├── sections/                  # Secciones de página (Hero, VinosGrid, Intro…)
│   └── ui/                        # Button, ScrollReveal, StaggerList,
│                                  # CountUp, BackToTop, ImageReveal, ArrowRight
├── context/
│   ├── LanguageContext.jsx        # Idioma y tema (ES/EN, dark/light)
│   └── SectionContext.jsx         # Secciones activas para indicadores de navegación
├── data/                          # Todo el contenido separado del código
│   ├── vinos.js                   # 7 vinos con flag featured
│   ├── bodega.js                  # Textos y estadísticas de Bodega y Viñas
│   ├── visitas.js                 # Experiencias de enoturismo
│   ├── equipo.js                  # Miembros del equipo
│   ├── maridajes.js               # Vinos con maridajes, categorías y videos
│   ├── medios.js                  # Logos de medios donde aparece la bodega
│   ├── navigation.js              # Links de navegación y URLs externas
│   ├── images.js                  # Gestión centralizada de rutas de imágenes
│   └── translations.js            # Diccionario ES / EN
├── hooks/
│   ├── useCursor.js               # Cursor personalizado
│   ├── useLanguage.js             # Acceso al contexto de idioma y tema
│   ├── useScrollReveal.js         # Animaciones de entrada con IntersectionObserver
│   └── useTilt.js                 # Tilt 3D con Framer Motion springs
└── pages/                         # Una página por ruta (lazy-loaded)
```

La separación estricta entre **datos** (`/data`), **lógica** (`/hooks`) y **presentación** (`/components`, `/pages`) permite añadir páginas o contenido sin tocar código existente.

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

**GitHub Pages** — el workflow `.github/workflows/deploy.yml` compila y publica automáticamente en cada push a `main`. Requiere activar *GitHub Pages → Source: GitHub Actions* en los ajustes del repositorio.

**Vercel** — conectar el repositorio en [vercel.com](https://vercel.com). El archivo `vercel.json` gestiona el enrutado SPA sin configuración adicional.

**Netlify / Cloudflare Pages** — el archivo `public/_redirects` redirige todas las rutas a `index.html` para que el enrutado del lado del cliente funcione.

---

## Contexto académico

Trabajo de Fin de Ciclo del título **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

El cliente real es la bodega familiar *El Hato y el Garabato*. Su web original en WordPress ha servido como referencia de contenido. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: arquitectura de componentes, gestión de estado con Context API, enrutado en SPA, animaciones con Framer Motion y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
[github.com/Marsdix](https://github.com/Marsdix) · 2025–2026
