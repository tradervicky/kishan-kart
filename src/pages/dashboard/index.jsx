// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import CustomAreaChart from '../../components/charts/Area';
import CustomBarChart from '../../components/charts/Bar';
import CustomPieChart from '../../components/charts/Pie';
import { FaUsers } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";

const Dashboard = () => {
  const [chartData, setChartData] = useState([
    { "date": "2024-05-01", "sales": 400 },
    { "date": "2024-05-02", "sales": 300 },
    { "date": "2024-05-03", "sales": 500 }
  ]);

  const [pieData, setPieData] = useState([
    { name: 'Activated', value: 120 },
    { name: 'Deactivated', value: 30 }
  ]);

  useEffect(() => {
    // Fetch the data for the charts
    const fetchData = async () => {
      try {
        // const response = await makeApiRequest('GET', API_URLS.GET_SALES_DATA);
        // setChartData(response);

        // For Pie chart data
        // const pieResponse = await makeApiRequest('GET', API_URLS.GET_CARD_STATUS_DATA);
        // setPieData([
        //   { name: 'Activated', value: pieResponse.activated },
        //   { name: 'Deactivated', value: pieResponse.deactivated }
        // ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white '>
      <div className='flex gap-4 mx-6'>
        <div className='bg-green-500 border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
          <FaUsers size={36}/>
          <p className='text-xl font-semibold'>9</p>
          <span className='text-lg font-medium'>Total Customer</span>
        </div>
        <div className='bg-blue-500 border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
          <FaShopify size={36}/>
          <p className='text-xl font-semibold'>12</p>
          <span className='text-lg font-medium'>Total Product</span>
        </div>
        <div className=' border h-[250px] p-4 w-1/3 flex flex-col gap-2 justify-center items-center'>
        <CustomPieChart
        data={pieData}
        chartTitle="Cards"
      />
        </div>
      </div>
        <CustomAreaChart
        data={chartData}
        xAxisKey="date"
        areaKey="sales"
        chartTitle="Sales Over Time"
        height="100%"
      />
      
      
      <CustomBarChart/>
    </div>
  );
}

export default Dashboard;
