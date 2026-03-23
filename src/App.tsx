import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MarginRisk from './pages/MarginRisk';
import ScenarioPlanning from './pages/ScenarioPlanning';
import RevenueForecast from './pages/RevenueForecast';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/margin-risk" element={<MarginRisk />} />
        <Route path="/scenario-planning" element={<ScenarioPlanning />} />
        <Route path="/revenue-forecast" element={<RevenueForecast />} />
      </Routes>
    </div>
  );
}

export default App;