import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          <span className="logo">Accessibility</span>
          <span className="header-tag">A11y</span>
        </NavLink>
      </div>
      <Nav />
    </div>
  </header>
);
export default Header;
