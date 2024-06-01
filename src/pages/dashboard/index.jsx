// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import CustomAreaChart from '../../components/charts/Area';
import CustomBarChart from '../../components/charts/Bar';
import CustomPieChart from '../../components/charts/Pie';
import { FaUsers } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { API_URLS } from '../../api/auth';
import { makeApiRequest } from '../../api/function';
import { hideLoader, showLoader } from '../../components/loader';
const Dashboard = () => {
  const [data, setData] = useState([])
  console.log(data)
  const [chartData, setChartData] = useState([
    { "date": "2024-05-01", "sales": 400 },
    { "date": "2024-05-02", "sales": 300 },
    { "date": "2024-05-03", "sales": 500 }
  ]);
const customData = data && Array.isArray(data.productsNumber)
  ? data.productsNumber.map((item) => ({ product: item.title, quantity: item.quantity }))
  : [];
console.log(customData)
  const pieData = [
    { name: 'Activated cards', value: data && data.totalActivatedCards },
    { name: 'Deactivated cards', value: data && data.totalDeactivatedCards}
  ]
   // Fetch the data for the charts
   const fetchData = async () => {
    showLoader()
    try {
      const response = await makeApiRequest('GET', API_URLS.VIEW_DASHBOARD);
      // console.log(response.data)
      setData(response.data)
      hideLoader()
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='text-white '>
      <div className='flex gap-4 mx-6'>
        <div className='bg-green-500 border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
          <FaUsers size={36}/>
          <p className='text-xl font-semibold'>{data && data.totalCustomer}</p>
          <span className='text-lg font-medium'>Total Customer</span>
        </div>
        <div className='bg-blue-500 border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
          <FaShopify size={36}/>
          <p className='text-xl font-semibold'>{data && data.totalProduct}</p>
          <span className='text-lg font-medium'>Total Product</span>
        </div>
        <div className='bg-red-400 border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
          <BsShop size={36}/>
          <p className='text-xl font-semibold'>{data && data.totalVendor}</p>
          <span className='text-lg font-medium'>Total Vendors</span>
        </div>
       
      </div>
      <div className='flex mx-6 gap-4 justify-between mt-4'>
     
       <div className=' border h-[350px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center '>
        <CustomPieChart
        data={pieData}
        chartTitle="Cards"
      />  
        </div>
        <div className='border p-2 w-2/3 h-[350px]'>
        <CustomBarChart customData={customData}/>
        </div>
      </div>
       
      
     
    </div>
  );
}

export default Dashboard;
