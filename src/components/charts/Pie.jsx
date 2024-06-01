import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import './CustomBarChart.css';

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
          <Tooltip content={<CustomTooltip />}/>
        </PieChart>
        <Legend />
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{ color: '#fff', backgroundColor:"#333", padding:"8px", borderRadius:"12px" }}>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};