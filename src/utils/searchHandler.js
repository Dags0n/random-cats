import { getRandomNumber } from './getRandomNumber'
import { getCatByTag } from './url'

export const searchHandler = async (event, setCatId, setLoading) => {
  const searchValue = event.target.value
  try {
    setLoading(true)
    const url = getCatByTag(searchValue)
    const response = await fetch(url)
    const data = await response.json()
    const index = getRandomNumber(0, data.length - 1)
    setCatId(data[index]._id)
  } catch {
    setCatId('')
  } finally {
    setLoading(false)
  }
}
