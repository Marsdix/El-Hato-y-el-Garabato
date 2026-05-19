import PageHero from '../components/layout/PageHero'
import BlogSection from '../components/sections/BlogSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { useRegisterSections } from '../context/SectionContext'

const SECTIONS = [{ id: 'blog-articulos', label: 'Artículos' }]

export default function Blog() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.blog.eyebrow')}
        title={<>{t('page.blog.title.1')}<br /><em>{t('page.blog.title.em')}</em></>}
        backgroundImage={IMAGES.blog.hero}
        imagePosition="50% 30%"
      />
      <BlogSection />
    </>
  )
}
