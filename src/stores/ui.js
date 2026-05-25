import { atom } from 'nanostores'

const isBrowser = typeof window !== 'undefined'

export const $language = atom(isBrowser ? (localStorage.getItem('hato-lang') || 'es') : 'es')
export const $theme = atom(isBrowser ? (localStorage.getItem('hato-theme') || 'light') : 'light')

export function setLanguage(lang) {
  $language.set(lang)
  if (isBrowser) {
    localStorage.setItem('hato-lang', lang)
    document.documentElement.lang = lang
  }
}

export function toggleTheme() {
  const next = $theme.get() === 'light' ? 'dark' : 'light'
  $theme.set(next)
  if (isBrowser) {
    localStorage.setItem('hato-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }
}
