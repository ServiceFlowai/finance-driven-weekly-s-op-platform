import React from 'react';

const ForecastComparison = () => {
  const comparisonData = [
    { week: 'Week 1', forecast: 4000, booked: 3800, backlog: 200, shipments: 3900 },
    { week: 'Week 2', forecast: 3000, booked: 3100, backlog: 100, shipments: 3000 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Forecast vs Actual Comparison</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Week</th>
            <th className="py-2">Forecast</th>
            <th className="py-2">Booked Orders</th>
            <th className="py-2">Backlog</th>
            <th className="py-2">Shipments</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{data.week}</td>
              <td className="py-2">{data.forecast}</td>
              <td className="py-2">{data.booked}</td>
              <td className="py-2">{data.backlog}</td>
              <td className="py-2">{data.shipments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastComparison;