import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// <NavLink to="." end> to="." = /host. It means to stay in this directory,
// end = do not apply style for active link

const HostLayout: FC = () => (
  <div>
    <nav>
      <NavLink to="." end>
        Dashboard
      </NavLink>
      <NavLink to="vans">Vans</NavLink>
      <NavLink to="income">Income</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </nav>
    <Outlet />
  </div>
);

export default HostLayout;
