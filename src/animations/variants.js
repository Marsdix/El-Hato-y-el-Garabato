const EASE_OUT = [0.16, 1, 0.3, 1]

// ─── Scroll reveals ──────────────────────────────────────────────

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export const fadeRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export const imageReveal = {
  hidden:  { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.0, ease: EASE_OUT } },
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

// ─── Page transitions ────────────────────────────────────────────

export const pageVariants = {
  initial: { opacity: 0, x: 60 },
  enter:   { opacity: 1, x: 0,   transition: { duration: 0.42, ease: EASE_OUT } },
  exit:    { opacity: 0, x: -60, transition: { duration: 0.28, ease: EASE_OUT } },
}

export const pageVariantsReduced = {
  initial: { opacity: 0 },
  enter:   { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
}

// ─── Fallback prefers-reduced-motion ────────────────────────────

export const reducedMotion = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
}
