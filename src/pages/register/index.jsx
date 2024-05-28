// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch
      return;
    }
    const userInfo = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role : "Admin"
    };
    dispatch(register(userInfo)).then((action) => {
      console.log(action.meta)
      if (action.meta.requestStatus === 'fulfilled') {
        toast.success("User Registerd successfully")
        navigate('/');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='h-[100vh] p-20'>
      <div className='w-full h-full flex rounded-3xl overflow-hidden'>
        <div className="w-1/2">
          <img src="/register.jpg" alt="Register" className="w-full h-full object-cover" />
        </div>
        <div className='w-1/2 bg-slate-700 flex flex-col px-20 py-8'>
          <h3 className='text-3xl font-bold text-white mb-4'>Register</h3>
          <span className='text-lg text-gray-400 mb-8'>Please complete to create your account</span>
          <div className='flex flex-col gap-4'>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="px-1 py-2 font-semibold bg-transparent border-b-2 border-white text-white focus:border-blue-500 outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-1 py-2 font-semibold bg-transparent border-b-2 border-white text-white focus:border-blue-500 outline-none"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="px-1 py-2 font-semibold bg-transparent border-b-2 border-white text-white focus:border-blue-500 outline-none"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="px-1 py-2 font-semibold bg-transparent border-b-2 border-white text-white focus:border-blue-500 outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4 flex gap-4 w-full items-end'>
            <button type='submit' className='bg-green-400 text-white px-4 py-2 text-lg font-semibold w-1/2 hover:bg-green-500'>
              Submit
            </button>
            <p onClick={() => navigate('/')} className='text-emerald-400 underline cursor-pointer'>
              I already have an account!
            </p>
          </div>
          <div className='flex justify-end'></div>
          <p className='mt-20 text-center text-gray-400'>2024 Krishi Yojna. All Rights Reserved</p>
        </div>
      </div>
    </form>
  );
};

export default Register;
