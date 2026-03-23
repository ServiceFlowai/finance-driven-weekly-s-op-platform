import React from 'react';

const ForecastAccuracy = () => {
  const forecastData = [
    { organization: 'Org A', region: 'North', customer: 'Customer 1', productFamily: 'Family X', accuracy: 95, bias: 2, volatility: 5 },
    { organization: 'Org B', region: 'South', customer: 'Customer 2', productFamily: 'Family Y', accuracy: 90, bias: -1, volatility: 7 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Forecast Accuracy</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Organization</th>
            <th className="py-2">Region</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Product Family</th>
            <th className="py-2">Accuracy (%)</th>
            <th className="py-2">Bias</th>
            <th className="py-2">Volatility</th>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{data.organization}</td>
              <td className="py-2">{data.region}</td>
              <td className="py-2">{data.customer}</td>
              <td className="py-2">{data.productFamily}</td>
              <td className="py-2">{data.accuracy}</td>
              <td className="py-2">{data.bias}</td>
              <td className="py-2">{data.volatility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastAccuracy;