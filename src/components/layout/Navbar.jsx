import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setScrolled(false)
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
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
                <a href={isHome ? href : `/${href}`}>{label}</a>
              )}
            </li>
          ))}
        </ul>

        <Link to="/tienda" className="nav-cta">Tienda Online</Link>

        <button
          className="hamburger"
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && <div className="nav-overlay" onClick={closeMenu} />}

      <div className={`nav-drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <ul>
          {NAV_LINKS.map(({ href, to, label }) => (
            <li key={label}>
              {to ? (
                <Link to={to} onClick={closeMenu}>{label}</Link>
              ) : (
                <a href={isHome ? href : `/${href}`} onClick={closeMenu}>{label}</a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/tienda" className="nav-drawer-cta" onClick={closeMenu}>
          Tienda Online
        </Link>
      </div>
    </>
  )
}
