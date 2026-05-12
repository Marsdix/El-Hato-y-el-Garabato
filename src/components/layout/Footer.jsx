import { Link } from 'react-router-dom'
import { LINKS } from '../../data/navigation'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand-name">El Hato y el Garabato</Link>
          <p>
            Nuestros vinos representan las variedades típicas de esta zona
            donde el camino termina. Parque Natural Arribes del Duero, Zamora.
          </p>
        </div>

        <div className="footer-col">
          <h4>La Bodega</h4>
          <ul>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/bodega">Bodega y Viñas</Link></li>
            <li><Link to="/visita">Visitas</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Vinos</h4>
          <ul>
            <li><Link to="/tienda">Tienda online</Link></li>
            <li><Link to="/maridajes">Maridajes</Link></li>
            <li><Link to="/tienda">Ecléctico Barrica</Link></li>
            <li><Link to="/tienda">De Buena Jera</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/aviso-legal">Aviso legal</Link></li>
            <li><Link to="/terminos">Términos y condiciones</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 El Hato y el Garabato · Formariz, Zamora</p>
        <div className="social-links">
          <a href={LINKS.instagram} rel="noopener noreferrer">Instagram</a>
          <a href={LINKS.facebook}  rel="noopener noreferrer">Facebook</a>
          <a href={LINKS.youtube}   rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
