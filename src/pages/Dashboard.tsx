import React from 'react';
import { useUser } from '../context/UserContext';
import FinanceDashboard from '../components/FinanceDashboard';
import SalesDashboard from '../components/SalesDashboard';
import SupplyChainDashboard from '../components/SupplyChainDashboard';
import ProcurementDashboard from '../components/ProcurementDashboard';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  switch (user.role) {
    case 'finance':
      return <FinanceDashboard />;
    case 'sales':
      return <SalesDashboard />;
    case 'supply_chain':
      return <SupplyChainDashboard />;
    case 'procurement':
      return <ProcurementDashboard />;
    default:
      return <div>Invalid role</div>;
  }
};

export default Dashboard;