import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Save } from 'react-feather'
import { Header, SearchField, Image, Loading, Button } from '../../components'
import { searchHandler } from '../../utils/searchHandler'

export const Home = () => {
  const [catTags, setCatTags] = useState([])
  const [loading, setLoading] = useState(false)

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchHandler(e, setCatTags, setLoading)
    }
  }

  return (
    <>
      <Header />
      <SearchField placeholder="Buscar gatinho" onKeyDown={(e) => handleOnKeyDown(e)} />
      <main className="p-10 flex flex-col items-center">
        {loading ? <Loading /> : <Image tags={catTags} height="h-[70vh]" width="w-full md:w-2/3" />}
        <div className="flex justify-center gap-4 mt-6">
          <Button Icon={Save} label="Salvar imagem" />
          <Link to="galeria">
            <Button Icon={ArrowRight} label="Ver mais imagens" />
          </Link>
        </div>
      </main>
    </>
  )
}
