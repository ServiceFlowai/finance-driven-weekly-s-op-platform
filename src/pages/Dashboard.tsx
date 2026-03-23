import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/margin-risk" className="p-4 bg-white shadow rounded-lg hover:bg-gray-50">
          <h2 className="text-lg font-semibold">Margin at Risk</h2>
          <p>Identify scenarios causing margin erosion.</p>
        </Link>
        <Link to="/scenario-planning" className="p-4 bg-white shadow rounded-lg hover:bg-gray-50">
          <h2 className="text-lg font-semibold">Scenario Planning</h2>
          <p>Support for constrained supply scenarios.</p>
        </Link>
        <Link to="/revenue-forecast" className="p-4 bg-white shadow rounded-lg hover:bg-gray-50">
          <h2 className="text-lg font-semibold">Revenue Forecast</h2>
          <p>Weekly reforecasts for revenue and margin.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;