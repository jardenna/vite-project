import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface HostLayoutProps {}

// <NavLink to="." end> to="." = /host. It means to stay in this directory,
// end = do not apply style for active link

const HostDetailsLayout: FC<HostLayoutProps> = () => (
  <div>
    <nav>
      <NavLink to="." end>
        Dashboard
      </NavLink>
      <NavLink to="vans">Details</NavLink>
      <NavLink to="photo">Photos</NavLink>
      <NavLink to="price">Pricing</NavLink>
    </nav>
    <Outlet />
  </div>
);
export default HostDetailsLayout;
