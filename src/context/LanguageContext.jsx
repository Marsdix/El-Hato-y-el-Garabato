import { createContext, useState, useEffect, useCallback } from 'react'
import { TRANSLATIONS } from '../data/translations'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('hato-lang') ?? 'es'
  )
  const [theme, setTheme] = useState(
    () => localStorage.getItem('hato-theme') ?? 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('hato-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('hato-lang', language)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage(l => (l === 'es' ? 'en' : 'es'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }, [])

  const t = useCallback(
    keyOrObj => {
      if (keyOrObj == null) return ''
      if (typeof keyOrObj === 'object') {
        return keyOrObj[language] ?? keyOrObj.es ?? ''
      }
      const dict = TRANSLATIONS[language] ?? TRANSLATIONS.es
      return dict[keyOrObj] ?? TRANSLATIONS.es[keyOrObj] ?? keyOrObj
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
