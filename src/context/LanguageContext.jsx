import { useStore } from '@nanostores/react'
import { $language, $theme, setLanguage, toggleTheme } from '../stores/ui'
import { TRANSLATIONS } from '../data/translations'

export function useLanguage() {
  const language = useStore($language)
  const theme = useStore($theme)

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const t = (keyOrObj) => {
    if (keyOrObj == null) return ''
    if (typeof keyOrObj === 'object') {
      return keyOrObj[language] ?? keyOrObj.es ?? ''
    }
    const dict = TRANSLATIONS[language] ?? TRANSLATIONS.es
    return dict[keyOrObj] ?? TRANSLATIONS.es[keyOrObj] ?? keyOrObj
  }

  return { language, theme, toggleLanguage, toggleTheme, t }
}

// Provider becomes a pass-through (nanostores no necesita Provider)
export function LanguageProvider({ children }) {
  return <>{children}</>
}

// Mantener LanguageContext para compatibilidad con useLanguage hook existente
import { createContext } from 'react'
export const LanguageContext = createContext(null)
