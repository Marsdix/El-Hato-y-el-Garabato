import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import { SectionProvider } from '../../context/SectionContext'
import AvisoLegal from '../../react-pages/AvisoLegal'

export default function AvisoLegalClient() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <AvisoLegal />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
