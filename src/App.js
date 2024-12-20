import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'
import { Favorites } from './pages/Favorites'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/favoritos" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
