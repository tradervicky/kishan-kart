import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
const ProductPage = () => {
    const {id} = useParams()
    const [productData, setProductData] = useState([])
    const fetchProduct = async ()=>{
        try {
            console.log("Fetched")
            const response = await makeApiRequest("GET", `${API_URLS.GET_ALL_PRODUCTS}/${id}`)
            setProductData(response)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <div className=" shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 h-[78vh]">
          <img 
            src={productData.image} 
            alt="Product" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl text-primary-300 font-bold mb-4">{productData.title && productData.title}</h1>
          <p className="text-md text-white mb-2"><span className="font-semibold text-gray-400">Available Quantity:</span> {productData.quantity && productData.quantity}</p>
          <p className="text-md text-white mb-2"><span className="font-semibold text-gray-400">Category:</span>{productData.category && productData.category}</p>
          <p className="text-md text-white mb-2"><span className="font-semibold text-gray-400">Sub-Category:</span> {productData.subCategory && productData.subCategory}</p>
          <p className="text-sm text-white mb-4 italic"><span className="font-semibold text-gray-400 not-italic  text-md">Description:</span> {productData.description && productData.description}</p>
          <p className="text-2xl text-white font-bold mb-4"><span className="font-semibold text-gray-400">Price:</span> {productData.price && productData.price}/-</p>
          <p className="text-lg text-white mb-4 "><span className="font-semibold text-primary-200">Seller:</span> {productData.vendorName && productData.vendorName}</p>
          <div className='flex gap-4'>
            <FiPhoneCall size={36} color={"green"}/>
            <p className=" text-white mb-4 text-2xl "><span className='text-3xl pr-2 text-green-700'>  ORDER NOW :</span>{productData.vendorMobile && productData.vendorMobile}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
