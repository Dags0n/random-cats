import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cats } from './pages/Cats'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cats" element={<Cats />} />
    </Routes>
  )
}
