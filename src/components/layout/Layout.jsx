import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import { SectionProvider } from '../../context/SectionContext'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
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
