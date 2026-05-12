import { BtnPrimary } from '../ui/Button'
import { IMAGES } from '../../data/images'

export default function EquipoSection() {
  return (
    <section className="equipo-section" id="equipo">
      <div className="equipo-inner">
        <div className="equipo-text reveal-left">
          <div className="divider" />
          <p className="section-label">Las personas detrás del vino</p>
          <h2>
            Un proyecto<br />
            <em>familiar</em><br />
            y artesanal.
          </h2>
          <p>
            Somos una bodega minúscula con un equipo familiar. Elaborar pocas
            botellas nos permite estar presentes en cada paso, desde que brota
            la primera hoja hasta que el corcho sella la historia.
          </p>
          <ul className="feature-list">
            {[
              'Viticultura orgánica certificada',
              'Sin aditivos ni tecnología enológica',
              'Variedades ancestrales y autóctonas',
              'Poca analítica, mucha intuición',
              'Embotellado sin filtrar',
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
          <BtnPrimary to="/nosotros">Conocer el equipo</BtnPrimary>
        </div>

        <div className="equipo-image reveal-right">
          <img
            src={IMAGES.nosotros.equipoGrupo}
            alt="El equipo de El Hato y el Garabato"
          />
        </div>
      </div>
    </section>
  )
}
