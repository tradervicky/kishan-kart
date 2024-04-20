import React from 'react'
import Leftbar from './layout/leftbar'
import Topbar from './topbar'

const Container = () => {
  return (
    <div className='flex gap-3 w-full border border-red-500'>
        <Leftbar/>
        <div className=' flex-grow'>
            <Topbar/>
        </div>
    </div>
  )
}

export default Container