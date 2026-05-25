// ═══════════════════════════════════════════════════════════════════
//  IMÁGENES DEL PROYECTO — archivo único organizado por página
//  Las imágenes locales se importan para que Vite las procese
//  correctamente (rutas con hash, base URL, etc.)
//
//  WebP automático: si existe <nombre>.webp en assets/images se usa
//  en lugar del jpg/png original. El fallback es siempre el import
//  estático de abajo. Para activar solo hay que añadir el .webp.
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
//  WebP automático — carga todos los .webp disponibles en build time.
//  Si no hay ninguno el objeto queda vacío y se usan los originals.
// ═══════════════════════════════════════════════════════════════════

const webpFiles = import.meta.glob('../assets/images/*.webp', { eager: true });

// Astro envuelve los imports de imagen en { src, width, height }.
// Esta función extrae el string URL en cualquier entorno.
function toUrl(img) {
  return (img && typeof img === 'object') ? img.src : img
}

// Devuelve la versión .webp si existe, si no el import original.
function w(original, name) {
  const raw = webpFiles[`../assets/images/${name}.webp`]?.default ?? original;
  return toUrl(raw);
}

// ═══════════════════════════════════════════════════════════════════

export const IMAGES = {
  // ── HOME ( / ) ───────────────────────────────────────────────────
  home: {
    hero:             w(imgHomeHero,  'home-hero'),
    bodegaInterior:   w(imgDuero,     'duero'),
    bodegaPanoramica: w(imgVinas,     'vinas'),
  },

  // ── NOSOTROS ( /nosotros ) ────────────────────────────────────────
  nosotros: {
    hero:        w(imgNosotrosHero, 'nosotros-hero'),
    equipoGrupo: w(imgEquipoGrupo,  'equipo-grupo-jose'),
    equipo: {
      jose:    w(imgJose,    'jose'),
      liliana: w(imgLiliana, 'liliana-coche'),
      luisfer: w(imgLuisfer, 'luisfer'),
    },
    medios: {
      robertParker: w(imgRobertParker, 'robert-wine-periodico'),
      traveler:     w(imgTraveler,     'traveler-periodico'),
      penin:        w(imgPenin,        'penin-periodico'),
      elPais:       w(imgElPais,       'el-pais-periodico'),
      planetaVino:  w(imgPlanetaVino,  'planeta-vino-periodico'),
      laVanguardia: w(imgLaVanguardia, 'la-vanguardia-periodico'),
      sobremesa:    w(imgSobremesa,    'sobremesa-periodico'),
      abc:          w(imgAbc,          'abc-periodico'),
      spanishWine:  w(imgSpanishWine,  'spanish-wine-periodico'),
      hola:         w(imgHola,         'hola-periodico'),
    },
  },

  // ── BODEGA Y VIÑAS ( /bodega ) ────────────────────────────────────
  bodega: {
    hero:  w(imgBodegaHero,  'bodega-vina-hero'),
    vinas: w(imgJoseConVina, 'jose-con-viña'),
  },

  // ── TIENDA ( /tienda ) ────────────────────────────────────────────
  tienda: {
    hero: w(imgTiendaHero, 'cotexa-tumbada'),
    vinos: {
      cotexa:           w(imgCotexa,          'cotexa'),
      deBuenaJera:      w(imgDeBuenaJera,      'de-buena-jera'),
      eclecticoLias:    w(imgEclecticoLias,    'eclectico-lias'),
      eclecticoBarrica: w(imgEclecticoBlanco,  'eclectico-blanco'),
      li:               w(imgLi,              'liliana'),
      otroCuento:       w(imgOtroCuento,       'otro-cuento'),
      sinBlanca:        w(imgSinBlanca,        'sin-blanca'),
    },
  },

  // ── VINO DETALLE ( /tienda/:id ) ─────────────────────────────────
  vinoDetalle: {
    hero: w(imgVinoDetalleHero, 'tienda-hero'),
  },

  // ── BLOG ( /blog ) ───────────────────────────────────────────────
  blog: {
    hero: w(imgBlogHero, 'blog-hero'),
  },

  // ── MARIDAJES ( /maridajes ) ─────────────────────────────────────
  maridajes: {
    hero: w(imgVinas, 'vinas'),
  },

  // ── VISITA ( /visita ) ────────────────────────────────────────────
  visita: {
    hero: w(imgVisitaHero, 'barricas'),
  },

  // ── CONTACTO ( /contacto ) ────────────────────────────────────────
  contacto: {
    hero: w(imgContactoHero, 'liliana-jose-vera-coche'),
  },

  // ── AVISO LEGAL ( /aviso-legal ) ──────────────────────────────────
  avisoLegal: {
    hero: w(imgLogoArribes, 'logo-arribes-pared'),
  },

  // ── TÉRMINOS Y CONDICIONES ( /terminos ) ──────────────────────────
  terminos: {
    hero: w(imgLogoHato, 'logo-hato-pared'),
  },
};
