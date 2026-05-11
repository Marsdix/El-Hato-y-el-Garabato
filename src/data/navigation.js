// ─── LINKS DE NAVEGACIÓN ──────────────────────────────────────────
// href  → ancla en Home (scroll)
// to    → ruta de React Router (página propia)
// Cuando una sección pase a ser página, reemplazar href por to.

export const NAV_LINKS = [
  { href: '#bodega',  label: 'La Bodega' },
  { href: '#vinos',   label: 'Vinos'     },
  { to: '/nosotros',  label: 'Nosotros'  },
  { href: '#visita',  label: 'Visitas'   },
  { href: '#contacto',label: 'Contacto'  },
]

// URLs externas — cambiar aquí si cambian los enlaces
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
