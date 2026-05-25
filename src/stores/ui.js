import { atom } from 'nanostores'

const isBrowser = typeof window !== 'undefined'
const hasConsent = isBrowser && localStorage.getItem('hato-consent') === 'true'

export const $language = atom(hasConsent ? (localStorage.getItem('hato-lang') || 'es') : 'es')
export const $theme    = atom(hasConsent ? (localStorage.getItem('hato-theme') || 'light') : 'light')

export function setLanguage(lang) {
  $language.set(lang)
  if (!isBrowser) return
  document.documentElement.lang = lang
  if (localStorage.getItem('hato-consent') === 'true') {
    localStorage.setItem('hato-lang', lang)
  }
}

export function toggleTheme() {
  const next = $theme.get() === 'light' ? 'dark' : 'light'
  $theme.set(next)
  if (!isBrowser) return
  document.documentElement.setAttribute('data-theme', next)
  if (localStorage.getItem('hato-consent') === 'true') {
    localStorage.setItem('hato-theme', next)
  }
}
