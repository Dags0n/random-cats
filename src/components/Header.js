import imgPaw from '../assets/paw.png'

export const Header = () => {
  return (
    <header className="px-10 py-16 w-full bg-primary flex justify-center bg-header-image bg-center bg-cover">
      <img src={imgPaw} alt="Patinha de gato" className="-top-1 left-1/2 -translate-x-1/2 absolute w-32" />
      <h1 className="font-title uppercase text-7xl text-white text-center">Random Cats</h1>
    </header>
  )
}
