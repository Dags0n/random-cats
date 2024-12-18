import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
  )
}
