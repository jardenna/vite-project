import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link className="site-logo" to="/">
      #VanLife
    </Link>
    <nav>
      <NavLink to="host">Host</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="vans">Vans</NavLink>
    </nav>
  </header>
);
export default Header;
