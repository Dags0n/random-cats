export const baseUrl = 'https://cataas.com/cat'

export const apiUrl = 'https://cataas.com/api'

export const getAllCats = ({ limit, skip }) => {
  return `${apiUrl}/cats?limit=${limit}&skip=${skip}`
}

export const getCatByTag = (tag) => {
  return `${apiUrl}/cats?tags=${tag}`
}

export const getTotalCats = () => {
  return `${apiUrl}/count`
}

export const findCatById = (id) => {
  return `${baseUrl}/${id}`
}

export const findCatByTags = (tags) => {
  const formattedTags = tags.toString()
  return `${baseUrl}/${formattedTags}`
}
