import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { setConsent } from '../../stores/consent'

const COPY = {
  label:   { es: 'Cookies', en: 'Cookies' },
  desc:    {
    es: 'Guardamos tus preferencias de <strong>idioma</strong>, <strong>tema visual</strong> y <strong>carrito</strong> para que no tengas que elegirlos en cada visita. Si rechazas, la web funciona igual pero no recordará tus ajustes.',
    en: 'We save your <strong>language</strong>, <strong>visual theme</strong> and <strong>cart</strong> preferences so you don\'t have to set them every visit. If you decline, the site works the same but won\'t remember your settings.',
  },
  accept:  { es: 'Aceptar', en: 'Accept' },
  decline: { es: 'Rechazar', en: 'Decline' },
}

const variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: 12, transition: { duration: 0.25 } },
}

export default function CookieBanner({ onDecide }) {
  const { language } = useLanguage()
  const p = (obj) => obj[language] ?? obj.es
  const firstBtnRef = useRef(null)

  useEffect(() => {
    firstBtnRef.current?.focus()
  }, [])

  const handle = (value) => {
    setConsent(value)
    onDecide()
  }

  return (
    <motion.div
      className="cookie-banner"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="alertdialog"
      aria-labelledby="cookie-banner-title"
    >
      <p id="cookie-banner-title" className="cookie-banner__label">{p(COPY.label)}</p>
      <p
        className="cookie-banner__desc"
        dangerouslySetInnerHTML={{ __html: p(COPY.desc) }}
      />
      <div className="cookie-banner__btns">
        <button ref={firstBtnRef} className="btn-primary" onClick={() => handle(true)}>
          {p(COPY.accept)}
        </button>
        <button className="cookie-banner__btn-decline" onClick={() => handle(false)}>
          {p(COPY.decline)}
        </button>
      </div>
    </motion.div>
  )
}
