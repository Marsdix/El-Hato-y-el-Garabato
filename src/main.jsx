import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import App from './App.jsx'
import SplashScreen from './components/layout/SplashScreen'
import AgeGate from './components/layout/AgeGate'
import { LanguageProvider } from './context/LanguageContext'
import { CartProvider } from './context/CartContext'

function AppWithSplash() {
  const [ageOk, setAgeOk] = useState(() => !!localStorage.getItem('hato-age-ok'))
  const [splashDone, setSplashDone] = useState(
    () => !import.meta.env.DEV && !!sessionStorage.getItem('splash_shown')
  )

  if (!ageOk) return <AgeGate onVerified={() => setAgeOk(true)} />

  function handleSplashComplete() {
    if (!import.meta.env.DEV) {
      sessionStorage.setItem('splash_shown', '1')
    }
    setSplashDone(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!splashDone
        ? <SplashScreen key="splash" onComplete={handleSplashComplete} />
        : <App key="app" />
      }
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <CartProvider>
        <AppWithSplash />
      </CartProvider>
    </LanguageProvider>
  </StrictMode>
)
