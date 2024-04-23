import React from 'react'
import PackageCard from '../../components/packageCard'

const Package = () => {
  return (
    
    <div className=' my-6  mt-6 mx-6'>
      <div className='flex flex-col justify-center my-4'>
      <h3 className='text-custom-h4 font-semibold text-white text-center'>The Right Plan For You</h3>
      <span className='text-custom-h6 text-white text-center'>We have several plans get your dream card</span>
      </div>
      <div className='md:grid-cols-2 lg:grid-cols-3 grid gap-4'>
      <PackageCard/>
      <PackageCard/>
      <PackageCard/>
      </div>
    </div>
  )
}

export default Package