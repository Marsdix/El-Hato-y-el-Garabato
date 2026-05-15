import { Link } from 'react-router-dom'
import { LINKS } from '../../data/navigation'
import { useLanguage } from '../../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand-name">El Hato y el Garabato</Link>
          <p>{t('footer.brand.desc')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col1.title')}</h4>
          <ul>
            <li><Link to="/nosotros">{t('footer.col1.nosotros')}</Link></li>
            <li><Link to="/bodega">{t('footer.col1.bodega')}</Link></li>
            <li><Link to="/visita">{t('footer.col1.visitas')}</Link></li>
            <li><Link to="/blog">{t('footer.col1.blog')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col2.title')}</h4>
          <ul>
            <li><Link to="/tienda">{t('footer.col2.tienda')}</Link></li>
            <li><Link to="/maridajes">{t('footer.col2.maridajes')}</Link></li>
            <li><Link to="/tienda">Ecléctico Barrica</Link></li>
            <li><Link to="/tienda">De Buena Jera</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col3.title')}</h4>
          <ul>
            <li><Link to="/aviso-legal">{t('footer.col3.aviso')}</Link></li>
            <li><Link to="/terminos">{t('footer.col3.terminos')}</Link></li>
            <li><Link to="/contacto">{t('footer.col3.contacto')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">{t('footer.copy')}</p>
        <div className="social-links">
          <a href={LINKS.instagram} rel="noopener noreferrer">Instagram</a>
          <a href={LINKS.facebook}  rel="noopener noreferrer">Facebook</a>
          <a href={LINKS.youtube}   rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
