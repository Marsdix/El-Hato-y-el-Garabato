import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home          = lazy(() => import('./pages/Home'))
const SobreNosotros = lazy(() => import('./pages/SobreNosotros'))
const BodegaYVinas  = lazy(() => import('./pages/BodegaYVinas'))
const Tienda        = lazy(() => import('./pages/Tienda'))
const VisitaBodega  = lazy(() => import('./pages/VisitaBodega'))
const Contacto      = lazy(() => import('./pages/Contacto'))
const AvisoLegal         = lazy(() => import('./pages/AvisoLegal'))
const TerminosCondiciones = lazy(() => import('./pages/TerminosCondiciones'))
const Maridajes     = lazy(() => import('./pages/Maridajes'))
const Blog          = lazy(() => import('./pages/Blog'))
const BlogPost      = lazy(() => import('./pages/BlogPost'))
const VinoDetalle   = lazy(() => import('./pages/VinoDetalle'))
const Carrito       = lazy(() => import('./pages/Carrito'))
const NotFound      = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<div className="page-loading" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"          element={<Home />}          />
            <Route path="/nosotros"  element={<SobreNosotros />} />
            <Route path="/bodega"    element={<BodegaYVinas />}  />
            <Route path="/tienda"        element={<Tienda />}      />
            <Route path="/tienda/:id"    element={<VinoDetalle />} />
            <Route path="/carrito"       element={<Carrito />}     />
            <Route path="/maridajes"     element={<Maridajes />}   />
            <Route path="/blog"           element={<Blog />}         />
            <Route path="/blog/:id"      element={<BlogPost />}     />
            <Route path="/visita"    element={<VisitaBodega />}  />
            <Route path="/contacto"  element={<Contacto />}      />
            <Route path="/aviso-legal" element={<AvisoLegal />}          />
            <Route path="/terminos"   element={<TerminosCondiciones />} />
            <Route path="*"          element={<NotFound />}      />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
