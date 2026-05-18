import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, reducedMotion } from '../../animations/variants'

const DEFAULT_VIEWPORT = { once: true, amount: 0.2 }

export default function ScrollReveal({
  children,
  variant   = fadeUp,
  delay     = 0,
  amount    = 0.2,
  className,
  as        = 'div',
  style,
}) {
  const prefersReduced = useReducedMotion()
  const base = prefersReduced ? reducedMotion : variant

  const active = delay > 0
    ? { ...base, visible: { ...base.visible, transition: { ...base.visible.transition, delay } } }
    : base

  const Tag = motion[as]

  return (
    <Tag
      className={className}
      style={style}
      variants={active}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}
