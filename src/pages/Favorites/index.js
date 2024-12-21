import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Favorite } from '../../components'
import './style.css'

export const Favorites = () => {
  const [catsList, setCatsList] = useState([])

  useEffect(() => {
    setCatsList(JSON.parse(localStorage.getItem('favCats')) || [])
  }, [])

  const handleFavCat = (idToRemove) => {
    const favCats = JSON.parse(localStorage.getItem('favCats')) || []

    const updatedFavCats = favCats.filter((id) => id !== idToRemove)

    localStorage.setItem('favCats', JSON.stringify(updatedFavCats))
    setCatsList(updatedFavCats)
  }

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-10 flex flex-col items-center">
        <div className="flex gap-2 mb-6 self-start">
          <Link to="/" className="text-primary font-semibold">
            Início
          </Link>
          <span>/</span>
          <span className="font-semibold">Favoritos</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {catsList.map((catId) => (
            <Favorite key={catId} id={catId} onClick={() => handleFavCat(catId)} />
          ))}
        </div>
      </main>
    </>
  )
}
