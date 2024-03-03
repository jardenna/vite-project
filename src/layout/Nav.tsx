import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Path } from '../types/enums';
import { Title } from '../types/lang';

const Nav: FC = () => (
  <nav className="main-nav">
    <span>WCAG Principles</span>
    <span className="main-nav-seperator" />
    <ul className="nav-container">
      <li className="nav-item">
        <NavLink to={Path.Perceivable}>{Title.Perceivable}</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={Path.Operable}>{Title.Operable}</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={Path.Understandable}>{Title.Understandable}</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={Path.Robust}>{Title.Robust}</NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
