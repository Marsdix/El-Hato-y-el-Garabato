// ─── LINKS DE NAVEGACIÓN ──────────────────────────────────────────────
// to  → ruta interna de React Router
// key → clave de traducción en translations.js

export const NAV_LINKS = [
  { to: '/bodega',    key: 'nav.la-bodega' },
  { to: '/tienda',    key: 'nav.vinos'     },
  { to: '/maridajes', key: 'nav.maridajes' },
  { to: '/nosotros',  key: 'nav.nosotros'  },
  { to: '/visita',    key: 'nav.visitas'   },
  { to: '/blog',      key: 'nav.blog'      },
  { to: '/contacto',  key: 'nav.contacto'  },
]

// URLs externas — únicamente redes sociales
export const LINKS = {
  instagram: 'https://www.instagram.com/elhatoyelgarabato',
  facebook:  'https://www.facebook.com/elhatoyelgarabato',
  youtube:   'https://www.youtube.com/@elhatoyelgarabato.nuestrac4070',
}
