// ─── EQUIPO ───────────────────────────────────────────────────────────
// 'invertido: true' → imagen a la derecha, texto a la izquierda
// rol y bio[].texto son objetos {es, en} para internacionalización

import { IMAGES } from './images'

export const EQUIPO = [
  {
    id: 'jose',
    nombre: 'Jose Manuel Beneitez López',
    rol: { es: 'El Enólogo', en: 'The Winemaker' },
    invertido: false,
    imagen: IMAGES.nosotros.equipo.jose,
    objectFit: 'cover',
    imagenPos: '50% 18%',
    bio: [
      {
        texto: {
          es: 'Ingeniero de Montes, Licenciado en Ciencias Ambientales, máster en Desarrollo Rural y Máster en Enología. Aunque el título del que siento más orgullo es el de padre de Vera y Lola.',
          en: 'Forest Engineer, Environmental Sciences graduate, with a master\'s in Rural Development and a Master\'s in Enology. Though the title I\'m most proud of is being the father of Vera and Lola.',
        },
        destacado: true,
      },
      {
        texto: {
          es: 'Comencé mi vida laboral en la Universidad Rey Juan Carlos, donde realicé la tesina y la suficiencia investigadora. Esto me permitió trabajar en Costa Rica, Reino Unido y Noruega como investigador, y también saber que la investigación no es para mí.',
          en: 'I began my career at King Juan Carlos University, where I completed my dissertation. This led me to work in Costa Rica, the United Kingdom and Norway as a researcher — and also helped me realise that research was not for me.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Tras la universidad trabajé en el Centro de Servicios Forestales, CESEFOR, y en la Sociedad Pública de Medio Ambiente de Castilla y León, en proyectos sobre bosques y zonas protegidas en toda Castilla y León y en Argentina.',
          en: 'After university I worked at CESEFOR and the Castilla y León Public Environment Agency, on projects about forests and protected areas throughout Castilla y León and in Argentina.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'En 2011, diez años después de salir de la universidad, regresé a ella para formarme en mi pasión y realicé el Máster de Enología de la Universidad de La Rioja. Desde entonces he tenido la suerte de trabajar en algunas de las mejores bodegas del mundo en Toro, California, Australia y Portugal.',
          en: 'In 2011, ten years after leaving university, I returned to pursue my passion and completed the Master\'s in Enology at the University of La Rioja. Since then I\'ve been lucky enough to work at some of the best wineries in the world in Toro, California, Australia and Portugal.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Concienzudo, meticuloso y un poco bohemio son algunos de los rasgos que me definen. Me apasionan los trabajos al aire libre y los proyectos en los que puedo expresarme.',
          en: 'Conscientious, meticulous and a bit bohemian — those are some of the traits that define me. I\'m passionate about outdoor work and projects where I can express myself.',
        },
        destacado: true,
      },
    ],
  },
  {
    id: 'liliana',
    nombre: 'Liliana Fernández Pérez',
    rol: { es: 'La Xefa', en: 'The Boss' },
    invertido: true,
    imagen: IMAGES.nosotros.equipo.liliana,
    imagenPos: '41% 51%',
    bio: [
      {
        texto: {
          es: 'Asturiana de nacimiento y de corazón. Hace ya veintitantos años que salí de Asturias para estudiar Licenciatura en Ciencias Ambientales e Ingeniería de Montes en Ávila. De ahí me trasladé a Madrid donde hice un máster en Desarrollo Rural.',
          en: 'Asturian by birth and by heart. Over twenty years ago I left Asturias to study Environmental Sciences and Forest Engineering in Ávila. From there I moved to Madrid for a master\'s in Rural Development.',
        },
        destacado: true,
      },
      {
        texto: {
          es: 'Comencé mi andadura profesional desarrollando los itinerarios ambientales del Parque de la Prehistoria en Teverga. Después trabajé en los espacios naturales protegidos de la Red Natura 2000 en Murcia, y de Murcia a Zamora, donde trabajé ocho años como gerente de la Federación de Propietarios Forestales de Castilla y León.',
          en: 'I began my professional journey developing environmental trails at the Parque de la Prehistoria in Teverga. I then worked in protected natural areas of the Natura 2000 network in Murcia, and from Murcia to Zamora, where I worked for eight years as manager of the Castilla y León Forest Owners Federation.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Dejé la Federación para desarrollar nuestro proyecto, seguir a Jose a California y poco después él me siguió a mí a Australia donde estudié un MBA. De regreso en España, una beca de la Junta de Castilla y León me permitió realizar un máster en Comercio Internacional en el ESIC.',
          en: 'I left the Federation to develop our project, follow José to California, and shortly after he followed me to Australia, where I studied for an MBA. Back in Spain, a grant from the Junta de Castilla y León allowed me to complete a master\'s in International Trade at ESIC.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Soy apasionada, emprendedora y optimista. Me encanta el medio rural y las personas: ellas configuran el centro de nuestra bodega. A nuestros clientes y lectores va dirigido todo nuestro trabajo, nuestra trayectoria y alma.',
          en: 'I\'m passionate, entrepreneurial and optimistic. I love rural life and people — they form the heart of our winery. All our work, our journey and our soul is dedicated to our customers and readers.',
        },
        destacado: true,
      },
    ],
  },
  {
    id: 'luisfer',
    nombre: 'Luis Fernando Cabrero Benéitez',
    rol: { es: 'El Socio', en: 'The Partner' },
    invertido: false,
    imagen: IMAGES.nosotros.equipo.luisfer,
    objectFit: 'contain',
    imagenPos: '50% 15%',
    bio: [
      {
        texto: {
          es: '"Luisfer para todos". Nací y me crié en Formariz, soy uno de los cuatro niños nacidos en este pueblo en los últimos treinta años. Eso me permitió hacer trabajos tan variopintos como el de monaguillo o ayudante del médico.',
          en: '"Luisfer to everyone". I was born and raised in Formariz — one of only four children born in this village in the last thirty years. That gave me the chance to take on all kinds of varied jobs, like altar boy or doctor\'s assistant.',
        },
        destacado: true,
      },
      {
        texto: {
          es: 'Soy el millennial del equipo. Estudié Económicas en la Universidad de Salamanca y un MBA en Banca y Finanzas en León. Regresé al pueblo en 2012 y formo parte del equipo del Hato y el Garabato desde 2015, cuando comienza el proyecto.',
          en: 'I\'m the millennial of the team. I studied Economics at the University of Salamanca and an MBA in Banking and Finance in León. I returned to the village in 2012 and have been part of the El Hato y el Garabato team since 2015, when the project began.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Me encargo del viñedo y las cuadrillas en vendimia, y durante todo el año trabajo en los embotellados, preparación de pedidos, poda y todos los trabajos de la elaboración. Desde 2019 soy también Agente Comercial de Unicaja Banco.',
          en: 'I look after the vineyard and the harvest crews, and throughout the year I work on bottling, order preparation, pruning and all the work involved in production. Since 2019 I\'ve also been a Commercial Agent for Unicaja Banco.',
        },
        destacado: false,
      },
      {
        texto: {
          es: 'Ah, y que sepáis: aunque soy Benéitez y esto es un pueblo muy pequeño, no soy familia de José. Pertenecemos a dos ramas diferentes... por más que él se empeñe.',
          en: 'And just so you know: although I\'m a Benéitez and this is a very small village, I\'m not related to José. We belong to two different branches... no matter how much he insists otherwise.',
        },
        destacado: true,
      },
    ],
  },
]
