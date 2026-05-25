import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function PageHero({
  eyebrow,
  title,
  backgroundImage,
  imagePosition = '50% 50%',
}) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ['0px', '0px'] : ['0px', '80px']
  )

  return (
    <section className="page-hero" ref={ref}>
      <motion.div
        className="page-hero-bg"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: imagePosition,
          y: bgY,
        }}
      />
      <div className="page-hero-vignette" />
      <div className="page-hero-content">
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
      </div>
    </section>
  )
}
