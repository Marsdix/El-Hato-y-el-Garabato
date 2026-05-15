import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { MARIDAJES, CATEGORIAS } from '../../data/maridajes'

function ThermometerIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  )
}

export default function MaridajesSection() {
  const { t, language } = useLanguage()
  const [filtro, setFiltro] = useState('todos')

  const vinosFiltrados = filtro === 'todos'
    ? MARIDAJES
    : MARIDAJES.filter(v => v.categorias.includes(filtro))

  return (
    <section className="section maridajes-section">
      <div className="maridajes-filter-wrap">
        <p className="maridajes-filter-label">{t('maridajes.filter')}</p>
        <div className="maridajes-chips">
          <button
            className={`maridaje-chip${filtro === 'todos' ? ' active' : ''}`}
            onClick={() => setFiltro('todos')}
          >
            {t('maridajes.todos')}
          </button>
          {CATEGORIAS.map(cat => (
            <button
              key={cat.id}
              className={`maridaje-chip${filtro === cat.id ? ' active' : ''}`}
              onClick={() => setFiltro(cat.id)}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      <div className="maridajes-grid">
        {vinosFiltrados.map(vino => {
          const cats = vino.categorias.map(id =>
            CATEGORIAS.find(c => c.id === id)
          )
          return (
            <article key={vino.id} className="maridaje-card reveal">
              <div className="maridaje-card-img-wrap">
                <img src={vino.imagen} alt={vino.nombre} className="maridaje-card-img" />
              </div>

              <div className="maridaje-card-body">
                <p className="maridaje-card-tipo">{vino.tipo[language]}</p>
                <h3 className="maridaje-card-nombre">{vino.nombre}</h3>

                <div className="maridaje-card-tags">
                  {cats.map(cat => (
                    <span key={cat.id} className="maridaje-tag">
                      {cat.label[language]}
                    </span>
                  ))}
                </div>

                <p className="maridaje-card-platos">{vino.platos[language]}</p>

                <div className="maridaje-card-temp">
                  <span className="maridaje-temp-icon"><ThermometerIcon /></span>
                  <div>
                    <strong>{vino.temperatura.label[language]}</strong>
                    <span>{vino.temperatura.desc[language]}</span>
                  </div>
                </div>

                <a
                  href={vino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maridaje-card-cta"
                >
                  {t('maridajes.comprar')}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              </div>
            </article>
          )
        })}
      </div>

      {vinosFiltrados.length === 0 && (
        <p className="maridajes-empty">{t('maridajes.empty')}</p>
      )}
    </section>
  )
}
