import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Escalation from './pages/Escalation';
import SupplyFeasibility from './pages/SupplyFeasibility';
import SupplyCosting from './pages/SupplyCosting';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/escalation" element={<Escalation />} />
        <Route path="/supply-feasibility" element={<SupplyFeasibility />} />
        <Route path="/supply-costing" element={<SupplyCosting />} />
      </Routes>
    </div>
  );
}

export default App;