import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const CustomBarChart = () => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "Page-A": 2400
        }
      ]
  return (
    <div>
        <BarChart width={750} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Page-A" fill="#8884d8" />
  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
</BarChart>
    </div>
  )
}

export default CustomBarChart