// ─── LINKS DE NAVEGACIÓN ──────────────────────────────────────────────
// to   → ruta interna de React Router
// href → URL externa (abre en la misma pestaña con rel noopener cuando es externo)

export const NAV_LINKS = [
  { to: '/bodega',   label: 'La Bodega' },
  { to: '/tienda',   label: 'Vinos'     },
  { to: '/nosotros', label: 'Nosotros'  },
  { to: '/visita',   label: 'Visitas'   },
  { to: '/contacto', label: 'Contacto'  },
]

// URLs externas — solo para links de compra y redes sociales
export const LINKS = {
  tienda:     'https://elhatoyelgarabato.com/tienda/',
  bodegaWeb:  'https://elhatoyelgarabato.com/bodega-y-vinas/',
  equipo:     'https://elhatoyelgarabato.com/quienes-somos/',
  visita:     'https://elhatoyelgarabato.com/visita-a-la-bodega-y-vina/',
  maridajes:  'https://buscador-vino.elhatoyelgarabato.com/',
  blog:       'https://elhatoyelgarabato.com/blog/',
  legal:      'https://elhatoyelgarabato.com/aviso-legal/',
  terminos:   'https://elhatoyelgarabato.com/terminos-y-condiciones/',
  contactoCH: 'https://elhatoyelgarabato.com/contacto-ch/',
  instagram:  'https://www.instagram.com/elhatoyelgarabato/',
  facebook:   'https://www.facebook.com/elhatoyelgarabato',
  youtube:    'https://www.youtube.com/@elhatoyelgarabato.nuestrac4070',
}
