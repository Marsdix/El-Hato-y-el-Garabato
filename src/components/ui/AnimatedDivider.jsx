import { motion, useReducedMotion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1]

export default function AnimatedDivider() {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      className="divider"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.55, ease: EASE_OUT }}
    />
  )
}
