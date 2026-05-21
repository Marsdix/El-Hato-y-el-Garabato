// Seed: crea o reemplaza los 18 posts de blog en Sanity.
// Ejecutar desde studio/:
//   SANITY_AUTH_TOKEN=skTuToken node scripts/seed-blog.mjs
//
// Nota: el campo "imagen" es un asset de Sanity — añade las portadas manualmente
// desde el Studio (localhost:3333).
// Los bloques con src:'PENDIENTE_URL_YOUTUBE' necesitan su URL real de YouTube.

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

function keyed(arr) {
  return arr.map((item, i) => ({ _key: `k${i}`, ...item }))
}
function keyedItems(items) {
  return items.map((item, i) => ({ _key: `li${i}`, ...item }))
}

const POSTS = [

  // ── 1. La Vanguardia ──────────────────────────────────────────────
  {
    _id:      'blogpost-la-vanguardia',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'la-vanguardia' },
    title:    { es: 'El Hato y el Garabato en La Vanguardia: el vino de Arribes que rompe el determinismo latitudinal', en: 'El Hato y el Garabato in La Vanguardia: the Arribes wine that defies latitudinal determinism' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '5 min de lectura' },
    excerpt:  { es: 'Santi Rivas elige El Hato y el Garabato en La Vanguardia como ejemplo de bodega que convierte una ubicación ignorada en ventaja. El Ecléctico de puesta en cruz, «uno de los mejores blancos de este país por debajo de 20 euros».', en: 'La Vanguardia analyses how El Hato y el Garabato challenges stereotypes about wines from southern Iberia.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-la-vanguardia/',
    tags:     ['prensa', 'La Vanguardia', 'Santi Rivas', 'DO Arribes', 'Puesta en Cruz', 'Ecléctico', 'Juan García', 'vinos singulares', 'determinismo latitudinal', 'Zamora'],
    content: keyed([
      { type: 'intro', es: 'Santi Rivas escoge El Hato y el Garabato en La Vanguardia como el primer ejemplo de bodega que convierte la desventaja de una ubicación ignorada en una ventaja competitiva. El artículo, publicado el 21 de febrero de 2026 en la sección Comer/Beber del diario, plantea un concepto provocador — el determinismo latitudinal — para explicar por qué hay regiones que suman reputación a sus vinos y otras que restan.' },
      { type: 'p', es: 'De entre todas las bodegas de España que podría haber elegido para ilustrar su tesis, Rivas sitúa a El Hato y el Garabato en primer lugar.' },
      { type: 'h2', es: '¿Qué es el determinismo latitudinal?' },
      { type: 'p', es: 'Santi Rivas acuña el término «determinismo latitudinal» para describir un fenómeno que condiciona el mercado del vino español. La idea es directa: no es lo mismo tener la bodega en Rioja o Ribera del Duero — regiones cuyo nombre ya vende — que en una denominación que el consumidor medio no conoce.' },
      { type: 'p', es: '«Hay regiones que suman reputación a sus bodegas, otras que restan y, por supuesto, también las que ni lo uno ni lo otro. Aunque pueden, las bodegas inmersas en latitudes exitosas o neutras no deberían obviar esta circunstancia, pero para las que están situadas en las menos conocidas, darse cuenta de este contexto es una cuestión de supervivencia para proceder en consecuencia.»' },
      { type: 'p', es: 'La solución que plantea el artículo es clara: si estás en una zona poco conocida, o te centras en el consumo de cercanía, o apuestas todo a la calidad y a la singularidad para atraer al consumidor iniciado — el único segmento del mercado del vino que crece.' },
      { type: 'h2', es: '«Uno de los mejores blancos de este país por debajo de 20 euros»' },
      { type: 'p', es: 'Santi Rivas presenta El Hato y el Garabato como el primero de tres ejemplos de vinos excelentes de regiones ignoradas, y dedica a nuestro Ecléctico de puesta en cruz la frase más contundente del artículo:' },
      { type: 'p', es: '«Podéis probar cualquiera de sus tintos, pero yo aquí vengo con su puesta en cruz, variedad autóctona que aquí nos deja un blanco salino y vertical, de fruta contenida y bastante suelo. Sin duda, uno de los mejores blancos de este país por debajo de 20 euros.»' },
      { type: 'p', es: 'La descripción — salino, vertical, con suelo — encaja con lo que siempre hemos buscado en nuestros blancos: vinos que hablen de la tierra de la que vienen sin necesidad de artificios.' },
      { type: 'h2', es: 'El Hato y el Garabato, un proyecto «muy vigente»' },
      { type: 'p', es: 'Rivas presenta la bodega con precisión: «En tierras de Zamora y Salamanca se halla esta DO que atesora proyectos muy a tener en cuenta. Uno de ellos es el de El Hato y el Garabato, un proyecto familiar de Liliana Fernández y José Manuel Benéitez (también enólogo de Vía Cénit), orientado a vinos diferenciales, frescos y fluidos. Es decir, de un estilo muy vigente.»' },
      { type: 'p', es: 'Tres adjetivos que definen lo que hacemos: diferenciales, frescos y fluidos. Y una conclusión que sitúa ese estilo en el centro de lo que el mercado del vino busca hoy.' },
      { type: 'h2', es: '«¿Quién va a pedir una Juan García en Madrid?»' },
      { type: 'p', es: 'El artículo formula la pregunta clave para cualquier bodega de los Arribes:' },
      { type: 'p', es: '«¿Quién va a pedir una Juan García en Madrid? Pues alguien con la suficiente curiosidad y espíritu como para no estar bebiendo siempre lo mismo. Son aquellos que pensamos que en la variedad está la diversión.»' },
      { type: 'p', es: 'Rivas responde a su propia pregunta: el consumidor iniciado. Ese perfil — curioso, con criterio, que huye de lo predecible — es exactamente a quien van dirigidos nuestros vinos. El artículo convierte lo que podría ser una debilidad comercial (una uva desconocida de una región desconocida) en el argumento de venta más potente: la singularidad.' },
      { type: 'h2', es: 'Por qué esta mención importa' },
      { type: 'p', es: 'La Vanguardia es el diario de referencia de Barcelona y uno de los más leídos de España. Su sección Comer/Beber llega a un público amplio que incluye tanto consumidores con criterio como profesionales de la hostelería y la distribución.' },
      { type: 'p', es: 'Lo que hace especial esta mención no es solo la valoración del vino — «uno de los mejores blancos de este país por debajo de 20 euros» es una afirmación que no se hace a la ligera —, sino la posición que ocupa en el artículo. Santi Rivas elige tres bodegas de toda España para ilustrar su tesis, y El Hato y el Garabato es la primera. No es una mención al paso: es el ejemplo que abre el argumento.' },
    ]),
  },

  // ── 2. Planeta Vino ───────────────────────────────────────────────
  {
    _id:      'blogpost-planeta-vino',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'planeta-vino' },
    title:    { es: 'El Hato y el Garabato en Planeta Vino: la esperanza de un paisaje en los Arribes del Duero', en: 'El Hato y el Garabato in Planeta Vino: the hope of a landscape in Arribes del Duero' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura', en: '3 min read' },
    excerpt:  { es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero con El Hato y el Garabato como protagonista.', en: 'Planeta Vino publishes a six-page feature on Arribes del Duero with El Hato y el Garabato as the focus.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-planeta-vino/',
    tags:     ['DO Arribes', 'Planeta Vino', 'prensa', 'Juan García', 'Zamora'],
    content: keyed([
      { type: 'intro', es: 'Planeta Vino publica un reportaje de seis páginas sobre los Arribes del Duero y sitúa a El Hato y el Garabato como una de las bodegas que están dando esperanza a este paisaje fronterizo. El artículo, titulado «Arribes del Duero: la esperanza de un paisaje», ocupa el bloque central de la revista e incluye fotografías dedicadas de José Manuel Benéitez y Liliana Fernández como protagonistas del relato.', en: 'Planeta Vino publishes a six-page feature on Arribes del Duero, placing El Hato y el Garabato among the wineries bringing hope to this border landscape.' },
      { type: 'p', es: 'Planeta Vino es una de las revistas especializadas en vino de referencia en España. Publicación dirigida a profesionales del sector y aficionados con criterio, sus reportajes de fondo son seguidos por sumilleres, distribuidores, importadores y compradores de toda la cadena del vino español. Que los Arribes del Duero aparezcan en portada — junto a temas como la añada de Rioja y los vinos reducidos — confirma que la denominación ha entrado en el radar de la prensa vinícola nacional.' },
      { type: 'h2', es: 'La esperanza de un paisaje que resiste' },
      { type: 'p', es: 'El reportaje arranca describiendo los Arribes como una zona rara dentro del panorama vitivinícola español, relativamente desconocida y con un pasado marcado por el autoconsumo. La tesis del artículo es clara: lo que durante décadas fue un territorio aislado y olvidado se ha convertido en una de las regiones con mayor potencial de singularidad del país, gracias a un grupo reducido de viñadores que decidieron quedarse o volver.' },
      { type: 'p', es: 'El dato que enmarca todo el reportaje es contundente: de las más de cuatro mil hectáreas de viñedo que llegaron a registrarse en la zona, se ha pasado a apenas 270 hectáreas en la actualidad. Esa cifra, lejos de ser solo una estadística de declive, es la medida del valor de cada cepa que sobrevive y de cada bodeguero que apuesta por recuperarlas.' },
      { type: 'h2', es: 'José Manuel y Liliana, protagonistas del reportaje' },
      { type: 'p', es: 'Planeta Vino dedica fotografías individuales a José Manuel Benéitez y a Liliana Fernández, presentándolos como figuras centrales de la nueva generación de los Arribes. En un reportaje que recorre toda la denominación — desde las bodegas históricas de Fermoselle hasta las cooperativas de la vertiente salmantina —, El Hato y el Garabato ocupa un espacio destacado como proyecto que encarna el espíritu del artículo: volver a una tierra difícil para hacer vino con las variedades que nadie arrancó.' },
      { type: 'p', es: 'Ambos aparecen retratados junto a sus vinos, en el entorno de la bodega de Formariz: José Manuel en el viñedo y Liliana con la gama de la bodega. Son imágenes que reflejan lo que el artículo narra: una pareja de ingenieros de montes con experiencia internacional que eligió los Arribes para construir su proyecto de vida.' },
      { type: 'h2', es: 'La denominación, las variedades y la Ruta del Vino' },
      { type: 'p', es: 'El reportaje recorre todos los pilares de los Arribes: la Denominación de Origen, las variedades autóctonas, el enoturismo y el paisaje del cañón del Duero. Planeta Vino dedica secciones específicas a cada uno de ellos:' },
      { type: 'list', items: keyedItems([
        { es: 'La denominación: historia del Consejo Regulador, situación actual y retos de una DO con apenas 270 hectáreas inscritas.' },
        { es: 'Las variedades: juan garcía, bruñal, puesta en cruz, rufete, bastardillo y las demás uvas autóctonas que el aislamiento histórico preservó intactas, un patrimonio genético que no existe en ninguna otra zona vinícola española.' },
        { es: 'La Ruta del Vino: el artículo la define como «una de las rutas más bonitas de la Península Ibérica, llena de actividades y la gran desconocida».' },
        { es: 'El crucero fluvial: el recorrido en barco por el Parque Natural de los Arribes del Duero, entre cañones de granito, buitres leonados y un Duero sereno.' },
      ]) },
    ]),
  },

  // ── 3. Sobremesa ──────────────────────────────────────────────────
  {
    _id:      'blogpost-sobremesa',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'sobremesa' },
    title:    { es: 'El Hato y el Garabato en Sobremesa: los vinos singulares de los Arribes del Duero', en: 'El Hato y el Garabato in Sobremesa: the singular wines of Arribes del Duero' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'La revista Sobremesa dedica un extenso reportaje a los Arribes del Duero y a nuestra forma de hacer vino.', en: 'Sobremesa magazine devotes a major feature to Arribes del Duero and our approach to winemaking.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-sobremesa/',
    tags:     ['Sobremesa', 'prensa', 'DO Arribes', 'Ecléctico', 'Raúl Pérez', 'Javier Vicente Caballero'],
    content: keyed([
      { type: 'intro', es: 'La revista Sobremesa dedica un extenso reportaje a los Arribes del Duero y destaca El Hato y el Garabato como una de las bodegas de referencia de la denominación. El artículo, publicado el 21 de noviembre de 2022 y firmado por Javier Vicente Caballero con fotografías de Álvaro Fernández Prieto, recorre la comarca fronteriza desde el crucero fluvial de Miranda do Douro hasta las laderas salmantinas, retratando a los viñadores que resisten en uno de los paisajes vinícolas más singulares de España.' },
      { type: 'p', es: 'Sobremesa es la revista española de vino y gastronomía más veterana del país, con más de cuatro décadas de publicación ininterrumpida. Su audiencia está formada por profesionales del sector — sumilleres, distribuidores, restauradores — y por aficionados al vino con criterio formado.' },
      { type: 'h2', es: '«Poco… Pero a la vez todo»' },
      { type: 'p', es: 'El reportaje dedica una sección completa a El Hato y el Garabato bajo el título «Poco… Pero a la vez todo», la frase que define la filosofía de la bodega. José Manuel Benéitez explica el origen del nombre a la revista:' },
      { type: 'p', es: '«El nombre de la bodega remite a un pasaje del Quijote, donde Sancho fía todo a un hatillo y a un palo, que resulta poco, pero a la vez lo es todo.»' },
      { type: 'p', es: 'El periodista Javier Vicente Caballero presenta a José Manuel y a Liliana Fernández como ingenieros de montes y pareja sentimental que se jugaron todo por estas tierras, y define El Hato y el Garabato como «una firma que ya anda de boca en boca entre los winelovers y los fans de ir a contracorriente».' },
      { type: 'h2', es: 'Los Arribes, una rareza aislada' },
      { type: 'p', es: 'José Manuel Benéitez describe los Arribes con la claridad de quien conoce cada palmo de su tierra. La revista recoge sus palabras:' },
      { type: 'p', es: '«Los Arribes son una rareza, tradicionalmente aislada por ubicación. Esto es pobre, con producciones ridículas de cualquier cosa que plantes. La extensión de viñas siempre ha sido pequeña, consumo propio.»' },
      { type: 'p', es: '«Somos tierra de viñas mezcladas e históricos claretes, mucho trueque y poco comercio.»' },
      { type: 'p', es: 'El artículo sitúa esta realidad en un contexto más amplio: la zona ha perdido el 90% de su extensión de viñedo — de 3.000 a apenas 300 hectáreas. Lo que otros ven como debilidad, los bodegueros de los Arribes convierten en singularidad.' },
      { type: 'h2', es: 'Ecléctico, De Buena Jera y toda la gama, catados en bodega' },
      { type: 'p', es: 'Sobremesa cata los vinos de El Hato y el Garabato directamente en la bodega y en el viñedo. El periodista prueba in situ el Ecléctico blanco 2020, monovarietal de puesta en cruz sin maderas ni pieles y de fermentación espontánea, y lo califica como «soberbio», destacando su «sabor salino, ecos de albariza, frescura y poco grado».' },
      { type: 'p', es: 'El recorrido continúa en la casona sayaguesa de Formariz — la casa del bisabuelo de José Manuel, reconvertida en bodega — donde la revista recorre la gama completa: Cotexia, el Naranja Ecléctico con palomino, Sin Blanca, el Rosado La Xefa y el parcelario De Buena Jera, elaborado con juan garcía, rufete y bastardillo tras 14 meses en barrica usada.' },
      { type: 'p', es: 'El artículo también revela que José Manuel y Liliana trabajan en nuevos proyectos junto a Raúl Pérez, una de las referencias absolutas del vino artesanal español.' },
    ]),
  },

  // ── 4. El País ────────────────────────────────────────────────────
  {
    _id:      'blogpost-elpais',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'elpais' },
    title:    { es: 'El Hato y el Garabato en El País: los vinos de Sayago que llegan a Japón', en: 'El Hato y el Garabato in El País: the wines of Sayago reaching Japan' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'El Hato y el Garabato aparece en El País como uno de los referentes de la gastronomía artesanal de Sayago.', en: 'El País highlights El Hato y el Garabato as one of the leading artisan producers of Sayago.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-el-pais/',
    tags:     ['El País', 'prensa', 'Sayago', 'Japón', 'Juan García', 'DO Arribes', 'Almudena Ávalos'],
    content: keyed([
      { type: 'intro', es: 'El Hato y el Garabato aparece en El País como uno de los referentes de la gastronomía artesanal de Sayago. El reportaje, publicado el 26 de marzo de 2026 y firmado por Almudena Ávalos —jefa de la sección de Gastronomía del diario—, recorre la comarca zamorana para retratar a quienes decidieron quedarse, o volver, cuando todo invitaba a marcharse.' },
      { type: 'h2', es: 'La bodega de Formariz que convirtió las raíces en reconocimiento' },
      { type: 'p', es: 'El Hato y el Garabato está en Formariz, Sayago, dentro de la Denominación de Origen Arribes. José Manuel Benéitez y Liliana Fernández Pérez dirigen la bodega junto a su familia. Producen 20.000 botellas al año con variedades autóctonas —Juan García, Bruñal y Puesta en Cruz— cuya salinidad característica ha encontrado reconocimiento allí donde menos se esperaba: Japón es hoy su principal mercado.' },
      { type: 'h2', es: 'De La Rioja a California, de Australia a Sayago' },
      { type: 'p', es: 'José Manuel Benéitez se formó en La Rioja, California y Australia antes de regresar a las viñas familiares de Sayago. Volvió cuando la lógica aconsejaba lo contrario. Recuperó ese patrimonio vitícola, apostó por elaboraciones que dialogaban con la tradición local y construyó una bodega que hoy exporta a uno de los mercados más exigentes del mundo.' },
      { type: 'p', es: 'El País lo resume con una frase que define bien lo que hacemos: «Las andanzas de esta pareja evidencian que volver no tiene por qué significar retroceder, sino también reivindicar.»' },
      { type: 'h2', es: 'Juan García, Bruñal y Puesta en Cruz: las variedades que nos definen' },
      { type: 'p', es: 'Las variedades autóctonas Juan García, Bruñal y Puesta en Cruz son el núcleo de los vinos de El Hato y el Garabato. Las tres crecen en los suelos graníticos de los Arribes del Duero, en uno de los paisajes vitícolas más singulares de España. Su salinidad —resultado directo del terroir de la comarca— es lo que las diferencia en mercados internacionales como el japonés, donde los vinos con identidad de lugar tienen creciente demanda.' },
    ]),
  },

  // ── 5. ¡Hola! ─────────────────────────────────────────────────────
  {
    _id:      'blogpost-hola',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'hola' },
    title:    { es: 'El Hato y el Garabato en ¡Hola!: parada recomendada en la ruta por los Arribes del Duero', en: 'El Hato y el Garabato in ¡Hola!: a recommended stop on the Arribes del Duero route' },
    cat:      'blog.cat.enoturismo',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'La revista ¡Hola! incluye El Hato y el Garabato en su ruta turística por los Arribes del Duero.', en: '¡Hola! magazine includes El Hato y el Garabato in its tourist route through Arribes del Duero.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-hola/',
    tags:     ['¡Hola!', 'prensa', 'enoturismo', 'DO Arribes', 'Formariz', 'Alfredo García Reyes'],
    content: keyed([
      { type: 'intro', es: 'La revista ¡Hola! incluye El Hato y el Garabato en su ruta turística por los Arribes del Duero como ejemplo de las pequeñas bodegas de autor que hay que conocer en la zona. El reportaje, firmado por Alfredo García Reyes, propone un recorrido por el territorio fronterizo entre Zamora y Salamanca con el río Duero como eje, y destaca la bodega de Formariz junto a sus catas y visitas al viñedo como una de las paradas imprescindibles.' },
      { type: 'h2', es: 'Los Arribes del Duero: naturaleza, vino y paisaje de frontera' },
      { type: 'p', es: 'Los Arribes del Duero son uno de los territorios con más personalidad de Castilla y León. Más de 120 kilómetros de cañones pétreos entre las provincias de Zamora y Salamanca, con el río Duero marcando la frontera con Portugal. Miradores de vértigo sobre el cañón, pueblos de piedra con siglos de historia vitícola, aves rapaces — buitres leonados, águilas reales — y bodegas que trabajan variedades autóctonas que no se encuentran en ningún otro rincón del mundo.' },
      { type: 'p', es: '¡Hola! dedica su ruta a este territorio y lo presenta como un destino que lo tiene todo para una escapada: naturaleza indómita, buena gastronomía y vinos de pequeñas bodegas por descubrir.' },
      { type: 'h2', es: '«Una pareja de jóvenes enólogos con muy buenas ideas»' },
      { type: 'p', es: 'Así describe ¡Hola! a El Hato y el Garabato: una bodega dirigida por una pareja de jóvenes enólogos con muy buenas ideas en materia de vinos. El reportaje la sitúa como primer ejemplo dentro de las pequeñas bodegas de autor de la DO Arribes y destaca también las experiencias que ofrece: catas en la bodega y visitas al viñedo.' },
      { type: 'p', es: 'Llegar a Formariz — el pueblo de Sayago donde está la bodega — es parte de la experiencia. Carreteras que serpentean entre encinas y dehesas divididas por muros de piedra, paisajes que cambian de la meseta al cañón en pocos kilómetros.' },
      { type: 'h2', es: 'Visítanos: catas y visitas al viñedo en Formariz' },
      { type: 'p', es: 'El Hato y el Garabato está abierta a visitas tanto a la bodega como al viñedo. Si quieres conocer de cerca cómo trabajamos — las 32 parcelas repartidas por los pueblos de los Arribes, las variedades autóctonas que recuperamos, la filosofía de mínima intervención que está detrás de cada botella — escríbenos para organizar tu visita.' },
      { type: 'p', es: 'Una cata en Formariz no es solo una cata: es entender por qué un vino sabe a su lugar y a nadie más.' },
    ]),
  },

  // ── 6. Robert Parker ──────────────────────────────────────────────
  {
    _id:      'blogpost-robert-parker',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'robert-parker' },
    title:    { es: 'El Hato y el Garabato en Robert Parker Wine Advocate', en: 'El Hato y el Garabato in Robert Parker Wine Advocate' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'El crítico de referencia mundial destaca nuestros vinos como exponente de las variedades autóctonas de Arribes.', en: 'The world\'s leading wine critic highlights our wines as exemplars of Arribes del Duero native varieties.' },
    href:     'https://elhatoyelgarabato.com/blog/el-hato-y-el-garabato-en-robert-parker-wine-advocate/',
    tags:     ['Robert Parker', 'Wine Advocate', 'Luis Gutiérrez', 'prensa', 'DO Arribes', 'Juan García', 'Tierra Prometida'],
    content: keyed([
      { type: 'intro', es: 'El Hato y el Garabato es una pequeña bodega familiar en los Arribes del Duero fundada en 2015 por José Manuel Benéitez López y Liliana Fernández Pérez. Así la presenta Luis Gutiérrez en Robert Parker Wine Advocate, añadiendo que ambos son ingenieros de montes con experiencia en bodegas de referencia mundial: Australia, California con Calera, Portugal con Niepoort y Toro con Dominio del Bendito. Volvieron para recuperar el viñedo familiar de José Manuel en Formariz, donde instalaron su casa y su bodega. Empezaron con 0,3 hectáreas de viña vieja en el pueblo de Cibanal.' },
      { type: 'p', es: 'Hoy trabajan ocho hectáreas de viñas viejas en más de 30 parcelas repartidas en cinco pueblos — Cibanal, Torregamones, Monumenta, Fermoselle y Mámoles —, todas en ecológico. La producción oscila entre las 10.000 y las 20.000 botellas anuales.' },
      { type: 'h2', es: 'Liliana Fernández, vicepresidenta del Consejo Regulador de Arribes' },
      { type: 'p', es: 'Liliana Fernández Pérez es vicepresidenta del Consejo Regulador de la DO Arribes del Duero. Luis Gutiérrez lo señala explícitamente al hablar del liderazgo institucional que está transformando la denominación: Thyge Benned Jensen de Frontio ocupa la presidencia, y Liliana representa a El Hato y el Garabato en la vicepresidencia. Es una posición que refleja el peso que la bodega tiene no solo como productora, sino como impulsora del futuro de la DO.' },
      { type: 'h2', es: 'Juan García y el cambio climático: la uva que anticipa el futuro' },
      { type: 'p', es: 'José Manuel Benéitez describe la Juan García como una de las variedades más valiosas ante el cambio climático. Sus palabras exactas, recogidas por Parker: «Es una uva que madura entre el 11,5 y el 12% de alcohol, manteniendo la frescura y la acidez, lo que ante el cambio climático que estamos viviendo puede ser un activo muy valioso.»' },
      { type: 'p', es: 'Con esa madurez controlada, los vinos son finos, frescos y aromáticos — muy diferentes de un Ribera del Duero de perfil potente y roble. La Juan García domina el viñedo de la bodega, con un 85% del total, acompañada de Bruñal, Bastardo, Puesta en Cruz, Mandón y Rufete, variedades que El Hato y el Garabato está ayudando a recuperar y reintroducir en la denominación.' },
      { type: 'h2', es: 'Tierra Prometida: el proyecto con Dominio del Bendito' },
      { type: 'p', es: 'El Hato y el Garabato tiene un proyecto conjunto con Antony Terryn de Dominio del Bendito en Toro, llamado Tierra Prometida. José Manuel trabajó con Antony antes de volver a Sayago. La conexión se ha mantenido y ha derivado en esta colaboración vinícola, que arrancó con viña joven y crecerá en el futuro con más viñedos y vinos.' },
      { type: 'p', es: 'La bodega también ha acogido en sus instalaciones a Raúl Pérez del Bierzo, referencia absoluta del vino artesanal español, que ha elaborado un tinto de Arribes.' },
    ]),
  },

  // ── 7. Condé Nast Traveler ────────────────────────────────────────
  {
    _id:      'blogpost-conde-nast',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'conde-nast' },
    title:    { es: 'Los Arribes del Duero, entre los mejores destinos del vino del mundo para 2024 según Condé Nast Traveler', en: 'Arribes del Duero among the world\'s best wine destinations for 2024 according to Condé Nast Traveler' },
    cat:      'blog.cat.enoturismo',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'Condé Nast Traveler incluye los Arribes del Duero en su lista de los mejores destinos del vino del mundo.', en: 'Condé Nast Traveler includes Arribes del Duero in its list of the world\'s best wine destinations.' },
    href:     'https://elhatoyelgarabato.com/blog/arribes-del-duero-conde-nast-traveler/',
    tags:     ['Condé Nast Traveler', 'enoturismo', 'DO Arribes', 'turismo de vino', 'Fermoselle', 'Raquel Pardo'],
    content: keyed([
      { type: 'intro', es: 'Condé Nast Traveler incluye los Arribes del Duero en su lista de los mejores destinos del vino del mundo para 2024. El artículo, publicado el 8 de enero de 2024 y firmado por Raquel Pardo, sitúa esta comarca zamorana y salmantina junto a la Patagonia argentina, Rheinhessen (Alemania), Santorini (Grecia), Georgia y el sur de Inglaterra como los territorios vinícolas que no hay que perderse ese año. Para hablar de los Arribes, la revista acude a José Manuel Benéitez como referente y portavoz del territorio.' },
      { type: 'h2', es: '«Venir aquí es como viajar en el tiempo»' },
      { type: 'p', es: 'Condé Nast Traveler describe los Arribes del Duero como un paraíso al límite de la despoblación, una zona aún sin explotar por el turismo de masas donde los vinos artesanos conservan el sabor auténtico de antaño. José Manuel Benéitez lo resume con precisión:' },
      { type: 'p', es: '«Es una zona espectacular, históricamente aislada, lo que hace que venir aquí sea como viajar en el tiempo, y ese es su mayor encanto.»' },
      { type: 'p', es: 'Benéitez recorre los 120 kilómetros de la denominación de origen trabajando los viñedos en pueblos donde no ha llegado la fiebre urbanística y que siguen conservando su esencia. Para él, ese aislamiento histórico no es una debilidad sino la fuente de todo lo que hace singular a esta tierra.' },
      { type: 'h2', es: 'Un potencial que no se encuentra en ningún otro lugar' },
      { type: 'p', es: 'Los Arribes del Duero combinan variedades autóctonas únicas, paisajes de cañón y una mezcla de influencias atlánticas y mediterráneas que no existe en ninguna otra denominación española. Así lo explica Benéitez en el artículo:' },
      { type: 'p', es: '«Tenemos un enorme potencial por esa mezcla de características; si lo buscas en otro lugar, no lo encuentras.»' },
      { type: 'p', es: 'La uva tinta dominante es la Juan García, pero el aislamiento histórico de la región ha preservado otras variedades que en zonas más accesibles desaparecieron: mandón, bruñal o tinto jeromo conviven en los viñedos viejos y forman parte del carácter de sus vinos tintos.' },
      { type: 'h2', es: 'Qué ver y dónde ir: las recomendaciones de José Manuel Benéitez' },
      { type: 'p', es: 'Condé Nast Traveler recoge las recomendaciones de ruta de Benéitez para quien quiera descubrir los Arribes del Duero:' },
      { type: 'list', items: keyedItems([
        { es: 'Miradores: las presas de Aldeadávila y Almendra, para ver el gran cañón del Duero desde las alturas.' },
        { es: 'Pueblo más bonito de Castilla y León: San Felices de los Gallegos, elegido en 2020. Parada obligatoria en el restaurante Mesa del Conde.' },
        { es: 'Fermoselle: capital extraoficial de los Arribes, conocida como el pueblo de las 1.000 bodegas por las galerías subterráneas que horadan su subsuelo.' },
      ]) },
      { type: 'p', es: '«Uno de los grandes atractivos de la región es que entronca con esa parte histórica, tradicional, de vuelta al pasado», añade Benéitez, quien invita a descubrir también la apasionante diversidad de flora y fauna de los Arribes.' },
      { type: 'h2', es: 'Por qué esta mención importa' },
      { type: 'p', es: 'Condé Nast Traveler es la revista de viajes de referencia mundial del grupo Condé Nast, con ediciones en más de 30 países. Su lista anual de destinos del vino es uno de los artículos más consultados por viajeros de alto poder adquisitivo, periodistas de viajes y operadores turísticos internacionales.' },
      { type: 'p', es: 'Que los Arribes del Duero aparezcan en la misma lista que Santorini o Georgia — y que José Manuel Benéitez sea el experto elegido para dar voz al territorio — posiciona a El Hato y el Garabato como referente de la denominación ante una audiencia global.' },
    ]),
  },

  // ── 8. James Suckling ─────────────────────────────────────────────
  {
    _id:      'blogpost-james-suckling',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'james-suckling' },
    title:    { es: 'Ecléctico Barrica 2023, en el Top 100 Value Wines 2025 de James Suckling con 94 puntos', en: 'Ecléctico Barrica 2023 in James Suckling\'s Top 100 Value Wines 2025 with 94 points' },
    cat:      'blog.cat.vinos',
    date:     '2026-04-13',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'El Ecléctico En Barrica 2023 alcanza el puesto 53 del Top 100 Value Wines 2025 del crítico James Suckling.', en: 'The Ecléctico En Barrica 2023 ranks 53rd in James Suckling\'s Top 100 Value Wines 2025.' },
    href:     'https://elhatoyelgarabato.com/blog/eclectico-barrica-2023-james-suckling/',
    tags:     ['James Suckling', 'Top 100', 'Ecléctico', 'Puesta en Cruz', 'prensa', 'DO Arribes', '94 puntos'],
    content: keyed([
      { type: 'intro', es: 'El Ecléctico En Barrica 2023 de El Hato y el Garabato ocupa el puesto 53 del Top 100 Value Wines 2025 de James Suckling con una puntuación de 94 puntos. La lista, publicada el 21 de enero de 2026 y compilada a partir de casi 45.000 vinos catados a lo largo de 2025, es uno de los rankings de relación calidad-precio más seguidos del mundo por distribuidores, importadores y compradores internacionales de vino.' },
      { type: 'p', es: 'España coloca 9 vinos en el listado. El Ecléctico En Barrica es el único vino blanco español de la selección y el único representante de la DO Arribes del Duero.' },
      { type: 'h2', es: 'La nota de cata de James Suckling: 94 puntos' },
      { type: 'p', es: 'El equipo de James Suckling describe el Ecléctico En Barrica 2023 como un vino blanco muy completo, agradable, angular y bien construido. La nota de cata completa:' },
      { type: 'p', es: '«This white shows aromas of citrus, walnuts and dried fruit. The palate is medium- to full-bodied with voluminous fruit that leads to a restrained, flavorful finish. Very complete, pleasant, angular and well constructed. This is the local clonal version of rabigato. Pressed, hyper-oxidized, then aged in barriques. Drink now or hold.»' },
      { type: 'p', es: 'Cítricos, nueces y fruta seca en nariz. Cuerpo entre medio y completo, fruta voluminosa y un final contenido y sabroso. Elaborado con prensado directo, hiperóxido intencional y crianza en barricas.' },
      { type: 'h2', es: 'Puesta en Cruz: la variedad que James Suckling llama «versión local del rabigato»' },
      { type: 'p', es: 'La Puesta en Cruz es la variedad autóctona de los Arribes del Duero con la que se elabora el Ecléctico En Barrica. James Suckling la identifica expresamente como «la versión local clonal del rabigato», la uva blanca portuguesa presente en el Tras-Os-Montes, al otro lado del río Duero. Es una variedad escasa — casi desaparecida — que El Hato y el Garabato recuperó y trabaja en sus parcelas de granito de los Arribes.' },
      { type: 'p', es: 'La elaboración es intencional y precisa: prensado directo, hiperóxido controlado para proteger la fruta sin antioxidantes y crianza en barricas usadas. El resultado es un blanco con personalidad y estructura que no se parece a ningún otro vino español.' },
      { type: 'h2', es: 'Qué significa entrar en el Top 100 Value Wines de James Suckling' },
      { type: 'p', es: 'El Top 100 Value Wines de James Suckling selecciona los mejores vinos del mundo por debajo de 40 dólares a partir de casi 45.000 referencias catadas. El criterio combina puntuación, precio, disponibilidad y volumen de producción. Entrar en esta lista con 94 puntos significa tres cosas concretas:' },
      { type: 'list', items: keyedItems([
        { es: 'Calidad objetiva: 94 puntos sitúa al Ecléctico En Barrica entre los blancos mejor valorados de España en 2025.' },
        { es: 'Relación calidad-precio excepcional: el criterio principal del ranking es que el vino sobredeliver respecto a su precio.' },
        { es: 'Visibilidad internacional: James Suckling tiene audiencia directa en Estados Unidos, Asia, Europa del norte y Reino Unido — los mismos mercados donde exportamos.' },
      ]) },
    ]),
  },

  // ── 9. ABC ────────────────────────────────────────────────────────
  {
    _id:      'blogpost-abc',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'abc' },
    title:    { es: 'De Buena Jera en ABC: el tinto con casi 100 años de historia familiar', en: 'De Buena Jera in ABC: the red with almost 100 years of family history' },
    cat:      'blog.cat.vinos',
    date:     '2026-04-13',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'El periódico ABC dedica un artículo a De Buena Jera, nuestro vino de guarda elaborado con Juan García ecológica.', en: 'ABC devotes an article to De Buena Jera, our age-worthy wine made from organic Juan García.' },
    href:     'https://elhatoyelgarabato.com/blog/de-buena-jera-en-abc/',
    tags:     ['ABC', 'prensa', 'De Buena Jera', 'Juan García', 'Pilar Cavero', 'DO Arribes'],
    content: keyed([
      { type: 'intro', es: 'De Buena Jera, el tinto de El Hato y el Garabato, protagoniza la sección de vinos de ABC Gastronomía. La reseña, publicada el 26 de marzo de 2026 y firmada por Pilar Cavero, destaca el vino como ejemplo de elaboración con mínima intervención para conservar el sabor de una viña con casi un siglo de historia.' },
      { type: 'h2', es: 'La viña del bisabuelo: el origen de De Buena Jera' },
      { type: 'p', es: 'De Buena Jera nace de la única viña que El Hato y el Garabato tiene en propiedad: la que plantó el bisabuelo de la familia hace casi 100 años. El resto de las ocho hectáreas que trabaja la bodega son parcelas en arrendamiento, repartidas por los suelos de arcillas, canto rodado y granito de los Arribes del Duero. Pero esta parcela es diferente. Tiene historia propia. Y ese es el punto de partida del vino.' },
      { type: 'p', es: 'El nombre lo dice todo: buena jera es una expresión zamorana que significa buen jornal, buen trabajo hecho con gusto. Esa idea define también la filosofía de elaboración: intervenir lo justo para que la parcela se exprese con claridad.' },
      { type: 'h2', es: 'Juan García: la variedad que habla del lugar' },
      { type: 'p', es: 'De Buena Jera se elabora principalmente con Juan García, variedad autóctona de los Arribes del Duero. Las fermentaciones son sin excesiva intervención, con extracciones moderadas. La crianza acompaña sin marcar, para que el carácter del viñedo y del suelo lleguen intactos a la copa.' },
      { type: 'p', es: 'El resultado que describe ABC es un vino de perfil frutal nítido, con buena frescura y un fondo ligeramente terroso y herbal. Muy propio de la zona. Reconocible.' },
    ]),
  },

  // ── 10. Spanish Wine Lover ────────────────────────────────────────
  {
    _id:      'blogpost-spanish-wine-lover',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'spanish-wine-lover' },
    title:    { es: 'El Hato y el Garabato en Spanish Wine Lover: el perfil completo de la bodega' },
    cat:      'blog.cat.prensa',
    date:     '2026-04-13',
    readTime: { es: '4 min de lectura' },
    excerpt:  { es: 'Spanish Wine Lover publica el perfil completo de El Hato y el Garabato junto a nombres como Raúl Pérez, Vega Sicilia o Comando G.' },
    tags:     ['Spanish Wine Lover', 'prensa', 'DO Arribes', 'Puesta en Cruz', 'Juan García', 'perfil bodega'],
    content: keyed([
      { type: 'intro', es: 'Spanish Wine Lover publica el perfil completo de El Hato y el Garabato dentro de su directorio de bodegas de referencia de la DO Arribes. El medio, especializado en vinos españoles para el mercado internacional, sitúa a la bodega junto a nombres como Raúl Pérez, Vega Sicilia, Dominio de Pingus, Envínate o Comando G en sus secciones más vistas.' },
      { type: 'h2', es: 'Quiénes somos y de dónde venimos' },
      { type: 'p', es: 'El Hato y el Garabato es una bodega artesana y familiar fundada en 2015 por José Manuel Benéitez y Liliana Fernández en Formariz, Zamora. Los dos son ingenieros de montes con experiencia vitivinícola en Australia, California y Portugal. Eligieron los Arribes del Duero —Parque Natural y Reserva de la Biosfera Meseta Ibérica— para construir su proyecto de vida. Remodelaron la antigua casa de piedra que el bisabuelo de José Manuel levantó en Formariz y se instalaron allí con sus hijas para elaborar vino y cuidar la viña familiar.' },
      { type: 'p', es: 'El nombre de la bodega es una referencia al Quijote: Sancho carga con un hatillo y un palo con todas sus pertenencias. José y Liliana se identificaron con esa imagen de comienzos modestos cuando arrancaron el proyecto.' },
      { type: 'p', es: 'Hoy, en bodega y en el campo, también trabaja con ellos Luisfer Cabrero, uno de los cuatro niños nacidos y criados en Formariz en los últimos treinta años.' },
      { type: 'h2', es: '12 hectáreas, 32 parcelas, 20.000 botellas en ecológico' },
      { type: 'p', es: 'El Hato y el Garabato cultiva 12 hectáreas en ecológico repartidas en 32 parcelas dentro de los Arribes del Duero. La mayoría están en arrendamiento. Solo una es de propiedad: la viña plantada por el bisabuelo de José Manuel, de donde nace De Buena Jera. De esas 12 hectáreas salen 20.000 botellas al año, una buena parte destinada a exportación.' },
      { type: 'p', es: 'La DO Arribes cuenta con apenas 270 hectáreas inscritas en el Consejo Regulador. Es una zona aislada donde la emigración masiva del siglo XX tuvo una consecuencia inesperada: las variedades autóctonas sobrevivieron intactas porque nadie las arrancó para plantar variedades más comerciales.' },
      { type: 'h2', es: 'Filosofía de elaboración: intervención mínima, expresión máxima' },
      { type: 'p', es: 'Los vinos de El Hato y el Garabato se elaboran con fermentaciones espontáneas, barricas usadas, sin filtraciones, sin clarificados y con dosis bajas de sulfuroso. Todos los tintos se fermentan con raspón. El objetivo es siempre el mismo: vinos equilibrados entre rusticidad y finura que reflejen el estilo tradicional de los Arribes — acidez natural, carácter mediterráneo en boca y graduación moderada.' },
      { type: 'h2', es: 'La gama completa' },
      { type: 'list', items: keyedItems([
        { es: 'La Xefa — Rosado de Juan García de viñas de más de 80 años, prensado directo. 1.000 botellas. 10 €.' },
        { es: 'Ecléctico blanco depósito — Puesta en Cruz, variedad autóctona emparentada con la rabigato portuguesa. Ocho meses sobre lías. 2.500 botellas. 14 €.' },
        { es: 'Ecléctico blanco barrica — Misma variedad, mismo tiempo de crianza pero en barrica usada. 600 botellas. 14 €.' },
        { es: 'Otro Cuento — Viña vieja con mayoría de doña blanca. Fermentación espontánea en tina, diez meses en barrica. 2.000 botellas. 18 €.' },
        { es: 'Cotexa — Tinto de pueblo fresco y de trago fácil. Juan García con hasta un 30% de uvas blancas, pisado en lagar, tres días de maceración con pieles, siete meses en barrica francesa usada. 9.000 botellas. 12 €.' },
        { es: 'Sin Blanca — El buque insignia de la bodega en tintos. Juan García 80%, más bruñal, bastardillo y rufete. Viñas de más de 80 años, racimos enteros. Perfil floral, pulido y sabroso. 9.900 botellas. 17,50 €.' },
        { es: 'De Buena Jera — Parcelario de la viña del bisabuelo, a más de 750 metros de altitud sobre arena granítica. Pisado suave, maceración de 35 días, 18 meses en barricas usadas de roble francés de 225 litros. 1.000 botellas. 30 €.' },
        { es: 'Valdeformariz — Nuevo parcelario. Juan García con pequeña presencia de uvas blancas. Quince meses en barrica. Seductor, delicado, fino y profundo al mismo tiempo. 600 botellas. 50 €.' },
      ]) },
      { type: 'h2', es: 'Visítanos' },
      { type: 'p', es: 'El Hato y el Garabato está abierta al enoturismo con visitas a la bodega y al viñedo. Si quieres conocer Formariz, los Arribes del Duero y cómo trabajamos, escríbenos para organizar tu visita.' },
    ]),
  },

  // ── 11. Trucos chimenea ───────────────────────────────────────────
  // PENDIENTE: añadir URL real del vídeo de YouTube en el bloque video
  {
    _id:      'blogpost-trucos-chimenea',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'trucos-chimenea' },
    title:    { es: 'Trucos para limpiar el cristal de tu chimenea y que quede como nueva' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'Cómo mantener el cristal de la chimenea limpio con solo tres materiales. Los trucos que usamos en nuestra casa en la bodega.' },
    tags:     ['bodega', 'chimenea', 'trucos', 'Nuestra casa en la Bodega'],
    content: keyed([
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
      { type: 'intro', es: 'Una de las cosas más geniales de vivir en nuestra casa en la bodega es la chimenea. Es una forma de calefacción con energía renovable: los árboles crecen y pueden ser podados. Históricamente, los robles y encinas de la zona se han podado para obtener leña — la de roble tiene el mayor valor calórico aquí. El tipo de calor que genera una chimenea es increíble, pero una de las cosas más complicadas es mantenerla limpia.' },
      { type: 'p', es: 'Nuestra chimenea tiene tres caras de vidrio, lo que requiere mucho mantenimiento. Lo que usamos son guantes, una o dos galletas para chimenea (que intentamos mantener secas cuando vamos a limpiar), el limpiador de Mercadona — de los que hemos probado es el más eficiente — y servilletas.' },
      { type: 'h2', es: 'Cómo hacerlo paso a paso' },
      { type: 'p', es: 'Primero nos ponemos los guantes y rociamos el producto bien distribuido. Pasamos la galleta y prácticamente toda la suciedad sale. Es increíble porque muchos productos dejan el vidrio igual que antes de empezar.' },
      { type: 'p', es: 'En la parte superior, donde la suciedad no llega igual, ponemos una servilleta rociada con el producto, dejamos que actúe y queda impecable. Y ya tienes tu chimenea lista para disfrutar del fuego.' },
    ]),
  },

  // ── 12. Vino ecológico, natural, etc. ─────────────────────────────
  {
    _id:      'blogpost-vino-ecologico-natural',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'vino-ecologico-natural' },
    title:    { es: '¿Qué significa un Vino Ecológico, vino natural, vino sin sulfitos, vino biodinámico, vino vegano? (explicado para todos)' },
    cat:      'blog.cat.info',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: '¿Qué significa exactamente vino ecológico, natural, vegano o biodinámico? Lo explicamos de forma clara y sin tecnicismos.' },
    tags:     ['vino ecológico', 'vino natural', 'vino vegano', 'sulfitos', 'biodinámica', 'información'],
    content: keyed([
      { type: 'intro', es: 'Vino Ecológico, Vino Biodinámico, Vino Natural, Vino con mínima intervención, Vino Vegano, Vino sin sulfitos… sellos y más sellos. ¿Qué significa cada uno de estos conceptos? ¿Sirven de algo? Hoy vamos a hablar exclusivamente de aquellos en los que hablamos de la elaboración y de la uva, no del origen territorial.' },
      { type: 'p', es: 'Todos estas cosas posiblemente os las habrán lanzado a poco que hayáis asomado la nariz por alguna tienda de vinos en condiciones. Lo primero: no os preocupéis si no tenéis claro lo que significa cada concepto, porque la mayoría de la gente que los utiliza tampoco lo tiene claro. A poco que me prestéis atención vais a saber más que todos ellos.' },
      { type: 'p', es: 'Mi opinión: lo importante del vino es que esté bueno. Si lo bebéis porque es de esta marca, o porque es ecológico, o biodinámico… eso puede ser un añadido o darnos información, pero lo fundamental es que esté bueno y que os guste. Disfrutar no tiene normas.' },
      { type: 'h2', es: 'Vino ecológico' },
      { type: 'p', es: 'Vino ecológico y vino orgánico son lo mismo. La clave fundamental está en la uva: la uva tiene que venir de producción ecológica. Esto significa que el viticultor tiene unos productos que puede utilizar en sus viñas y otros que no. Simplificando, los productores de uva en ecológico pueden usar azufre y cobre, y poquito más. Esto no significa que los viticultores no certificados no trabajen en ecológico: la certificación supone una carga de papeles y un coste que no a todos les compensa.' },
    ]),
  },

  // ── 13. Vino en los restaurantes con estrella Michelin ────────────
  {
    _id:      'blogpost-vino-restaurantes-michelin',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'vino-restaurantes-michelin' },
    title:    { es: 'El Vino en los Restaurantes con estrella Michelin' },
    cat:      'blog.cat.vinos',
    date:     '2024-06-28',
    readTime: { es: '7 min de lectura' },
    excerpt:  { es: 'Nuestros vinos están en seis restaurantes con estrella Michelin. Qué dice la guía sobre el vino y por qué importa.' },
    tags:     ['Michelin', 'restaurantes', 'sumilleres', 'Lera', 'Trigo', 'Ermitaño', 'cartas de vinos'],
    content: keyed([
      { type: 'intro', es: 'Diciembre nos ha dado una alegría con el merecido reconocimiento del restaurante Lera, que ha recibido su primera estrella Michelin. Con su presentación en todos los medios y redes sociales nos dio por hablar de los restaurantes en los que están nuestros vinos y de las cartas de vinos de los restaurantes con estrella Michelin.' },
      { type: 'p', es: '¿Cuál es el significado de las estrellas Michelin? La respuesta aparece escrita al lado del número de estrellas del establecimiento:' },
      { type: 'list', items: keyedItems([
        { es: 'Una estrella Michelin significa que el restaurante cuenta con una cocina de gran nivel. ¡Compensa pararse!' },
        { es: 'Dos estrellas significan que su cocina es excepcional. ¡Merece la pena desviarse!' },
        { es: 'Tres estrellas Michelin significan que el restaurante cuenta con una cocina única y que por sí mismo ¡justifica el viaje!' },
      ]) },
      { type: 'h2', es: 'Restaurantes con estrella en España' },
      { type: 'p', es: 'España se sitúa en quinto lugar a nivel mundial con 261 restaurantes en alguna de las tres categorías, por detrás de Francia (619), Japón (407), Italia (377) y Alemania (297).' },
      { type: 'list', items: keyedItems([
        { es: 'Francia: 619 estrellas — 332 con carta de vinos interesante (53%)' },
        { es: 'Italia: 377 estrellas — 231 con carta de vinos interesante (61%)' },
        { es: 'España: 228 estrellas — 91 con carta de vinos interesante (39%)' },
        { es: 'Estados Unidos: 200 estrellas — 101 con carta de vinos interesante (50%)' },
        { es: 'Japón: 407 estrellas — 95 con carta de vinos interesante (23%)' },
        { es: 'Castilla y León: 16 estrellas — 6 con carta de vinos interesante (37%)' },
      ]) },
      { type: 'h2', es: 'El vino en la guía Michelin' },
      { type: 'p', es: 'El vino puede aparecer dentro de la reseña del restaurante o como uno de los 41 servicios que tiene la guía: «carta de vinos atractiva». Esta opción aparece en el mismo desplegable que otros servicios e instalaciones como el aire acondicionado, el pago con tarjeta o la reserva previa.' },
      { type: 'p', es: 'No hemos encontrado en ningún sitio los criterios que marcan que una carta de vino sea «atractiva» para la guía. Del análisis que hemos hecho de varias cartas con esa calificación vemos que, a nivel nacional, se trata mayoritariamente de cartas con un amplio número de vinos de calidad, tanto nacionales como internacionales.' },
      { type: 'h2', es: 'Nuestros vinos en los restaurantes con estrella' },
      { type: 'p', es: 'El 47% de los restaurantes con estrella Michelin de los primeros países tiene una «carta de vinos interesante». España está un poco por debajo de esa media con un 40%. Castilla y León suma 16 restaurantes con estrella, de los que seis tienen ese servicio: tres localizados en las bodegas de Arzuaga, Abadía de Retuerta y Pago de Carraovejas, y los dos restantes, Restaurante Trigo y Restaurante el Ermitaño — en los que también estamos nosotros —, junto al Restaurante Lera, Abarra y Coque.' },
      { type: 'p', es: 'Nos gusta tener vinos de El Hato y el Garabato en las mesas de los restaurantes estrella Michelin porque nuestros vinos tienen una filosofía afín: valorizar al máximo los productos locales y las tradiciones, con un mayor interés por la sostenibilidad del producto y el medio ambiente.' },
      { type: 'h2', es: 'Disfrutar del vino en un restaurante con estrella' },
      { type: 'p', es: 'Para nosotros el vino es un elemento fundamental dentro de una comida. Lo mejor para acertar es preguntar al sumiller, transmitirle nuestros gustos y primar pequeños productores de alta calidad, con vinos honestos, ecológicos y locales — de esas cosas que no se encuentran fácilmente fuera de un restaurante con estrella Michelin.' },
      { type: 'p', es: 'Nuestra recomendación: empezad por Lera, que acaba de conseguir su estrella, o por El Trigo en Valladolid con un menú por 55 euros. Animamos a jugar con los vinos en vuestras «escapadas Michelin» y si os fiáis de nuestra recomendación, dejaros llevar por pequeños productores, de alta calidad, con vinos honestos, ecológicos y locales.' },
    ]),
  },

  // ── 14. Etiquetado de botellas ────────────────────────────────────
  // PENDIENTE: añadir URL real del vídeo de YouTube en el bloque video
  {
    _id:      'blogpost-etiquetado-botellas',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'etiquetado-botellas' },
    title:    { es: 'Así etiquetamos nuestras botellas, una a una.' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'Cómo etiquetamos nuestras botellas a mano, una a una. El truco con solo tres materiales que garantiza etiquetas rectas y a la misma altura.' },
    tags:     ['etiquetado', 'artesanal', 'botellas', 'bodega', 'tutorial'],
    content: keyed([
      { type: 'intro', es: 'El etiquetado es uno de los aspectos fundamentales de cualquier producto: nos aporta la primera impresión y nos permite clasificarlo de forma automática. En El Hato y el Garabato etiquetamos todas nuestras botellas de forma manual porque las máquinas de etiquetado suponen una inversión a la que aún no podemos hacer frente, y porque las versiones para pequeñas producciones no reducen el tiempo de trabajo.' },
      { type: 'p', es: 'Después de 5 años de etiquetado manual tenemos el truco para que vuestros productos elaborados de forma artesanal cuenten con un etiquetado a la altura del contenido. Solo necesitáis tres materiales:' },
      { type: 'list', items: keyedItems([
        { es: 'Un envase para etiquetar: botella de vino, tarro de miel, mermelada, conservas caseras, aceite…' },
        { es: 'Una etiqueta: comprada, impresa con vuestra impresora, hecha a mano.' },
        { es: 'Un libro: el que vosotros consideréis. El ancho del libro tiene que medir los centímetros de altura a la que queréis dejar la etiqueta.' },
      ]) },
      { type: 'h2', es: 'Primer paso' },
      { type: 'p', es: 'Colocamos el envase pegado al libro, sin distancia entre ellos. Pegado, pegado.' },
      { type: 'h2', es: 'Segundo paso' },
      { type: 'p', es: 'Quitamos la lámina que protege el pegamento y apoyamos la etiqueta sobre el libro, acercándola al envase.' },
      { type: 'h2', es: 'Tercer paso' },
      { type: 'p', es: 'Pegamos la etiqueta en su punto central y vamos pegando desde el centro hacia los extremos, moviendo las manos de arriba hacia abajo para evitar burbujas.' },
      { type: 'p', es: 'La mayor diferencia está en la repetición: si haces solo una botella conseguirás que quede derecha; si haces varias conseguirás además que todas queden a la misma altura. Si quieres verlo en vídeo, está disponible en nuestro canal de YouTube «Nuestra casa en la Bodega».' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ]),
  },

  // ── 15. Cómo presentar una botella lacrada ────────────────────────
  // PENDIENTE: añadir URL real del vídeo de YouTube en el bloque video
  {
    _id:      'blogpost-botella-lacrada',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'botella-lacrada' },
    title:    { es: 'Como presentar una botella lacrada' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'Tres formas de abrir una botella de vino lacrada: de la más directa a la más elegante.' },
    tags:     ['lacre', 'botellas', 'descorchar', 'ritual', 'bodega'],
    content: keyed([
      { type: 'intro', es: 'El lacre se usa desde la Edad Media en la correspondencia para proteger y autenticar. En el vino es uno de los elementos que te asegura que estás ante un vino artesano. Hoy venimos a contaros cómo servir una botella lacrada — hay veces que lo que no es habitual genera reparos, y queremos que podáis disfrutarla sin ninguno.' },
      { type: 'p', es: 'Hay tres formas de abrirla:' },
      { type: 'list', items: keyedItems([
        { es: 'La más radical: rajar el lacre de forma vertical y quitarlo del todo. Es válida, la vemos en muchos restaurantes, pero deja la botella desnuda.' },
        { es: 'La más directa: colocar el sacacorchos encima de la botella tal cual, como si el lacre no existiera, y descorchar. El lacre no dificulta en absoluto el descorche y la botella queda vestida. Pierde parte del ritual, pero es rápida.' },
        { es: 'La más elegante: pasar el corta cápsulas en la parte superior, retirando una tapita de lacre que deja ver el corcho. Esta es la que os veremos hacer cuando nos visitéis. Asegura que la botella mantenga buena presentación en la mesa y convierte la apertura en un ritual.' },
      ]) },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ]),
  },

  // ── 16. Cómo descorchar una botella ──────────────────────────────
  // PENDIENTE: añadir URL real del vídeo de YouTube en el bloque video
  {
    _id:      'blogpost-como-descorchar-botella',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'como-descorchar-botella' },
    title:    { es: 'Como descorchar una botella' },
    cat:      'blog.cat.bodega',
    date:     '2024-06-28',
    readTime: { es: '2 min de lectura' },
    excerpt:  { es: 'Cómo abrir una botella de vino como un profesional, aunque seas zurdo o no lo hayas hecho nunca.' },
    tags:     ['descorchar', 'sacacorchos', 'tutorial', 'bodega'],
    content: keyed([
      { type: 'intro', es: 'Voy a contaros cómo abrir una botella desde un punto de vista diferente: yo no disfruto para nada abriendo botellas. Bebiéndolas sí, pero abrirlas… si hay alguien en la sala que pueda sustituirme siempre me escaqueo. Hasta hace nada no entendía por qué me costaba tanto, más allá de disculparme con «es que yo soy zurda». Pues resulta que sí tiene que ver.' },
      { type: 'p', es: 'Fijaros cómo gira el sacacorchos un diestro y cómo lo tiene que girar un zurdo. Una vez que lo ves, la mecánica cambia completamente. Si hasta una zurda como yo abre botellas sin complejos, lo vuestro es pan comido.' },
      { type: 'p', es: 'Hay muchísimos tipos de sacacorchos. El bueno para abrir vuestro vino es el que tengáis en casa. Si queréis comprar uno, yo os recomiendo el de dos tiempos — el más utilizado por los profesionales. Añade un punto chic al momento de abrir una botella, no ocupa nada en el cajón, es económico y, como veréis, fácil de usar.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ]),
  },

  // ── 17. Variedades minoritarias ───────────────────────────────────
  // PENDIENTE: añadir URL real del vídeo de YouTube en el bloque video (hay dos)
  {
    _id:      'blogpost-variedades-minoritarias',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'variedades-minoritarias' },
    title:    { es: 'Variedades Minoritarias' },
    cat:      'blog.cat.vinos',
    date:     '2024-06-28',
    readTime: { es: '4 min de lectura' },
    excerpt:  { es: 'Las variedades de uva ancestrales y únicas de los Arribes del Duero: un patrimonio genético en peligro de extinción.' },
    tags:     ['variedades minoritarias', 'Juan García', 'Bruñal', 'Puesta en Cruz', 'DO Arribes', 'ITACYL', 'patrimonio genético'],
    content: keyed([
      { type: 'intro', es: '¿Sabéis lo que son las variedades de uva ancestrales, únicas, minoritarias y en peligro de extinción? Sobre este tema tenemos un vídeo en el que os lo contamos de forma resumida.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
      { type: 'h2', es: 'El vino debe una parte importante de sus aromas a la variedad' },
      { type: 'p', es: 'El vino debe sus matices, aromas y características en gran medida a la variedad o variedades de uvas con las que se elabora, sobre todo cuando se trata de vinos sin maquillar, en los que no se utilizan levaduras que aporten aromas artificiales.' },
      { type: 'p', es: 'Existen 177 variedades de uva aceptadas para vinificación en España que cubren de forma desigual las casi 950.000 hectáreas de viñedo. Pese a esa enorme variedad, la realidad en Castilla y León es que más del 87% del territorio está cubierto por cinco variedades. Si tenemos en cuenta las 10 más plantadas, el porcentaje asciende a 97%.' },
      { type: 'p', es: 'Se conoce como variedad minoritaria, según el ministerio de agricultura, a todas aquellas variedades con una superficie nacional menor de 1.000 hectáreas. Las variedades minoritarias nunca fueron muy productivas ni muy adaptables, nunca tuvieron el respaldo del marketing del vino de Francia, y por eso se quedaron en zonas sin desarrollo industrial vitivinícola, resistiendo como la aldea de Astérix.' },
      { type: 'p', es: 'Arribes es una locura de variedades raras. En esta zona atascada en el pasado tenemos un patrimonio genético de una riqueza incalculable que se va perdiendo año a año. Nosotros intentamos con nuestro proyecto mantener las viñas viejas y estas variedades únicas, y colaboramos en todas aquellas acciones que conlleven su conservación.' },
      { type: 'p', es: 'De hecho, Arribes concentra en números absolutos el mayor porcentaje de variedades raras y únicas en peligro de desaparición de España. El Instituto Tecnológico Agrario de Castilla y León (ITACYL) ha localizado, plantado y estudiado para su conservación algunas de estas variedades. Aquí en Arribes está uno de sus viñedos experimentales, con los que colaboramos siempre que nos lo proponen.' },
      { type: 'video', src: 'PENDIENTE_URL_YOUTUBE' },
    ]),
  },

  // ── 18. Cambio climático ──────────────────────────────────────────
  {
    _id:      'blogpost-cambio-climatico',
    _type:    'blogPost',
    slug:     { _type: 'slug', current: 'cambio-climatico' },
    title:    { es: 'Cambio climático, cero emisiones de carbono HG' },
    cat:      'blog.cat.bodega',
    date:     '2019-05-26',
    readTime: { es: '3 min de lectura' },
    excerpt:  { es: 'Cómo trabajamos desde el inicio para reducir nuestra huella de carbono y llegar a cero emisiones en la bodega.' },
    tags:     ['cambio climático', 'carbono', 'ecológico', 'sostenibilidad', 'DO Arribes', 'EiP Agri'],
    content: keyed([
      { type: 'intro', es: 'El cambio climático es un hecho y todos nosotros tenemos la responsabilidad de poner de nuestra parte. En El Hato y el Garabato trabajamos desde el inicio por reducir de forma consciente el impacto que nuestra actividad tiene sobre el entorno en el que trabajamos, con la finalidad de combatir el cambio climático, reducir las emisiones de carbono y dejar para el futuro un entorno mejor conservado.' },
      { type: 'h2', es: 'Quieres contribuir a evitar el cambio climático, nosotros te ayudamos' },
      { type: 'p', es: 'Elaboramos nuestros vinos y trabajamos nuestras viñas desde un enfoque de reducción de las emisiones de carbono, con la idea de llegar a cero emisiones en el desarrollo de nuestra actividad.' },
      { type: 'p', es: 'Hablar de cero emisiones es muy difícil: abrir un grifo, encender una luz o vestirse supone emitir carbono. Pero a diferencia de cualquier ciudadano, quienes gestionamos suelos agrícolas podemos compensar esas emisiones mediante acciones que capten carbono.' },
      { type: 'h2', es: '¿Qué hacemos en El Hato y el Garabato para alcanzar el objetivo de cero emisiones?' },
      { type: 'p', es: 'Analizamos cada uno de los procesos de la viña a la bodega, viendo cómo se pueden hacer más eficientes. Nuestras acciones concretas son:' },
      { type: 'list', items: keyedItems([
        { es: 'Mantener la cubierta vegetal de la viña, permitiendo que las plantas capturen carbono y lo almacenen en el suelo.' },
        { es: 'Arado superficial de la tierra, que elimina la vegetación competidora sin abrir mucho el suelo, reduciendo las emisiones.' },
        { es: 'Desbrozado de parte de nuestras viñas para eliminar vegetación competidora sin abrir el suelo.' },
        { es: 'Cortar los sarmientos en trozos pequeños y dejarlos como abono en la viña, evitando su quema y las emisiones por combustión.' },
        { es: 'Trabajar en orgánico, sin fertilizantes químicos, que tienen mayores emisiones.' },
        { es: 'No utilizar pesticidas, también altos en emisiones tanto en su fabricación como en su aplicación mediante tractores.' },
        { es: 'Transformar las uvas en nuestra bodega situada muy cerca de los viñedos, reduciendo las emisiones por transporte.' },
      ]) },
      { type: 'p', es: 'Estas son solo algunas de las acciones que llevamos a cabo. Si quieres saber más, puedes mantenerte informado a través de nuestra web y de nuestras redes sociales.' },
    ]),
  },

]

async function seed() {
  console.log('Borrando posts existentes...')
  const existentes = await client.fetch(`*[_type == "blogPost"]._id`)
  for (const id of existentes) {
    await client.delete(id)
    console.log(`  - borrado ${id}`)
  }

  console.log(`\nCreando ${POSTS.length} posts...`)
  for (const post of POSTS) {
    try {
      await client.create(post)
      console.log(`✓ ${post.slug.current}`)
    } catch (err) {
      console.error(`✗ ${post.slug.current}: ${err.message}`)
    }
  }
  console.log('\nListo. Recuerda:')
  console.log('  - Añadir imágenes de portada desde el Studio (localhost:3333)')
  console.log('  - Añadir URLs reales de YouTube en los posts marcados como PENDIENTE_URL_YOUTUBE')
}

seed()
