import React from 'react';
import MenuSideBar from './menu';
import logo from '/logo.png';
import { FaLanguage } from 'react-icons/fa';
import { useLangContext } from '../../../context/language';
import '../../../components/global/global.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import { hideLoader, showLoader } from '../../../components/loader';

const Leftbar = () => {
  const { hindi, eng, lang } = useLangContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    showLoader();
    dispatch(logout());
    hideLoader();
    navigate('/');
  };

  return (
    <div className='w-[220px] bg-mixed-100 text-white mt-0 h-screen px-4 rounded-lg flex flex-col justify-between items-center pb-4 z-10 relative'>
      <div className='flex justify-center flex-col items-center gap-2 pb-2 border-b-2'>
        <img src={logo} alt="Logo" className='w-[150px] h-[150px] object-cover rounded-full cursor-pointer'/>
        <h2 className='text-custom-h4 font-bold cursor-pointer text-primary-400'>{lang ? "Krishi Yojna" : "कृषि योजना"}</h2>
        <div className='flex justify-between w-full'>
          <p className='flex items-center gap-2 cursor-pointer' onClick={hindi}><FaLanguage size={20}/>Eng</p>
          <p className='flex items-center gap-2 cursor-pointer' onClick={eng}><FaLanguage size={20}/>Hindi</p>
        </div>
      </div>
      <div>
        <MenuSideBar lang={lang} />
      </div>
      <div>
        <button onClick={handleLogout} className='px-6 py-3 mb-2 bg-primary-200 rounded-lg text-custom-h6 font-semibold hover:bg-primary-100 ease-in-out duration-300'>
          {lang ? "Log out" : "लॉग आउट"}
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
