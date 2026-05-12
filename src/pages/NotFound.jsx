import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <div className="not-found">
      <p className="section-label">404</p>
      <h1>Página pendiente</h1>
      <p>
        La ruta <code className="not-found-path">{pathname}</code> aún no está
        implementada en React.
      </p>
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </div>
  )
}
