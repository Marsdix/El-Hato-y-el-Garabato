import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../data/images'

const TITLE_1 = 'EL HATO'
const TITLE_2 = 'EL GARABATO'
const MIN_DURATION = 1800

// Astro SSG: no hay páginas lazy de React Router que precargar
const CRITICAL_IMAGES = [
  IMAGES.home.hero,
  IMAGES.tienda.hero,
]

function preloadImages() {
  return Promise.all(
    CRITICAL_IMAGES.map(src => new Promise(res => {
      const img = new Image()
      img.onload = img.onerror = res
      img.src = src
    }))
  )
}

function LetterSpan({ char, prefersReduced }) {
  if (char === ' ') return <span style={{ display: 'inline-block', width: '0.4em' }} />
  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={
        prefersReduced
          ? {}
          : {
              hidden:  { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }
      }
    >
      {char}
    </motion.span>
  )
}

export default function SplashScreen({ onComplete }) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    let cancelled = false

    const minTimer = new Promise(res => setTimeout(res, MIN_DURATION))

    Promise.all([minTimer, preloadImages()]).then(() => {
      if (!cancelled) onComplete()
    })

    return () => { cancelled = true }
  }, [onComplete])

  const containerVariants = prefersReduced
    ? {}
    : { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }

  return (
    <motion.div
      className="splash-screen"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      exit={
        prefersReduced
          ? { opacity: 0, transition: { duration: 0.3 } }
          : { clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
      }
    >
      <div className="splash-content">
        <motion.div
          className="splash-title-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TITLE_1.split('').map((char, i) => (
            <LetterSpan key={i} char={char} prefersReduced={prefersReduced} />
          ))}
        </motion.div>

        <div className="splash-divider">
          <span className="splash-divider-line" />
          <motion.span
            className="splash-divider-y"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
          >Y</motion.span>
          <span className="splash-divider-line" />
        </div>

        <motion.div
          className="splash-title-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TITLE_2.split('').map((char, i) => (
            <LetterSpan key={i} char={char} prefersReduced={prefersReduced} />
          ))}
        </motion.div>

        <motion.p
          className="splash-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.6 } }}
        >
          Bodega · Artesanal
        </motion.p>
      </div>
    </motion.div>
  )
}
