import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { VINOS } from '../../data/vinos'
import { useLanguage } from '../../hooks/useLanguage'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import { QUERY_VINOS } from '../../lib/queries'
import { useCart } from '../../context/CartContext'

function AddButton({ vino, t }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(vino)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <button
      className={`btn-add-cart${added ? ' added' : ''}`}
      onClick={handleAdd}
      aria-label={`${t('tienda.añadir')} ${vino.nombre}`}
    >
      {added ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {t('tienda.añadido')}
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {t('tienda.añadir')}
        </>
      )}
    </button>
  )
}

export default function TiendaSection() {
  const { t } = useLanguage()
  const { data: vinos } = useSanityFetch(QUERY_VINOS, VINOS)

  return (
    <section className="tienda-section" id="tienda-catalogo">
      <ScrollReveal className="tienda-header">
        <AnimatedDivider />
        <p className="section-label">{t('tienda.label')}</p>
        <h2>{t('tienda.title')} <em>{t('tienda.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      <StaggerList className="tienda-grid" as="div" amount={0.05}>
        {vinos.map(vino => (
          <StaggerItem className="tienda-card" as="article" key={vino.id}>
            <Link
              to={`/tienda/${vino.id}`}
              className="tienda-card-img-wrap"
              aria-label={`${t('tienda.ver')} ${vino.nombre}`}
            >
              <img src={vino.imagen} alt={vino.nombre} loading="lazy" />
            </Link>
            <div className="tienda-card-body">
              <p className="tienda-card-tag">{t(vino.tag)}</p>
              <h3 className="tienda-card-nombre">{vino.nombre}</h3>
              <p className="tienda-card-varietal">{t(vino.varietal)}</p>
              <div className="tienda-card-footer">
                <span className="tienda-card-precio">
                  <sup>€</sup>{vino.precio}
                </span>
                <Link to={`/tienda/${vino.id}`} className="btn-ghost">
                  {t('tienda.ver')} <ArrowRight size={14} />
                </Link>
              </div>
              <AddButton vino={vino} t={t} />
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}
