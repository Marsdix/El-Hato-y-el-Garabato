import { useEffect, useState } from 'react'
import { useSections } from '../../context/SectionContext'

export default function SectionDots() {
  const sections = useSections()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!sections.length) return

    const observers = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach(io => io.disconnect())
  }, [sections])

  if (!sections.length) return null

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="section-dots" aria-label="Navegación por secciones">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`section-dot${active === id ? ' section-dot--active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Ir a ${label}`}
          title={label}
        />
      ))}
    </nav>
  )
}
