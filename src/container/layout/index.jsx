import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../features/auth/authSlice'

import Topbar from '../topbar'
import Leftbar from './leftbar'
import RightContent from './rightContent'


const Layout = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  useEffect(()=>{
    dispatch(checkAuth())
  },[])
  console.log(isAuthenticated)
  const isLoggedIn = localStorage.getItem('token');
  

  return (
    <>
      {isAuthenticated ? (
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