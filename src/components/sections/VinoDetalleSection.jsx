import { Link } from 'react-router-dom'
import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import ArrowRight from '../ui/ArrowRight'
import { VINOS } from '../../data/vinos'
import { useLanguage } from '../../hooks/useLanguage'
import { fadeLeft, fadeRight } from '../../animations/variants'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import { QUERY_VINOS } from '../../lib/queries'

export default function VinoDetalleSection({ vino }) {
  const { t } = useLanguage()
  // Sanity fetch para la lista completa, usada para los vinos relacionados.
  // La ficha principal (vino) viene como prop desde VinoDetalle (page).
  const { data: todosLosVinos } = useSanityFetch(QUERY_VINOS, VINOS)
  const relacionados = todosLosVinos.filter(v => v.id !== vino.id).slice(0, 3)

  return (
    <>
      {/* ── Ficha principal ─────────────────────────────────────────── */}
      <section className="vino-detalle-section">
        <div className="vino-detalle-inner">
          <ScrollReveal variant={fadeLeft} className="vino-detalle-img-col" amount={0.15}>
            <img src={vino.imagen} alt={vino.nombre} className="vino-detalle-img" />
          </ScrollReveal>

          <ScrollReveal variant={fadeRight} className="vino-detalle-info" amount={0.15}>
            <AnimatedDivider />
            <p className="section-label">{t(vino.tag)}</p>
            <h2>{vino.nombre}</h2>
            <GoldLine />
            <p className="vino-detalle-varietal">{t(vino.varietal)}</p>
            {vino.descripcion && (
              <p className="vino-detalle-desc">{t(vino.descripcion)}</p>
            )}
            <div className="vino-detalle-precio-row">
              <span className="vino-detalle-precio"><sup>€</sup>{vino.precio}</span>
              <BtnPrimary href={vino.href}>{t('vino.comprar')}</BtnPrimary>
            </div>
            <Link to="/tienda" className="vino-back-link">{t('vino.back')}</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Notas de cata ───────────────────────────────────────────── */}
      {vino.cata && (
        <section className="vino-cata-section">
          <ScrollReveal amount={0.15} className="vino-cata-inner">
            <AnimatedDivider />
            <p className="section-label">{t('vino.cata.label')}</p>
            <GoldLine />
            <div className="vino-cata-grid">
              {[
                ['vino.cata.visual',    vino.cata.visual,    '01'],
                ['vino.cata.olfativa',  vino.cata.olfativa,  '02'],
                ['vino.cata.gustativa', vino.cata.gustativa, '03'],
              ].map(([key, val, num]) => (
                <div className="vino-cata-item" key={key}>
                  <span className="vino-cata-num">{num}</span>
                  <h3>{t(key)}</h3>
                  <p>{t(val)}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Datos analíticos ────────────────────────────────────────── */}
      {vino.analitica && (
        <section className="vino-analitica-section">
          <ScrollReveal amount={0.15} className="vino-analitica-inner">
            <AnimatedDivider />
            <p className="section-label">{t('vino.analitica.label')}</p>
            <GoldLine />
            <div className="vino-analitica-grid">
              {[
                ['vino.analitica.grado',        vino.analitica.grado],
                ['vino.analitica.ph',            vino.analitica.ph],
                ['vino.analitica.acidezTotal',   vino.analitica.acidezTotal],
                ['vino.analitica.acidezVolatil', vino.analitica.acidezVolatil],
                ['vino.analitica.azucar',        vino.analitica.azucar],
                ['vino.analitica.so2',           vino.analitica.so2],
              ].filter(([, val]) => val).map(([key, val]) => (
                <div className="vino-analitica-stat" key={key}>
                  <span className="vino-analitica-valor">{val}</span>
                  <span className="vino-analitica-label">{t(key)}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Vinos relacionados ──────────────────────────────────────── */}
      <section className="vino-relacionados-section">
        <ScrollReveal amount={0.15} className="vino-relacionados-header">
          <AnimatedDivider />
          <p className="section-label">{t('vino.relacionados')}</p>
          <GoldLine />
        </ScrollReveal>

        <StaggerList className="vino-relacionados-grid" as="div" amount={0.08}>
          {relacionados.map(v => (
            <StaggerItem className="tienda-card" as="article" key={v.id}>
              <Link
                to={`/tienda/${v.id}`}
                className="tienda-card-img-wrap"
                aria-label={`${t('tienda.ver')} ${v.nombre}`}
              >
                <img src={v.imagen} alt={v.nombre} loading="lazy" />
              </Link>
              <div className="tienda-card-body">
                <p className="tienda-card-tag">{t(v.tag)}</p>
                <h3 className="tienda-card-nombre">{v.nombre}</h3>
                <p className="tienda-card-varietal">{t(v.varietal)}</p>
                <div className="tienda-card-footer">
                  <span className="tienda-card-precio"><sup>€</sup>{v.precio}</span>
                  <Link to={`/tienda/${v.id}`} className="btn-ghost">
                    {t('tienda.ver')} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>
    </>
  )
}
