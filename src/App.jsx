import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home          = lazy(() => import('./pages/Home'))
const SobreNosotros = lazy(() => import('./pages/SobreNosotros'))
const NotFound      = lazy(() => import('./pages/NotFound'))

// Para añadir una página nueva:
//   1. Crear src/pages/MiPagina.jsx
//   2. Importarla aquí con lazy()
//   3. Añadir <Route path="/mi-ruta" element={<MiPagina />} />
//   4. Añadir el link en src/data/navigation.js → NAV_LINKS

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loading" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"          element={<Home />} />
            <Route path="/nosotros"  element={<SobreNosotros />} />
            {/* Nuevas páginas: */}
            {/* <Route path="/vinos"    element={<Vinos />} /> */}
            {/* <Route path="/bodega"   element={<Bodega />} /> */}
            {/* <Route path="/visita"   element={<Visita />} /> */}
            {/* <Route path="/contacto" element={<Contacto />} /> */}
            <Route path="*"          element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
