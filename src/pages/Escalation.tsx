import React from 'react';

const Escalation = () => {
  const data = [
    { id: 1, issue: 'Forecast Miss', details: 'Significant deviation from expected sales in Q1.', status: 'Pending' },
    { id: 2, issue: 'Sudden Demand Change', details: 'Unexpected spike in demand for Product X.', status: 'Escalated' },
    { id: 3, issue: 'Unsupported Forecast Uplift', details: 'Increase in forecast without supporting data.', status: 'Reviewed' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exception-based Escalation</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Issue</th>
            <th className="py-2">Details</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2">{item.issue}</td>
              <td className="py-2">{item.details}</td>
              <td className="py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Escalation;