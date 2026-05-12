import { useState, useEffect } from 'react'
import { BtnPrimary, BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import { IMAGES } from '../../data/images'

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
      <div className="hero-bg" style={{ backgroundImage: `url(${IMAGES.home.hero})` }} />
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
          <BtnPrimary to="/tienda">Descubrir nuestros vinos</BtnPrimary>
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
