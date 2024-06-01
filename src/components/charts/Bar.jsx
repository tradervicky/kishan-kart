import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './CustomBarChart.css';

const CustomBarChart = ({customData}) => {
    return (
        <div className="barchart-container">
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={customData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="product" stroke="#333" />
                    <YAxis stroke="#333" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '5px', color: '#fff' }} />
                    <Legend />
                    <Bar dataKey="quantity" fill="#8884d8" radius={[10, 10, 0, 0]} />
                    {/* <Bar dataKey="uv" fill="#82ca9d" radius={[10, 10, 0, 0]} /> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CustomBarChart;
