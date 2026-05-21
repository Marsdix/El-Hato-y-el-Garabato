// Seed: crea o reemplaza los datos de visitas en Sanity.
// Ejecutar desde studio/:
//   SANITY_AUTH_TOKEN=skTuToken node scripts/seed-visitas.mjs

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

const INTRO = [
  {
    _id:   'visita-intro-0',
    _type: 'visitaIntro',
    es: 'En El Hato y el Garabato hacemos visitas durante todo el año. Puedes elegir la visita que más se ajuste a tus planes, tus conocimientos, inquietudes, la familia o grupo de amigos, visitar nuestras viñas y disfrutar de una cata con amigos en un viñedo centenario.',
    en: 'At El Hato y el Garabato we run visits all year round. You can choose the visit that best fits your plans, your knowledge and interests, whether you\'re visiting with family or a group of friends, touring our vineyards or enjoying a tasting with friends among century-old vines.',
  },
  {
    _id:   'visita-intro-1',
    _type: 'visitaIntro',
    es: 'Somos un equipo pequeño, por lo que necesitamos que nos avises para organizar tu visita. Si eres una persona previsora puedes hacer la reserva a través del enlace; si sólo quedan unas horas para tu visita, escríbenos al 685 50 15 61, ¡haremos todo lo posible por atenderte!',
    en: 'We\'re a small team, so we need you to let us know in advance to organise your visit. If you\'re a planner, you can book through the link; if your visit is just a few hours away, message us at 685 50 15 61 — we\'ll do our best to help!',
  },
]

const EXPERIENCIAS = [
  {
    _id:   'experiencia-visita-bodega',
    _type: 'experiencia',
    id:    { _type: 'slug', current: 'visita-bodega' },
    num:   '01',
    titulo: { es: 'Visita Bodega', en: 'Winery Visit' },
    descripcion: {
      es: 'Disfruta de los vinos del Hato y el Garabato guiados por la conversación de Jose o Liliana. Un paseo por la historia del proyecto, la zona y las elaboraciones.',
      en: 'Enjoy the wines of El Hato y el Garabato guided by conversation with Jose or Liliana. A journey through the history of the project, the area and the winemaking.',
    },
    detalles: [
      { _key: 'k0', es: 'Límite de aforo',           en: 'Capacity limit'             },
      { _key: 'k1', es: 'Duración estimada: 1 hora',  en: 'Estimated duration: 1 hour' },
    ],
    precio: 18,
    href:   'https://elhatoyelgarabato.com/visitas/visita-bodega/',
    order:  1,
  },
  {
    _id:   'experiencia-visita-vina-bodega',
    _type: 'experiencia',
    id:    { _type: 'slug', current: 'visita-vina-bodega' },
    num:   '02',
    titulo: { es: 'Visita Viña y Bodega', en: 'Vineyard & Winery Visit' },
    descripcion: {
      es: 'Si dispones de más tiempo te recomendamos esta visita. Incluye el viñedo: allí disfrutaremos de una cata con amigos, charlaremos sobre la zona y nuestras elaboraciones para luego trasladarnos a la bodega.',
      en: 'If you have more time, we recommend this visit. It includes the vineyard: there we\'ll enjoy a tasting with friends, chat about the area and our winemaking, and then head to the winery.',
    },
    detalles: [
      { _key: 'k0', es: 'Incluye demostración de trabajos en viña', en: 'Includes demonstration of vineyard work' },
      { _key: 'k1', es: 'Duración estimada: 2 horas',               en: 'Estimated duration: 2 hours'             },
    ],
    precio: 25,
    href:   'https://elhatoyelgarabato.com/visitas/visita-vina-y-bodega/',
    order:  2,
  },
]

async function seed() {
  // Borrar intro existente
  console.log('Borrando intro existente...')
  const introIds = await client.fetch(`*[_type == "visitaIntro"]._id`)
  for (const id of introIds) {
    await client.delete(id)
    console.log(`  - borrado ${id}`)
  }

  // Borrar experiencias existentes
  console.log('Borrando experiencias existentes...')
  const expIds = await client.fetch(`*[_type == "experiencia"]._id`)
  for (const id of expIds) {
    await client.delete(id)
    console.log(`  - borrado ${id}`)
  }

  // Crear intro
  console.log(`\nCreando ${INTRO.length} párrafos de intro...`)
  for (const doc of INTRO) {
    try {
      await client.create(doc)
      console.log(`✓ ${doc._id}`)
    } catch (err) {
      console.error(`✗ ${doc._id}: ${err.message}`)
    }
  }

  // Crear experiencias
  console.log(`\nCreando ${EXPERIENCIAS.length} experiencias...`)
  for (const exp of EXPERIENCIAS) {
    try {
      await client.create(exp)
      console.log(`✓ ${exp.titulo.es}`)
    } catch (err) {
      console.error(`✗ ${exp.titulo.es}: ${err.message}`)
    }
  }

  console.log('\nListo.')
}

seed()
