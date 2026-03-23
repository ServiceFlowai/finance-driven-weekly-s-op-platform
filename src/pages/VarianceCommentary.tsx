import React from 'react';

function VarianceCommentary() {
  const data = [
    { category: 'Sales', actual: 100, plan: 90, forecast: 95, rootCause: 'Increased demand' },
    { category: 'Pricing', actual: 50, plan: 55, forecast: 52, rootCause: 'Discounts applied' },
    { category: 'Supply', actual: 70, plan: 65, forecast: 68, rootCause: 'Supplier delay' },
    { category: 'Procurement', actual: 30, plan: 28, forecast: 29, rootCause: 'Price hike' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Variance Commentary</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Category</th>
            <th className="py-2">Actual</th>
            <th className="py-2">Plan</th>
            <th className="py-2">Forecast</th>
            <th className="py-2">Root Cause</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{item.category}</td>
              <td className="py-2">{item.actual}</td>
              <td className="py-2">{item.plan}</td>
              <td className="py-2">{item.forecast}</td>
              <td className="py-2">{item.rootCause}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VarianceCommentary;