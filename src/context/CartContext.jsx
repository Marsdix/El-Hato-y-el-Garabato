import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = useCallback((vino, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === vino.id)
      if (existing) {
        return prev.map(i => i.id === vino.id ? { ...i, cantidad: i.cantidad + qty } : i)
      }
      return [...prev, { id: vino.id, nombre: vino.nombre, imagen: vino.imagen, precio: vino.precio, cantidad: qty }]
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateCantidad = useCallback((id, delta) => {
    setItems(prev => prev
      .map(i => i.id === id ? { ...i, cantidad: i.cantidad + delta } : i)
      .filter(i => i.cantidad > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const total = items.reduce((sum, i) => sum + parseFloat(i.precio) * i.cantidad, 0)
  const count = items.reduce((sum, i) => sum + i.cantidad, 0)

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, updateCantidad, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
