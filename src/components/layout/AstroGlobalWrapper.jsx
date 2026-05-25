import { useState, useCallback, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useStore } from '@nanostores/react'
import { LanguageProvider } from '../../context/LanguageContext'
import AgeGate from './AgeGate'
import Cursor from './Cursor'
import SplashScreen from '../sections/SplashScreen'
import BackToTop from '../ui/BackToTop'
import ScrollProgress from './ScrollProgress'
import CookieBanner from './CookieBanner'
import CookieIcon from './CookieIcon'
import Lenis from 'lenis'
import { $cookieConsent } from '../../stores/consent'

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
  const [splashDone,       setSplashDone]       = useState(false)
  const [ageVerified,      setAgeVerified]      = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const consent = useStore($cookieConsent)

  useEffect(() => {
    if (ageVerified && consent === null) {
      setShowCookieBanner(true)
    }
  }, [ageVerified, consent])

  const handleSplashComplete = useCallback(() => setSplashDone(true), [])
  const handleAgeVerified    = useCallback(() => setAgeVerified(true), [])
  const handleCookieDecide   = useCallback(() => setShowCookieBanner(false), [])

  return (
    <LanguageProvider>
      <LenisManager />
      <ScrollProgress />
      <Cursor />
      <BackToTop />

      {/* 1. Splash screen */}
      <AnimatePresence mode="wait">
        {!splashDone && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {/* 2. Age gate — siempre, sin sessionStorage */}
      <AnimatePresence>
        {splashDone && !ageVerified && (
          <AgeGate key="age" onVerified={handleAgeVerified} />
        )}
      </AnimatePresence>

      {/* 3. Cookie banner — solo si consent es null */}
      <AnimatePresence>
        {ageVerified && showCookieBanner && (
          <CookieBanner key="cookie-banner" onDecide={handleCookieDecide} />
        )}
      </AnimatePresence>

      {/* 4. Icono persistente — visible cuando ya decidió y el banner está cerrado */}
      {ageVerified && consent !== null && !showCookieBanner && (
        <CookieIcon onReopen={() => setShowCookieBanner(true)} />
      )}
    </LanguageProvider>
  )
}
