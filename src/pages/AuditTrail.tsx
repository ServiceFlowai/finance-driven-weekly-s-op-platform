import React from 'react';

const AuditTrail = () => {
  const auditRecords = [
    { id: 1, change: 'Forecast updated for Product A', user: 'John Doe', date: '2023-10-01' },
    { id: 2, change: 'Approved cost increase for Supplier B', user: 'Jane Smith', date: '2023-10-02' },
    { id: 3, change: 'Demand plan adjusted for Region C', user: 'Alice Johnson', date: '2023-10-03' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>
      <div className="bg-white p-4 rounded shadow">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Change</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {auditRecords.map(record => (
              <tr key={record.id}>
                <td className="border px-4 py-2">{record.change}</td>
                <td className="border px-4 py-2">{record.user}</td>
                <td className="border px-4 py-2">{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditTrail;