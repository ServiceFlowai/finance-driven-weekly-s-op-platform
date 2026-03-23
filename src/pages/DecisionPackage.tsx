import React from 'react';

function DecisionPackage() {
  const recommendations = [
    { gap: 'Revenue Gap', risk: 'High', costVariance: 'Medium', recommendation: 'Increase marketing spend' },
    { gap: 'Margin Risk', risk: 'Medium', costVariance: 'High', recommendation: 'Negotiate supplier contracts' },
    { gap: 'Cost Variance', risk: 'Low', costVariance: 'Low', recommendation: 'Maintain current strategy' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance-led Decision Package</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Gap</th>
            <th className="py-2">Risk</th>
            <th className="py-2">Cost Variance</th>
            <th className="py-2">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{item.gap}</td>
              <td className="py-2">{item.risk}</td>
              <td className="py-2">{item.costVariance}</td>
              <td className="py-2">{item.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DecisionPackage;