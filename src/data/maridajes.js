import { IMAGES } from './images'

export const CATEGORIAS = [
  { id: 'embutidos',      label: { es: 'Embutidos',      en: 'Charcuterie'  } },
  { id: 'tapas',          label: { es: 'Tapas',          en: 'Tapas'        } },
  { id: 'carnes-blancas', label: { es: 'Carnes blancas', en: 'White meats'  } },
  { id: 'carnes-rojas',   label: { es: 'Carnes rojas',   en: 'Red meats'    } },
  { id: 'quesos-curados', label: { es: 'Quesos curados', en: 'Aged cheeses' } },
  { id: 'pescado',        label: { es: 'Pescado',        en: 'Fish'         } },
  { id: 'mariscos',       label: { es: 'Mariscos',       en: 'Seafood'      } },
  { id: 'ensaladas',      label: { es: 'Ensaladas',      en: 'Salads'       } },
  { id: 'pasta',          label: { es: 'Pasta',          en: 'Pasta'        } },
  { id: 'pizza',          label: { es: 'Pizza',          en: 'Pizza'        } },
  { id: 'comida-picante', label: { es: 'Comida picante', en: 'Spicy food'   } },
]

const TEMP = {
  fresco: {
    label: { es: 'Fresco',            en: 'Fresh' },
    desc:  { es: 'Algo más fresco que la temperatura ambiente. Mete el vino en la nevera unos 15 minutos antes de servirlo.',
              en: 'Slightly cooler than room temperature. Refrigerate the wine for about 15 minutes before serving.' },
  },
  ligero: {
    label: { es: 'Ligeramente fresco', en: 'Lightly chilled' },
    desc:  { es: 'Un poco por debajo de la temperatura ambiente.',
              en: 'Slightly below room temperature.' },
  },
  frio: {
    label: { es: 'Frío, no helado',   en: 'Cold, not icy' },
    desc:  { es: 'Deja el vino en la nevera unos 30 minutos antes de servirlo.',
              en: 'Refrigerate the wine for about 30 minutes before serving.' },
  },
}

// ─── VIDEO IDs de YouTube ──────────────────────────────────────────
// Añade el ID del vídeo de cada vino (la parte después de "?v=" en la URL)
// Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ → videoId: 'dQw4w9WgXcQ'
// Deja null si el vino no tiene vídeo todavía.

export const MARIDAJES = [
  {
    id:          'cotexa-2020',
    nombre:      'Cotexa 2020',
    tipo:        { es: 'Tinto Joven',    en: 'Young Red'     },
    imagen:      IMAGES.tienda.vinos.cotexa,
    categorias:  ['embutidos', 'tapas', 'carnes-blancas'],
    platos:      {
      es: 'Tortilla de patatas, calamares a la andaluza, ensaladilla rusa, migas, pimientos rellenos, gazpacho andaluz.',
      en: 'Spanish omelette, Andalusian calamari, Russian salad, migas, stuffed peppers, gazpacho.',
    },
    temperatura: TEMP.fresco,
    href:        'https://elhatoyelgarabato.com/producto/cotexa-2020/',
    videoId:     'rBJWLmlmStY',
  },
  {
    id:          'de-buena-jera-2022',
    nombre:      'De Buena Jera 2022',
    tipo:        { es: 'Tinto Crianza',  en: 'Aged Red'      },
    imagen:      IMAGES.tienda.vinos.deBuenaJera,
    categorias:  ['carnes-rojas', 'quesos-curados'],
    platos:      {
      es: 'Cocido madrileño, fabada asturiana, caldereta de cordero, queso manchego curado, chuletón de Ávila, lomo de cerdo adobado.',
      en: 'Madrid stew, Asturian bean stew, lamb caldereta, aged manchego cheese, Ávila ribeye, marinated pork loin.',
    },
    temperatura: TEMP.ligero,
    href:        'https://elhatoyelgarabato.com/producto/de-buena-jera-2018/',
    videoId:     null,
    videoProximo: true,
  },
  {
    id:          'eclectico-barrica-2023',
    nombre:      'Ecléctico. Blanco Barrica 2023',
    tipo:        { es: 'Blanco Barrica', en: 'Barrel White'  },
    imagen:      IMAGES.tienda.vinos.eclecticoBarrica,
    categorias:  ['pescado', 'mariscos', 'ensaladas'],
    platos:      {
      es: 'Paella de mariscos, salpicón de mariscos, ensalada mixta, merluza a la gallega, sardinas asadas, boquerones en vinagre.',
      en: 'Seafood paella, seafood salpicón, mixed salad, Galician-style hake, grilled sardines, anchovies in vinegar.',
    },
    temperatura: TEMP.frio,
    href:        'https://elhatoyelgarabato.com/producto/eclectico-blanco-con-crianza-en-barrica-de-roble-frances/',
    videoId:     'he0BloXmpB8',
  },
  {
    id:          'eclectico-lias-2023',
    nombre:      'Ecléctico, lias. 2023',
    tipo:        { es: 'Blanco sobre lías', en: 'Sur Lie White' },
    imagen:      IMAGES.tienda.vinos.eclecticoLias,
    categorias:  ['pescado', 'mariscos', 'ensaladas'],
    platos:      {
      es: 'Paella de mariscos, salpicón de mariscos, ensalada mixta, merluza a la gallega, sardinas asadas, boquerones en vinagre.',
      en: 'Seafood paella, seafood salpicón, mixed salad, Galician-style hake, grilled sardines, anchovies in vinegar.',
    },
    temperatura: TEMP.frio,
    href:        'https://elhatoyelgarabato.com/producto/eclectico-lias-2022/',
    videoId:     'L85aIN5SiUA',
  },
  {
    id:          'li-2022',
    nombre:      'Li 2022',
    tipo:        { es: 'Rosado',         en: 'Rosé'          },
    imagen:      IMAGES.tienda.vinos.li,
    categorias:  ['pasta', 'pizza', 'comida-picante'],
    platos:      {
      es: 'Tortilla de patatas, calamares a la andaluza, ensaladilla rusa, migas, pimientos rellenos, gazpacho andaluz.',
      en: 'Spanish omelette, Andalusian calamari, Russian salad, migas, stuffed peppers, gazpacho.',
    },
    temperatura: TEMP.fresco,
    href:        'https://elhatoyelgarabato.com/producto/li/',
    videoId:     'Rmh69hj_3JM',
  },
  {
    id:          'otro-cuento-2023',
    nombre:      'Otro cuento 2023',
    tipo:        { es: 'Blanco',         en: 'White'         },
    imagen:      IMAGES.tienda.vinos.otroCuento,
    categorias:  ['pescado', 'mariscos', 'ensaladas'],
    platos:      {
      es: 'Paella de mariscos, salpicón de mariscos, ensalada mixta, merluza a la gallega, sardinas asadas, boquerones en vinagre.',
      en: 'Seafood paella, seafood salpicón, mixed salad, Galician-style hake, grilled sardines, anchovies in vinegar.',
    },
    temperatura: TEMP.frio,
    href:        'https://elhatoyelgarabato.com/producto/otro-cuento-2021/',
    videoId:     'Qdwwtp59JcE',
  },
  {
    id:          'sin-blanca-2018',
    nombre:      'Sin Blanca 2018',
    tipo:        { es: 'Tinto Crianza',  en: 'Aged Red'      },
    imagen:      IMAGES.tienda.vinos.sinBlanca,
    categorias:  ['carnes-rojas', 'quesos-curados'],
    platos:      {
      es: 'Cocido madrileño, fabada asturiana, caldereta de cordero, queso manchego curado, chuletón de Ávila, lomo de cerdo adobado.',
      en: 'Madrid stew, Asturian bean stew, lamb caldereta, aged manchego cheese, Ávila ribeye, marinated pork loin.',
    },
    temperatura: TEMP.ligero,
    href:        'https://elhatoyelgarabato.com/producto/sin-blanca-2018/',
    videoId:     'IVIocLwZbVw',
  },
]
