import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Trash } from 'react-feather'
import { Header, SearchField, Image, Loading, Button } from '../../components'
import { searchHandler } from '../../utils/searchHandler'

export const Home = () => {
  const [catId, setCatId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFavorited, setIsFavorited] = useState(false)

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchHandler(e, setCatId, setLoading)
    }
  }

  const handleFavCat = (favCat) => {
    const favCats = JSON.parse(localStorage.getItem('favCats'))
    if (favCat) {
      favCats.push(catId)
    } else {
      const index = favCats.indexOf(catId)
      if (index > -1) {
        favCats.splice(index, 1)
      }
    }

    localStorage.setItem('favCats', JSON.stringify(favCats))
    setIsFavorited(favCat)
  }

  useEffect(() => {
    if (!localStorage.getItem('favCats')) {
      var favCats = []
      localStorage.setItem('favCats', JSON.stringify(favCats))
    }
  }, [])

  useEffect(() => {
    if (!catId) {
      searchHandler(null, setCatId, setLoading, true)
    }
  }, [catId])

  return (
    <>
      <Header />
      <SearchField placeholder="Buscar gatinho" onKeyDown={(e) => handleOnKeyDown(e)} />
      <main className="p-10 flex flex-col items-center">
        {loading || !catId ? <Loading /> : <Image id={catId} height="h-[70vh]" width="w-full md:w-2/3" />}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {isFavorited ? (
            <Button Icon={Trash} label="Desfavoritar gato" onClick={(e) => handleFavCat(false)} />
          ) : (
            <Button Icon={Heart} label="Favoritar gato" onClick={(e) => handleFavCat(true)} />
          )}
          <Link to="galeria">
            <Button Icon={ArrowRight} label="Ver mais gatos" />
          </Link>
          <Link to="favoritos">
            <Button Icon={Heart} label="Ver gatos favoritos" />
          </Link>
        </div>
      </main>
    </>
  )
}
