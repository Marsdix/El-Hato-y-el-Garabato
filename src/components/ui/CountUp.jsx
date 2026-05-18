import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CountUp({ to, prefix, suffix, duration = 2 }) {
  const [value, setValue] = useState(0)
  const prefersReduced = useReducedMotion()
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          if (prefersReduced) { setValue(to); return }

          const step = to >= 100 ? 10 : 1
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round((eased * to) / step) * step)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration, prefersReduced])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix && <sup>{suffix}</sup>}
    </span>
  )
}
