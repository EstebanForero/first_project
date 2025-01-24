import { useState } from "react"
import { getPageComponent, Pages } from './data/pages'

function App() {

  const [page, setPage] = useState<Pages>('Main')

  return (
    <div className="bg-gray-800 w-full h-screen p-4">
      <h1 className="text-white text-center font-bold text-2xl">Club sabana</h1>
      {getPageComponent(page)}
    </div>
  )
}

export default App
