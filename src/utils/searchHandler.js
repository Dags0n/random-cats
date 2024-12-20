import { getRandomNumber } from './getRandomNumber'
import { getCatByTag, getRandomCat } from './url'

export const searchHandler = async (event, setCatId, setLoading, isRandom = false) => {
  let searchValue
  if (event) searchValue = event.target.value
  try {
    setLoading(true)
    if (isRandom) {
      const url = getRandomCat()
      const response = await fetch(url)
      const data = await response.json()
      setCatId(data._id)
    } else {
      const url = getCatByTag(searchValue)
      const response = await fetch(url)
      const data = await response.json()
      const index = getRandomNumber(0, data.length - 1)
      setCatId(data[index]._id)
    }
  } catch {
    setCatId('')
  } finally {
    setLoading(false)
  }
}
