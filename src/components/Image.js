import { baseUrl, findCatById } from '../utils/url'

export const Image = ({ id = null, height = 'h-64', width = 'w-full', ref = null }) => {
  let url = ''
  if (id && id.length > 0) url = findCatById(id)
  else url = baseUrl

  return <img src={url} alt="Imagem de gato" className={`rounded-2xl object-cover ${height} ${width}`} ref={ref} />
}
