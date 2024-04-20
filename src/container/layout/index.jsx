import React from 'react'
import Topbar from '../topbar'
import Leftbar from './leftbar'
import RightContent from './rightContent'


const Layout = (props) => {
  return (
    <div className='flex gap-3 w-full border border-red-500'>
        <Leftbar/>
        <div className='flex flex-col flex-grow'>
            <Topbar/>
            <RightContent  type={props.type}>{props.children}</RightContent>
        </div>

    </div>
  )
}

export default Layout