import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/variance-commentary" className="p-4 bg-blue-500 text-white rounded">Variance Commentary</Link>
        <Link to="/profitability-analysis" className="p-4 bg-green-500 text-white rounded">Profitability Analysis</Link>
        <Link to="/decision-package" className="p-4 bg-red-500 text-white rounded">Decision Package</Link>
      </div>
    </div>
  );
}

export default Dashboard;