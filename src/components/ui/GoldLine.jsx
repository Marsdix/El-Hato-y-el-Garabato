import { motion, useReducedMotion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1]

export default function GoldLine({ delay = 0.45 }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      className="gold-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.75, ease: EASE_OUT, delay }}
    />
  )
}
