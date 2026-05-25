// Global client-only components: AgeGate, Cursor, SplashScreen, BackToTop, ScrollProgress
// This component runs only on the client (client:only="react")
import { useState, useCallback, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from '../../context/LanguageContext'
import AgeGate from './AgeGate'
import Cursor from './Cursor'
import SplashScreen from '../sections/SplashScreen'
import BackToTop from '../ui/BackToTop'
import ScrollProgress from './ScrollProgress'
import Lenis from 'lenis'

const SESSION_KEY = 'hato-age-verified'

function LenisManager() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return null
}

export default function AstroGlobalWrapper() {
  const [splashDone, setSplashDone] = useState(false)
  const [ageVerified, setAgeVerified] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  )

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true)
  }, [])

  const handleAgeVerified = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setAgeVerified(true)
  }, [])

  return (
    <LanguageProvider>
      <LenisManager />
      <ScrollProgress />
      <Cursor />
      <BackToTop />
      <AnimatePresence mode="wait">
        {!splashDone && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {splashDone && !ageVerified && (
          <AgeGate key="age" onVerified={handleAgeVerified} />
        )}
      </AnimatePresence>
    </LanguageProvider>
  )
}
