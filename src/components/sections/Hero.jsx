import { useState, useEffect } from 'react'
import { BtnPrimary, BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import { LINKS } from '../../data/navigation'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (document.readyState === 'complete') { setLoaded(true); return }
    const fn = () => setLoaded(true)
    window.addEventListener('load', fn)
    return () => window.removeEventListener('load', fn)
  }, [])

  return (
    <section className={`hero${loaded ? ' loaded' : ''}`} id="hero">
      {/*
        IMAGEN HERO — cambiar URL en App.css → .hero-bg → background: url(...)
        Guardar la foto en public/images/hero.jpg (mínimo 1920×1080px, JPEG)
      */}
      <div className="hero-bg" />
      <div className="hero-vignette" />

      <div className="hero-content">
        <p className="hero-eyebrow">Parque Natural · Arribes del Duero · Zamora</p>
        <h1>
          Donde el<br />
          camino<br />
          <em>termina.</em>
        </h1>
        <p className="hero-desc">
          Vinos de variedades ancestrales, viñas centenarias y elaboración
          artesanal en el confín ibérico.
        </p>
        <div className="hero-actions">
          <BtnPrimary href={LINKS.tienda}>Descubrir nuestros vinos</BtnPrimary>
          <BtnGhost href="#bodega" light>
            Conocer la bodega <ArrowRight />
          </BtnGhost>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
