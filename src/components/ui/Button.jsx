import { Link } from 'react-router-dom'

// Uso:
//   <BtnPrimary href="https://...">Texto</BtnPrimary>   ← link externo
//   <BtnPrimary to="/vinos">Texto</BtnPrimary>          ← ruta interna
//   <BtnPrimary onClick={fn}>Texto</BtnPrimary>         ← botón

export function BtnPrimary({ to, href, children, onClick, style, type = 'button' }) {
  if (to) {
    return <Link to={to} className="btn-primary" style={style}>{children}</Link>
  }
  if (href) {
    const ext = href.startsWith('http')
    return (
      <a
        href={href}
        className="btn-primary"
        style={style}
        rel={ext ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} className="btn-primary" style={style} onClick={onClick}>
      {children}
    </button>
  )
}

// light=true → texto blanco para usar sobre fondos oscuros (hero, fotos)
export function BtnGhost({ to, href, light, children, style }) {
  const cls = `btn-ghost${light ? ' btn-ghost-light' : ''}`
  const ext = href?.startsWith('http')

  if (to) {
    return <Link to={to} className={cls} style={style}>{children}</Link>
  }
  return (
    <a
      href={href}
      className={cls}
      style={style}
      rel={ext ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
