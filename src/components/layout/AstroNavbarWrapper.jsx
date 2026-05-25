import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import Navbar from './Navbar'

export default function AstroNavbarWrapper() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
