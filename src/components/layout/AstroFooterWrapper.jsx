import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import Footer from './Footer'

export default function AstroFooterWrapper() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}
