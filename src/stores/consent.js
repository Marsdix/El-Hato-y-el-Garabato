import { atom } from 'nanostores'

const isBrowser = typeof window !== 'undefined'

function readConsent() {
  if (!isBrowser) return null
  const val = localStorage.getItem('hato-consent')
  if (val === 'true') return true
  if (val === 'false') return false
  return null
}

export const $cookieConsent = atom(readConsent())

export function setConsent(value) {
  $cookieConsent.set(value)
  if (!isBrowser) return
  localStorage.setItem('hato-consent', String(value))
  if (!value) {
    localStorage.removeItem('hato-lang')
    localStorage.removeItem('hato-theme')
    localStorage.removeItem('hato-cart')
  }
}
