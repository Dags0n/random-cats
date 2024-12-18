import { Link } from 'react-router-dom'
import { Header } from '../../components'

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-10 flex flex-col items-center">
        <h2 className="text-9xl mb-6 font-extrabold text-primary">404</h2>
        <p className="text-2xl mb-2">Ops... Não encontramos a página.</p>
        <p className="text-2xl">
          Clique{' '}
          <Link to="/" className="text-primary font-bold">
            aqui
          </Link>{' '}
          para ir para a tela de início.
        </p>
      </main>
    </>
  )
}
