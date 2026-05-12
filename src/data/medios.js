// ─── LOGOS DE PRENSA ──────────────────────────────────────────────
// Para añadir un medio: añadir objeto { nombre, logo } al array.
// Imágenes gestionadas en src/data/images.js → IMAGES.medios

import { IMAGES } from './images'

export const MEDIOS = [
  { nombre: 'Robert Parker Wine Advocate', logo: IMAGES.nosotros.medios.robertParker  },
  { nombre: 'Condé Nast Traveler',         logo: IMAGES.nosotros.medios.traveler      },
  { nombre: 'Peñín',                       logo: IMAGES.nosotros.medios.penin         },
  { nombre: 'El País',                     logo: IMAGES.nosotros.medios.elPais        },
  { nombre: 'Planeta Vino',               logo: IMAGES.nosotros.medios.planetaVino   },
  { nombre: 'La Vanguardia',              logo: IMAGES.nosotros.medios.laVanguardia  },
  { nombre: 'Sobremesa',                  logo: IMAGES.nosotros.medios.sobremesa     },
  { nombre: 'ABC',                         logo: IMAGES.nosotros.medios.abc           },
  { nombre: 'Spanish Wine Lover',         logo: IMAGES.nosotros.medios.spanishWine   },
  { nombre: 'Hola',                        logo: IMAGES.nosotros.medios.hola          },
]
