import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => (
  <div>
    <h1>Dashboard</h1>
    <Outlet />
  </div>
);
export default DashboardLayout;
