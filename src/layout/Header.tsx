import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          <span className="logo">Accessibility</span>
          <span className="header-tag">a11y</span>
          <search>
            <input type="text" name="" id="" />
            <button type="submit" onClick={() => console.log(34)}>
              search
            </button>
          </search>
        </NavLink>
      </div>
      <Nav />
    </div>
  </header>
);
export default Header;
