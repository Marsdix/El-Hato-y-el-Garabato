// ─── CONTENIDO: VISITA BODEGA ─────────────────────────────────────────
// Todos los campos de texto son objetos {es, en} para internacionalización

export const VISITA_INTRO = [
  {
    es: 'En El Hato y el Garabato hacemos visitas durante todo el año. Puedes elegir la visita que más se ajuste a tus planes, tus conocimientos, inquietudes, la familia o grupo de amigos, visitar nuestras viñas y disfrutar de una cata con amigos en un viñedo centenario.',
    en: 'At El Hato y el Garabato we run visits all year round. You can choose the visit that best fits your plans, your knowledge and interests, whether you\'re visiting with family or a group of friends, touring our vineyards or enjoying a tasting with friends among century-old vines.',
  },
  {
    es: 'Somos un equipo pequeño, por lo que necesitamos que nos avises para organizar tu visita. Si eres una persona previsora puedes hacer la reserva a través del enlace; si sólo quedan unas horas para tu visita, escríbenos al 685 50 15 61, ¡haremos todo lo posible por atenderte!',
    en: 'We\'re a small team, so we need you to let us know in advance to organise your visit. If you\'re a planner, you can book through the link; if your visit is just a few hours away, message us at 685 50 15 61 — we\'ll do our best to help!',
  },
]

export const EXPERIENCIAS = [
  {
    id: 'visita-bodega',
    num: '01',
    titulo:     { es: 'Visita Bodega',       en: 'Winery Visit'           },
    descripcion:{
      es: 'Disfruta de los vinos del Hato y el Garabato guiados por la conversación de Jose o Liliana. Un paseo por la historia del proyecto, la zona y las elaboraciones.',
      en: 'Enjoy the wines of El Hato y el Garabato guided by conversation with Jose or Liliana. A journey through the history of the project, the area and the winemaking.',
    },
    detalles: [
      { es: 'Límite de aforo',         en: 'Capacity limit'             },
      { es: 'Duración estimada: 1 hora', en: 'Estimated duration: 1 hour' },
    ],
    precio: 18,
    href: '/visita/bodega',
  },
  {
    id: 'visita-vina-bodega',
    num: '02',
    titulo:     { es: 'Visita Viña y Bodega',  en: 'Vineyard & Winery Visit' },
    descripcion:{
      es: 'Si dispones de más tiempo te recomendamos esta visita. Incluye el viñedo: allí disfrutaremos de una cata con amigos, charlaremos sobre la zona y nuestras elaboraciones para luego trasladarnos a la bodega.',
      en: 'If you have more time, we recommend this visit. It includes the vineyard: there we\'ll enjoy a tasting with friends, chat about the area and our winemaking, and then head to the winery.',
    },
    detalles: [
      { es: 'Incluye demostración de trabajos en viña', en: 'Includes demonstration of vineyard work' },
      { es: 'Duración estimada: 2 horas',               en: 'Estimated duration: 2 hours'             },
    ],
    precio: 25,
    href: '/visita/vina-bodega',
  },
]
