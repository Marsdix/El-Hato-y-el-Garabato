// ─── ARTÍCULOS DE BLOG ────────────────────────────────────────────────
// href   → enlace al WordPress original (fallback / referencia)
// cat    → clave de traducción de la categoría
// content→ array de bloques para renderizar el post dentro de la app.
//           Si existe, la tarjeta enlaza a /blog/:id (React).
//           Si es null, la tarjeta enlaza externamente a href.
//
// Tipos de bloque:
//   { type: 'intro',   es, en }          párrafo de apertura destacado
//   { type: 'p',       es, en }          párrafo normal
//   { type: 'h2',      es, en }          subtítulo de sección
//   { type: 'image',   src, caption? }   imagen con pie de foto opcional
//   { type: 'list',    items: [{es,en}] } lista de puntos
//   { type: 'cta',     to, es, en }      llamada a la acción interna

export const BLOG_POSTS = [
  {
    id:         'planeta-vino',
    titleKey:   'blog.post.planeta.title',
    cat:        'blog.cat.prensa',
    date:       '2026-04-13',
    readTime:   { es: '3 min de lectura', en: '3 min read' },
    excerptKey: 'blog.post.planeta.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/02-planeta.png.png',
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-planeta-vino/',
    tags:       ['DO Arribes', 'Planeta Vino', 'prensa', 'Juan García', 'Zamora'],
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
        en:  'The feature opens by describing Arribes as an unusual corner of the Spanish wine landscape, relatively unknown and with a past shaped by subsistence winemaking. The article\'s argument is clear: what was for decades an isolated and forgotten territory has become one of the country\'s most singular regions, thanks to a small group of growers who chose to stay or return.',
      },
      {
        type: 'p',
        es: 'El dato que enmarca todo el reportaje es contundente: de las más de cuatro mil hectáreas de viñedo que llegaron a registrarse en la zona, se ha pasado a apenas 270 hectáreas en la actualidad. Esa cifra, lejos de ser solo una estadística de declive, es la medida del valor de cada cepa que sobrevive y de cada bodeguero que apuesta por recuperarlas.',
        en:  'The figure that frames the entire piece is striking: from more than four thousand hectares of vineyard once registered in the area, only around 270 hectares remain today. Far from being just a statistic of decline, that number captures the value of every surviving vine and every producer betting on their recovery.',
      },
      {
        type: 'h2',
        es: 'José Manuel y Liliana, protagonistas del reportaje',
        en: 'José Manuel and Liliana, at the centre of the feature',
      },
      {
        type: 'p',
        es: 'Planeta Vino dedica fotografías individuales a José Manuel Benéitez y a Liliana Fernández, presentándolos como figuras centrales de la nueva generación de los Arribes. En un reportaje que recorre toda la denominación —desde las bodegas históricas de Fermoselle hasta las cooperativas de la vertiente salmantina—, El Hato y el Garabato ocupa un espacio destacado como proyecto que encarna el espíritu del artículo: volver a una tierra difícil para hacer vino con las variedades que nadie arrancó.',
        en:  'Planeta Vino features individual photographs of José Manuel Benéitez and Liliana Fernández, presenting them as central figures of the new Arribes generation. In a feature that covers the entire DO — from the historic cellars of Fermoselle to the cooperatives on the Salamanca side — El Hato y el Garabato is given a prominent place as a project embodying the article\'s spirit: returning to difficult land to make wine with the varieties nobody uprooted.',
      },
      {
        type: 'p',
        es: 'Ambos aparecen retratados junto a sus vinos, en el entorno de la bodega de Formariz: José Manuel en el viñedo y Liliana con la gama de la bodega. Son imágenes que reflejan lo que el artículo narra: una pareja de ingenieros de montes con experiencia internacional que eligió los Arribes para construir su proyecto de vida.',
        en:  'Both are photographed alongside their wines in the setting of the Formariz winery — José Manuel in the vineyard and Liliana with the full range. They are images that reflect what the article tells: a couple of forestry engineers with international experience who chose Arribes to build their life project.',
      },
      {
        type: 'h2',
        es: 'La denominación, las variedades y la Ruta del Vino',
        en: 'The DO, the varieties and the Wine Route',
      },
      {
        type: 'p',
        es: 'El reportaje recorre todos los pilares de los Arribes: la Denominación de Origen, las variedades autóctonas, el enoturismo y el paisaje del cañón del Duero. Planeta Vino dedica secciones específicas a cada uno de ellos:',
        en:  'The feature covers all the pillars of Arribes: the Denomination of Origin, the native varieties, wine tourism and the landscape of the Duero canyon. Planeta Vino dedicates specific sections to each:',
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
  {
    id:         'sobremesa',
    titleKey:   'blog.post.sobremesa.title',
    cat:        'blog.cat.prensa',
    date:       '2026-04-13',
    excerptKey: 'blog.post.sobremesa.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/sobremesa-1024x733.png',
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-sobremesa/',
    content:    null,
  },
  {
    id:         'elpais',
    titleKey:   'blog.post.elpais.title',
    cat:        'blog.cat.prensa',
    date:       '2026-04-13',
    excerptKey: 'blog.post.elpais.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Aparicion-elpais.png',
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-el-pais/',
    content:    null,
  },
  {
    id:         'hola',
    titleKey:   'blog.post.hola.title',
    cat:        'blog.cat.enoturismo',
    date:       '2026-04-13',
    excerptKey: 'blog.post.hola.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-105842.png',
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-hola/',
    content:    null,
  },
  {
    id:         'robert-parker',
    titleKey:   'blog.post.parker.title',
    cat:        'blog.cat.prensa',
    date:       '2026-04-13',
    excerptKey: 'blog.post.parker.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-102900.png',
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-robert-parker-wine-advocate/',
    content:    null,
  },
  {
    id:         'conde-nast',
    titleKey:   'blog.post.condenast.title',
    cat:        'blog.cat.enoturismo',
    date:       '2026-04-13',
    excerptKey: 'blog.post.condenast.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/Captura-de-pantalla-2026-04-08-110227-1024x531.png',
    href:       'https://elhatoyelgarabato.com/blog/arribes-del-duero-conde-nast-traveler/',
    content:    null,
  },
  {
    id:         'james-suckling',
    titleKey:   'blog.post.suckling.title',
    cat:        'blog.cat.vinos',
    date:       '2026-04-13',
    excerptKey: 'blog.post.suckling.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/jamessuckling-1024x327.png',
    href:       'https://elhatoyelgarabato.com/blog/eclectico-barrica-2023-james-suckling/',
    content:    null,
  },
  {
    id:         'abc',
    titleKey:   'blog.post.abc.title',
    cat:        'blog.cat.vinos',
    date:       '2026-04-13',
    excerptKey: 'blog.post.abc.excerpt',
    imagen:     'https://elhatoyelgarabato.com/wp-content/uploads/2026/04/prensa-abc-v.png',
    href:       'https://elhatoyelgarabato.com/blog/de-buena-jera-en-abc/',
    content:    null,
  },
  {
    id:         'la-vanguardia',
    titleKey:   'blog.post.vanguardia.title',
    cat:        'blog.cat.prensa',
    date:       '2026-04-13',
    excerptKey: 'blog.post.vanguardia.excerpt',
    imagen:     null,
    href:       'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-la-vanguardia/',
    content:    null,
  },
]
