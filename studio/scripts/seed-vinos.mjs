// Seed: crea o reemplaza los 7 vinos en Sanity.
// Ejecutar desde studio/:
//   SANITY_AUTH_TOKEN=skTuToken node scripts/seed-vinos.mjs

import { createClient } from '@sanity/client'

const token = process.env.SANITY_AUTH_TOKEN
if (!token) { console.error('Falta SANITY_AUTH_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'rw1g8gn6',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token,
  useCdn:    false,
})

const VINOS = [
  {
    _id:      'vino-cotexa-2020',
    _type:    'vino',
    nombre:   'Cotexa 2020',
    slug:     { _type: 'slug', current: 'cotexa-2020' },
    tag:      { es: 'Tinto · Juan García',             en: 'Red · Juan García'       },
    varietal: { es: 'Juan García · Viñas centenarias',  en: 'Juan García · Old Vines' },
    precio:   '14,00',
    href:     'https://elhatoyelgarabato.com/producto/cotexa-2020/',
    featured: true,
    order:    1,
    descripcion: {
      es: 'Cotexa busca mostrar el viñedo viejo de Arribes y su tradicional mezcla de variedades locales en pequeñas viñas, se elabora mediante pisado de la uva (sí las uvas llegan y las pisamos en barreños de 1000 kg) una vez pisado la fermentación es espontánea (es decir no se añaden levaduras) todos los días mojamos el sombrero, que es la parte sólida de pieles y pepitas que aporta color al vino y a la que tratamos con mucho cuidado para extraer de ella sólo lo que nos interesa. Tiene una maceración con pieles de cuatro días y después pasa a barricas de roble francés durante siete meses. Como todos nuestros vinos es una producción muy pequeñita lo que lo hace exclusivo. Sin filtrar, ni clarificar.',
      en: 'Cotexa seeks to express the old vineyards of Arribes and their traditional blend of local varieties from small plots. Whole-bunch foot-treading in 1000 kg vats, spontaneous fermentation without added yeasts, daily pumping over, four-day skin maceration, then seven months in French oak barrels. Like all our wines, production is very small, making it exclusive. Unfiltered and unfined.',
    },
    cata: {
      visual:    { es: 'Ciruela profunda con ribete rubí. Limpio y brillante.',                                                                                                               en: 'Deep plum with ruby rim. Clean and bright.'                                                                                         },
      olfativa:  { es: 'Frutas jugosas, notas de ciruela, cereza y frutos del bosque. Con un carácter mineral muy marcado que proviene de los suelos de arenas graníticas y pizarra de los que proviene.',  en: 'Juicy fruit, notes of plum, cherry and forest berries. A strong mineral character from the granite sand and slate soils.'          },
      gustativa: { es: 'Vino largo y fresco, frutal con un toque terroso y herbal.',                                                                                                          en: 'Long and fresh, fruity with an earthy, herbal edge.'                                                                                },
    },
    analitica: {
      grado: '12%', ph: '3,67', acidezTotal: '4,24 g/l',
      acidezVolatil: '0,7 g/l', azucar: '0,1 g/l', so2: '36 mg/l',
    },
  },
  {
    _id:      'vino-de-buena-jera-2022',
    _type:    'vino',
    nombre:   'De Buena Jera 2022',
    slug:     { _type: 'slug', current: 'de-buena-jera-2022' },
    tag:      { es: 'Tinto · Crianza',        en: 'Red · Aged'            },
    varietal: { es: 'Juan García · Ecológico', en: 'Juan García · Organic' },
    precio:   '30,00',
    href:     'https://elhatoyelgarabato.com/producto/de-buena-jera-2018/',
    featured: true,
    order:    2,
    descripcion: {
      es: 'De Buena Jera es uno de nuestros vinos de parcela, es decir de los que elaboramos partiendo únicamente de las uvas de una parcela de viñedo muy viejo. Procede de una viña que para nosotros es especial ya que es la única que poseemos en propiedad (el resto es arrendado) y fue plantada por nuestro bisabuelo hace 100 años. Pretendemos que el vino cuente su origen y su añada: viña vieja en la frontera de la DO y su zona más alta, sobre arcillas y canto rodado, variedades rústicas y despreciadas pero con personalidad y modales elegantes.',
      en: 'De Buena Jera is one of our single-vineyard wines, made exclusively from the grapes of one very old plot. It comes from a vineyard that is special to us — the only one we own outright (the rest are leased), planted by our great-grandfather a hundred years ago. We want the wine to speak of its origins: old vines on the edge of the DO at its highest elevation, on clay and river pebbles, from rustic and underrated varieties with personality and elegant manners.',
    },
    cata: {
      visual:    { es: 'Ciruela profunda con ribete rubí. Limpio y brillante.',                                                                                                               en: 'Deep plum with ruby rim. Clean and bright.'                                                                                },
      olfativa:  { es: 'Frutas jugosas, notas de ciruela, cereza y frutos del bosque. Con un carácter mineral muy marcado que proviene de los suelos de arenas graníticas y pizarra de los que proviene.',  en: 'Juicy fruit, notes of plum, cherry and forest berries. A strong mineral character from the granite sand and slate soils.' },
      gustativa: { es: 'Vino largo y fresco, frutal con un toque terroso y herbal.',                                                                                                          en: 'Long and fresh, fruity with an earthy, herbal edge.'                                                                       },
    },
    analitica: {
      grado: '12,9%', ph: '3,54', azucar: 'Menos de 1 g/l',
    },
  },
  {
    _id:      'vino-eclectico-lias-2023',
    _type:    'vino',
    nombre:   'Ecléctico, lias. 2023',
    slug:     { _type: 'slug', current: 'eclectico-lias-2023' },
    tag:      { es: 'Blanco · Sobre lías',          en: 'White · Sur Lie'            },
    varietal: { es: 'Puesta en Cruz · Sin filtrar',  en: 'Puesta en Cruz · Unfiltered' },
    precio:   '14,00',
    href:     'https://elhatoyelgarabato.com/producto/eclectico-lias-2022/',
    featured: true,
    order:    3,
    descripcion: {
      es: 'Elaborado con variedades locales, escasas y en peligro de extinción. Este vino pretende expresar variedad. Prensado directo, fermentación espontánea en depósito y 8 meses de crianza en depósito sobre sus lías.',
      en: 'Made from local varieties that are scarce and endangered. This wine aims to express the variety. Direct pressing, spontaneous fermentation in tank and 8 months ageing on its lees in tank.',
    },
    cata: {
      visual:    { es: 'Vino de color amarillo pajizo verdoso, limpio y brillante. Aunque es un vino que se embotella sin clarificar y puede presentar sedimentos naturales.',                                                                                                                      en: 'Pale greenish-yellow, clean and bright. As an unfiltered wine it may show natural sediment.'                                                                                                                                                    },
      olfativa:  { es: 'Vino de expresión media y frescura en nariz, fruta blanca fresca, con un fondo mineral derivado de su terruño granítico, aparecen ligeros aromas de fruta tropical. Complejidad media.',                                                                                    en: 'Medium-expressive and fresh on the nose, fresh white fruit with a mineral backbone from its granitic terroir, with hints of tropical fruit. Medium complexity.'                                                                                   },
      gustativa: { es: 'Directo y de gran longitud en boca en base a una acidez natural muy fresca propia de la variedad. Aparece una sorprendente salinidad que acentúan las sensaciones minerales y que se encuentra acompañada de fruta blanca.',                                                 en: 'Direct and persistent, with a very fresh natural acidity characteristic of the variety. A surprising salinity amplifies the mineral sensations, accompanied by white fruit.'                                                                     },
    },
    analitica: {
      grado: '12,8%', ph: '3,2', acidezTotal: '6,7 g/l',
      acidezVolatil: '0,2 g/l', azucar: '0,1 g/l', so2: '42 mg/l',
    },
  },
  {
    _id:      'vino-eclectico-barrica-2023',
    _type:    'vino',
    nombre:   'Ecléctico. Blanco Barrica 2023',
    slug:     { _type: 'slug', current: 'eclectico-barrica-2023' },
    tag:      { es: 'Blanco · Barrica',               en: 'White · Barrel'             },
    varietal: { es: 'Puesta en Cruz · Roble francés',  en: 'Puesta en Cruz · French oak' },
    precio:   '17,00',
    href:     'https://elhatoyelgarabato.com/producto/eclectico-blanco-con-crianza-en-barrica-de-roble-frances/',
    featured: false,
    order:    4,
    descripcion: {
      es: "Elaborado con variedades locales, escasas y en peligro de extinción de las que no existen vinos en el mercado. Este vino pretende expresar variedad. Prensado directo, fermentación espontánea en depósito y 8 meses de crianza sobre sus lías con paso por barrica de roble francés. Alcanzó el Top 100 Value Wines 2025 de James Suckling con 94 puntos.",
      en: "Made from local varieties that are scarce, endangered and otherwise absent from the market. This wine aims to express the variety. Direct pressing, spontaneous fermentation in tank and 8 months ageing on its lees with time in French oak barrels. Ranked in James Suckling's Top 100 Value Wines 2025 with 94 points.",
    },
    cata: {
      visual:    { es: 'Vino de color amarillo pajizo verdoso, limpio y brillante. Aunque es un vino que se embotella sin clarificar y puede presentar sedimentos naturales.',                                                                                                                      en: 'Pale greenish-yellow, clean and bright. As an unfiltered wine it may show natural sediment.'                                                                                                                                                    },
      olfativa:  { es: 'Vino de expresión media y frescura en nariz, fruta blanca fresca, con un fondo mineral derivado de su terruño granítico, aparecen ligeros aromas de fruta tropical. Complejidad media.',                                                                                    en: 'Medium-expressive and fresh on the nose, fresh white fruit with a mineral backbone from its granitic terroir, with hints of tropical fruit. Medium complexity.'                                                                                   },
      gustativa: { es: 'Directo y de gran longitud en boca en base a una acidez natural muy fresca propia de la variedad. Aparece una sorprendente salinidad que acentúan las sensaciones minerales y que se encuentra acompañada de fruta blanca.',                                                 en: 'Direct and persistent, with a very fresh natural acidity characteristic of the variety. A surprising salinity amplifies the mineral sensations, accompanied by white fruit.'                                                                     },
    },
    analitica: {
      grado: '12,8%', ph: '3,2', acidezTotal: '6,7 g/l',
      acidezVolatil: '0,2 g/l', azucar: '0,1 g/l', so2: '42 mg/l',
    },
  },
  {
    _id:      'vino-li-2022',
    _type:    'vino',
    nombre:   'Li 2022',
    slug:     { _type: 'slug', current: 'li-2022' },
    tag:      { es: 'Rosado · Ecológico',      en: 'Rosé · Organic'        },
    varietal: { es: 'Juan García · Ecológico',  en: 'Juan García · Organic' },
    precio:   '14,00',
    href:     'https://elhatoyelgarabato.com/producto/li/',
    featured: false,
    order:    5,
    descripcion: {
      es: 'La Li es el rosado de nuestra bodega, elaborado con una única viña de más de 80 años de la variedad Juan García. Se elabora mediante prensado directo de la uva, fermentación espontánea y sin filtrar ni clarificar. La elaboración es por tanto muy respetuosa con las uvas de alta calidad que tenemos en nuestras viñas.',
      en: 'Li is our winery\'s rosé, made from a single vineyard of over 80-year-old Juan García vines. Direct pressing, spontaneous fermentation and bottled unfiltered and unfined — a process that fully respects the quality of our grapes.',
    },
    cata: {
      visual:    { es: 'Color rosa grosella, limpio y brillante. Puede presentar algún sedimento ya que es un vino que no ha sido clarificado ni filtrado para preservar sus características naturales.',  en: 'Gooseberry rosé, clean and bright. May show some natural sediment as the wine has not been clarified or filtered in order to preserve its natural character.' },
      olfativa:  { es: 'Vino complejo con aromas a frutos rojos y pera.',                                                                                                                                  en: 'Complex wine with aromas of red fruit and pear.'                                                                                                             },
      gustativa: { es: 'Vino fresco, final con sutiles sensaciones golosas en boca.',                                                                                                                      en: 'Fresh wine with subtle, pleasing sweetness on the finish.'                                                                                                    },
    },
    analitica: {
      grado: '12,5%', ph: '3,18', acidezTotal: '6,7 g/l',
      acidezVolatil: '0,2 g/l', azucar: '0,3 g/l', so2: '42 mg/l',
    },
  },
  {
    _id:      'vino-otro-cuento-2023',
    _type:    'vino',
    nombre:   'Otro cuento 2023',
    slug:     { _type: 'slug', current: 'otro-cuento-2023' },
    tag:      { es: 'Blanco · Ecológico',      en: 'White · Organic'        },
    varietal: { es: 'Doña Blanca · Ecológico',  en: 'Doña Blanca · Organic'  },
    precio:   '17,50',
    href:     'https://elhatoyelgarabato.com/producto/otro-cuento-2021/',
    featured: false,
    order:    6,
    descripcion: {
      es: 'Otro cuento es nuestro vino de territorio, elaborado con viñas muy viejas (más de 100 años) de la variedad Doña Blanca. Se elabora mediante prensado directo de la uva, fermentación espontánea y sin filtrar ni clarificar. Un vino que nace de la casualidad de tener uvas blancas en el viñedo viejo y que, como muchas casualidades de la vida, nos ha traído algo de lo que estamos muy orgullosos y que todos los años se agota.',
      en: 'Otro cuento is our terroir wine, made from very old vines (over 100 years) of the Doña Blanca variety. Direct pressing, spontaneous fermentation and bottled unfiltered and unfined. A wine born from the happy accident of having white grapes in the old vineyard — one that, like many of life\'s happy accidents, has brought us something we are very proud of and that sells out every year.',
    },
    cata: {
      visual:    { es: 'Vino de color amarillo verdoso dorado, limpio y brillante. Se embotella sin clarificar y puede presentar sedimentos naturales.',                                                                                                                                              en: 'Golden greenish-yellow, clean and bright. Bottled unfiltered and may show natural sediment.'                                                                                                                                                    },
      olfativa:  { es: 'Vino muy expresivo, complejo, con aromas minerales de su terruño granítico, aromas de fruta de hueso, flores y monte acompañados por aromas cremosos de panadería y mantequilla derivados de una corta crianza en barrica.',                                                en: 'Very expressive and complex, with mineral aromas from its granitic terroir, stone fruit, wildflowers and garrigue, accompanied by creamy, buttery and bakery notes from short barrel ageing.'                                                    },
      gustativa: { es: 'Vino largo y fresco, con un excelente volumen en boca en la que encontramos las sensaciones minerales y frutales de la fase olfativa.',                                                                                                                                     en: 'Long and fresh with excellent body, carrying the mineral and fruit sensations of the nose through to a persistent finish.'                                                                                                                       },
    },
    analitica: {
      grado: '12,5%', ph: '3,18', acidezTotal: '6,7 g/l',
      acidezVolatil: '0,2 g/l', azucar: '0,3 g/l', so2: '42 mg/l',
    },
  },
  {
    _id:      'vino-sin-blanca-2018',
    _type:    'vino',
    nombre:   'Sin Blanca 2018',
    slug:     { _type: 'slug', current: 'sin-blanca-2018' },
    tag:      { es: 'Tinto · Guarda',     en: 'Red · Aged'      },
    varietal: { es: 'Juan García',         en: 'Juan García'     },
    precio:   '17,50',
    href:     'https://elhatoyelgarabato.com/producto/sin-blanca-2018/',
    featured: false,
    order:    7,
    descripcion: {
      es: 'Sin Blanca es el buque insignia de los tintos de nuestra bodega, elaborado con viñas muy viejas (más de 80 años) en el que se incluyen todas las variedades presentes en la viña: Juan García suele presentarse en el 80%, acompañada de Bruñal, Bastardillo y Rufete. Se elabora mediante pisado de la uva en barreños de 1000 kg, fermentación espontánea sin levaduras añadidas, mojando el sombrero a diario. Como todos nuestros vinos, sin filtrar ni clarificar.',
      en: 'Sin Blanca is the flagship red of our winery, made from very old vines (over 80 years) including all the varieties present in the vineyard: Juan García typically makes up 80%, alongside Bruñal, Bastardillo and Rufete. Foot-treading in 1000 kg vats, spontaneous fermentation without added yeasts, daily pumping over. Like all our wines, unfiltered and unfined.',
    },
    cata: {
      visual:    { es: 'Ciruela profunda con ribete rubí. Limpio y brillante.',                                                                                                               en: 'Deep plum with ruby rim. Clean and bright.'                                                                                },
      olfativa:  { es: 'Frutas jugosas, notas de ciruela, cereza y frutos del bosque. Con un carácter mineral muy marcado que proviene de los suelos de arenas graníticas y pizarra de los que proviene.',  en: 'Juicy fruit, notes of plum, cherry and forest berries. A strong mineral character from the granite sand and slate soils.' },
      gustativa: { es: 'Vino largo y fresco, frutal con un toque terroso y herbal.',                                                                                                          en: 'Long and fresh, fruity with an earthy, herbal edge.'                                                                       },
    },
    analitica: {
      grado: '13,5%', ph: '3,4', acidezTotal: '5,30 g/l',
      acidezVolatil: '0,42 g/l', azucar: '0,5 g/l', so2: '38 mg/l',
    },
  },
]

async function seed() {
  console.log('Borrando vinos existentes...')
  const existentes = await client.fetch(`*[_type == "vino"]._id`)
  for (const id of existentes) {
    await client.delete(id)
    console.log(`  - borrado ${id}`)
  }

  console.log(`\nCreando ${VINOS.length} vinos...`)
  for (const vino of VINOS) {
    try {
      await client.create(vino)
      console.log(`✓ ${vino.nombre}`)
    } catch (err) {
      console.error(`✗ ${vino.nombre}: ${err.message}`)
    }
  }
  console.log('\nListo. Añade las imágenes desde el Studio en localhost:3333')
}

seed()
