import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes/routes';

const Nav: FC = () => (
  <nav className="main-nav">
    <ul className="nav-container">
      {routes.map(
        (route) =>
          route.linkName && (
            <li className="nav-item" key={route.path}>
              <NavLink to={route.path}>{route.linkName}</NavLink>
            </li>
          ),
      )}
    </ul>
  </nav>
);
export default Nav;
