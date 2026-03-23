import React from 'react';

function ProfitabilityAnalysis() {
  const data = [
    { segment: 'North America', salesOrg: 'Org A', productFamily: 'Electronics', profitability: 20 },
    { segment: 'Europe', salesOrg: 'Org B', productFamily: 'Furniture', profitability: 15 },
    { segment: 'Asia', salesOrg: 'Org C', productFamily: 'Apparel', profitability: 25 }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profitability Analysis</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Segment</th>
            <th className="py-2">Sales Organization</th>
            <th className="py-2">Product Family</th>
            <th className="py-2">Profitability (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{item.segment}</td>
              <td className="py-2">{item.salesOrg}</td>
              <td className="py-2">{item.productFamily}</td>
              <td className="py-2">{item.profitability}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfitabilityAnalysis;