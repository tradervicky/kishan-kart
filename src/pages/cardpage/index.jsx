import React, { useState } from 'react'
import UserButton from '../../components/userButton'
import Cards from '../card'

const CardPage = () => {
  const [selectedCard, setSelectedCard] = useState("")
  const  handleClick = ()=>{
    setSelectedCard("")
  }
  return (
    <div className='mt-4 h-full'>
      <div className='grid grid-cols-3 gap-4 mx-6 '>
        <div className='flex-1 h-[250px]'>
        <img src="/gold.png" alt="" className={`h-full w-full object-contain  ${selectedCard === "gold" ? "scale-110 border-2 border-white duration-300 ease-in ": ""}`} onClick={()=>setSelectedCard("gold")}/>
        </div>
        <div className='flex-1 h-[250px]'>
        <img src="/platinum.png" alt=""className={`h-full w-full object-contain ${selectedCard === "platinum" ? "scale-110 border-2 border-white duration-300 ease-in ": ""}`} onClick={()=>setSelectedCard("platinum")}/>
        </div>
        <div className='flex-1 h-[250px]'>
        <img src="/diamond.png" alt="" className={`h-full w-full object-contain ${selectedCard === "diamond" ? "scale-110 border-2 border-white duration-300 ease-in ": ""}`} onClick={()=>setSelectedCard("diamond")}/>
        </div>    
      </div>
      <div className='flex justify-center mt-2'>
        <UserButton title="Add card" customStyle="rounded-lg bg-primary-200 outline-none text-lg font-semibold text-white px-4 py-2 hover:bg-primary-300" onClick={handleClick}/>
      </div>
      <Cards/>
      
    </div>
  )
}

export default CardPage