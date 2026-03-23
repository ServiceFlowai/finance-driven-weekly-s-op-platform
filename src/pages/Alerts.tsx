import React, { useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'Forecast drop detected in Region A', type: 'warning' },
    { id: 2, message: 'Supply shortage in Product X', type: 'error' },
    { id: 3, message: 'Cost increase in Supplier Y', type: 'info' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trigger-Based Alerts</h1>
      <div className="bg-white p-4 rounded shadow">
        <ul>
          {alerts.map(alert => (
            <li key={alert.id} className={`p-2 ${alert.type === 'error' ? 'text-red-500' : alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'}`}>
              {alert.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Alerts;