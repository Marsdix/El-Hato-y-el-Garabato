import { useEffect } from 'react'
import { useLanguage } from './useLanguage'

const SUFFIX = 'El Hato y el Garabato'
const DEFAULT_TITLE = `${SUFFIX} — Bodega Arribes del Duero`

export function usePageTitle(es, en) {
  const { language } = useLanguage()
  useEffect(() => {
    if (!es) return
    const title = (en !== undefined && language === 'en') ? en : es
    document.title = `${title} — ${SUFFIX}`
    return () => { document.title = DEFAULT_TITLE }
  }, [language, es, en])
}
