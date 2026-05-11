// ─── CATÁLOGO DE VINOS ────────────────────────────────────────────
// Para añadir un vino nuevo: copia uno de los objetos y rellena los campos.
// Las imágenes deben estar en public/images/ y la ruta será /images/nombre.jpg
// Proporción recomendada: vertical 3:4, mínimo 800×1066px, JPEG.

export const VINOS = [
  {
    id: 'eclectico-barrica',
    tag: 'Tinto · Barrica',
    nombre: 'Ecléctico Barrica',
    varietal: 'Juan García · Rufete · Bruñal',
    href: 'https://elhatoyelgarabato.com/tienda/',
    // IMAGEN: foto de la botella "Ecléctico Barrica" en bodega o sobre fondo neutro
    // → reemplazar por /images/vino-eclectico-barrica.jpg
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/06/vinos-1024x577.jpeg',
  },
  {
    id: 'de-buena-jera',
    tag: 'Tinto · Crianza',
    nombre: 'De Buena Jera',
    varietal: 'Juan García · Viñas centenarias',
    href: 'https://elhatoyelgarabato.com/tienda/',
    // IMAGEN ⚠️: actualmente usa foto del equipo — cambiar
    // → reemplazar por /images/vino-de-buena-jera.jpg
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/06/equipo-1024x819.jpeg',
  },
  {
    id: 'eclectico-coleccion',
    tag: 'Colección · Microelaboraciones',
    nombre: 'Ecléctico Colección',
    varietal: 'Rufete Blanco · Malvasía · Puesta del Sol',
    href: 'https://elhatoyelgarabato.com/tienda/',
    // IMAGEN ⚠️: actualmente usa la foto del hero — cambiar
    // → reemplazar por /images/vino-eclectico-coleccion.jpg
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/06/slider-home.jpeg',
  },
]
