import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ForecastAccuracy from './pages/ForecastAccuracy';
import ForecastSubmission from './pages/ForecastSubmission';
import ForecastComparison from './pages/ForecastComparison';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forecast-accuracy" element={<ForecastAccuracy />} />
        <Route path="/forecast-submission" element={<ForecastSubmission />} />
        <Route path="/forecast-comparison" element={<ForecastComparison />} />
      </Routes>
    </div>
  );
}

export default App;