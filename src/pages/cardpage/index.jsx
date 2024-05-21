import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URLS } from '../../api/auth'
import { makeApiRequest } from '../../api/function'
import UserButton from '../../components/userButton'
import Cards from '../card'
import UserCards from './userCard'

const CardPage = () => {
  const id = useParams();
  const [selectedCard, setSelectedCard] = useState("")
  let cardbalance = 0
  selectedCard === "gold" ? cardbalance = 10000 : selectedCard === "platinum" ? cardbalance = 25000 : selectedCard === "diamond" ? cardbalance = 50000 : ""
  // console.log(cardbalance)
  const [cardData , setCardData] = useState({
    balance: cardbalance || null,
    user: id?.id || "",
    cardType: selectedCard
  })
  console.log(cardData)
  useEffect(()=>{
    setCardData({...cardData , balance: cardbalance, cardType: selectedCard})
  },[selectedCard])

  const  handleAddCard = async ()=>{
    try {
      const response = await makeApiRequest("POST", API_URLS.ADD_CARD, cardData)
      console.log(response)
      setSelectedCard("")
    } catch (error) {
      console.error(error)
    }
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
        <UserButton title="Add card" customStyle="rounded-lg bg-primary-200 outline-none text-lg font-semibold text-white px-4 py-2 hover:bg-primary-300" onClick={handleAddCard}/>
      </div>
      {/* <Cards/> */}
      <UserCards/>
      
    </div>
  )
}

export default CardPage