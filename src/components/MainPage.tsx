import { Pages } from '../data/pages'

type Props = {
  onChangePage: (page: Pages) => void
}

const MainPage = ({ onChangePage }: Props) => {

  return (
    <div className='main-container'>
      <h1 className='text-white'>Sabana Club</h1>
      <p className='text-white'>Este es el club de tennis Sabana</p>
      <div className='flex flex-row gap-4'>
        <button onClick={() => onChangePage('Register')} className="btn-inscribir text-white bg-gray-950 p-4 rounded-xl">Inscribir</button>
        <button onClick={() => onChangePage('Search')} className="btn-inscribir text-white bg-gray-950 p-4 rounded-xl">Buscar</button>
      </div>
    </div>

  )
}

export default MainPage
