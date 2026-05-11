import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setScrolled(false), [location.pathname])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        El Hato y el Garabato
        <span>Bodega · Arribes del Duero</span>
      </Link>

      <ul className="nav-links">
        {NAV_LINKS.map(({ href, to, label }) => (
          <li key={label}>
            {to ? (
              <Link to={to}>{label}</Link>
            ) : (
              // Si estamos fuera de Home el ancla incluye "/" para navegar primero
              <a href={isHome ? href : `/${href}`}>{label}</a>
            )}
          </li>
        ))}
      </ul>

      <Link to="/tienda" className="nav-cta">
        Tienda Online
      </Link>
    </nav>
  )
}
