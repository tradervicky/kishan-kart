import React from 'react';
import { MdOutlineAdsClick } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({title, sellerName,quantity,description,image,subCategory,productID, price,}) => {
  const navigate = useNavigate()
  return (
    <div>
    <div className='w-[300px] h-[350px] rounded-lg group relative shadow-2xl px-2 flex flex-col m-2 overflow-hidden'>
      <img src={image} alt="" className='shadow-inner group-hover:-translate-y-6 duration-300 ease-in-out object-cover w-full h-[180px] rounded-lg'/>
      <div className='flex flex-col gap-2 h-32'>
        <h3 className='text-center font-semibold'>{title}</h3>
        <p className='text-custom-h5 font-semibold text-primary-300 text-center'>Seller: <span className='text-custom-h5 font-normal text-white'>Amar Nath Sharma</span></p>
        <p className='font-semibold text-custom-h4 text-center'>Rs: {price} /-</p>
      </div>
      <button className='absolute left-[45%] top-[45%] transform  bottom-0  py-2 text-green-500 text-center  duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2'  onClick={() => navigate(`/products/${productID}`)}>
        <MdOutlineAdsClick size={36}/>
      </button>
    </div>
    </div>
  );
};

export default ProductCard;
