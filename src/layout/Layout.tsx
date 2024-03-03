import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <article className="main-container">
      <Header />
      <div className="main-content-container container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="main-footer">
        <article className="container">
          <nav className="footer-nav">Contact Great links Thanks</nav>
        </article>
        <div className="copyright-container container">
          <span className="copyright">Copyright 2023</span>
        </div>
      </footer>
    </article>
  );
}

export default Layout;
