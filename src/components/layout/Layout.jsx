import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import { SectionProvider } from '../../context/SectionContext'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <SectionProvider>
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SectionProvider>
  )
}
