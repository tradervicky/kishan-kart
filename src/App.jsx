// import React, { useContext } from 'react'
import { useLangContext } from './context/language'
import RoutesPages from './routes'


const App = () => {
const token = localStorage.getItem('token')
  return (
    <div className='bg-mixed-200 '>
      <RoutesPages/>
    </div>
  )
}

export default App