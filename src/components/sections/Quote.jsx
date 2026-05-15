import { useLanguage } from '../../hooks/useLanguage'

export default function Quote() {
  const { t } = useLanguage()

  return (
    <section className="quote-section">
      <p className="quote-text">{t('quote.text')}</p>
      <p className="quote-source">{t('quote.source')}</p>
    </section>
  )
}
