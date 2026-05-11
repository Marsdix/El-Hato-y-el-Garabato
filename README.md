# El Hato y el Garabato — Rediseño web en React

**Proyecto de Fin de Curso · Técnico Superior en Desarrollo de Aplicaciones Web**

---

## Descripción del proyecto

Este proyecto consiste en la **migración y rediseño completo** de la página web de [El Hato y el Garabato](https://elhatoyelgarabato.com), una bodega artesanal familiar ubicada en el Parque Natural Arribes del Duero (Formariz, Zamora).

La web original estaba construida sobre **WordPress + Astra**, con una estructura de código difícilmente mantenible. El objetivo de este TFC ha sido:

- Reescribir la web desde cero en **React + Vite**, eliminando la dependencia de WordPress.
- Aplicar un **rediseño visual** con una paleta clara y elegante, manteniendo la identidad artesanal de la bodega.
- Crear una **arquitectura escalable** que permita añadir nuevas páginas y contenido sin tocar código existente.
- Preparar el proyecto para **despliegue en producción** en plataformas como Vercel o Netlify.

---

## Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 18.3 | Librería principal de UI |
| [Vite](https://vitejs.dev) | 5.4 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com) | 6.27 | Navegación entre páginas |
| CSS personalizado | — | Variables CSS globales, sin frameworks |
| Google Fonts | — | Cormorant Garamond, Cinzel y Jost |

---

## Estructura del proyecto

```
src/
├── assets/
│   └── images/              # Imágenes propias del proyecto
├── components/
│   ├── layout/              # Navbar, Footer, Cursor, Layout, PageHero
│   ├── sections/            # Secciones reutilizables por página
│   └── ui/                  # Componentes básicos: Button, ArrowRight
├── data/                    # Contenido separado del código
│   ├── vinos.js             # Catálogo completo (7 vinos, flag featured)
│   ├── bodega.js            # Textos y stats de Bodega y Viñas
│   ├── visitas.js           # Experiencias de enoturismo
│   ├── equipo.js            # Miembros del equipo
│   ├── medios.js            # Logos de prensa
│   └── navigation.js        # Links de nav y URLs externas
├── hooks/                   # useScrollReveal, useCursor
└── pages/                   # Una página por ruta
```

La separación entre **datos** (`/data`), **lógica** (`/hooks`) y **presentación** (`/components`, `/pages`) hace que añadir nuevas secciones o páginas sea sencillo y no requiera modificar código existente.

---

## Páginas implementadas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home | ✅ Completa |
| `/nosotros` | Quiénes somos | ✅ Completa |
| `/bodega` | Bodega y Viñas | ✅ Completa |
| `/tienda` | Catálogo de vinos | ✅ Completa |
| `/visita` | Enoturismo | ✅ Completa |
| `/contacto` | Contacto + Mapa | ✅ Completa |

> La página de **Tienda** es un catálogo estático en React. El proceso de compra se realiza en WooCommerce mediante enlaces externos, ya que migrar el carrito requeriría un backend.

---

## Características destacadas

- **Cursor personalizado** con seguimiento suavizado y efecto en elementos interactivos.
- **Animaciones de entrada** al hacer scroll mediante `IntersectionObserver`.
- **Navegación con React Router**: todas las secciones son rutas propias con `<Link>`.
- **Lazy loading** de páginas para reducir el tiempo de carga inicial.
- **Code splitting** automático: vendor y páginas en chunks separados para mejor caché.
- **Diseño responsive** para móvil, tablet y escritorio.
- **Mapa embebido** de Google Maps (sin API key) en la página de contacto.
- Preparado para despliegue en **Vercel** (`vercel.json`) y **Netlify / Cloudflare Pages** (`public/_redirects`).

---

## Cómo ejecutar el proyecto

### Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior.

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/el-hato-y-el-garabato.git
cd el-hato-y-el-garabato

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build      # Genera la versión de producción en /dist
npm run preview    # Previsualiza la build de producción en local
```

---

## Variables de entorno

Copia el archivo `.env.example` a `.env` y rellena los valores si es necesario:

```bash
cp .env.example .env
```

Actualmente solo se usa para configurar el formulario de contacto (opcional, requiere cuenta en [Formspree](https://formspree.io)).

---

## Despliegue

El proyecto está configurado para desplegarse en cualquier plataforma de hosting estático que soporte SPAs:

- **Vercel**: conectar el repositorio en [vercel.com](https://vercel.com). No requiere configuración adicional.
- **Netlify / Cloudflare Pages**: el archivo `public/_redirects` ya gestiona el enrutado del lado del servidor.

---

## Contexto académico

Este proyecto se desarrolla como **Trabajo de Fin de Ciclo** del título de **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)**.

El cliente real es la bodega familiar *El Hato y el Garabato*, cuya web original en WordPress ha servido como referencia de contenido y diseño. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: estructura de componentes, gestión del estado, enrutado en SPA, buenas prácticas de CSS y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
Proyecto en desarrollo · 2025–2026
