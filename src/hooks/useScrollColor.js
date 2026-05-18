import { useRef } from 'react'
import { useScroll, useTransform, useReducedMotion } from 'framer-motion'

export function useScrollColor(amount = 0.7) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const grayValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    prefersReduced ? [0, 0, 0, 0] : [amount, 0, 0, amount]
  )

  const filter = useTransform(grayValue, v => `grayscale(${v.toFixed(3)})`)

  return { ref, filter }
}
