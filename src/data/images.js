// ═══════════════════════════════════════════════════════════════════
//  IMÁGENES DEL PROYECTO — archivo único organizado por página
//  Las imágenes locales se importan para que Vite las procese
//  correctamente (rutas con hash, base URL, etc.)
// ═══════════════════════════════════════════════════════════════════

// ── Home ─────────────────────────────────────────────────────────
import imgHomeHero     from "../assets/images/home-hero.jpg";
import imgDuero        from "../assets/images/duero.jpg";
import imgVinas        from "../assets/images/vinas.jpg";

// ── Nosotros / Equipo ─────────────────────────────────────────────
import imgJose         from "../assets/images/jose.JPG";
import imgLiliana      from "../assets/images/liliana-coche.png";
import imgLuisfer      from "../assets/images/luisfer.JPG";

// ── Nosotros / Medios ─────────────────────────────────────────────
import imgRobertParker from "../assets/images/robert-wine-periodico.png";
import imgTraveler     from "../assets/images/traveler-periodico.png";
import imgPenin        from "../assets/images/penin-periodico.png";
import imgElPais       from "../assets/images/el-pais-periodico.png";
import imgPlanetaVino  from "../assets/images/planeta-vino-periodico.png";
import imgLaVanguardia from "../assets/images/la-vanguardia-periodico.jpg";
import imgSobremesa    from "../assets/images/sobremesa-periodico.png";
import imgAbc          from "../assets/images/abc-periodico.jpg";
import imgSpanishWine  from "../assets/images/spanish-wine-periodico.png";
import imgHola         from "../assets/images/hola-periodico.jpg";

// ── Nosotros / Heroes ─────────────────────────────────────────────
import imgNosotrosHero from "../assets/images/nosotros-hero.jpg";
import imgEquipoGrupo  from "../assets/images/equipo-grupo-jose.jpeg";

// ── Bodega ────────────────────────────────────────────────────────
import imgBodegaHero   from "../assets/images/bodega-vina-hero.JPG";
import imgJoseConVina  from "../assets/images/jose-con-viña.JPG";

// ── Tienda / Vinos ────────────────────────────────────────────────
import imgTiendaHero      from "../assets/images/cotexa-tumbada.jpeg";
import imgCotexa          from "../assets/images/cotexa.png";
import imgDeBuenaJera     from "../assets/images/de-buena-jera.png";
import imgEclecticoLias   from "../assets/images/eclectico-lias.png";
import imgEclecticoBlanco from "../assets/images/eclectico-blanco.png";
import imgLi              from "../assets/images/liliana.png";
import imgOtroCuento      from "../assets/images/otro-cuento.png";
import imgSinBlanca       from "../assets/images/sin-blanca.png";
import imgVinoDetalleHero from "../assets/images/tienda-hero.jpg";

// ── Blog ──────────────────────────────────────────────────────────
import imgBlogHero     from "../assets/images/blog-hero.png";

// ── Visita ────────────────────────────────────────────────────────
import imgVisitaHero   from "../assets/images/barricas.JPG";

// ── Contacto ──────────────────────────────────────────────────────
import imgContactoHero from "../assets/images/liliana-jose-vera-coche.jpg";

// ── Páginas legales ───────────────────────────────────────────────
import imgLogoArribes  from "../assets/images/logo-arribes-pared.png";
import imgLogoHato     from "../assets/images/logo-hato-pared.png";

// ═══════════════════════════════════════════════════════════════════

export const IMAGES = {
  // ── HOME ( / ) ───────────────────────────────────────────────────
  home: {
    hero:            imgHomeHero,
    bodegaInterior:  imgDuero,
    bodegaPanoramica: imgVinas,
  },

  // ── NOSOTROS ( /nosotros ) ────────────────────────────────────────
  nosotros: {
    hero:        imgNosotrosHero,
    equipoGrupo: imgEquipoGrupo,
    equipo: {
      jose:    imgJose,
      liliana: imgLiliana,
      luisfer: imgLuisfer,
    },
    medios: {
      robertParker: imgRobertParker,
      traveler:     imgTraveler,
      penin:        imgPenin,
      elPais:       imgElPais,
      planetaVino:  imgPlanetaVino,
      laVanguardia: imgLaVanguardia,
      sobremesa:    imgSobremesa,
      abc:          imgAbc,
      spanishWine:  imgSpanishWine,
      hola:         imgHola,
    },
  },

  // ── BODEGA Y VIÑAS ( /bodega ) ────────────────────────────────────
  bodega: {
    hero:  imgBodegaHero,
    vinas: imgJoseConVina,
  },

  // ── TIENDA ( /tienda ) ────────────────────────────────────────────
  tienda: {
    hero: imgTiendaHero,
    vinos: {
      cotexa:         imgCotexa,
      deBuenaJera:    imgDeBuenaJera,
      eclecticoLias:  imgEclecticoLias,
      eclecticoBarrica: imgEclecticoBlanco,
      li:             imgLi,
      otroCuento:     imgOtroCuento,
      sinBlanca:      imgSinBlanca,
    },
  },

  // ── VINO DETALLE ( /tienda/:id ) ─────────────────────────────────
  // Para cambiar la imagen: sustituye imgVinoDetalleHero por otro import
  vinoDetalle: {
    hero: imgVinoDetalleHero,
  },

  // ── BLOG ( /blog ) ───────────────────────────────────────────────
  // Para cambiar la imagen: sustituye imgBlogHero por otro import
  blog: {
    hero: imgBlogHero,
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
