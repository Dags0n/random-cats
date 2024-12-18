import { baseUrl, findCatById, findCatByTags } from '../utils/url'

export const Image = ({ id = null, tags = [], height = 'h-64', width = 'w-full' }) => {
  let url = ''
  if (id) url = findCatById(id)
  else if (tags.length > 0) url = findCatByTags(tags)
  else url = baseUrl

  return <img src={url} alt="Imagem de gato" className={`rounded-2xl object-cover ${height} ${width}`} />
}
