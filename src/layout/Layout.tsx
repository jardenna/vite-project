import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <article className="main-container">
    <Header />

    <main className="container">
      <Outlet />
    </main>

    <Footer />
  </article>
);
export default Layout;
