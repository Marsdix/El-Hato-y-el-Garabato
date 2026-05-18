import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function GoldLine() {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    prefersReduced ? [1, 1, 1, 1] : [0, 1, 1, 0]
  )

  return <motion.div ref={ref} className="gold-line" style={{ scaleX }} />
}
