import { useEffect } from 'react'

// Cursor personalizado con seguimiento suavizado y efecto hover en elementos interactivos.
// Se usa en el componente Cursor (layout), que se monta una sola vez.
export function useCursor() {
  useEffect(() => {
    const el = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    if (!el || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      el.style.left = mx + 'px'
      el.style.top = my + 'px'
    }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }

    // Delegación de eventos para que funcione en elementos añadidos dinámicamente
    const onOver = e => {
      const active = !!e.target.closest('a, button, .vino-card, .visita-option')
      el.style.transform = `translate(-50%,-50%) scale(${active ? 2 : 1})`
      ring.style.transform = `translate(-50%,-50%) scale(${active ? 1.6 : 1})`
      ring.style.borderColor = active ? 'rgba(200,162,85,0.8)' : 'rgba(200,162,85,0.5)'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
