# El Hato y el Garabato — Rediseño web en React

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)
![React Router](https://img.shields.io/badge/React_Router-6.27-CA4245?logo=react-router&logoColor=white&labelColor=1a1a2e)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-22272E?logo=github&logoColor=white)

**Proyecto de Fin de Curso · Técnico Superior en Desarrollo de Aplicaciones Web**

> Migración y rediseño completo de la web de la bodega artesanal familiar **El Hato y el Garabato**, ubicada en el Parque Natural Arribes del Duero (Formariz, Zamora). La web original estaba construida en WordPress + Astra; este proyecto la reescribe desde cero en React + Vite.

---

## Demo en vivo

**[marsdix.github.io/El-Hato-y-el-Garabato](https://marsdix.github.io/El-Hato-y-el-Garabato/)**

El despliegue se actualiza automáticamente con cada push a `main` mediante GitHub Actions.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 18.3 | Librería principal de UI |
| [Vite](https://vitejs.dev) | 5.4 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com) | 6.27 | Navegación SPA con lazy loading |
| CSS personalizado | — | Variables CSS globales, sin frameworks |
| Google Fonts | — | Cormorant Garamond · Cinzel · Jost |

---

## Páginas implementadas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Hero, grilla de vinos destacados, secciones de introducción |
| `/nosotros` | Quiénes somos | Historia, valores y equipo de la bodega |
| `/bodega` | Bodega y Viñas | Instalaciones, viñas y proceso de elaboración |
| `/tienda` | Catálogo de vinos | Fichas completas de los 7 vinos; compra en WooCommerce |
| `/visita` | Enoturismo | Experiencias disponibles y mapa de localización |
| `/contacto` | Contacto | Formulario de contacto y mapa embebido de Google Maps |
| `/aviso-legal` | Aviso legal | Página estática |
| `/terminos` | Términos y condiciones | Página estática |

---

## Funcionalidades destacadas

- **Internacionalización ES / EN** — sistema de traducciones propio con `LanguageContext` y persistencia en `localStorage`. Cambia idioma sin recargar la página.
- **Modo oscuro / claro** — tema completo implementado con variables CSS y atributo `data-theme`. Persiste entre sesiones.
- **Cursor personalizado** — seguimiento suavizado con `requestAnimationFrame` y efecto de escala en elementos interactivos.
- **Animaciones de scroll** — `IntersectionObserver` activa clases `.reveal`, `.reveal-left` y `.reveal-right` al entrar en el viewport.
- **Lazy loading de páginas** — cada ruta es un chunk independiente (`React.lazy` + `Suspense`). Mejora el tiempo de carga inicial.
- **Code splitting automático** — vendor (`react`, `react-dom`, `react-router-dom`) en un chunk separado para mejor caché de navegador.
- **Diseño responsive** — navbar con menú hamburguesa, tipografía fluida y layouts adaptativos para móvil, tablet y escritorio.
- **Despliegue continuo** — GitHub Actions compila y publica en GitHub Pages en cada push a `main`.

---

## Arquitectura del proyecto

```
src/
├── App.jsx                     # Rutas y lazy imports
├── App.css                     # Estilos globales y variables CSS
├── main.jsx                    # Punto de entrada React 18
├── components/
│   ├── layout/                 # Navbar, Footer, Cursor, Layout, PageHero
│   ├── sections/               # Secciones reutilizables por página
│   └── ui/                     # Button (BtnPrimary / BtnGhost), ArrowRight
├── context/
│   └── LanguageContext.jsx     # Proveedor de idioma y tema
├── data/                       # Todo el contenido separado del código
│   ├── vinos.js                # 7 vinos con flag featured
│   ├── bodega.js               # Textos y estadísticas de Bodega y Viñas
│   ├── visitas.js              # Experiencias de enoturismo
│   ├── equipo.js               # Miembros del equipo
│   ├── navigation.js           # Links de navegación y URLs externas
│   ├── images.js               # Gestión centralizada de rutas de imágenes
│   └── translations.js         # Diccionario ES / EN
├── hooks/
│   ├── useScrollReveal.js      # Animaciones de entrada con IntersectionObserver
│   ├── useCursor.js            # Cursor personalizado
│   └── useLanguage.js          # Acceso al contexto de idioma y tema
└── pages/                      # Una página por ruta (lazy-loaded)
```

La separación estricta entre **datos** (`/data`), **lógica** (`/hooks`) y **presentación** (`/components`, `/pages`) permite añadir páginas o contenido sin modificar código existente.

---

## Instalación y desarrollo

### Requisitos

- [Node.js](https://nodejs.org) v18 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Marsdix/El-Hato-y-el-Garabato.git
cd El-Hato-y-el-Garabato

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build      # Genera la versión de producción en /dist
npm run preview    # Previsualiza la build en local (puerto 4173)
```

---

## Despliegue

El proyecto soporta tres plataformas de hosting estático:

### GitHub Pages (configurado)
El workflow `.github/workflows/deploy.yml` compila y despliega automáticamente en cada push a `main`. Requiere activar **GitHub Pages → Source: GitHub Actions** en los ajustes del repositorio.

### Vercel
Conectar el repositorio en [vercel.com](https://vercel.com). El archivo `vercel.json` gestiona el enrutado SPA. No requiere configuración adicional.

### Netlify / Cloudflare Pages
El archivo `public/_redirects` redirige todas las rutas a `index.html` para que el enrutado del lado del cliente funcione correctamente.

---

## Variables de entorno

Copia `.env.example` a `.env` si necesitas configurar el formulario de contacto (requiere cuenta en [Formspree](https://formspree.io)):

```bash
cp .env.example .env
```

---

## Contexto académico

Trabajo de Fin de Ciclo del título **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

El cliente real es la bodega familiar *El Hato y el Garabato*. Su web original en WordPress ha servido como referencia de contenido y diseño. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: arquitectura de componentes, gestión de estado con Context API, enrutado en SPA, buenas prácticas de CSS y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
[github.com/Marsdix](https://github.com/Marsdix) · 2025–2026
