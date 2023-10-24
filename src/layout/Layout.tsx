import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LeftNav from './LeftNav';
import useLocationName from '../hooks/useLocationName';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => {
  const pathName = useLocationName();

  return (
    <article className="main-container">
      <Header />
      <main className="container">
        {pathName !== '/' && (
          <aside>
            <LeftNav />
          </aside>
        )}
        <div className="main-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </article>
  );
};
export default Layout;
