import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import { SectionProvider } from '../../context/SectionContext'
import ReservaVisita from '../../react-pages/ReservaVisita'

export default function ReservaBodegaClient() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <ReservaVisita tipo="bodega" />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
