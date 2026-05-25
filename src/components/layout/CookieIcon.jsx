import { useLanguage } from '../../hooks/useLanguage'

const LABEL = { es: 'Cookies', en: 'Cookies' }

function CookieSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-9.29-9 1 1 0 0 0 1 1 2 2 0 0 0 2 2 2 2 0 0 0 2 2 1 1 0 0 0 1 1" />
      <circle cx="9.5"  cy="9.5"  r="1" fill="currentColor" stroke="none" />
      <circle cx="8"    cy="14.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14"   r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function CookieIcon({ onReopen }) {
  const { language } = useLanguage()
  const label = LABEL[language] ?? LABEL.es

  return (
    <button className="cookie-icon" onClick={onReopen} aria-label={label}>
      <CookieSvg />
      <span className="cookie-icon__label">{label}</span>
    </button>
  )
}
