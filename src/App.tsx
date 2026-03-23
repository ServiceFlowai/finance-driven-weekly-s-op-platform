import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VarianceCommentary from './pages/VarianceCommentary';
import ProfitabilityAnalysis from './pages/ProfitabilityAnalysis';
import DecisionPackage from './pages/DecisionPackage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/variance-commentary" element={<VarianceCommentary />} />
      <Route path="/profitability-analysis" element={<ProfitabilityAnalysis />} />
      <Route path="/decision-package" element={<DecisionPackage />} />
    </Routes>
  );
}

export default App;