import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, reducedMotion } from '../../animations/variants'

export function StaggerList({ children, className, as = 'ul', amount = 0.1 }) {
  const prefersReduced = useReducedMotion()

  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={prefersReduced ? {} : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, className, as = 'li', style }) {
  const prefersReduced = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      style={style}
      variants={prefersReduced ? reducedMotion : staggerItem}
    >
      {children}
    </Tag>
  )
}
