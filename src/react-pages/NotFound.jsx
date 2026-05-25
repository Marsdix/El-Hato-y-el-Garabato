import { useLocation } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { siteUrl } from '../utils/url'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  usePageTitle('Página no encontrada', 'Page not found')

  return (
    <div className="not-found">
      <p className="section-label">{t('notfound.label')}</p>
      <h1>{t('notfound.title')}</h1>
      <p>
        <code className="not-found-path">{pathname}</code>
      </p>
      <a href={siteUrl('')} className="btn-primary">{t('notfound.cta')}</a>
    </div>
  )
}
