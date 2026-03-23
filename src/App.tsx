import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Workflow from './pages/Workflow';
import Alerts from './pages/Alerts';
import AuditTrail from './pages/AuditTrail';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/audit-trail" element={<AuditTrail />} />
      </Routes>
    </div>
  );
}

export default App;