import { atom, computed } from 'nanostores'

const isBrowser = typeof window !== 'undefined'
const hasConsent = isBrowser && localStorage.getItem('hato-consent') === 'true'

function getInitialItems() {
  if (!isBrowser || !hasConsent) return []
  try { return JSON.parse(localStorage.getItem('hato-cart') || '[]') } catch { return [] }
}

export const $cartItems = atom(getInitialItems())

$cartItems.listen(items => {
  if (isBrowser && localStorage.getItem('hato-consent') === 'true') {
    localStorage.setItem('hato-cart', JSON.stringify(items))
  }
})

export const $cartCount = computed($cartItems, items =>
  items.reduce((s, i) => s + i.cantidad, 0)
)
export const $cartTotal = computed($cartItems, items =>
  items.reduce((s, i) => s + parseFloat(String(i.precio).replace(',', '.')) * i.cantidad, 0)
)

export function addToCart(item) {
  const items = $cartItems.get()
  const exists = items.find(i => i.id === item.id)
  if (exists) {
    $cartItems.set(items.map(i => i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i))
  } else {
    $cartItems.set([...items, { ...item, cantidad: 1 }])
  }
}

export function removeFromCart(id) {
  $cartItems.set($cartItems.get().filter(i => i.id !== id))
}

export function updateCantidad(id, delta) {
  const items = $cartItems.get()
  const item  = items.find(i => i.id === id)
  if (!item) return
  if (item.cantidad + delta <= 0) {
    removeFromCart(id)
  } else {
    $cartItems.set(items.map(i => i.id === id ? { ...i, cantidad: i.cantidad + delta } : i))
  }
}

export function clearCart() {
  $cartItems.set([])
}
