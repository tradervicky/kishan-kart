import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];
const CustomPieChart = ({ data, chartTitle }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2 className='text-center'>{chartTitle}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <Legend />
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
