import { useStore } from '@nanostores/react'
import { $cartItems, $cartCount, $cartTotal, addToCart, removeFromCart, updateCantidad, clearCart } from '../stores/cart'

export function useCart() {
  const items = useStore($cartItems)
  const count = useStore($cartCount)
  const total = useStore($cartTotal)
  return { items, count, total, addItem: addToCart, removeItem: removeFromCart, updateCantidad, clearCart }
}

export function CartProvider({ children }) {
  return <>{children}</>
}
