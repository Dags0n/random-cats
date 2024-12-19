import { Search } from 'react-feather'

export const SearchField = ({ placeholder, onKeyDown }) => {
  return (
    <div className="px-10">
      <div className="relative -mt-5 w-full md:w-2/3 justify-self-center">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 rounded-full border-4 border-white text-white placeholder-white bg-primary focus:outline-none focus:ring-0 focus:border-white"
          onKeyDown={onKeyDown}
        />
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>
    </div>
  )
}
