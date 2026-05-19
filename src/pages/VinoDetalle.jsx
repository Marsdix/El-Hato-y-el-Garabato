import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import VinoDetalleSection from '../components/sections/VinoDetalleSection'
import { VINOS } from '../data/vinos'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

export default function VinoDetalle() {
  const { id } = useParams()
  const { t } = useLanguage()
  const vino = VINOS.find(v => v.id === id)

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
