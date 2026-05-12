// ─── CATÁLOGO DE VINOS ────────────────────────────────────────────────
// featured: true → aparece en la grid de Home (los primeros 3)
// Todos aparecen en la página /tienda
// Imágenes gestionadas en src/data/images.js → IMAGES.vinos

import { IMAGES } from './images'

export const VINOS = [
  {
    id: 'cotexa-2020',
    tag: 'Tinto · Juan García',
    nombre: 'Cotexa 2020',
    varietal: 'Juan García · Viñas centenarias',
    precio: '14,00',
    href: 'https://elhatoyelgarabato.com/producto/cotexa-2020/',
    imagen: IMAGES.tienda.vinos.cotexa,
    featured: true,
  },
  {
    id: 'de-buena-jera-2022',
    tag: 'Tinto · Crianza',
    nombre: 'De Buena Jera 2022',
    varietal: 'Juan García · Ecológico',
    precio: '30,00',
    href: 'https://elhatoyelgarabato.com/producto/de-buena-jera-2018/',
    imagen: IMAGES.tienda.vinos.deBuenaJera,
    featured: true,
  },
  {
    id: 'eclectico-lias-2023',
    tag: 'Blanco · Sobre lías',
    nombre: 'Ecléctico, lias. 2023',
    varietal: 'Puesta en Cruz · Sin filtrar',
    precio: '14,00',
    href: 'https://elhatoyelgarabato.com/producto/eclectico-lias-2022/',
    imagen: IMAGES.tienda.vinos.eclecticoLias,
    featured: true,
  },
  {
    id: 'eclectico-barrica-2023',
    tag: 'Blanco · Barrica',
    nombre: 'Ecléctico. Blanco Barrica 2023',
    varietal: 'Puesta en Cruz · Roble francés',
    precio: '17,00',
    href: 'https://elhatoyelgarabato.com/producto/eclectico-blanco-con-crianza-en-barrica-de-roble-frances/',
    imagen: IMAGES.tienda.vinos.eclecticoBarrica,
    featured: false,
  },
  {
    id: 'li-2022',
    tag: 'Tinto · Ecológico',
    nombre: 'Li 2022',
    varietal: 'Juan García · Ecológico',
    precio: '14,00',
    href: 'https://elhatoyelgarabato.com/producto/li/',
    imagen: IMAGES.tienda.vinos.li,
    featured: false,
  },
  {
    id: 'otro-cuento-2023',
    tag: 'Blanco · Ecológico',
    nombre: 'Otro cuento 2023',
    varietal: 'Doña Blanca · Ecológico',
    precio: '17,50',
    href: 'https://elhatoyelgarabato.com/producto/otro-cuento-2021/',
    imagen: IMAGES.tienda.vinos.otroCuento,
    featured: false,
  },
  {
    id: 'sin-blanca-2018',
    tag: 'Tinto',
    nombre: 'Sin Blanca 2018',
    varietal: 'Juan García',
    precio: '17,50',
    href: 'https://elhatoyelgarabato.com/producto/sin-blanca-2018/',
    imagen: IMAGES.tienda.vinos.sinBlanca,
    featured: false,
  },
]
