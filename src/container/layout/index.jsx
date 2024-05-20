import React from 'react'
import Topbar from '../topbar'
import Leftbar from './leftbar'
import RightContent from './rightContent'


const Layout = (props) => {
  
  const isLoggedIn = localStorage.getItem('token');

  return (
    <>
      {isLoggedIn ? (
        <div className="flex gap-3 w-full">
          <Leftbar />
          <div className="flex flex-col flex-grow">
            <Topbar />
            <RightContent type={props.type}>{props.children}</RightContent>
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  )
}

export default Layout