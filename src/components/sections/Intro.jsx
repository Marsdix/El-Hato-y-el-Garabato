import { BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import { IMAGES } from '../../data/images'

export default function Intro() {
  return (
    <section className="section" id="bodega">
      <div className="intro">
        <div className="intro-image reveal-left">
          <img
            src={IMAGES.home.bodegaInterior}
            alt="La bodega El Hato y el Garabato"
          />
          <div className="intro-stat">
            <strong>100</strong>
            <span>años de viñas</span>
          </div>
        </div>

        <div className="intro-text reveal-right">
          <div className="divider" />
          <p className="section-label">La Bodega · Arribes del Duero</p>
          <h2>
            Un rincón donde<br />
            el Duero se hace<br />
            <em>frontera.</em>
          </h2>
          <p>
            Situada en el Parque Natural Arribes del Duero, dentro de la
            Reserva de la Biosfera Meseta Ibérica, nuestra bodega nace de 8
            hectáreas de viñas viejas de entre 80 y 120 años.
          </p>
          <p>
            Una antigua casa de labranza restaurada alberga nuestra pequeña
            bodega, donde la intervención mínima y el respeto por la tradición
            definen cada botella.
          </p>
          <BtnGhost to="/bodega" style={{ marginTop: 12 }}>
            Explorar la bodega <ArrowRight />
          </BtnGhost>
        </div>
      </div>
    </section>
  )
}
