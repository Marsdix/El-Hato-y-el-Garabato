import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import SectionDots from './SectionDots'
import { SectionProvider } from '../../context/SectionContext'
import { pageVariants, pageVariantsReduced } from '../../animations/variants'

const EXIT_DURATION = 280

export default function Layout() {
  const location = useLocation()
  const prefersReduced = useReducedMotion()
  const variants = prefersReduced ? pageVariantsReduced : pageVariants

  // Scroll al inicio después de que la página anterior haya terminado de salir
  useEffect(() => {
    const t = setTimeout(() => window.scrollTo(0, 0), EXIT_DURATION)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <SectionProvider>
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <SectionDots />
      <AnimatePresence mode="sync" initial={false}>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ position: 'relative', overflowX: 'hidden' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </SectionProvider>
  )
}
