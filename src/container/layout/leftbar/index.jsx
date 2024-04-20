import React from 'react'
import MenuSideBar from './menu'
import logo from '/logo.png'
import { FaLanguage } from "react-icons/fa";
const Leftbar = () => {
  return (
    <div className='w-[220px] bg-mixed-300 text-white mt-0 h-screen px-4 rounded-lg flex flex-col justify-between items-center pb-4'>
      <div className='flex justify-center flex-col items-center gap-2 pb-2 border-b-2'>
        <img src={logo} alt="" className=' w-[150px] h-[150px] object-cover rounded-full cursor-pointer'/>
        <h2 className='text-custom-h4 font-bold cursor-pointer text-primary-400'>Krishi Yojna</h2>
        <div className='flex justify-between  w-full'>
          <p className='flex items-center gap-2'><FaLanguage size={20}/>Eng</p>
          <p className='flex items-center gap-2'> <FaLanguage size={20}/> Hindi</p>
        </div>
      </div>
      <div>
        <MenuSideBar/>
      </div>
      <div>
        <button className='px-6 py-3 mb-2 bg-primary-200 rounded-lg text-custom-h6 font-semibold'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Leftbar