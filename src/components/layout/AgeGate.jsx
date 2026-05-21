import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'

const COPY = {
  brand:    { es: 'El Hato y el Garabato', en: 'El Hato y el Garabato' },
  sub:      { es: 'Bodega · Arribes del Duero', en: 'Winery · Arribes del Duero' },
  question: { es: '¿Eres mayor de 18 años?', en: 'Are you 18 or over?' },
  note:     {
    es: 'Este sitio contiene información sobre bebidas alcohólicas. Para acceder debes ser mayor de edad en tu país de residencia.',
    en: 'This site contains information about alcoholic beverages. To access it you must be of legal drinking age in your country of residence.',
  },
  yes:      { es: 'Sí, soy mayor de edad', en: 'Yes, I am of legal age' },
  no:       { es: 'No, soy menor de edad', en: 'No, I am under age' },
  blockedTitle: { es: 'Acceso restringido', en: 'Access restricted' },
  blockedText:  {
    es: 'Debes tener 18 años o más para acceder a este sitio web. Vuelve atrás o cierra esta ventana.',
    en: 'You must be 18 or over to access this website. Please go back or close this window.',
  },
  back: { es: 'Volver atrás', en: 'Go back' },
}

export default function AgeGate({ onVerified }) {
  const { language } = useLanguage()
  const p = (obj) => obj[language] ?? obj.es
  const [blocked, setBlocked] = useState(false)

  const handleYes = () => {
    onVerified()
  }

  const handleNo = () => {
    setBlocked(true)
    window.history.back()
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={blocked ? 'blocked' : 'gate'}
        className={`age-gate${blocked ? ' age-gate--blocked' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        aria-modal="true"
        role="dialog"
        aria-label={p(COPY.question)}
      >
        <div className="age-gate__card">
          {!blocked ? (
            <>
              <p className="age-gate__brand">{p(COPY.brand)}</p>
              <div className="age-gate__line" />
              <p className="age-gate__sub">{p(COPY.sub)}</p>

              <svg className="age-gate__icon" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-3"/>
                <path d="M12 11v6"/>
                <path d="M9 8l3-3 3 3"/>
              </svg>

              <h2 className="age-gate__question">{p(COPY.question)}</h2>
              <p className="age-gate__note">{p(COPY.note)}</p>

              <div className="age-gate__buttons">
                <button className="btn-primary age-gate__btn-yes" onClick={handleYes}>
                  {p(COPY.yes)}
                </button>
                <button className="btn-ghost age-gate__btn-no" onClick={handleNo}>
                  {p(COPY.no)}
                </button>
              </div>
            </>
          ) : (
            <>
              <svg className="age-gate__blocked-icon" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
              </svg>
              <h2 className="age-gate__blocked-title">{p(COPY.blockedTitle)}</h2>
              <p className="age-gate__blocked-text">{p(COPY.blockedText)}</p>
              <button className="btn-ghost" onClick={() => window.history.back()}>
                {p(COPY.back)}
              </button>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
