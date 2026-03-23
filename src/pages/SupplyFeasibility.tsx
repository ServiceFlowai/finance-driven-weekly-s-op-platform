import React from 'react';

const SupplyFeasibility = () => {
  const feasibilityData = [
    { id: 1, demand: 'Product A', inventory: 100, openPOs: 50, supplierCommitments: 30, materialAvailability: 'Adequate' },
    { id: 2, demand: 'Product B', inventory: 20, openPOs: 10, supplierCommitments: 5, materialAvailability: 'Low' },
    { id: 3, demand: 'Product C', inventory: 200, openPOs: 100, supplierCommitments: 80, materialAvailability: 'High' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supply Feasibility Check</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Demand</th>
            <th className="py-2">Inventory</th>
            <th className="py-2">Open POs</th>
            <th className="py-2">Supplier Commitments</th>
            <th className="py-2">Material Availability</th>
          </tr>
        </thead>
        <tbody>
          {feasibilityData.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2">{item.demand}</td>
              <td className="py-2">{item.inventory}</td>
              <td className="py-2">{item.openPOs}</td>
              <td className="py-2">{item.supplierCommitments}</td>
              <td className="py-2">{item.materialAvailability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyFeasibility;