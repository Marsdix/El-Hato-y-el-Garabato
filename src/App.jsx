import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home          = lazy(() => import('./react-pages/Home'))
const SobreNosotros = lazy(() => import('./react-pages/SobreNosotros'))
const BodegaYVinas  = lazy(() => import('./react-pages/BodegaYVinas'))
const Tienda        = lazy(() => import('./react-pages/Tienda'))
const VisitaBodega  = lazy(() => import('./react-pages/VisitaBodega'))
const Contacto      = lazy(() => import('./react-pages/Contacto'))
const AvisoLegal         = lazy(() => import('./react-pages/AvisoLegal'))
const TerminosCondiciones = lazy(() => import('./react-pages/TerminosCondiciones'))
const Maridajes     = lazy(() => import('./react-pages/Maridajes'))
const Blog          = lazy(() => import('./react-pages/Blog'))
const BlogPost      = lazy(() => import('./react-pages/BlogPost'))
const VinoDetalle   = lazy(() => import('./react-pages/VinoDetalle'))
const Carrito       = lazy(() => import('./react-pages/Carrito'))
const NotFound      = lazy(() => import('./react-pages/NotFound'))

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
