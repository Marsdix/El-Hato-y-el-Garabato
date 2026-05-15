// ─── CATÁLOGO DE VINOS ────────────────────────────────────────────────
// featured: true → aparece en la grid de Home (los primeros 3)
// tag y varietal son objetos {es, en} para internacionalización

import { IMAGES } from './images'

export const VINOS = [
  {
    id: 'cotexa-2020',
    tag:     { es: 'Tinto · Juan García',          en: 'Red · Juan García'       },
    nombre:  'Cotexa 2020',
    varietal:{ es: 'Juan García · Viñas centenarias', en: 'Juan García · Old Vines' },
    precio:  '14,00',
    href:    'https://elhatoyelgarabato.com/producto/cotexa-2020/',
    imagen:  IMAGES.tienda.vinos.cotexa,
    featured: true,
  },
  {
    id: 'de-buena-jera-2022',
    tag:     { es: 'Tinto · Crianza',              en: 'Red · Aged'              },
    nombre:  'De Buena Jera 2022',
    varietal:{ es: 'Juan García · Ecológico',       en: 'Juan García · Organic'   },
    precio:  '30,00',
    href:    'https://elhatoyelgarabato.com/producto/de-buena-jera-2018/',
    imagen:  IMAGES.tienda.vinos.deBuenaJera,
    featured: true,
  },
  {
    id: 'eclectico-lias-2023',
    tag:     { es: 'Blanco · Sobre lías',           en: 'White · Sur Lie'         },
    nombre:  'Ecléctico, lias. 2023',
    varietal:{ es: 'Puesta en Cruz · Sin filtrar',  en: 'Puesta en Cruz · Unfiltered' },
    precio:  '14,00',
    href:    'https://elhatoyelgarabato.com/producto/eclectico-lias-2022/',
    imagen:  IMAGES.tienda.vinos.eclecticoLias,
    featured: true,
  },
  {
    id: 'eclectico-barrica-2023',
    tag:     { es: 'Blanco · Barrica',              en: 'White · Barrel'          },
    nombre:  'Ecléctico. Blanco Barrica 2023',
    varietal:{ es: 'Puesta en Cruz · Roble francés', en: 'Puesta en Cruz · French oak' },
    precio:  '17,00',
    href:    'https://elhatoyelgarabato.com/producto/eclectico-blanco-con-crianza-en-barrica-de-roble-frances/',
    imagen:  IMAGES.tienda.vinos.eclecticoBarrica,
    featured: false,
  },
  {
    id: 'li-2022',
    tag:     { es: 'Tinto · Ecológico',             en: 'Red · Organic'           },
    nombre:  'Li 2022',
    varietal:{ es: 'Juan García · Ecológico',        en: 'Juan García · Organic'   },
    precio:  '14,00',
    href:    'https://elhatoyelgarabato.com/producto/li/',
    imagen:  IMAGES.tienda.vinos.li,
    featured: false,
  },
  {
    id: 'otro-cuento-2023',
    tag:     { es: 'Blanco · Ecológico',            en: 'White · Organic'         },
    nombre:  'Otro cuento 2023',
    varietal:{ es: 'Doña Blanca · Ecológico',        en: 'Doña Blanca · Organic'   },
    precio:  '17,50',
    href:    'https://elhatoyelgarabato.com/producto/otro-cuento-2021/',
    imagen:  IMAGES.tienda.vinos.otroCuento,
    featured: false,
  },
  {
    id: 'sin-blanca-2018',
    tag:     { es: 'Tinto',                         en: 'Red'                     },
    nombre:  'Sin Blanca 2018',
    varietal:{ es: 'Juan García',                   en: 'Juan García'             },
    precio:  '17,50',
    href:    'https://elhatoyelgarabato.com/producto/sin-blanca-2018/',
    imagen:  IMAGES.tienda.vinos.sinBlanca,
    featured: false,
  },
]
