import { motion, useReducedMotion } from 'framer-motion'
import { imageReveal, reducedMotion } from '../../animations/variants'

export default function ImageReveal({
  src,
  alt,
  className,
  containerClassName,
  containerStyle = {},
  imgStyle       = {},
  amount         = 0.15,
  loading        = 'lazy',
}) {
  const prefersReduced = useReducedMotion()

  return (
    <div
      className={containerClassName}
      style={{ overflow: 'hidden', ...containerStyle }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        variants={prefersReduced ? reducedMotion : imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', ...imgStyle }}
      />
    </div>
  )
}
