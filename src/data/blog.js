// ─── ARTÍCULOS DE BLOG ────────────────────────────────────────────────
// Fallback estático: se usa mientras Sanity no responde o no está disponible.
// Los datos vivos vienen de Sanity (useSanityFetch en BlogSection / BlogPost).
//
// Tipos de bloque en content[]:
//   { type: 'intro',  es, en }
//   { type: 'p',      es, en }
//   { type: 'h2',     es, en }
//   { type: 'image',  src, caption?: { es, en } }
//   { type: 'video',  src }
//   { type: 'list',   items: [{ es, en }] }

export const BLOG_POSTS = [

  // ── 1. La Vanguardia ──────────────────────────────────────────────
  {
    id:       'la-vanguardia',
    title:    { es: 'El Hato y el Garabato en La Vanguardia: el vino de Arribes que rompe el determinismo latitudinal', en: 'El Hato y el Garabato in La Vanguardia: the Arribes wine that defies latitudinal determinism' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '5 min de lectura', en: '5 min read' },
    excerpt:  { es: 'Santi Rivas elige El Hato y el Garabato en La Vanguardia como ejemplo de bodega que convierte una ubicación ignorada en ventaja. El Ecléctico de puesta en cruz, «uno de los mejores blancos de este país por debajo de 20 euros».', en: 'La Vanguardia analyses how El Hato y el Garabato challenges stereotypes about wines from southern Iberia.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/3dc2eecc2153f951047fe55dad7c26d14110e318-1024x768.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-la-vanguardia/',
    tags:     ['prensa', 'La Vanguardia', 'Santi Rivas', 'DO Arribes', 'Puesta en Cruz', 'Ecléctico'],
    content: [
      { type: 'intro', es: 'Santi Rivas escoge El Hato y el Garabato en La Vanguardia como el primer ejemplo de bodega que convierte la desventaja de una ubicación ignorada en una ventaja competitiva. El artículo, publicado el 21 de febrero de 2026 en la sección Comer/Beber del diario, plantea un concepto provocador — el determinismo latitudinal — para explicar por qué hay regiones que suman reputación a sus vinos y otras que restan.', en: 'Santi Rivas chooses El Hato y el Garabato in La Vanguardia as the first example of a winery that turns the disadvantage of an overlooked location into a competitive edge. The article, published on 21 February 2026 in the newspaper\'s Comer/Beber section, puts forward a provocative concept — latitudinal determinism — to explain why some regions add reputation to their wines while others take it away.' },
      { type: 'p', es: 'De entre todas las bodegas de España que podría haber elegido para ilustrar su tesis, Rivas sitúa a El Hato y el Garabato en primer lugar.', en: 'Of all the wineries in Spain he could have chosen to illustrate his thesis, Rivas places El Hato y el Garabato first.' },
      { type: 'h2', es: '¿Qué es el determinismo latitudinal?', en: 'What is latitudinal determinism?' },
      { type: 'p', es: 'Santi Rivas acuña el término «determinismo latitudinal» para describir un fenómeno que condiciona el mercado del vino español. La idea es directa: no es lo mismo tener la bodega en Rioja o Ribera del Duero — regiones cuyo nombre ya vende — que en una denominación que el consumidor medio no conoce.', en: 'Santi Rivas coins the term "latitudinal determinism" to describe a phenomenon that shapes the Spanish wine market. The idea is straightforward: it is not the same to have a winery in Rioja or Ribera del Duero — regions whose name already sells — as to be in a denomination the average consumer has never heard of.' },
      { type: 'p', es: '«Hay regiones que suman reputación a sus bodegas, otras que restan y, por supuesto, también las que ni lo uno ni lo otro. Aunque pueden, las bodegas inmersas en latitudes exitosas o neutras no deberían obviar esta circunstancia, pero para las que están situadas en las menos conocidas, darse cuenta de este contexto es una cuestión de supervivencia para proceder en consecuencia.»', en: '"There are regions that add reputation to their wineries, others that take it away, and of course some that do neither. Although they can, wineries embedded in successful or neutral latitudes should not overlook this circumstance; for those situated in lesser-known ones, recognising this context is a matter of survival."' },
      { type: 'h2', es: '«Uno de los mejores blancos de este país por debajo de 20 euros»', en: '"One of the best whites in the country under €20"' },
      { type: 'p', es: '«Podéis probar cualquiera de sus tintos, pero yo aquí vengo con su puesta en cruz, variedad autóctona que aquí nos deja un blanco salino y vertical, de fruta contenida y bastante suelo. Sin duda, uno de los mejores blancos de este país por debajo de 20 euros.»', en: '"You can try any of their reds, but what I\'m here for is their Puesta en Cruz, a local grape variety that gives us a saline, vertical white with restrained fruit and plenty of terroir. Without doubt, one of the best whites in this country under €20."' },
      { type: 'h2', es: 'El Hato y el Garabato, un proyecto «muy vigente»', en: 'El Hato y el Garabato, a "very current" project' },
      { type: 'p', es: 'Rivas presenta la bodega con precisión: «En tierras de Zamora y Salamanca se halla esta DO que atesora proyectos muy a tener en cuenta. Uno de ellos es el de El Hato y el Garabato, un proyecto familiar de Liliana Fernández y José Manuel Benéitez (también enólogo de Vía Cénit), orientado a vinos diferenciales, frescos y fluidos. Es decir, de un estilo muy vigente.»', en: 'Rivas describes the winery precisely: "In the lands of Zamora and Salamanca lies this DO that holds some truly noteworthy projects. One of them is El Hato y el Garabato, a family project by Liliana Fernández and José Manuel Benéitez (also winemaker at Vía Cénit), focused on distinctive, fresh and fluid wines. In other words, a very current style."' },
      { type: 'h2', es: '«¿Quién va a pedir una Juan García en Madrid?»', en: '"Who\'s going to order a Juan García in Madrid?"' },
      { type: 'p', es: '«¿Quién va a pedir una Juan García en Madrid? Pues alguien con la suficiente curiosidad y espíritu como para no estar bebiendo siempre lo mismo. Son aquellos que pensamos que en la variedad está la diversión.»', en: '"Who\'s going to order a Juan García in Madrid? Someone with enough curiosity and spirit not to always be drinking the same thing. Those of us who believe that variety is where the fun is."' },
      { type: 'h2', es: 'Por qué esta mención importa', en: 'Why this mention matters' },
      { type: 'p', es: 'La Vanguardia es el diario de referencia de Barcelona y uno de los más leídos de España. Santi Rivas elige tres bodegas de toda España para ilustrar su tesis, y El Hato y el Garabato es la primera.', en: 'La Vanguardia is Barcelona\'s newspaper of record and one of the most-read in Spain. Santi Rivas chooses three wineries from across Spain to illustrate his thesis, and El Hato y el Garabato is the first.' },
    ],
  },

  // ── 2. Planeta Vino ───────────────────────────────────────────────
  {
    id:       'planeta-vino',
    title:    { es: 'El Hato y el Garabato en Planeta Vino: la esperanza de un paisaje en los Arribes del Duero', en: 'El Hato y el Garabato in Planeta Vino: the hope of a landscape in Arribes del Duero' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero con El Hato y el Garabato como protagonista.', en: 'Planeta Vino publishes a six-page feature on Arribes del Duero with El Hato y el Garabato as the focus.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/d882e3d41352c9c012a24cf6da24684731afe13f-533x716.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-planeta-vino/',
    tags:     ['DO Arribes', 'Planeta Vino', 'prensa', 'Juan García', 'Zamora'],
    content: [
      { type: 'intro', es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero y sitúa a El Hato y el Garabato como una de las bodegas que están dando esperanza a este paisaje fronterizo.', en: 'Planeta Vino publishes a six-page feature on Arribes del Duero, placing El Hato y el Garabato among the wineries bringing hope to this border landscape.' },
      { type: 'p', es: 'El reportaje arranca describiendo los Arribes como una zona rara dentro del panorama vitivinícola español, relativamente desconocida y con un pasado marcado por el autoconsumo. El dato que enmarca todo el reportaje es contundente: de las más de cuatro mil hectáreas de viñedo que llegaron a registrarse en la zona, se ha pasado a apenas 270 hectáreas en la actualidad.', en: 'The feature opens by describing Arribes as an unusual corner of the Spanish wine landscape, relatively unknown and with a past defined by home consumption. The headline figure that frames the whole article is stark: from the more than four thousand hectares of vineyard once recorded in the area, barely 270 remain today.' },
      { type: 'h2', es: 'José Manuel y Liliana, protagonistas del reportaje', en: 'José Manuel and Liliana, the protagonists' },
      { type: 'p', es: 'Planeta Vino dedica fotografías individuales a José Manuel Benéitez y a Liliana Fernández, presentándolos como figuras centrales de la nueva generación de los Arribes. El Hato y el Garabato ocupa un espacio destacado como proyecto que encarna el espíritu del artículo: volver a una tierra difícil para hacer vino con las variedades que nadie arrancó.', en: 'Planeta Vino dedicates individual photographs to José Manuel Benéitez and Liliana Fernández, presenting them as central figures of the new generation in Arribes. El Hato y el Garabato features prominently as the project that embodies the spirit of the article: returning to a demanding land to make wine with the varieties nobody ever pulled up.' },
      { type: 'h2', es: 'La denominación, las variedades y la Ruta del Vino', en: 'The denomination, the varieties and the Wine Route' },
      { type: 'list', items: [
        { es: 'La denominación: historia del Consejo Regulador, situación actual y retos de una DO con apenas 270 hectáreas inscritas.', en: 'The denomination: history of the Regulatory Council, current situation and challenges of a DO with barely 270 registered hectares.' },
        { es: 'Las variedades: juan garcía, bruñal, puesta en cruz, rufete, bastardillo y las demás uvas autóctonas que el aislamiento histórico preservó intactas.', en: 'The varieties: Juan García, Bruñal, Puesta en Cruz, Rufete, Bastardillo and the other native grapes that historical isolation preserved intact.' },
        { es: 'La Ruta del Vino: «una de las rutas más bonitas de la Península Ibérica, llena de actividades y la gran desconocida».', en: 'The Wine Route: "one of the most beautiful routes on the Iberian Peninsula, full of activities and largely unknown".' },
        { es: 'El crucero fluvial: el recorrido en barco por el Parque Natural de los Arribes del Duero.', en: 'The river cruise: the boat trip through the Arribes del Duero Natural Park.' },
      ] },
    ],
  },

  // ── 3. Sobremesa ──────────────────────────────────────────────────
  {
    id:       'sobremesa',
    title:    { es: 'El Hato y el Garabato en Sobremesa: los vinos singulares de los Arribes del Duero', en: 'El Hato y el Garabato in Sobremesa: the singular wines of Arribes del Duero' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'La revista Sobremesa dedica un extenso reportaje a los Arribes del Duero y a nuestra forma de hacer vino.', en: 'Sobremesa magazine devotes a major feature to Arribes del Duero and our approach to winemaking.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/896a02633f15175ed55f64c8d7ea0bc249cbbd12-1024x733.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-sobremesa/',
    tags:     ['Sobremesa', 'prensa', 'DO Arribes', 'Ecléctico', 'Raúl Pérez'],
    content: [
      { type: 'intro', es: 'La revista Sobremesa dedica un extenso reportaje a los Arribes del Duero y destaca El Hato y el Garabato como una de las bodegas de referencia de la denominación. El artículo, firmado por Javier Vicente Caballero, recorre la comarca fronteriza retratando a los viñadores que resisten en uno de los paisajes vinícolas más singulares de España.', en: 'Sobremesa magazine devotes a major feature to Arribes del Duero and highlights El Hato y el Garabato as one of the benchmark wineries of the denomination. The article, written by Javier Vicente Caballero, tours the border region and portrays the winemakers holding their ground in one of Spain\'s most singular wine landscapes.' },
      { type: 'h2', es: '«Poco… Pero a la vez todo»', en: '"Not much… but at the same time everything"' },
      { type: 'p', es: '«El nombre de la bodega remite a un pasaje del Quijote, donde Sancho fía todo a un hatillo y a un palo, que resulta poco, pero a la vez lo es todo.»', en: '"The winery\'s name refers to a passage in Don Quixote, where Sancho trusts everything to a bundle and a stick — not much, but at the same time everything."' },
      { type: 'p', es: 'El periodista presenta a José Manuel y a Liliana Fernández como ingenieros de montes y pareja sentimental que se jugaron todo por estas tierras, y define El Hato y el Garabato como «una firma que ya anda de boca en boca entre los winelovers y los fans de ir a contracorriente».', en: 'The journalist presents José Manuel and Liliana Fernández as forestry engineers and life partners who staked everything on this land, and describes El Hato y el Garabato as "a name already on the lips of wine lovers and fans of going against the grain".' },
      { type: 'h2', es: 'Los Arribes, una rareza aislada', en: 'Arribes, an isolated curiosity' },
      { type: 'p', es: '«Los Arribes son una rareza, tradicionalmente aislada por ubicación. Esto es pobre, con producciones ridículas de cualquier cosa que plantes. La extensión de viñas siempre ha sido pequeña, consumo propio.»', en: '"Arribes is a curiosity, traditionally isolated by its location. It is poor land, with ridiculous yields of whatever you plant. The vineyard area has always been small, home consumption."' },
      { type: 'h2', es: 'Ecléctico, De Buena Jera y toda la gama, catados en bodega', en: 'Ecléctico, De Buena Jera and the full range, tasted at the winery' },
      { type: 'p', es: 'Sobremesa cata el Ecléctico blanco 2020 directamente en bodega y lo califica como «soberbio», destacando su «sabor salino, ecos de albariza, frescura y poco grado». El artículo también revela que José Manuel y Liliana trabajan en nuevos proyectos junto a Raúl Pérez.', en: 'Sobremesa tastes the Ecléctico white 2020 directly at the winery and rates it "superb", highlighting its "saline flavour, hints of albariza, freshness and low alcohol". The article also reveals that José Manuel and Liliana are working on new projects with Raúl Pérez.' },
    ],
  },

  // ── 4. El País ────────────────────────────────────────────────────
  {
    id:       'elpais',
    title:    { es: 'El Hato y el Garabato en El País: los vinos de Sayago que llegan a Japón', en: 'El Hato y el Garabato in El País: the wines of Sayago reaching Japan' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'El Hato y el Garabato aparece en El País como uno de los referentes de la gastronomía artesanal de Sayago.', en: 'El País highlights El Hato y el Garabato as one of the leading artisan producers of Sayago.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/5e5468ada4280592468c89cdef3274c1a95315bc-817x701.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-el-pais/',
    tags:     ['El País', 'prensa', 'Sayago', 'Japón', 'Juan García', 'DO Arribes'],
    content: [
      { type: 'intro', es: 'El Hato y el Garabato aparece en El País como uno de los referentes de la gastronomía artesanal de Sayago. El reportaje, publicado el 26 de marzo de 2026 y firmado por Almudena Ávalos, recorre la comarca zamorana para retratar a quienes decidieron quedarse, o volver, cuando todo invitaba a marcharse.', en: 'El Hato y el Garabato features in El País as one of the leading artisan producers of Sayago. The feature, published on 26 March 2026 and written by Almudena Ávalos, tours the province of Zamora to portray those who chose to stay — or return — when everything invited them to leave.' },
      { type: 'h2', es: 'La bodega de Formariz que convirtió las raíces en reconocimiento', en: 'The Formariz winery that turned roots into recognition' },
      { type: 'p', es: 'José Manuel Benéitez y Liliana Fernández Pérez producen 20.000 botellas al año con variedades autóctonas —Juan García, Bruñal y Puesta en Cruz— cuya salinidad ha encontrado reconocimiento donde menos se esperaba: Japón es hoy su principal mercado.', en: 'José Manuel Benéitez and Liliana Fernández Pérez produce 20,000 bottles a year from native varieties — Juan García, Bruñal and Puesta en Cruz — whose salinity has found recognition where least expected: Japan is today their main market.' },
      { type: 'h2', es: 'De La Rioja a California, de Australia a Sayago', en: 'From La Rioja to California, from Australia to Sayago' },
      { type: 'p', es: 'José Manuel se formó en La Rioja, California y Australia antes de regresar a las viñas familiares de Sayago. El País lo resume: «Las andanzas de esta pareja evidencian que volver no tiene por qué significar retroceder, sino también reivindicar.»', en: 'José Manuel trained in La Rioja, California and Australia before returning to the family vines in Sayago. El País sums it up: "The journeys of this couple show that coming home need not mean going backwards — it can also mean staking a claim."' },
      { type: 'h2', es: 'Juan García, Bruñal y Puesta en Cruz', en: 'Juan García, Bruñal and Puesta en Cruz' },
      { type: 'p', es: 'Las tres variedades crecen en los suelos graníticos de los Arribes del Duero. Su salinidad es lo que las diferencia en mercados internacionales como el japonés, donde los vinos con identidad de lugar tienen creciente demanda.', en: 'The three varieties grow in the granite soils of Arribes del Duero. Their salinity is what sets them apart in international markets such as Japan, where wines with a strong sense of place are in growing demand.' },
    ],
  },

  // ── 5. ¡Hola! ─────────────────────────────────────────────────────
  {
    id:       'hola',
    title:    { es: 'El Hato y el Garabato en ¡Hola!: parada recomendada en la ruta por los Arribes del Duero', en: 'El Hato y el Garabato in ¡Hola!: a recommended stop on the Arribes del Duero route' },
    cat:      'blog.cat.enoturismo',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'La revista ¡Hola! incluye El Hato y el Garabato en su ruta turística por los Arribes del Duero.', en: '¡Hola! magazine includes El Hato y el Garabato in its tourist route through Arribes del Duero.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/daf650144a0298794741ee678e38a5fbc6005976-946x897.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-hola/',
    tags:     ['¡Hola!', 'enoturismo', 'DO Arribes', 'Formariz'],
    content: [
      { type: 'intro', es: 'La revista ¡Hola! incluye El Hato y el Garabato en su ruta turística por los Arribes del Duero como ejemplo de las pequeñas bodegas de autor que hay que conocer en la zona.', en: '¡Hola! magazine includes El Hato y el Garabato in its tourist route through Arribes del Duero as an example of the small artisan wineries that are a must-visit in the area.' },
      { type: 'h2', es: 'Los Arribes del Duero: naturaleza, vino y paisaje de frontera', en: 'Arribes del Duero: nature, wine and border landscape' },
      { type: 'p', es: 'Más de 120 kilómetros de cañones pétreos entre Zamora y Salamanca, con el río Duero marcando la frontera con Portugal. ¡Hola! lo presenta como un destino que lo tiene todo para una escapada: naturaleza indómita, buena gastronomía y vinos de pequeñas bodegas por descubrir.', en: 'Over 120 kilometres of rocky canyons between Zamora and Salamanca, with the River Duero marking the border with Portugal. ¡Hola! presents it as a destination that has everything for a weekend escape: untamed nature, great food and wines from small producers waiting to be discovered.' },
      { type: 'h2', es: '«Una pareja de jóvenes enólogos con muy buenas ideas»', en: '"A young couple of winemakers with very good ideas"' },
      { type: 'p', es: 'Así describe ¡Hola! a El Hato y el Garabato. El reportaje la sitúa como primer ejemplo dentro de las pequeñas bodegas de autor de la DO Arribes y destaca también las experiencias que ofrece: catas en la bodega y visitas al viñedo.', en: 'That is how ¡Hola! describes El Hato y el Garabato. The feature places it as the first example among the small artisan wineries of DO Arribes and also highlights the experiences it offers: tastings at the winery and vineyard visits.' },
      { type: 'h2', es: 'Visítanos', en: 'Come and visit us' },
      { type: 'p', es: 'Una cata en Formariz no es solo una cata: es entender por qué un vino sabe a su lugar y a nadie más.', en: 'A tasting in Formariz is not just a tasting: it is understanding why a wine tastes of its place and nowhere else.' },
    ],
  },

  // ── 6. Robert Parker ──────────────────────────────────────────────
  {
    id:       'robert-parker',
    title:    { es: 'El Hato y el Garabato en Robert Parker Wine Advocate', en: 'El Hato y el Garabato in Robert Parker Wine Advocate' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'El crítico de referencia mundial destaca nuestros vinos como exponente de las variedades autóctonas de Arribes.', en: "The world's leading wine critic highlights our wines as exemplars of Arribes del Duero native varieties." },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/5296b7f188ca22bbd43dade32c98f27daaa3b63b-713x571.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-robert-parker-wine-advocate/',
    tags:     ['Robert Parker', 'Wine Advocate', 'Luis Gutiérrez', 'prensa', 'DO Arribes'],
    content: [
      { type: 'intro', es: 'El Hato y el Garabato es una pequeña bodega familiar en los Arribes del Duero fundada en 2015 por José Manuel Benéitez López y Liliana Fernández Pérez. Así la presenta Luis Gutiérrez en Robert Parker Wine Advocate.', en: 'El Hato y el Garabato is a small family winery in Arribes del Duero founded in 2015 by José Manuel Benéitez López and Liliana Fernández Pérez. That is how Luis Gutiérrez introduces them in Robert Parker Wine Advocate.' },
      { type: 'p', es: 'Hoy trabajan ocho hectáreas de viñas viejas en más de 30 parcelas repartidas en cinco pueblos, todas en ecológico. La producción oscila entre las 10.000 y las 20.000 botellas anuales.', en: 'Today they farm eight hectares of old vines across more than 30 plots spread over five villages, all certified organic. Production ranges between 10,000 and 20,000 bottles a year.' },
      { type: 'h2', es: 'Liliana Fernández, vicepresidenta del Consejo Regulador de Arribes', en: 'Liliana Fernández, Vice-President of the Arribes Regulatory Council' },
      { type: 'p', es: 'Liliana Fernández Pérez es vicepresidenta del Consejo Regulador de la DO Arribes del Duero, posición que refleja el peso que la bodega tiene no solo como productora, sino como impulsora del futuro de la DO.', en: 'Liliana Fernández Pérez is Vice-President of the DO Arribes del Duero Regulatory Council, a position that reflects the weight the winery carries not only as a producer but as a driver of the denomination\'s future.' },
      { type: 'h2', es: 'Juan García y el cambio climático', en: 'Juan García and climate change' },
      { type: 'p', es: '«Es una uva que madura entre el 11,5 y el 12% de alcohol, manteniendo la frescura y la acidez, lo que ante el cambio climático que estamos viviendo puede ser un activo muy valioso.»', en: '"It is a grape that ripens at between 11.5 and 12% alcohol, retaining freshness and acidity, which in the face of the climate change we are experiencing could be a very valuable asset."' },
      { type: 'h2', es: 'Tierra Prometida: el proyecto con Dominio del Bendito', en: 'Tierra Prometida: the project with Dominio del Bendito' },
      { type: 'p', es: 'El Hato y el Garabato tiene un proyecto conjunto con Antony Terryn de Dominio del Bendito en Toro, llamado Tierra Prometida. La bodega también ha acogido a Raúl Pérez del Bierzo, que ha elaborado un tinto de Arribes.', en: 'El Hato y el Garabato has a joint project with Antony Terryn of Dominio del Bendito in Toro, called Tierra Prometida. The winery has also welcomed Raúl Pérez from Bierzo, who has produced a red from Arribes.' },
    ],
  },

  // ── 7. Condé Nast Traveler ────────────────────────────────────────
  {
    id:       'conde-nast',
    title:    { es: 'Los Arribes del Duero, entre los mejores destinos del vino del mundo para 2024 según Condé Nast Traveler', en: "Arribes del Duero among the world's best wine destinations for 2024 according to Condé Nast Traveler" },
    cat:      'blog.cat.enoturismo',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'Condé Nast Traveler incluye los Arribes del Duero en su lista de los mejores destinos del vino del mundo.', en: "Condé Nast Traveler includes Arribes del Duero in its list of the world's best wine destinations." },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/aa9bc522ba0332282a9851fb16bc9da6974d435d-1024x531.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/arribes-del-duero-conde-nast-traveler/',
    tags:     ['Condé Nast Traveler', 'enoturismo', 'DO Arribes', 'Fermoselle'],
    content: [
      { type: 'intro', es: 'Condé Nast Traveler incluye los Arribes del Duero en su lista de los mejores destinos del vino del mundo para 2024, junto a la Patagonia argentina, Santorini, Georgia y el sur de Inglaterra. Para hablar de los Arribes, la revista acude a José Manuel Benéitez como portavoz del territorio.', en: 'Condé Nast Traveler includes Arribes del Duero in its list of the best wine destinations in the world for 2024, alongside Argentine Patagonia, Santorini, Georgia and southern England. To speak about Arribes, the magazine turns to José Manuel Benéitez as the territory\'s spokesperson.' },
      { type: 'h2', es: '«Venir aquí es como viajar en el tiempo»', en: '"Coming here is like travelling back in time"' },
      { type: 'p', es: '«Es una zona espectacular, históricamente aislada, lo que hace que venir aquí sea como viajar en el tiempo, y ese es su mayor encanto.»', en: '"It is a spectacular area, historically isolated, which makes coming here feel like travelling back in time — and that is its greatest charm."' },
      { type: 'h2', es: 'Un potencial que no se encuentra en ningún otro lugar', en: 'A potential found nowhere else' },
      { type: 'p', es: '«Tenemos un enorme potencial por esa mezcla de características; si lo buscas en otro lugar, no lo encuentras.»', en: '"We have enormous potential thanks to that blend of characteristics; if you look for it somewhere else, you won\'t find it."' },
      { type: 'h2', es: 'Qué ver y dónde ir', en: 'What to see and where to go' },
      { type: 'list', items: [
        { es: 'Miradores: las presas de Aldeadávila y Almendra, para ver el gran cañón del Duero desde las alturas.', en: 'Viewpoints: the Aldeadávila and Almendra dams, to see the great Duero canyon from above.' },
        { es: 'San Felices de los Gallegos: pueblo más bonito de Castilla y León en 2020. Parada obligatoria en el restaurante Mesa del Conde.', en: 'San Felices de los Gallegos: most beautiful village in Castilla y León in 2020. A must-stop at Restaurante Mesa del Conde.' },
        { es: 'Fermoselle: capital extraoficial de los Arribes, conocida como el pueblo de las 1.000 bodegas.', en: 'Fermoselle: unofficial capital of Arribes, known as the village of a thousand wineries.' },
      ] },
    ],
  },

  // ── 8. James Suckling ─────────────────────────────────────────────
  {
    id:       'james-suckling',
    title:    { es: 'Ecléctico Barrica 2023, en el Top 100 Value Wines 2025 de James Suckling con 94 puntos', en: "Ecléctico Barrica 2023 in James Suckling's Top 100 Value Wines 2025 with 94 points" },
    cat:      'blog.cat.vinos',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'El Ecléctico En Barrica 2023 alcanza el puesto 53 del Top 100 Value Wines 2025 del crítico James Suckling.', en: "The Ecléctico En Barrica 2023 ranks 53rd in James Suckling's Top 100 Value Wines 2025." },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/7c7ca3ebed1756d9fa44fa8063c930de88d290e6-1024x327.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/eclectico-barrica-2023-james-suckling/',
    tags:     ['James Suckling', 'Top 100', 'Ecléctico', 'Puesta en Cruz', '94 puntos'],
    content: [
      { type: 'intro', es: 'El Ecléctico En Barrica 2023 ocupa el puesto 53 del Top 100 Value Wines 2025 de James Suckling con 94 puntos. Es el único vino blanco español de la selección y el único representante de la DO Arribes del Duero.', en: 'Ecléctico En Barrica 2023 ranks 53rd in James Suckling\'s Top 100 Value Wines 2025 with 94 points. It is the only Spanish white wine in the selection and the only representative of DO Arribes del Duero.' },
      { type: 'h2', es: 'La nota de cata: 94 puntos', en: 'The tasting note: 94 points' },
      { type: 'p', es: '«This white shows aromas of citrus, walnuts and dried fruit. The palate is medium- to full-bodied with voluminous fruit that leads to a restrained, flavorful finish. Very complete, pleasant, angular and well constructed. This is the local clonal version of rabigato. Pressed, hyper-oxidized, then aged in barriques. Drink now or hold.»', en: '"This white shows aromas of citrus, walnuts and dried fruit. The palate is medium- to full-bodied with voluminous fruit that leads to a restrained, flavorful finish. Very complete, pleasant, angular and well constructed. This is the local clonal version of rabigato. Pressed, hyper-oxidized, then aged in barriques. Drink now or hold."' },
      { type: 'h2', es: 'Puesta en Cruz: la variedad que James Suckling llama «versión local del rabigato»', en: 'Puesta en Cruz: the variety James Suckling calls "the local clonal version of rabigato"' },
      { type: 'p', es: 'La Puesta en Cruz es una variedad escasa —casi desaparecida— que El Hato y el Garabato recuperó. La elaboración es precisa: prensado directo, hiperóxido controlado y crianza en barricas usadas.', en: 'Puesta en Cruz is a scarce — almost extinct — variety that El Hato y el Garabato has revived. The winemaking is precise: direct pressing, controlled hyper-oxidation and ageing in used barrels.' },
      { type: 'h2', es: 'Qué significa entrar en el Top 100', en: 'What it means to enter the Top 100' },
      { type: 'list', items: [
        { es: 'Calidad objetiva: 94 puntos sitúa al Ecléctico En Barrica entre los blancos mejor valorados de España en 2025.', en: 'Objective quality: 94 points places Ecléctico En Barrica among the highest-rated whites in Spain in 2025.' },
        { es: 'Relación calidad-precio excepcional: el criterio principal del ranking es que el vino sobredeliver respecto a su precio.', en: 'Exceptional value for money: the main criterion of the ranking is that the wine overdelivers relative to its price.' },
        { es: 'Visibilidad internacional: audiencia directa en EE.UU., Asia, Europa del norte y Reino Unido.', en: 'International visibility: direct audience in the US, Asia, Northern Europe and the UK.' },
      ] },
    ],
  },

  // ── 9. ABC ────────────────────────────────────────────────────────
  {
    id:       'abc',
    title:    { es: 'De Buena Jera en ABC: el tinto con casi 100 años de historia familiar', en: 'De Buena Jera in ABC: the red with almost 100 years of family history' },
    cat:      'blog.cat.vinos',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'El periódico ABC dedica un artículo a De Buena Jera, nuestro vino de guarda elaborado con Juan García ecológica.', en: 'ABC devotes an article to De Buena Jera, our age-worthy wine made from organic Juan García.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/43fde424cae24f8c21080793779325bc41c5f6a8-978x893.png?auto=format',
    href:     'https://elhatoyelgarabato.com/blog/de-buena-jera-en-abc/',
    tags:     ['ABC', 'prensa', 'De Buena Jera', 'Juan García', 'Pilar Cavero'],
    content: [
      { type: 'intro', es: 'De Buena Jera protagoniza la sección de vinos de ABC Gastronomía. La reseña, publicada el 26 de marzo de 2026 y firmada por Pilar Cavero, destaca el vino como ejemplo de elaboración con mínima intervención para conservar el sabor de una viña con casi un siglo de historia.', en: 'De Buena Jera takes centre stage in ABC Gastronomía\'s wine section. The review, published on 26 March 2026 and written by Pilar Cavero, highlights the wine as an example of minimal-intervention winemaking that preserves the flavour of a vineyard with almost a century of history.' },
      { type: 'h2', es: 'La viña del bisabuelo: el origen de De Buena Jera', en: 'The great-grandfather\'s vine: the origin of De Buena Jera' },
      { type: 'p', es: 'De Buena Jera nace de la única viña que El Hato y el Garabato tiene en propiedad: la que plantó el bisabuelo de la familia hace casi 100 años. El nombre lo dice todo: buena jera es una expresión zamorana que significa buen jornal, buen trabajo hecho con gusto.', en: 'De Buena Jera is born from the only vineyard El Hato y el Garabato owns: the one planted by José Manuel\'s great-grandfather nearly 100 years ago. The name says it all: buena jera is a Zamoran expression meaning a good day\'s work, a job done with pride.' },
      { type: 'h2', es: 'Juan García: la variedad que habla del lugar', en: 'Juan García: the variety that speaks of place' },
      { type: 'p', es: 'ABC describe el resultado: un vino de perfil frutal nítido, con buena frescura y un fondo ligeramente terroso y herbal. Muy propio de la zona. Reconocible.', en: 'ABC describes the result: a wine with a clear fruit profile, good freshness and a slightly earthy, herbal backbone. Very true to the area. Recognisable.' },
    ],
  },

  // ── 10. Spanish Wine Lover ────────────────────────────────────────
  {
    id:       'spanish-wine-lover',
    title:    { es: 'El Hato y el Garabato en Spanish Wine Lover: el perfil completo de la bodega', en: 'El Hato y el Garabato in Spanish Wine Lover: the complete winery profile' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '4 min de lectura', en: '4 min read' },
    excerpt:  { es: 'Spanish Wine Lover publica el perfil completo de El Hato y el Garabato junto a nombres como Raúl Pérez, Vega Sicilia o Comando G.', en: 'Spanish Wine Lover publishes the complete profile of El Hato y el Garabato alongside names such as Raúl Pérez, Vega Sicilia and Comando G.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/b53b8148c9f341bd2af0bf2dfce3868f4fcea9e3-1024x610.png?auto=format',
    tags:     ['Spanish Wine Lover', 'prensa', 'DO Arribes', 'Puesta en Cruz', 'Juan García'],
    content: [
      { type: 'intro', es: 'Spanish Wine Lover publica el perfil completo de El Hato y el Garabato dentro de su directorio de bodegas de referencia de la DO Arribes, junto a nombres como Raúl Pérez, Vega Sicilia, Dominio de Pingus, Envínate o Comando G.', en: 'Spanish Wine Lover publishes the complete profile of El Hato y el Garabato within its directory of benchmark wineries of DO Arribes, alongside names such as Raúl Pérez, Vega Sicilia, Dominio de Pingus, Envínate and Comando G.' },
      { type: 'h2', es: 'Quiénes somos y de dónde venimos', en: 'Who we are and where we come from' },
      { type: 'p', es: 'Bodega artesana y familiar fundada en 2015 por José Manuel Benéitez y Liliana Fernández en Formariz, Zamora. Ingenieros de montes con experiencia en Australia, California y Portugal. El nombre es una referencia al Quijote: Sancho carga con un hatillo y un palo.', en: 'Artisan family winery founded in 2015 by José Manuel Benéitez and Liliana Fernández in Formariz, Zamora. Forestry engineers with experience in Australia, California and Portugal. The name is a reference to Don Quixote: Sancho carries a bundle and a stick.' },
      { type: 'h2', es: '12 hectáreas, 32 parcelas, 20.000 botellas en ecológico', en: '12 hectares, 32 plots, 20,000 bottles, all organic' },
      { type: 'p', es: 'Solo una parcela es de propiedad: la viña plantada por el bisabuelo de José Manuel, de donde nace De Buena Jera. La DO Arribes cuenta con apenas 270 hectáreas inscritas en el Consejo Regulador.', en: 'Only one plot is owned: the vineyard planted by José Manuel\'s great-grandfather, from which De Buena Jera is born. DO Arribes has barely 270 hectares registered with the Regulatory Council.' },
      { type: 'h2', es: 'Filosofía: intervención mínima, expresión máxima', en: 'Philosophy: minimal intervention, maximum expression' },
      { type: 'p', es: 'Fermentaciones espontáneas, barricas usadas, sin filtraciones ni clarificados. El objetivo: vinos equilibrados entre rusticidad y finura que reflejen el estilo tradicional de los Arribes.', en: 'Spontaneous fermentations, used barrels, no fining or filtration. The aim: balanced wines between rusticity and refinement that reflect the traditional style of Arribes.' },
      { type: 'h2', es: 'La gama completa', en: 'The complete range' },
      { type: 'list', items: [
        { es: 'La Xefa — Rosado de Juan García, prensado directo. 1.000 bot. 10 €.', en: 'La Xefa — Rosé from Juan García, direct pressing. 1,000 btls. €10.' },
        { es: 'Ecléctico blanco depósito — Puesta en Cruz, 8 meses sobre lías. 2.500 bot. 14 €.', en: 'Ecléctico white tank — Puesta en Cruz, 8 months on lees. 2,500 btls. €14.' },
        { es: 'Ecléctico blanco barrica — Misma variedad en barrica usada. 600 bot. 14 €.', en: 'Ecléctico white barrel — Same variety in used barrel. 600 btls. €14.' },
        { es: 'Otro Cuento — Viña vieja doña blanca, 10 meses barrica. 2.000 bot. 18 €.', en: 'Otro Cuento — Old-vine Doña Blanca, 10 months barrel. 2,000 btls. €18.' },
        { es: 'Cotexa — Tinto fresco, Juan García + 30% blancas, 7 meses barrica. 9.000 bot. 12 €.', en: 'Cotexa — Fresh red, Juan García + 30% whites, 7 months barrel. 9,000 btls. €12.' },
        { es: 'Sin Blanca — Juan García 80% + bruñal, bastardillo, rufete. Viñas +80 años. 9.900 bot. 17,50 €.', en: 'Sin Blanca — Juan García 80% + Bruñal, Bastardillo, Rufete. Vines 80+ years. 9,900 btls. €17.50.' },
        { es: 'De Buena Jera — Parcelario del bisabuelo, 18 meses barrica francesa. 1.000 bot. 30 €.', en: 'De Buena Jera — Great-grandfather\'s single vineyard, 18 months French barrel. 1,000 btls. €30.' },
        { es: 'Valdeformariz — Nuevo parcelario, 15 meses barrica. Seductor y fino. 600 bot. 50 €.', en: 'Valdeformariz — New single-vineyard, 15 months barrel. Seductive and fine. 600 btls. €50.' },
      ] },
    ],
  },

  // ── 11. Trucos chimenea ───────────────────────────────────────────
  {
    id:       'trucos-chimenea',
    title:    { es: 'Trucos para limpiar el cristal de tu chimenea y que quede como nueva', en: 'Tips for cleaning your fireplace glass to make it look brand new' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'Cómo mantener el cristal de la chimenea limpio con solo tres materiales. Los trucos que usamos en nuestra casa en la bodega.', en: 'How to keep your fireplace glass clean with just three materials. The tricks we use at our house at the winery.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/bf7091809245d9405735c74567feaf91fd97db0b-1024x576.png?auto=format',
    tags:     ['bodega', 'chimenea', 'trucos'],
    content: [
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
      { type: 'intro', es: 'Una de las cosas más geniales de vivir en nuestra casa en la bodega es la chimenea. El tipo de calor que genera es increíble, pero una de las cosas más complicadas es mantenerla limpia.', en: 'One of the best things about living in our house at the winery is the fireplace. The kind of warmth it gives is incredible, but one of the trickiest things is keeping it clean.' },
      { type: 'p', es: 'Nuestra chimenea tiene tres caras de vidrio. Lo que usamos: guantes, galletas para chimenea, el limpiador de Mercadona — el más eficiente de los que hemos probado — y servilletas.', en: 'Our fireplace has three glass panels. What we use: gloves, fireplace logs, a cleaning spray from the supermarket — the most efficient one we\'ve tried — and paper towels.' },
      { type: 'h2', es: 'Cómo hacerlo paso a paso', en: 'How to do it step by step' },
      { type: 'p', es: 'Rociamos el producto bien distribuido, pasamos la galleta y prácticamente toda la suciedad sale. En la parte superior, ponemos una servilleta rociada con el producto, dejamos que actúe y queda impecable.', en: 'Spray the product evenly, wipe with the log and virtually all the dirt comes off. For the upper section, place a paper towel sprayed with the product, let it sit, and it comes out spotless.' },
    ],
  },

  // ── 12. Vino ecológico, natural, etc. ─────────────────────────────
  {
    id:       'vino-ecologico-natural',
    title:    { es: '¿Qué significa un Vino Ecológico, vino natural, vino sin sulfitos, vino biodinámico, vino vegano?', en: 'What do Organic Wine, Natural Wine, Sulphite-Free, Biodynamic and Vegan Wine mean?' },
    cat:      'blog.cat.info',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: '¿Qué significa exactamente vino ecológico, natural, vegano o biodinámico? Lo explicamos de forma clara y sin tecnicismos.', en: 'What do organic, natural, vegan or biodynamic wine actually mean? We explain it clearly and without jargon.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/af4182153b493127f7ec5d039dca7f5b17dd87f7-1024x681.png?auto=format',
    tags:     ['vino ecológico', 'vino natural', 'vino vegano', 'sulfitos', 'biodinámica'],
    content: [
      { type: 'intro', es: 'Vino Ecológico, Vino Biodinámico, Vino Natural, Vino con mínima intervención, Vino Vegano, Vino sin sulfitos… ¿Qué significa cada uno? ¿Sirven de algo? Hoy vamos a hablar de aquellos en los que hablamos de la elaboración y de la uva, no del origen territorial.', en: 'Organic wine, biodynamic wine, natural wine, minimal-intervention wine, vegan wine, sulphite-free wine… What does each one mean? Are they worth anything? Today we are going to talk about those that refer to how the wine is made and the grape, not to territorial origin.' },
      { type: 'p', es: 'Mi opinión: lo importante del vino es que esté bueno. Si lo bebéis porque es ecológico, o biodinámico… eso puede ser un añadido, pero lo fundamental es que esté bueno y que os guste. Disfrutar no tiene normas.', en: 'My view: the important thing about wine is that it tastes good. If you drink it because it is organic or biodynamic… that can be a bonus, but the fundamental thing is that it tastes good and you enjoy it. Enjoyment has no rules.' },
      { type: 'h2', es: 'Vino ecológico', en: 'Organic wine' },
      { type: 'p', es: 'Vino ecológico y vino orgánico son lo mismo. La clave está en la uva: tiene que venir de producción ecológica. Simplificando, los productores en ecológico pueden usar azufre y cobre, y poquito más. Esto no significa que los viticultores no certificados no trabajen en ecológico: la certificación supone una carga de papeles y un coste que no a todos les compensa.', en: 'Organic wine and organic wine are the same thing. The key lies in the grape: it must come from organic farming. In simplified terms, organic producers can use sulphur and copper, and little else. This does not mean that non-certified producers do not work organically: certification involves a mountain of paperwork and a cost that does not make sense for everyone.' },
    ],
  },

  // ── 13. Vino en restaurantes Michelin ─────────────────────────────
  {
    id:       'vino-restaurantes-michelin',
    title:    { es: 'El Vino en los Restaurantes con estrella Michelin', en: 'Wine in Michelin-Starred Restaurants' },
    cat:      'blog.cat.vinos',
    date:     '2024-06-28',
    readTime: { es: '7 min de lectura', en: '7 min read' },
    excerpt:  { es: 'Nuestros vinos están en seis restaurantes con estrella Michelin. Qué dice la guía sobre el vino y por qué importa.', en: 'Our wines are on the lists of six Michelin-starred restaurants. What the guide says about wine and why it matters.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/692f29c8232e045a10bc9b01a5ab53649bc02703-768x1024.png?auto=format',
    tags:     ['Michelin', 'restaurantes', 'sumilleres', 'Lera', 'Trigo'],
    content: [
      { type: 'intro', es: 'Diciembre nos ha dado una alegría con el merecido reconocimiento del restaurante Lera, que ha recibido su primera estrella Michelin. Nos dio por hablar de los restaurantes en los que están nuestros vinos y de las cartas de vinos de los restaurantes con estrella Michelin.', en: 'December brought us great news with the well-deserved recognition of Restaurante Lera, which received its first Michelin star. It made us want to talk about the restaurants where our wines are listed and about the wine lists of Michelin-starred restaurants.' },
      { type: 'list', items: [
        { es: 'Una estrella: cocina de gran nivel. ¡Compensa pararse!', en: 'One star: high-level cooking. Worth a stop!' },
        { es: 'Dos estrellas: cocina excepcional. ¡Merece la pena desviarse!', en: 'Two stars: exceptional cooking. Worth a detour!' },
        { es: 'Tres estrellas: cocina única que justifica el viaje.', en: 'Three stars: unique cuisine that justifies the journey.' },
      ] },
      { type: 'h2', es: 'Restaurantes con estrella en España', en: 'Starred restaurants in Spain' },
      { type: 'p', es: 'España se sitúa en quinto lugar mundial con 261 restaurantes, por detrás de Francia (619), Japón (407), Italia (377) y Alemania (297).', en: 'Spain ranks fifth in the world with 261 restaurants, behind France (619), Japan (407), Italy (377) and Germany (297).' },
      { type: 'h2', es: 'Nuestros vinos en los restaurantes con estrella', en: 'Our wines in starred restaurants' },
      { type: 'p', es: 'Castilla y León suma 16 restaurantes con estrella, de los que seis tienen carta de vinos interesante. Estamos en el Restaurante Trigo, el Restaurante El Ermitaño y el Restaurante Lera, entre otros.', en: 'Castilla y León has 16 starred restaurants, six of which have interesting wine lists. We are at Restaurante Trigo, Restaurante El Ermitaño and Restaurante Lera, among others.' },
      { type: 'p', es: 'Nos gusta estar en las mesas de los restaurantes estrella Michelin porque compartimos filosofía: valorizar al máximo los productos locales y las tradiciones, con mayor interés por la sostenibilidad.', en: 'We like being on the tables of Michelin-starred restaurants because we share a philosophy: maximising local products and traditions, with a greater interest in sustainability.' },
    ],
  },

  // ── 14. Etiquetado de botellas ────────────────────────────────────
  {
    id:       'etiquetado-botellas',
    title:    { es: 'Así etiquetamos nuestras botellas, una a una.', en: 'This is how we label our bottles, one by one.' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'Cómo etiquetamos nuestras botellas a mano, una a una. El truco con solo tres materiales que garantiza etiquetas rectas y a la misma altura.', en: 'How we label our bottles by hand, one by one. The trick with just three materials that guarantees straight labels at the same height.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/735e82b7bb9b3ddd705d75bbe0c1ce36804e891d-1024x768.png?auto=format',
    tags:     ['etiquetado', 'artesanal', 'botellas', 'bodega'],
    content: [
      { type: 'intro', es: 'En El Hato y el Garabato etiquetamos todas nuestras botellas de forma manual. Después de 5 años tenemos el truco para que queden perfectas. Solo necesitáis tres materiales:', en: 'At El Hato y el Garabato we label all our bottles by hand. After 5 years we have the trick for getting them perfect. You only need three materials:' },
      { type: 'list', items: [
        { es: 'Un envase para etiquetar: botella de vino, tarro de miel, mermelada, conservas caseras…', en: 'A container to label: a wine bottle, honey jar, jam, home preserves…' },
        { es: 'Una etiqueta: comprada, impresa o hecha a mano.', en: 'A label: bought, printed or handmade.' },
        { es: 'Un libro: el ancho tiene que medir los centímetros de altura a la que queréis la etiqueta.', en: 'A book: its width must measure the centimetres of height at which you want the label.' },
      ] },
      { type: 'h2', es: 'Paso a paso', en: 'Step by step' },
      { type: 'p', es: 'Colocad el envase pegado al libro. Quitad la lámina protectora y apoyad la etiqueta sobre el libro acercándola al envase. Pegad desde el centro hacia los extremos para evitar burbujas.', en: 'Place the container against the book. Remove the backing and rest the label on the book, bringing it towards the container. Stick from the centre outwards to avoid bubbles.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ],
  },

  // ── 15. Cómo presentar una botella lacrada ────────────────────────
  {
    id:       'botella-lacrada',
    title:    { es: 'Como presentar una botella lacrada', en: 'How to open a wax-sealed bottle' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'Tres formas de abrir una botella de vino lacrada: de la más directa a la más elegante.', en: 'Three ways to open a wax-sealed wine bottle: from the most direct to the most elegant.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/77bf2e7e6a491b7cb59284f1b33db4574b27a3b3-1024x819.png?auto=format',
    tags:     ['lacre', 'botellas', 'descorchar', 'bodega'],
    content: [
      { type: 'intro', es: 'El lacre se usa desde la Edad Media para proteger y autenticar. En el vino es uno de los elementos que te asegura que estás ante un vino artesano. Hoy os contamos cómo servir una botella lacrada.', en: 'Wax has been used since the Middle Ages to protect and authenticate. In wine it is one of the elements that assures you are in the presence of an artisan wine. Today we show you how to serve a wax-sealed bottle.' },
      { type: 'list', items: [
        { es: 'La más radical: rajar el lacre de forma vertical y quitarlo del todo. Deja la botella desnuda.', en: 'The most radical: cut the wax vertically and remove it entirely. Leaves the bottle bare.' },
        { es: 'La más directa: colocar el sacacorchos encima como si el lacre no existiera. La botella queda vestida.', en: 'The most direct: place the corkscrew on top as if the wax did not exist. The bottle stays dressed.' },
        { es: 'La más elegante: pasar el corta cápsulas en la parte superior retirando una tapita de lacre. Esta es la que os veremos hacer cuando nos visitéis.', en: 'The most elegant: run the foil cutter at the top to remove a small disc of wax. This is the method you will see us use when you visit us.' },
      ] },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ],
  },

  // ── 16. Cómo descorchar una botella ──────────────────────────────
  {
    id:       'como-descorchar-botella',
    title:    { es: 'Como descorchar una botella', en: 'How to open a bottle of wine' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura', en: '2 min read' },
    excerpt:  { es: 'Cómo abrir una botella de vino como un profesional, aunque seas zurdo o no lo hayas hecho nunca.', en: 'How to open a wine bottle like a professional, even if you are left-handed or have never done it before.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/bd2d2478216861602d55b4fa819999cad683fad3-1024x819.png?auto=format',
    tags:     ['descorchar', 'sacacorchos', 'tutorial', 'bodega'],
    content: [
      { type: 'intro', es: 'Voy a contaros cómo abrir una botella desde un punto de vista diferente: yo no disfruto para nada abriendo botellas. Bebiéndolas sí, pero abrirlas… hasta hace nada no entendía por qué me costaba tanto, más allá de disculparme con «es que yo soy zurda». Pues resulta que sí tiene que ver.', en: 'I am going to tell you how to open a bottle from a different perspective: I genuinely do not enjoy opening bottles. Drinking them, yes — but opening them… until not long ago I could not understand why it was such a struggle, beyond blaming it on "I\'m left-handed". Well, it turns out that is actually relevant.' },
      { type: 'p', es: 'Fijaros cómo gira el sacacorchos un diestro y cómo lo tiene que girar un zurdo. Una vez que lo ves, la mecánica cambia completamente.', en: 'Watch how a right-handed person turns the corkscrew and how a left-handed person has to turn it. Once you see it, the mechanics change completely.' },
      { type: 'p', es: 'Si queréis comprar uno, os recomiendo el de dos tiempos — el más utilizado por los profesionales. Añade un punto chic, no ocupa nada en el cajón, es económico y fácil de usar.', en: 'If you want to buy one, I recommend the two-step model — the most widely used by professionals. It adds a touch of chic, takes up no space in the drawer, is affordable and easy to use.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ],
  },

  // ── 17. Variedades minoritarias ───────────────────────────────────
  {
    id:       'variedades-minoritarias',
    title:    { es: 'Variedades Minoritarias', en: 'Minority Grape Varieties' },
    cat:      'blog.cat.vinos',
    date:     '2024-06-28',
    readTime: { es: '4 min de lectura', en: '4 min read' },
    excerpt:  { es: 'Las variedades de uva ancestrales y únicas de los Arribes del Duero: un patrimonio genético en peligro de extinción.', en: 'The ancestral and unique grape varieties of Arribes del Duero: a genetic heritage on the verge of extinction.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/9d98a5c424c70550e886bd715d853a8f8b764314-1024x551.png?auto=format',
    tags:     ['variedades minoritarias', 'Juan García', 'Bruñal', 'Puesta en Cruz', 'DO Arribes', 'ITACYL'],
    content: [
      { type: 'intro', es: '¿Sabéis lo que son las variedades de uva ancestrales, únicas, minoritarias y en peligro de extinción? Sobre este tema tenemos un vídeo en el que os lo contamos de forma resumida.', en: 'Do you know what ancestral, unique, minority and endangered grape varieties are? We have a video on this topic where we explain it in summary.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
      { type: 'h2', es: 'El vino debe sus aromas a la variedad', en: 'Wine owes its aromas to the variety' },
      { type: 'p', es: 'Existen 177 variedades de uva aceptadas para vinificación en España. Pese a esa variedad, en Castilla y León más del 87% del territorio está cubierto por solo cinco variedades.', en: 'There are 177 grape varieties accepted for winemaking in Spain. Despite that diversity, in Castilla y León more than 87% of the vineyard area is covered by just five varieties.' },
      { type: 'p', es: 'Arribes es una locura de variedades raras. En esta zona atascada en el pasado tenemos un patrimonio genético de una riqueza incalculable que se va perdiendo año a año. Nosotros intentamos con nuestro proyecto mantener las viñas viejas y estas variedades únicas.', en: 'Arribes is extraordinary for rare varieties. In this area stuck in the past we have a genetic heritage of incalculable richness that is being lost year by year. With our project we are trying to maintain the old vines and these unique varieties.' },
      { type: 'p', es: 'El ITACYL ha localizado, plantado y estudiado para su conservación algunas de estas variedades. Aquí en Arribes está uno de sus viñedos experimentales, con los que colaboramos siempre que nos lo proponen.', en: 'ITACYL has located, planted and studied some of these varieties for conservation. Here in Arribes there is one of their experimental vineyards, with which we collaborate whenever they invite us to.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ],
  },

  // ── 18. Cambio climático ──────────────────────────────────────────
  {
    id:       'cambio-climatico',
    title:    { es: 'Cambio climático, cero emisiones de carbono HG', en: 'Climate change, zero carbon emissions HG' },
    cat:      'blog.cat.bodega',
    date:     '2019-05-26',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'Cómo trabajamos desde el inicio para reducir nuestra huella de carbono y llegar a cero emisiones en la bodega.', en: 'How we have worked from the start to reduce our carbon footprint and reach zero emissions at the winery.' },
    imagen:   'https://cdn.sanity.io/images/rw1g8gn6/production/ac268233331d755829f970d1adc7aa3c55811fbd-1024x681.png?auto=format',
    tags:     ['cambio climático', 'carbono', 'ecológico', 'sostenibilidad', 'DO Arribes'],
    content: [
      { type: 'intro', es: 'El cambio climático es un hecho y todos nosotros tenemos la responsabilidad de poner de nuestra parte. En El Hato y el Garabato trabajamos desde el inicio por reducir de forma consciente el impacto que nuestra actividad tiene sobre el entorno.', en: 'Climate change is a fact and all of us have a responsibility to do our part. At El Hato y el Garabato we have worked from the very beginning to consciously reduce the impact our activity has on the environment.' },
      { type: 'h2', es: '¿Qué hacemos para alcanzar el objetivo de cero emisiones?', en: 'What do we do to reach zero emissions?' },
      { type: 'list', items: [
        { es: 'Mantener la cubierta vegetal de la viña para que las plantas capturen carbono y lo almacenen en el suelo.', en: 'Maintain the grass cover in the vineyard so plants capture carbon and store it in the soil.' },
        { es: 'Arado superficial de la tierra, reduciendo las emisiones.', en: 'Shallow tillage of the soil, reducing emissions.' },
        { es: 'Cortar los sarmientos en trozos pequeños y dejarlos como abono, evitando su quema.', en: 'Cut pruning canes into small pieces and leave them as compost, avoiding burning.' },
        { es: 'Trabajar en orgánico, sin fertilizantes químicos.', en: 'Work organically, without chemical fertilisers.' },
        { es: 'No utilizar pesticidas.', en: 'No use of pesticides.' },
        { es: 'Transformar las uvas en nuestra bodega, muy cerca de los viñedos, reduciendo las emisiones por transporte.', en: 'Process the grapes at our winery, very close to the vineyards, reducing transport emissions.' },
      ] },
    ],
  },

]
