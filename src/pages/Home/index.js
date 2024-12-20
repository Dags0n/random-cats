import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Save, Heart, Trash } from 'react-feather'
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

  const handleFavCat = (e, favCat) =>{
    const favCats = JSON.parse(localStorage.getItem("favCats"));
    if(favCat){
      favCats.push(catId);
    } else{
      const index = favCats.indexOf(catId);
      if (index > -1) { // only splice array when item is found
        favCats.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    localStorage.setItem("favCats", JSON.stringify(favCats));
    setIsFavorited(favCat)
  }

  // Carrega assim que a página estiver carregada - Por algum motivo, a pagina está carregando duas vezes
  useEffect(() => {
    if(!localStorage.getItem("favCats")){
      var favCats = []
      localStorage.setItem("favCats", JSON.stringify(favCats));
    }
    if(!catId)
      searchHandler(null, setCatId, setLoading, true)
  }, [])

  return (
    <>
      <Header />
      <SearchField placeholder="Buscar gatinho" onKeyDown={(e) => handleOnKeyDown(e)} />
      <main className="p-10 flex flex-col items-center">
        {loading ? <Loading /> : <Image id={catId} height="h-[70vh]" width="w-full md:w-2/3" />}
        <div className="flex justify-center gap-4 mt-6">
          { isFavorited 
              ?
                <Button Icon={Trash} label="Desfavoritar gato" onClick={(e) => handleFavCat(e, false)}/>
              :
                <Button Icon={Heart} label="Favoritar gato" onClick={(e) => handleFavCat(e, true)}/>
          }
          <Button Icon={Save} label="Salvar gato" />
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
