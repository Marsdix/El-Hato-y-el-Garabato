import { LINKS } from "../../data/navigation";
import { siteUrl } from "../../utils/url";
import { useLanguage } from "../../hooks/useLanguage";

function IconInstagram() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon
        points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href={siteUrl("/")} className="brand-name">
            El Hato y el Garabato
          </a>
          <p>{t("footer.brand.desc")}</p>
          <div className="footer-social">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
              <span>Instagram</span>
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconFacebook />
              <span>Facebook</span>
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <IconYouTube />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t("footer.col1.title")}</h4>
          <ul aria-label={t("footer.col1.title")}>
            <li>
              <a href={siteUrl("nosotros")}>{t("footer.col1.nosotros")}</a>
            </li>
            <li>
              <a href={siteUrl("bodega")}>{t("footer.col1.bodega")}</a>
            </li>
            <li>
              <a href={siteUrl("visita")}>{t("footer.col1.visitas")}</a>
            </li>
            <li>
              <a href={siteUrl("blog")}>{t("footer.col1.blog")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.col2.title")}</h4>
          <ul aria-label={t("footer.col2.title")}>
            <li>
              <a href={siteUrl("tienda")}>{t("footer.col2.tienda")}</a>
            </li>
            <li>
              <a href={siteUrl("maridajes")}>{t("footer.col2.maridajes")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.col3.title")}</h4>
          <ul aria-label={t("footer.col3.title")}>
            <li>
              <a href={siteUrl("aviso-legal")}>{t("footer.col3.aviso")}</a>
            </li>
            <li>
              <a href={siteUrl("terminos")}>{t("footer.col3.terminos")}</a>
            </li>
            <li>
              <a href={siteUrl("contacto")}>{t("footer.col3.contacto")}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} {t("footer.copy")}</p>
      </div>
    </footer>
  );
}
