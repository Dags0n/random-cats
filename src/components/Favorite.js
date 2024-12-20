import { findCatById } from '../utils/url'
import { Trash } from 'react-feather'

export const Favorite = ({ id = null, height = 'h-64', width = 'w-full', ref = null, onClick}) => {
  let url = ''
  if (id && id.length > 0) url = findCatById(id)

  return (<div className="relative group">
    <img src={url} alt="Imagem de gato favoritada" className={`rounded-2xl object-cover ${height} ${width}`} ref={ref} />
    <div className="absolute bottom-2 w-full ml-auto flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={onClick}
        className="flex items-center px-3 py-2 bg-primary text-primary-foreground hover:brightness-90 text-base rounded-full w-fit"
      >
        {Trash && (
          <span className="mr-2">
            <Trash size={16} />
          </span>
        )}
        {"Desfavoritar gato"}
      </button>
    </div>
  </div>)
  
}
