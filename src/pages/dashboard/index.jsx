// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import CustomAreaChart from '../../components/charts/Area';
import CustomBarChart from '../../components/charts/Bar';
import CustomPieChart from '../../components/charts/Pie';

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
    <div className='text-white'>
      <CustomAreaChart
        data={chartData}
        xAxisKey="date"
        areaKey="sales"
        chartTitle="Sales Over Time"
      />
      <CustomPieChart
        data={pieData}
        chartTitle="Activated vs Deactivated Cards"
      />
      <CustomBarChart/>
    </div>
  );
}

export default Dashboard;
