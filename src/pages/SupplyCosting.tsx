import React from 'react';

const SupplyCosting = () => {
  const costingData = [
    { id: 1, item: 'Raw Material X', procurementCostChange: '+5%', expediteCost: '$200', supplierPriceMovement: '+3%', costToServe: '$50' },
    { id: 2, item: 'Component Y', procurementCostChange: '-2%', expediteCost: '$150', supplierPriceMovement: '0%', costToServe: '$30' },
    { id: 3, item: 'Finished Product Z', procurementCostChange: '+1%', expediteCost: '$300', supplierPriceMovement: '+2%', costToServe: '$70' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supply Costing Integration</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Procurement Cost Change</th>
            <th className="py-2">Expedite Cost</th>
            <th className="py-2">Supplier Price Movement</th>
            <th className="py-2">Cost to Serve</th>
          </tr>
        </thead>
        <tbody>
          {costingData.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2">{item.item}</td>
              <td className="py-2">{item.procurementCostChange}</td>
              <td className="py-2">{item.expediteCost}</td>
              <td className="py-2">{item.supplierPriceMovement}</td>
              <td className="py-2">{item.costToServe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyCosting;