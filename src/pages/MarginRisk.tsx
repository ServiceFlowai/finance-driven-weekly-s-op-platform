import React from 'react';

function MarginRisk() {
  const marginRiskData = [
    { id: 1, scenario: 'High Demand, Low Supply', risk: 'High Margin Erosion' },
    { id: 2, scenario: 'Stable Demand, Increasing Costs', risk: 'Moderate Margin Erosion' },
    { id: 3, scenario: 'Low Demand, High Supply', risk: 'Low Margin Erosion' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Margin at Risk Detection</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Scenario</th>
            <th className="py-2 px-4 border-b">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {marginRiskData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.scenario}</td>
              <td className="py-2 px-4 border-b">{item.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarginRisk;