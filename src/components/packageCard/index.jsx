import React from 'react'

const PackageCard = () => {
  return (
    <div className='bg-mixed-300 w-[400px] shadow-lg rounded-lg outline-dashed outline-amber-400 p-4 mb-4'>
      <div>
        <img src="/gold.png" alt="" className='py-4'/>
      </div>
      <div>
        <div className='flex justify-between items-center my-4'>
          <p className='text-custom-h4 font-bold text-primary-400'>Gold Card</p>
          <span className='text-custom-h4 font-bold text-green-500'>10000 Pt.</span>
        </div>
      </div>
      <div>
        <ul className='list-disc list-inside text-white'>
          <li>10000 Reward Point Limit</li>
          <li>1000 + 18% GST Processing Fee</li>
          <li>1 Year Valdity</li>
          <li>1 Year Valdity</li>
          <li>Eligibility 18yrs to 50yrs</li>
          <li>1 Year Valdity</li>
        </ul>
      </div>
      <h3 className='text-center text-custom-h4 font-bold text-primary-400'>Facility</h3>
      <div>
        <ul className='list-disc list-inside text-white'>
          <li>Upto 50% Discount on seeds, pesticide, fertilizer and agriculture based items</li>
          <li>Renewel Facality Available</li>
          <li>Non Transferable</li>
          <li>Card is valid only on Ecom Kisan haath</li>
        </ul>
      </div>
      <h3 className='text-custom-h4 font-bold text-primary-400'>In Card Lost Case</h3>
      <div className='mt-4'>
        <span className='text-white'>New card will be issued on the payment of Rs. 1200</span>
      </div>

    </div>
  )
}

export default PackageCard