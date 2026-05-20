import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import VinoDetalleSection from '../components/sections/VinoDetalleSection'
import { VINOS } from '../data/vinos'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { useSanityFetch } from '../hooks/useSanityFetch'
import { QUERY_VINOS } from '../lib/queries'

export default function VinoDetalle() {
  const { id } = useParams()
  const { t } = useLanguage()
  // Sanity fetch con fallback a datos estáticos.
  // La imagen en los datos estáticos viene de IMAGES.tienda.vinos.xxx (ruta local).
  // Cuando venga de Sanity vendrá como URL de la CDN de Sanity. Ambas funcionan en <img src>.
  const { data: vinos, loading } = useSanityFetch(QUERY_VINOS, VINOS)
  const vino = vinos.find(v => v.id === id)

  if (loading) return null
  if (!vino) return <Navigate to="/tienda" replace />

  return (
    <>
      <PageHero
        eyebrow={t('page.vino.eyebrow')}
        title={<>{vino.nombre}</>}
        backgroundImage={IMAGES.vinoDetalle.hero}
        imagePosition="center"
      />
      <VinoDetalleSection vino={vino} />
    </>
  )
}
