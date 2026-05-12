// ─── LINKS DE NAVEGACIÓN ──────────────────────────────────────────────
// to   → ruta interna de React Router
// href → URL externa (abre en la misma pestaña con rel noopener cuando es externo)

export const NAV_LINKS = [
  { to: "/bodega", label: "La Bodega" },
  { to: "/tienda", label: "Vinos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/visita", label: "Visitas" },
  { to: "/contacto", label: "Contacto" },
];

// URLs externas — únicamente redes sociales (el resto son rutas internas de React)
export const LINKS = {
  instagram: "https://www.instagram.com/elhatoyelgarabato",
  facebook: "https://www.facebook.com/elhatoyelgarabato",
  youtube: "https://www.youtube.com/@elhatoyelgarabato.nuestrac4070",
};
