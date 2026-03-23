import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Week 1', forecast: 4000, actual: 2400 },
  { name: 'Week 2', forecast: 3000, actual: 1398 },
  { name: 'Week 3', forecast: 2000, actual: 9800 },
  { name: 'Week 4', forecast: 2780, actual: 3908 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Forecast Accuracy</h2>
          <LineChart width={300} height={200} data={data}>
            <Line type="monotone" dataKey="forecast" stroke="#8884d8" />
            <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <ul>
            <li><Link to="/forecast-accuracy" className="text-blue-500">View Forecast Accuracy</Link></li>
            <li><Link to="/forecast-submission" className="text-blue-500">Submit Forecast</Link></li>
            <li><Link to="/forecast-comparison" className="text-blue-500">Compare Forecast vs Actual</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;