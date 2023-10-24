import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LeftNav from './LeftNav';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <article className="main-container">
    <Header />
    <main className="container">
      <aside className="left-menu">
        <LeftNav />
      </aside>
      <Outlet />
    </main>
    <Footer />
  </article>
);
export default Layout;
