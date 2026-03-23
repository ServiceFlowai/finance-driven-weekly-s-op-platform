import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/escalation" className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Exception-based Escalation</h2>
          <p>Manage and escalate forecast misses and demand changes.</p>
        </Link>
        <Link to="/supply-feasibility" className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Supply Feasibility Check</h2>
          <p>Assess demand plans against supply constraints.</p>
        </Link>
        <Link to="/supply-costing" className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Supply Costing Integration</h2>
          <p>Review procurement cost changes and impacts.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;