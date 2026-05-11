# El Hato y el Garabato — Rediseño web en React

**Proyecto de Fin de Curso · Técnico Superior en Desarrollo de Aplicaciones Web**

---

## Descripción del proyecto

Este proyecto consiste en la **migración y rediseño completo** de la página web de [El Hato y el Garabato](https://elhatoyelgarabato.com), una bodega artesanal familiar ubicada en el Parque Natural Arribes del Duero (Formariz, Zamora).

La web original estaba construida sobre **WordPress + Astra**, con un diseño oscuro y una estructura de código difícilmente mantenible. El objetivo de este TFC ha sido:

- Reescribir la web desde cero en **React + Vite**, eliminando la dependencia de WordPress.
- Aplicar un **rediseño visual** con una paleta más clara y moderna, manteniendo la identidad artesanal y de calidad de la bodega.
- Crear una **arquitectura escalable** que permita añadir nuevas páginas y contenido fácilmente.
- Preparar el proyecto para **despliegue en producción** en plataformas como Vercel o Netlify.

---

## Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 18.3 | Librería principal de UI |
| [Vite](https://vitejs.dev) | 5.4 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com) | 6.27 | Navegación entre páginas |
| CSS personalizado | — | Estilos con variables CSS (sin frameworks) |
| Google Fonts | — | Tipografías Cormorant Garamond, Cinzel y Jost |

---

## Estructura del proyecto

```
src/
├── assets/
│   └── images/          # Imágenes propias del proyecto
├── components/
│   ├── layout/          # Componentes globales (Navbar, Footer, Cursor, Layout, PageHero)
│   ├── sections/        # Secciones reutilizables (Hero, Vinos, Equipo, Contacto…)
│   └── ui/              # Componentes básicos (Button, ArrowRight)
├── data/                # Contenido separado del código (vinos, equipo, prensa, navegación)
├── hooks/               # Custom hooks (useScrollReveal, useCursor)
└── pages/               # Páginas de la aplicación (Home, SobreNosotros, NotFound)
```

La separación entre **datos** (`/data`), **lógica** (`/hooks`) y **presentación** (`/components`, `/pages`) hace que añadir nuevas secciones o páginas sea sencillo y no requiera tocar código existente.

---

## Páginas implementadas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home | ✅ Completa |
| `/nosotros` | Quiénes somos | ✅ Completa |
| `/vinos` | Catálogo de vinos | 🔜 Pendiente |
| `/bodega` | La bodega y viñas | 🔜 Pendiente |
| `/visita` | Enoturismo | 🔜 Pendiente |
| `/contacto` | Contacto | 🔜 Pendiente |

---

## Características destacadas

- **Cursor personalizado** con seguimiento suavizado y efecto en elementos interactivos.
- **Animaciones de entrada** al hacer scroll mediante `IntersectionObserver`.
- **Navegación adaptativa**: el navbar cambia de estilo al hacer scroll y diferencia entre enlaces de ancla (scroll en Home) y rutas de React Router.
- **Lazy loading** de páginas para reducir el tiempo de carga inicial.
- **Code splitting** automático: React, React DOM y React Router se separan en un chunk propio para mejor caché.
- **Diseño responsive** para móvil, tablet y escritorio.
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

El cliente real es la bodega familiar *El Hato y el Garabato*, cuya web original en WordPress ha servido como referencia de contenido. Todo el código ha sido escrito desde cero aplicando los conocimientos adquiridos durante el ciclo: estructura de componentes, gestión del estado, enrutado en SPA, buenas prácticas de CSS y preparación para producción.

---

## Autor

**Guillermo** — Alumno de DAW  
Proyecto en desarrollo · 2025–2026
