import { FC } from 'react';

const Nav: FC = () => (
  <nav className="main-nav">
    <span>WCAG Principles</span>
    <span className="main-nav-seperator" />
    <ul className="nav-container">
      <li className="nav-item">Perceivable</li>
      <li className="nav-item">Operable</li>
      <li className="nav-item">Understandable</li>
      <li className="nav-item">Robust</li>
    </ul>
  </nav>
);
export default Nav;
