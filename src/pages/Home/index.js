import { useState } from 'react'
import { Header, SearchField, Image, Loading } from '../../components'
import { searchHandler } from '../../utils/searchHandler'
import './style.css'

export const Home = () => {
  const [catTags, setCatTags] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Header />
      <SearchField placeholder="Buscar gatinho" onChange={e => { searchHandler(e, setCatTags, setLoading) }} />
      <main className="max-w-5xl mx-auto p-10 flex flex-col items-center">
        <div className="flex justify-center h-[70vh] items-center w-full">
          {loading ? (
            <Loading />
          ) : (
            <Image tags={catTags} height="h-full" width="md:w-2/3" />
          )}
        </div>
      </main>
    </>
  )
}
