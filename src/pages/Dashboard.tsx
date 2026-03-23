import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Weekly Revenue</h2>
          <p className="text-2xl">$1,234,567</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Margin at Risk</h2>
          <p className="text-2xl">$123,456</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Supply Shortages</h2>
          <p className="text-2xl">12%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;