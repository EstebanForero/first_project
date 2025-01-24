
import React from 'react'

import { useNavigate } from 'react-router-dom';  

const MainPage = () => {
  const navigate = useNavigate();
  const handleInscription = () => {
        navigate('/register');
    };
    const handleSearch = () => {
        navigate('/register');
    };
  return (
    <div className='main-container'>
      <h1>Sabana Club</h1>
      <p>Este es el club de tennis Sabana</p>
      <div>
        <button onClick={handleInscription} className="btn-inscribir">Inscribir</button>
        <button onClick={handleSearch} className="btn-inscribir">Buscar</button>
      </div>
    </div>
    
  )
}

export default MainPage
