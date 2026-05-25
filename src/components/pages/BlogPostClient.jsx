import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import { SectionProvider } from '../../context/SectionContext'
import BlogPostSection from '../sections/BlogPostSection'

export default function BlogPostClient({ post }) {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <BlogPostSection post={post} />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
