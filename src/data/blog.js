// ─── ARTÍCULOS DE BLOG ────────────────────────────────────────────────
// Para añadir un nuevo post basta con tocar SOLO este archivo.
//
// Campos obligatorios:
//   id        → slug de la URL (/blog/:id)
//   title     → { es: '...' }  — añade en: '...' si tienes traducción
//   cat       → 'blog.cat.prensa' | 'blog.cat.enoturismo' | 'blog.cat.vinos'
//   date      → 'YYYY-MM-DD'
//   excerpt   → { es: '...' }  — resumen para la tarjeta
//   imagen    → URL o null
//   href      → enlace al artículo original en WordPress
//
// Campos opcionales:
//   readTime  → { es: '3 min de lectura' }
//   tags      → ['tag1', 'tag2']
//   content   → array de bloques (si existe → página interna /blog/:id)
//               Si es null → la tarjeta enlaza externamente a href
//
// Tipos de bloque (en todos: 'en' es opcional, cae al español si falta):
//   { type: 'intro',  es, en? }
//   { type: 'p',      es, en? }
//   { type: 'h2',     es, en? }
//   { type: 'image',  src, caption?: { es, en? } }
//   { type: 'list',   items: [{ es, en? }] }

export const BLOG_POSTS = [
  {
    id:       'planeta-vino',
    title:    {
      es: 'El Hato y el Garabato en Planeta Vino: la esperanza de un paisaje en los Arribes del Duero',
      en: 'El Hato y el Garabato in Planeta Vino: the hope of a landscape in Arribes del Duero',
    },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  {
      es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero con El Hato y el Garabato como protagonista.',
      en: 'Planeta Vino publishes a six-page feature on Arribes del Duero with El Hato y el Garabato as the focus.',
    },
    imagen:   'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/02-planeta.png.png',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-planeta-vino/',
    tags:     ['DO Arribes', 'Planeta Vino', 'prensa', 'Juan García', 'Zamora'],
    content: [
      {
        type: 'image',
        src:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/02-planeta.png.png',
        caption: { es: 'Mención en Planeta Vino', en: 'Featured in Planeta Vino' },
      },
      {
        type: 'intro',
        es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero y sitúa a El Hato y el Garabato como una de las bodegas que están dando esperanza a este paisaje fronterizo. El artículo, titulado «Arribes del Duero: la esperanza de un paisaje», ocupa el bloque central de la revista e incluye fotografías dedicadas de José Manuel Benéitez y Liliana Fernández como protagonistas del relato.',
        en:  'Planeta Vino publishes a six-page feature on Arribes del Duero, placing El Hato y el Garabato among the wineries bringing hope to this border landscape. The article, titled "Arribes del Duero: the hope of a landscape", occupies the central section of the magazine with dedicated photographs of José Manuel Benéitez and Liliana Fernández.',
      },
      {
        type: 'p',
        es: 'Planeta Vino es una de las revistas especializadas en vino de referencia en España. Publicación dirigida a profesionales del sector y aficionados con criterio, sus reportajes de fondo son seguidos por sumilleres, distribuidores, importadores y compradores de toda la cadena del vino español. Que los Arribes del Duero aparezcan en portada —junto a temas como la añada de Rioja y los vinos reducidos— confirma que la denominación ha entrado en el radar de la prensa vinícola nacional.',
        en:  'Planeta Vino is one of Spain\'s leading specialist wine publications, read by sommeliers, distributors, importers and buyers across the trade. The Arribes del Duero appearing on the cover — alongside features on the Rioja vintage and reduced wines — confirms that the DO has entered the national wine press radar.',
      },
      {
        type: 'h2',
        es: 'La esperanza de un paisaje que resiste',
        en: 'The hope of a landscape that endures',
      },
      {
        type: 'p',
        es: 'El reportaje arranca describiendo los Arribes como una zona rara dentro del panorama vitivinícola español, relativamente desconocida y con un pasado marcado por el autoconsumo. La tesis del artículo es clara: lo que durante décadas fue un territorio aislado y olvidado se ha convertido en una de las regiones con mayor potencial de singularidad del país, gracias a un grupo reducido de viñadores que decidieron quedarse o volver.',
        en: 'The feature opens by describing Arribes as an unusual corner of the Spanish wine landscape, relatively unknown and with a past shaped by subsistence winemaking. The article\'s argument is clear: what was for decades an isolated and forgotten territory has become one of the country\'s most singular regions, thanks to a small group of growers who chose to stay or return.',
      },
      {
        type: 'p',
        es: 'El dato que enmarca todo el reportaje es contundente: de las más de cuatro mil hectáreas de viñedo que llegaron a registrarse en la zona, se ha pasado a apenas 270 hectáreas en la actualidad. Esa cifra, lejos de ser solo una estadística de declive, es la medida del valor de cada cepa que sobrevive y de cada bodeguero que apuesta por recuperarlas.',
        en: 'The figure that frames the entire piece is striking: from more than four thousand hectares of vineyard once registered in the area, only around 270 hectares remain today. Far from being just a statistic of decline, that number captures the value of every surviving vine and every producer betting on their recovery.',
      },
      {
        type: 'h2',
        es: 'José Manuel y Liliana, protagonistas del reportaje',
        en: 'José Manuel and Liliana, at the centre of the feature',
      },
      {
        type: 'p',
        es: 'Planeta Vino dedica fotografías individuales a José Manuel Benéitez y a Liliana Fernández, presentándolos como figuras centrales de la nueva generación de los Arribes. En un reportaje que recorre toda la denominación —desde las bodegas históricas de Fermoselle hasta las cooperativas de la vertiente salmantina—, El Hato y el Garabato ocupa un espacio destacado como proyecto que encarna el espíritu del artículo: volver a una tierra difícil para hacer vino con las variedades que nadie arrancó.',
        en: 'Planeta Vino features individual photographs of José Manuel Benéitez and Liliana Fernández, presenting them as central figures of the new Arribes generation. In a feature that covers the entire DO — from the historic cellars of Fermoselle to the cooperatives on the Salamanca side — El Hato y el Garabato is given a prominent place as a project embodying the article\'s spirit: returning to difficult land to make wine with the varieties nobody uprooted.',
      },
      {
        type: 'p',
        es: 'Ambos aparecen retratados junto a sus vinos, en el entorno de la bodega de Formariz: José Manuel en el viñedo y Liliana con la gama de la bodega. Son imágenes que reflejan lo que el artículo narra: una pareja de ingenieros de montes con experiencia internacional que eligió los Arribes para construir su proyecto de vida.',
        en: 'Both are photographed alongside their wines in the setting of the Formariz winery — José Manuel in the vineyard and Liliana with the full range. They are images that reflect what the article tells: a couple of forestry engineers with international experience who chose Arribes to build their life project.',
      },
      {
        type: 'h2',
        es: 'La denominación, las variedades y la Ruta del Vino',
        en: 'The DO, the varieties and the Wine Route',
      },
      {
        type: 'p',
        es: 'El reportaje recorre todos los pilares de los Arribes: la Denominación de Origen, las variedades autóctonas, el enoturismo y el paisaje del cañón del Duero. Planeta Vino dedica secciones específicas a cada uno de ellos:',
        en: 'The feature covers all the pillars of Arribes: the Denomination of Origin, the native varieties, wine tourism and the landscape of the Duero canyon. Planeta Vino dedicates specific sections to each:',
      },
      {
        type: 'list',
        items: [
          {
            es: 'La denominación: historia del Consejo Regulador, situación actual y retos de una DO con apenas 270 hectáreas inscritas.',
            en: 'The DO: history of the Consejo Regulador, current situation and challenges of a denomination with barely 270 registered hectares.',
          },
          {
            es: 'Las variedades: juan garcía, bruñal, puesta en cruz, rufete, bastardillo y las demás uvas autóctonas que el aislamiento histórico preservó intactas.',
            en: 'The varieties: juan garcía, bruñal, puesta en cruz, rufete, bastardillo and the other native grapes that historical isolation preserved intact.',
          },
          {
            es: 'La Ruta del Vino: definida en el artículo como «una de las rutas más bonitas de la Península Ibérica, llena de actividades y la gran desconocida».',
            en: 'The Wine Route: described in the article as "one of the most beautiful routes in the Iberian Peninsula, full of activities and the great unknown".',
          },
          {
            es: 'El crucero fluvial: el recorrido en barco por el Parque Natural, entre cañones de granito, buitres leonados y un Duero sereno.',
            en: 'The river cruise: the boat journey through the Natural Park, between granite canyons, griffon vultures and a tranquil Duero.',
          },
        ],
      },
    ],
  },

  // ── Posts sin página interna todavía (content: null → enlace externo) ──
  {
    id:      'sobremesa',
    title:   {
      es: 'El Hato y el Garabato en Sobremesa: los vinos singulares de los Arribes del Duero',
      en: 'El Hato y el Garabato in Sobremesa: the singular wines of Arribes del Duero',
    },
    cat:     'blog.cat.prensa',
    date:    '2026-04-13',
    excerpt: {
      es: 'La revista Sobremesa dedica un extenso reportaje a los Arribes del Duero y a nuestra forma de hacer vino.',
      en: 'Sobremesa magazine devotes a major feature to Arribes del Duero and our approach to winemaking.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/sobremesa-1024x733.png',
    href:    'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-sobremesa/',
    content: null,
  },
  {
    id:      'elpais',
    title:   {
      es: 'El Hato y el Garabato en El País: los vinos de Sayago que llegan a Japón',
      en: 'El Hato y el Garabato in El País: the wines of Sayago reaching Japan',
    },
    cat:     'blog.cat.prensa',
    date:    '2026-04-13',
    excerpt: {
      es: 'El Hato y el Garabato aparece en El País como uno de los referentes de la gastronomía artesanal de Sayago.',
      en: 'El País highlights El Hato y el Garabato as one of the leading artisan producers of Sayago.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Aparicion-elpais.png',
    href:    'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-el-pais/',
    content: null,
  },
  {
    id:      'hola',
    title:   {
      es: 'El Hato y el Garabato en ¡Hola!: parada recomendada en la ruta por los Arribes del Duero',
      en: 'El Hato y el Garabato in ¡Hola!: a recommended stop on the Arribes del Duero route',
    },
    cat:     'blog.cat.enoturismo',
    date:    '2026-04-13',
    excerpt: {
      es: 'La revista ¡Hola! incluye El Hato y el Garabato en su ruta turística por los Arribes del Duero.',
      en: '¡Hola! magazine includes El Hato y el Garabato in its tourist route through Arribes del Duero.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-105842.png',
    href:    'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-hola/',
    content: null,
  },
  {
    id:      'robert-parker',
    title:   {
      es: 'El Hato y el Garabato en Robert Parker Wine Advocate',
      en: 'El Hato y el Garabato in Robert Parker Wine Advocate',
    },
    cat:     'blog.cat.prensa',
    date:    '2026-04-13',
    excerpt: {
      es: 'El crítico de referencia mundial destaca nuestros vinos como exponente de las variedades autóctonas de Arribes.',
      en: 'The world\'s leading wine critic highlights our wines as exemplars of Arribes del Duero native varieties.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-102900.png',
    href:    'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-robert-parker-wine-advocate/',
    content: null,
  },
  {
    id:      'conde-nast',
    title:   {
      es: 'Los Arribes del Duero, entre los mejores destinos del vino del mundo para 2024 según Condé Nast Traveler',
      en: 'Arribes del Duero among the world\'s best wine destinations for 2024 according to Condé Nast Traveler',
    },
    cat:     'blog.cat.enoturismo',
    date:    '2026-04-13',
    excerpt: {
      es: 'Condé Nast Traveler incluye los Arribes del Duero en su lista de los mejores destinos del vino del mundo.',
      en: 'Condé Nast Traveler includes Arribes del Duero in its list of the world\'s best wine destinations.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-110227-1024x531.png',
    href:    'https://elhatoyelgarabato.com/blog/arribes-del-duero-conde-nast-traveler/',
    content: null,
  },
  {
    id:      'james-suckling',
    title:   {
      es: 'Ecléctico Barrica 2023, en el Top 100 Value Wines 2025 de James Suckling con 94 puntos',
      en: 'Ecléctico Barrica 2023 in James Suckling\'s Top 100 Value Wines 2025 with 94 points',
    },
    cat:     'blog.cat.vinos',
    date:    '2026-04-13',
    excerpt: {
      es: 'El Ecléctico En Barrica 2023 alcanza el puesto 53 del Top 100 Value Wines 2025 del crítico James Suckling.',
      en: 'The Ecléctico En Barrica 2023 ranks 53rd in James Suckling\'s Top 100 Value Wines 2025.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/jamessuckling-1024x327.png',
    href:    'https://elhatoyelgarabato.com/blog/eclectico-barrica-2023-james-suckling/',
    content: null,
  },
  {
    id:      'abc',
    title:   {
      es: 'De Buena Jera en ABC: el tinto con casi 100 años de historia familiar',
      en: 'De Buena Jera in ABC: the red with almost 100 years of family history',
    },
    cat:     'blog.cat.vinos',
    date:    '2026-04-13',
    excerpt: {
      es: 'El periódico ABC dedica un artículo a De Buena Jera, nuestro vino de guarda elaborado con Juan García ecológica.',
      en: 'ABC devotes an article to De Buena Jera, our age-worthy wine made from organic Juan García.',
    },
    imagen:  'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/prensa-abc-v.png',
    href:    'https://elhatoyelgarabato.com/blog/de-buena-jera-en-abc/',
    content: null,
  },
  {
    id:      'la-vanguardia',
    title:   {
      es: 'El Hato y el Garabato en La Vanguardia: el vino de Arribes que rompe el determinismo latitudinal',
      en: 'El Hato y el Garabato in La Vanguardia: the Arribes wine that defies latitudinal determinism',
    },
    cat:     'blog.cat.prensa',
    date:    '2026-04-13',
    excerpt: {
      es: 'La Vanguardia analiza cómo El Hato y el Garabato rompe los estereotipos sobre los vinos del sur peninsular.',
      en: 'La Vanguardia analyses how El Hato y el Garabato challenges stereotypes about wines from southern Iberia.',
    },
    imagen:  null,
    href:    'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-la-vanguardia/',
    content: null,
  },
]
