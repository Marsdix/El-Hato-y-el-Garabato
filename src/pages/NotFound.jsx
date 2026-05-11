import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="section-label">404</p>
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </div>
  )
}
