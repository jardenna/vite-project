import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface DashboardProps {}
const DashboardLayout: FC<DashboardProps> = () => (
  <div>
    <h1>Dashboard</h1>
    <Outlet />
  </div>
);
export default DashboardLayout;
