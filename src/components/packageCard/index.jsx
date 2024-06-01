import React from 'react'

const PackageCard = ({data, image}) => {
  return (
    <div className='bg-mixed-300 w-[400px] shadow-lg rounded-lg outline-dashed outline-amber-400 p-4 mb-4'>
      <div>
        <img src={image} alt="" className='py-4'/>
      </div>
      <div>
        <div className='flex justify-between items-center my-4'>
          <p className='text-custom-h4 font-bold text-primary-400'>{data.name}</p>
          <span className='text-custom-h4 font-bold text-green-500'>{data.points}</span>
        </div>
      </div>
      <div>
        <ul className='list-disc list-inside text-white'>
          {data.desc.map((text, index)=>
          <li key={index}>{text}</li>)}
        </ul>
      </div>
      <h3 className='text-center text-custom-h4 font-bold text-primary-400'>Facility</h3>
      <div>
        <ul className='list-disc list-inside text-white'>
          {data.facility.map((text, index)=>
          <li key={index}>{text}</li>)}
         
        </ul>
      </div>
      <h3 className='text-custom-h4 font-bold text-primary-400'>In Card Lost Case</h3>
      <div className='mt-4'>
        <span className='text-white'>{data.lost}</span>
      </div>

    </div>
  )
}

export default PackageCard