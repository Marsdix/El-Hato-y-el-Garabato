// ─── EQUIPO ───────────────────────────────────────────────────────
// Para añadir un miembro: copiar uno de los objetos y rellenar los campos.
// 'invertido: true' → imagen a la derecha, texto a la izquierda
// Imágenes recomendadas en public/images/equipo-[nombre].jpg (horizontal 3:2)

export const EQUIPO = [
  {
    id: 'jose',
    nombre: 'Jose Manuel Beneitez López',
    rol: 'El Enólogo',
    invertido: false,
    // IMAGEN JOSE ─ reemplazar por /images/equipo-jose.jpg (horizontal 3:2)
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/09/82HG_PiValbuena_Julio2020-scaled-1-1024x682.jpg',
    imagenPos: '63% 41%',
    bio: [
      {
        texto: 'Ingeniero de Montes, Licenciado en Ciencias Ambientales, máster en Desarrollo Rural y Máster en Enología. Aunque el título del que siento más orgullo es el de padre de Vera y Lola.',
        destacado: true,
      },
      {
        texto: 'Comencé mi vida laboral en la Universidad Rey Juan Carlos, donde realicé la tesina y la suficiencia investigadora. Esto me permitió trabajar en Costa Rica, Reino Unido y Noruega como investigador, y también saber que la investigación no es para mí.',
        destacado: false,
      },
      {
        texto: 'Tras la universidad trabajé en el Centro de Servicios Forestales, CESEFOR, y en la Sociedad Pública de Medio Ambiente de Castilla y León, en proyectos sobre bosques y zonas protegidas en toda Castilla y León y en Argentina.',
        destacado: false,
      },
      {
        texto: 'En 2011, diez años después de salir de la universidad, regresé a ella para formarme en mi pasión y realicé el Máster de Enología de la Universidad de La Rioja. Desde entonces he tenido la suerte de trabajar en algunas de las mejores bodegas del mundo en Toro, California, Australia y Portugal.',
        destacado: false,
      },
      {
        texto: 'Concienzudo, meticuloso y un poco bohemio son algunos de los rasgos que me definen. Me apasionan los trabajos al aire libre y los proyectos en los que puedo expresarme.',
        destacado: true,
      },
    ],
  },
  {
    id: 'liliana',
    nombre: 'Liliana Fernández Pérez',
    rol: 'La Xefa',
    invertido: true,
    // IMAGEN LILIANA ─ reemplazar por /images/equipo-liliana.jpg (horizontal 3:2)
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/09/18HG_PiValbuena_Julio2020-1-scaled-1-1024x682.jpeg',
    imagenPos: '41% 51%',
    bio: [
      {
        texto: 'Asturiana de nacimiento y de corazón. Hace ya veintitantos años que salí de Asturias para estudiar Licenciatura en Ciencias Ambientales e Ingeniería de Montes en Ávila. De ahí me trasladé a Madrid donde hice un máster en Desarrollo Rural.',
        destacado: true,
      },
      {
        texto: 'Comencé mi andadura profesional desarrollando los itinerarios ambientales del Parque de la Prehistoria en Teverga. Después trabajé en los espacios naturales protegidos de la Red Natura 2000 en Murcia, y de Murcia a Zamora, donde trabajé ocho años como gerente de la Federación de Propietarios Forestales de Castilla y León.',
        destacado: false,
      },
      {
        texto: 'Dejé la Federación para desarrollar nuestro proyecto, seguir a Jose a California y poco después él me siguió a mí a Australia donde estudié un MBA. De regreso en España, una beca de la Junta de Castilla y León me permitió realizar un máster en Comercio Internacional en el ESIC.',
        destacado: false,
      },
      {
        texto: 'Soy apasionada, emprendedora y optimista. Me encanta el medio rural y las personas: ellas configuran el centro de nuestra bodega. A nuestros clientes y lectores va dirigido todo nuestro trabajo, nuestra trayectoria y alma.',
        destacado: true,
      },
    ],
  },
  {
    id: 'luisfer',
    nombre: 'Luis Fernando Cabrero Benéitez',
    rol: 'El Socio',
    invertido: false,
    // IMAGEN LUISFER ─ reemplazar por /images/equipo-luisfer.jpg (horizontal 3:2)
    imagen: 'https://elhatoyelgarabato.com/wp-content/uploads/2024/09/55HG_PiValbuena_Julio2020-1-scaled-1-1024x682.jpg',
    imagenPos: '50% 50%',
    bio: [
      {
        texto: '"Luisfer para todos". Nací y me crié en Formariz, soy uno de los cuatro niños nacidos en este pueblo en los últimos treinta años. Eso me permitió hacer trabajos tan variopintos como el de monaguillo o ayudante del médico.',
        destacado: true,
      },
      {
        texto: 'Soy el millennial del equipo. Estudié Económicas en la Universidad de Salamanca y un MBA en Banca y Finanzas en León. Regresé al pueblo en 2012 y formo parte del equipo del Hato y el Garabato desde 2015, cuando comienza el proyecto.',
        destacado: false,
      },
      {
        texto: 'Me encargo del viñedo y las cuadrillas en vendimia, y durante todo el año trabajo en los embotellados, preparación de pedidos, poda y todos los trabajos de la elaboración. Desde 2019 soy también Agente Comercial de Unicaja Banco.',
        destacado: false,
      },
      {
        texto: 'Ah, y que sepáis: aunque soy Benéitez y esto es un pueblo muy pequeño, no soy familia de José. Pertenecemos a dos ramas diferentes... por más que él se empeñe.',
        destacado: true,
      },
    ],
  },
]
