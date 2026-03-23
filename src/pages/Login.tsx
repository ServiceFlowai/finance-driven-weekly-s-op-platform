import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Login: React.FC = () => {
  const { setUser } = useUser();
  const [role, setRole] = useState('finance');

  const handleLogin = () => {
    setUser({ role: role as 'finance' | 'sales' | 'supply_chain' | 'procurement' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)} className="mb-4">
        <option value="finance">Finance</option>
        <option value="sales">Sales</option>
        <option value="supply_chain">Supply Chain</option>
        <option value="procurement">Procurement</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Login;