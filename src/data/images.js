// ═══════════════════════════════════════════════════════════════════
//  IMÁGENES DEL PROYECTO — archivo único organizado por página
//  Las imágenes locales se importan para que Vite las procese
//  correctamente (rutas con hash, base URL, etc.)
// ═══════════════════════════════════════════════════════════════════

// ── Home ─────────────────────────────────────────────────────────
import imgHomeHero from "../assets/images/HomeHero.jpg";
import imgDuero from "../assets/images/Duero.jpg";
import imgVinas from "../assets/images/Viñas.jpg";

// ── Nosotros / Equipo ─────────────────────────────────────────────
import imgJose from "../assets/images/Jose.JPG";
import imgLiliana from "../assets/images/LilianaCoche.png";
import imgLuisfer from "../assets/images/Luisfer.JPG";

// ── Nosotros / Medios ─────────────────────────────────────────────
import imgRobertParker from "../assets/images/robert-winePeriodico.png";
import imgTraveler from "../assets/images/travelerPeriodico.png";
import imgPenin from "../assets/images/peninPeriodico.png";
import imgElPais from "../assets/images/el-paisPeriodico.png";
import imgPlanetaVino from "../assets/images/planeta-vinoPeriodico.png";
import imgLaVanguardia from "../assets/images/la-vanguardiaPeriodico.jpg";
import imgSobremesa from "../assets/images/sobremesaPeriodico.png";
import imgAbc from "../assets/images/abcPeriodico.jpg";
import imgSpanishWine from "../assets/images/spanish-winePeriodico.png";
import imgHola from "../assets/images/holaPeriodico.jpg";

// ── Nosotros / Heroes ─────────────────────────────────────────────
import imgNosotrosHero from "../assets/images/NosotrosHero.jpg";
import imgEquipoGrupo from "../assets/images/EquipoGrupoJose.jpeg";

// ── Bodega ────────────────────────────────────────────────────────
import imgBodegaVinaHero from "../assets/images/BodegaVinaHero.jpg";
import imgJoseConVina from "../assets/images/JoseConViña.JPG";

// ── Tienda ────────────────────────────────────────────────────────
import imgCotexaTumbada from "../assets/images/CotexaTumbada.jpeg";
import imgCotexa from "../assets/images/Cotexa.png";
import imgDeBuenaJera from "../assets/images/DeBuenaJera.png";
import imgEclecticoLias from "../assets/images/EclecticoLias.png";
import imgEclecticoBlanco from "../assets/images/EclecticoBlanco.png";
import imgLi from "../assets/images/Li.png";
import imgOtroCuento from "../assets/images/OtroCuento.png";
import imgSinBlanca from "../assets/images/SinBlanca.png";
import imgVinoDetalleHero from "../assets/images/TiendaHero.jpg";

// ── Visita ────────────────────────────────────────────────────────
import imgVisitaHero from "../assets/images/Barricas.JPG";

// ── Contacto ──────────────────────────────────────────────────────
import imgContactoHero from "../assets/images/LiJoseVeraCoche.jpg";

// ── Páginas legales ───────────────────────────────────────────────
import imgLogoArribes from "../assets/images/LogoArribesPared.png";
import imgLogoHato from "../assets/images/LogoHatoPared.png";

// ═══════════════════════════════════════════════════════════════════

export const IMAGES = {
  // ── HOME ( / ) ───────────────────────────────────────────────────
  home: {
    hero: imgHomeHero,
    bodegaInterior: imgDuero,
    bodegaPanoramica: imgVinas,
  },

  // ── NOSOTROS ( /nosotros ) ────────────────────────────────────────
  nosotros: {
    hero: imgNosotrosHero,
    equipoGrupo: imgEquipoGrupo,
    equipo: {
      jose: imgJose,
      liliana: imgLiliana,
      luisfer: imgLuisfer,
    },
    medios: {
      robertParker: imgRobertParker,
      traveler: imgTraveler,
      penin: imgPenin,
      elPais: imgElPais,
      planetaVino: imgPlanetaVino,
      laVanguardia: imgLaVanguardia,
      sobremesa: imgSobremesa,
      abc: imgAbc,
      spanishWine: imgSpanishWine,
      hola: imgHola,
    },
  },

  // ── BODEGA Y VIÑAS ( /bodega ) ────────────────────────────────────
  bodega: {
    hero: imgBodegaVinaHero,
    vinas: imgJoseConVina,
  },

  // ── TIENDA ( /tienda ) ────────────────────────────────────────────
  tienda: {
    hero: imgCotexaTumbada,
    vinos: {
      cotexa: imgCotexa,
      deBuenaJera: imgDeBuenaJera,
      eclecticoLias: imgEclecticoLias,
      eclecticoBarrica: imgEclecticoBlanco,
      li: imgLi,
      otroCuento: imgOtroCuento,
      sinBlanca: imgSinBlanca,
    },
  },

  // ── VINO DETALLE ( /tienda/:id ) ─────────────────────────────────
  // Para cambiar la imagen: sustituye imgBodegaVinaHero por otro import
  vinoDetalle: {
    hero: imgVinoDetalleHero,
  },

  // ── BLOG ( /blog ) ───────────────────────────────────────────────
  // Para cambiar la imagen: sustituye imgVinas por otro import
  blog: {
    hero: imgVinas,
  },

  // ── MARIDAJES ( /maridajes ) ─────────────────────────────────────
  // Para cambiar la imagen: sustituye imgVinas por otro import de arriba
  maridajes: {
    hero: imgVinas,
  },

  // ── VISITA ( /visita ) ────────────────────────────────────────────
  visita: {
    hero: imgVisitaHero,
  },

  // ── CONTACTO ( /contacto ) ────────────────────────────────────────
  contacto: {
    hero: imgContactoHero,
  },

  // ── AVISO LEGAL ( /aviso-legal ) ──────────────────────────────────
  avisoLegal: {
    hero: imgLogoArribes,
  },

  // ── TÉRMINOS Y CONDICIONES ( /terminos ) ──────────────────────────
  terminos: {
    hero: imgLogoHato,
  },
};
