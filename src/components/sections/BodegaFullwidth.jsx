import { BtnPrimary } from '../ui/Button'
import { IMAGES } from '../../data/images'

export default function BodegaFullwidth() {
  return (
    <div className="bodega">
      <div className="bodega-bg" style={{ backgroundImage: `url(${IMAGES.home.bodegaPanoramica})` }} />
      <div className="bodega-vignette" />

      <div className="bodega-content reveal-right">
        <p className="section-label">Arribes del Duero</p>
        <h2>
          8 hectáreas.<br />
          <em>Viñas viejas.</em><br />
          Baja intervención.
        </h2>
        <p>
          Elaboramos pocas botellas para poder trabajar directamente en el
          proceso, desde la viña a la botella, de forma artesanal, cuidando
          con nuestras manos cada paso.
        </p>
        <div className="stats-row">
          <div className="stat-item">
            <strong>8</strong>
            <span>hectáreas</span>
          </div>
          <div className="stat-item">
            <strong>100<sup>+</sup></strong>
            <span>años de viñas</span>
          </div>
          <div className="stat-item">
            <strong>0</strong>
            <span>aditivos</span>
          </div>
        </div>
        <BtnPrimary to="/bodega">Conocer la bodega</BtnPrimary>
      </div>
    </div>
  )
}
