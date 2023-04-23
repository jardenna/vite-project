import Nav from './Nav';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <section className="logo-container">
        <div className="logo">Accessibility </div>
        <span className="header-tag">A11y</span>
      </section>

      <Nav />
    </div>
  </header>
);
export default Header;
