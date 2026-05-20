import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "../ui/BackToTop";
import { SectionProvider } from "../../context/SectionContext";
import { IMAGES } from "../../data/images";

const PREFETCH_IMAGES = [
  IMAGES.nosotros.hero, IMAGES.nosotros.equipoGrupo,
  IMAGES.nosotros.equipo.jose, IMAGES.nosotros.equipo.liliana, IMAGES.nosotros.equipo.luisfer,
  IMAGES.bodega.hero, IMAGES.bodega.vinas,
  IMAGES.tienda.hero, IMAGES.tienda.vinos.cotexa, IMAGES.tienda.vinos.deBuenaJera,
  IMAGES.tienda.vinos.eclecticoLias, IMAGES.tienda.vinos.eclecticoBarrica,
  IMAGES.tienda.vinos.li, IMAGES.tienda.vinos.otroCuento, IMAGES.tienda.vinos.sinBlanca,
  IMAGES.vinoDetalle.hero, IMAGES.blog.hero,
  IMAGES.visita.hero, IMAGES.contacto.hero,
];

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

export default function Layout() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const prefetch = () => {
      PREFETCH_IMAGES.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(prefetch, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <SectionProvider>
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </SectionProvider>
  );
}
