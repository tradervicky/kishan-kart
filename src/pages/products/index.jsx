import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_URLS } from '../../api/auth'
import { makeApiRequest } from '../../api/function'
import { hideLoader, showLoader } from '../../components/loader'
import ProductCard from '../../components/productCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async ()=>{
    showLoader()
    try {
      const response = await makeApiRequest("GET", API_URLS.GET_ALL_PRODUCTS)
      console.log(response)
      hideLoader()
      setProducts(response)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className='text-white mx-6'>
      <div className='grid grid-cols-4'>
        {
          products.map((data, index)=>
          (<div key={index}>
           
            <ProductCard title={data.title} price = {data.price} image={data.image} description = {data.description} category= {data.category} subCategory={data.subCategory} quantity={data.quantity} productID ={data._id}/>
          </div>)
          )
        }
      </div>
    </div>
  )
}

export default Products