import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Footer from './Footer'

// Layout envuelve todas las páginas: Cursor + Nav + contenido + Footer.
// Al cambiar de ruta, hace scroll al principio automáticamente.
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
