import { useCallback } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useTilt(maxAngle = 6) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateY = useSpring(rawX, { stiffness: 180, damping: 28 })
  const rotateX = useSpring(rawY, { stiffness: 180, damping: 28 })

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2)
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2)
    rawX.set(dx * maxAngle)
    rawY.set(-dy * maxAngle)
  }, [maxAngle, rawX, rawY])

  const onMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
