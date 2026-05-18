import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import App from './App.jsx'
import SplashScreen from './components/layout/SplashScreen'
import { LanguageProvider } from './context/LanguageContext'

function AppWithSplash() {
  const [splashDone, setSplashDone] = useState(
    () => !import.meta.env.DEV && !!sessionStorage.getItem('splash_shown')
  )

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
      <AppWithSplash />
    </LanguageProvider>
  </StrictMode>
)
