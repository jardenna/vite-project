import Nav from './Nav';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <article className="logo-container container">
        <div className="logo">Accessibility </div>
        <span className="header-tag">A11y</span>
      </article>

      <Nav />
    </div>
  </header>
);
export default Header;
