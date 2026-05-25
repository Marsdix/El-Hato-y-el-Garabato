import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import _imgBg from '../../assets/images/vinas.jpg'
const imgBg = (_imgBg && typeof _imgBg === 'object') ? _imgBg.src : _imgBg

const COPY = {
  brand:    { es: 'El Hato y el Garabato', en: 'El Hato y el Garabato' },
  sub:      { es: 'Bodega · Arribes del Duero', en: 'Winery · Arribes del Duero' },
  question: { es: '¿Eres mayor\nde 18 años?', en: 'Are you 18\nor over?' },
  note:     {
    es: 'Este sitio contiene información sobre bebidas alcohólicas. Para acceder debes ser mayor de edad en tu país de residencia.',
    en: 'This site contains information about alcoholic beverages. To access it you must be of legal drinking age in your country.',
  },
  yes:      { es: 'Sí, soy mayor de edad', en: 'Yes, I am of legal age' },
  no:       { es: 'No, soy menor de edad', en: 'No, I am under age' },
  legal:    {
    es: 'El consumo de alcohol es perjudicial para la salud.',
    en: 'Alcohol consumption is harmful to your health.',
  },
  blockedTitle: { es: 'Acceso restringido', en: 'Access restricted' },
  blockedText:  {
    es: 'Debes tener 18 años o más para acceder a este sitio web.',
    en: 'You must be 18 or over to access this website.',
  },
  back: { es: 'Volver atrás', en: 'Go back' },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

function GrapeIcon() {
  return (
    <svg className="age-gate__grape" width="38" height="44" viewBox="0 0 38 44" fill="none"
      stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="19" cy="10" r="4.5"/>
      <circle cx="11" cy="17" r="4.5"/>
      <circle cx="27" cy="17" r="4.5"/>
      <circle cx="15" cy="25" r="4.5"/>
      <circle cx="23" cy="25" r="4.5"/>
      <circle cx="19" cy="33" r="4.5"/>
      <line x1="19" y1="5.5" x2="19" y2="1"/>
      <path d="M19 1 Q24 1 26 5"/>
    </svg>
  )
}

export default function AgeGate({ onVerified }) {
  const { language } = useLanguage()
  const p = (obj) => obj[language] ?? obj.es
  const [blocked, setBlocked] = useState(false)

  const handleYes = () => onVerified()

  const handleNo = () => {
    setBlocked(true)
    window.history.back()
  }

  return (
    <div className="age-gate" role="dialog" aria-modal="true">
      {/* Background image */}
      <div className="age-gate__bg" style={{ backgroundImage: `url('${imgBg}')` }} />

      <AnimatePresence mode="wait">
        {!blocked ? (
          <motion.div
            key="gate"
            className="age-gate__card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Ornamento superior */}
            <div className="age-gate__ornament">
              <span /><span className="age-gate__ornament-diamond" /><span />
            </div>

            <p className="age-gate__brand">{p(COPY.brand)}</p>
            <p className="age-gate__sub">{p(COPY.sub)}</p>

            <div className="age-gate__divider" />

            <GrapeIcon />

            <h2 className="age-gate__question">
              {p(COPY.question).split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>

            <p className="age-gate__note">{p(COPY.note)}</p>

            <div className="age-gate__buttons">
              <button className="age-gate__btn-yes" onClick={handleYes}>
                {p(COPY.yes)}
              </button>
              <button className="age-gate__btn-no" onClick={handleNo}>
                {p(COPY.no)}
              </button>
            </div>

            <p className="age-gate__legal">{p(COPY.legal)}</p>
          </motion.div>
        ) : (
          <motion.div
            key="blocked"
            className="age-gate__card age-gate__card--blocked"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="age-gate__ornament">
              <span /><span className="age-gate__ornament-diamond" /><span />
            </div>
            <p className="age-gate__brand">{p(COPY.brand)}</p>
            <div className="age-gate__divider" />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.2" strokeLinecap="round" className="age-gate__block-icon" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
            </svg>
            <h2 className="age-gate__blocked-title">{p(COPY.blockedTitle)}</h2>
            <p className="age-gate__note">{p(COPY.blockedText)}</p>
            <button className="age-gate__btn-no" onClick={() => window.history.back()}>
              {p(COPY.back)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
