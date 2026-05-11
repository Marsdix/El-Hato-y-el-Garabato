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
            <li><a href={LINKS.equipo}    rel="noopener noreferrer">Nosotros</a></li>
            <li><a href={LINKS.bodegaWeb} rel="noopener noreferrer">Bodega y Viñas</a></li>
            <li><a href={LINKS.visita}    rel="noopener noreferrer">Visitas</a></li>
            <li><a href={LINKS.blog}      rel="noopener noreferrer">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Vinos</h4>
          <ul>
            <li><a href={LINKS.tienda}    rel="noopener noreferrer">Tienda online</a></li>
            <li><a href={LINKS.maridajes} rel="noopener noreferrer">Maridajes</a></li>
            <li><a href={LINKS.tienda}    rel="noopener noreferrer">Ecléctico Barrica</a></li>
            <li><a href={LINKS.tienda}    rel="noopener noreferrer">De Buena Jera</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href={LINKS.legal}      rel="noopener noreferrer">Aviso legal</a></li>
            <li><a href={LINKS.terminos}   rel="noopener noreferrer">Términos y condiciones</a></li>
            <li><a href={LINKS.contactoCH} rel="noopener noreferrer">Contacto</a></li>
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
