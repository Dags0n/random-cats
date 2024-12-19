export const SearchField = ({ placeholder, onChange }) => {
  return (
    <div className="relative -mt-5 sm:w-2/5 justify-self-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-white text-white placeholder-white bg-primary focus:outline-none focus:ring-0 focus:border-white"
        onChange={onChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
        />
      </svg>
    </div>
  )
}