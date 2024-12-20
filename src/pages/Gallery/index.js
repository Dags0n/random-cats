import { useEffect, useState } from 'react'
import { Header, Image } from '../../components'
import Pagination from '@mui/material/Pagination'
import { fetchData } from '../../utils/fetchData'
import { getAllCats, getTotalCats } from '../../utils/url'
import './style.css'
import { Link } from 'react-router-dom'

const LIMIT = 12

export const Gallery = () => {
  const [catsList, setCatsList] = useState([])
  const [total, setTotal] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const url = getTotalCats()
    fetchData(url).then(({ count }) => {
      setTotal(Math.ceil(count / LIMIT))
    })
  }, [])

  useEffect(() => {
    const skip = (currentPage - 1) * LIMIT
    const url = getAllCats({ limit: LIMIT, skip })
    fetchData(url).then((response) => {
      const idsCats = response.map(({ _id }) => _id)
      setCatsList(idsCats)
    })
  }, [currentPage])

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-10 flex flex-col items-center">
        <div className="flex gap-2 mb-6 self-start">
          <Link to="/" className="text-primary font-semibold">
            Início
          </Link>
          <span>/</span>
          <span className="font-semibold">Galeria</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {catsList.map((catId) => (
            <Image key={catId} id={catId} />
          ))}
        </div>
        <Pagination count={total} page={currentPage} onChange={(_, page) => setCurrentPage(page)} />
      </main>
    </>
  )
}
