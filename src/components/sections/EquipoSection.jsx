import { BtnPrimary } from '../ui/Button'
import { LINKS } from '../../data/navigation'

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
          <BtnPrimary href={LINKS.equipo}>Conocer el equipo</BtnPrimary>
        </div>

        <div className="equipo-image reveal-right">
          {/*
            IMAGEN EQUIPO
            Guardar en public/images/equipo.jpg
            Foto actual del equipo en la bodega, viñas o vendimia (5:4)
          */}
          <img
            src="https://elhatoyelgarabato.com/wp-content/uploads/2024/06/equipo-1024x819.jpeg"
            alt="El equipo de El Hato y el Garabato"
          />
        </div>
      </div>
    </section>
  )
}
