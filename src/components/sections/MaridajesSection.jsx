import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { MARIDAJES, CATEGORIAS } from '../../data/maridajes'

function MaridajeCard({ vino, language, t }) {
  const [videoVisible, setVideoVisible] = useState(false)

  const cats = vino.categorias.map(id => CATEGORIAS.find(c => c.id === id))

  return (
    <article className="maridaje-card">
      {/* Imagen — mismo tratamiento que tienda */}
      <a href={vino.href} target="_blank" rel="noopener noreferrer"
         className="maridaje-img-wrap" aria-label={vino.nombre}>
        <img src={vino.imagen} alt={vino.nombre} loading="lazy" />
      </a>

      <div className="maridaje-body">
        <p className="maridaje-tipo">{vino.tipo[language]}</p>
        <h3 className="maridaje-nombre">{vino.nombre}</h3>

        <div className="maridaje-tags">
          {cats.map(cat => (
            <span key={cat.id} className="maridaje-tag">{cat.label[language]}</span>
          ))}
        </div>

        <p className="maridaje-platos">{vino.platos[language]}</p>

        <div className="maridaje-temp">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
          </svg>
          <div>
            <strong>{vino.temperatura.label[language]}</strong>
            <span>{vino.temperatura.desc[language]}</span>
          </div>
        </div>

        <div className="maridaje-footer">
          <a href={vino.href} target="_blank" rel="noopener noreferrer"
             className="btn-ghost maridaje-btn-tienda">
            {t('maridajes.comprar')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>

          {vino.videoId ? (
            <button
              className={`maridaje-btn-video${videoVisible ? ' active' : ''}`}
              onClick={() => setVideoVisible(v => !v)}
              aria-expanded={videoVisible}
            >
              {videoVisible ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  {t('maridajes.cerrar')}
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  {t('maridajes.video')}
                </>
              )}
            </button>
          ) : vino.videoProximo && (
            <span className="maridaje-pronto">{t('maridajes.pronto')}</span>
          )}
        </div>

        {vino.videoId && videoVisible && (
          <div className="maridaje-video-wrap">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${vino.videoId}?autoplay=1`}
              title={`${t('maridajes.video.aria')} — ${vino.nombre}`}
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  )
}

export default function MaridajesSection() {
  const { t, language } = useLanguage()
  const [filtros, setFiltros] = useState(new Set())

  const toggleFiltro = (id) => {
    setFiltros(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const limpiar = () => setFiltros(new Set())

  const vinosFiltrados = filtros.size === 0
    ? MARIDAJES
    : MARIDAJES.filter(v => v.categorias.some(c => filtros.has(c)))

  return (
    <section className="maridajes-section">
      {/* Filtros */}
      <div className="maridajes-filter-wrap">
        <p className="maridajes-filter-label">{t('maridajes.filter')}</p>
        <div className="maridajes-chips">
          <button
            className={`maridaje-chip${filtros.size === 0 ? ' active' : ''}`}
            onClick={limpiar}
          >
            {t('maridajes.todos')}
          </button>
          {CATEGORIAS.map(cat => (
            <button
              key={cat.id}
              className={`maridaje-chip${filtros.has(cat.id) ? ' active' : ''}`}
              onClick={() => toggleFiltro(cat.id)}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="maridajes-grid">
        <AnimatePresence mode="popLayout">
          {vinosFiltrados.map(vino => (
            <motion.div
              key={vino.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } }}
            >
              <MaridajeCard vino={vino} language={language} t={t} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {vinosFiltrados.length === 0 && (
        <p className="maridajes-empty">{t('maridajes.empty')}</p>
      )}
    </section>
  )
}
