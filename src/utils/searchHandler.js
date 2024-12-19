import { getCatByTag } from './url'

export const searchHandler = async (event, setCatTags, setLoading) => {
  const searchValue = event.target.value.trim()
  if (!searchValue) return
  try {
    setLoading(true)
    const url = getCatByTag(searchValue)
    const response = await fetch(url)
    const data = (await response.json()).map((cat) => cat.tags)
    setCatTags(data[0] || [])
  } catch {
    setCatTags([])
  } finally {
    setLoading(false)
  }
}