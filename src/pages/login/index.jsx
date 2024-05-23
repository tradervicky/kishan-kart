import React, { useEffect, useState } from 'react';
import { FaKey } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAuth, login } from '../../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // console.log(authStatus,isAuthenticated,user,authError)
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSetGuestCredentials = ()=>{
    setFormData({
      email: 'vicky@test.in',
    password: 'vicky123'
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch(login(formData)).then((action) => {
      console.log(action.meta.requestStatus)
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/dashboard'); 
      }
    });

  }

  const handleNavigate = ()=>{
    navigate('/register')
  }
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70">
        
      </div>
      <div className="relative bg-white bg-opacity-25 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className='absolute bg-gray-400 w-[80px] h-[80px] flex justify-center items-center rounded-full top-2 left-2 cursor-pointer'>
          <h2 className="text-lg font-semibold text-white flex flex-col justify-center items-center p-2" onClick={handleSetGuestCredentials}>
            <span className='text-yellow-400'><FaKey size={22}/></span>
            Guest
          </h2>
        </div>
        <div className='flex justify-center'>

        <img src="/logo.png" alt="" className='w-[150px]  h-[200px]flex '/>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 text-gray-700 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            value={formData.email}
            placeholder="Enter your username"
            onChange={(e)=>setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-gray-700 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={(e)=>setFormData({...formData, password: e.target.value})}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="text-white hover:text-gray-300 text-sm"
            type="button"
            onClick={handleNavigate}
          >
            Register
          </button>
          <button
            className="text-white hover:text-gray-300 text-sm"
            type="button"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
