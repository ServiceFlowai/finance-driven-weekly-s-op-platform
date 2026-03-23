import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { week: 'Week 1', revenue: 4000, margin: 2400 },
  { week: 'Week 2', revenue: 3000, margin: 1398 },
  { week: 'Week 3', revenue: 2000, margin: 9800 },
  { week: 'Week 4', revenue: 2780, margin: 3908 }
];

function RevenueForecast() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Weekly Revenue and Margin Forecast</h1>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="margin" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default RevenueForecast;