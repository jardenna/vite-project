import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: FC = () => (
  <nav className="main-nav">
    <ul className="nav-container">
      <li>
        <NavLink className="nav-item" to="/perceivable">
          Perceivable
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/operable">
          Operable
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/understandable">
          Understandable
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/robust">
          Robust
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
