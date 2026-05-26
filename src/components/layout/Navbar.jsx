import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { siteUrl } from "../../utils/url";
import { NAV_LINKS } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [navScrollY, setNavScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const lastY = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, theme, toggleLanguage, toggleTheme, t } = useLanguage();
  const { count } = useCart();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      if (y !== lastY.current) {
        setScrollDir(y > lastY.current ? "down" : "up");
        lastY.current = y;
        setNavScrollY(y);
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setNavScrollY(0);
    lastY.current = 0;
    setIsOpen(false);
  }, [location.pathname]);

  // Páginas sin hero (fondo claro desde el inicio) → navbar siempre sólido
  const isNoHeroPage = /^\/blog\/.+/.test(location.pathname);
  const scrolled = isNoHeroPage || navScrollY > 60;
  const range = scrollDir === "down" ? 360 : 120;
  const tNav = isNoHeroPage ? 1 : Math.min(1, navScrollY / range);
  const navBg =
    theme === "dark"
      ? `rgba(20, 13, 8, ${(tNav * 0.97).toFixed(3)})`
      : `rgba(250, 248, 243, ${(tNav * 0.97).toFixed(3)})`;
  const navBlur = tNav > 0.04 ? `blur(${(tNav * 12).toFixed(1)}px)` : undefined;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (e, to) => {
    if (to === location.pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      <nav
        className={scrolled ? "scrolled" : ""}
        style={{ background: navBg, backdropFilter: navBlur }}
        aria-label="Navegación principal"
      >
        <a href={siteUrl("")} className="nav-logo" onClick={(e) => handleLinkClick(e, "/")}>
          El Hato y el Garabato
          <span>{t("nav.tagline")}</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ to, key }) => (
            <li key={key}>
              <a href={siteUrl(to)} onClick={(e) => handleLinkClick(e, to)}>
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteUrl("tienda")}
          className="nav-cta"
          onClick={(e) => handleLinkClick(e, "/tienda")}
        >
          {t("nav.store")}
        </a>

        {count > 0 && (
          <a
            href={siteUrl("carrito")}
            className="nav-cart"
            aria-label={`${t("nav.cart")} (${count})`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="nav-cart-badge">{count}</span>
          </a>
        )}

        <div className="nav-right">
          <div className="nav-controls">
            <button onClick={toggleLanguage} aria-label={t("nav.aria.lang")}>
              {language === "es" ? "EN" : "ES"}
            </button>
            <button onClick={toggleTheme} aria-label={t("nav.aria.theme")}>
              {theme === "light" ? (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? t("nav.close") : t("nav.open")}
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isOpen && <div className="nav-overlay" onClick={closeMenu} />}

      <div
        className={`nav-drawer${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul>
          {NAV_LINKS.map(({ to, key }) => (
            <li key={key}>
              <a href={siteUrl(to)} onClick={(e) => handleLinkClick(e, to)}>
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        {count > 0 && (
          <a
            href={siteUrl("carrito")}
            className="nav-drawer-cart"
            onClick={(e) => handleLinkClick(e, "/carrito")}
          >
            <svg
              className="nav-drawer-cart-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="nav-drawer-cart-label">{t("nav.cart")}</span>
            <span className="nav-drawer-cart-badge">{count}</span>
          </a>
        )}
        <a
          href={siteUrl("tienda")}
          className="nav-drawer-cta"
          onClick={(e) => handleLinkClick(e, "/tienda")}
        >
          {t("nav.store")}
        </a>
        <div className="nav-drawer-controls">
          <button onClick={toggleLanguage}>
            {language === "es" ? "EN" : "ES"}
          </button>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                {t("nav.dark")}
              </>
            ) : (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                {t("nav.light")}
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
