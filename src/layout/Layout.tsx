import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './_style.scss';

interface LayoutProps {}
const Layout: FC<LayoutProps> = () => (
  <div>
    <Header />
    <Outlet />
    <footer>&#169; 2022 #VANLIFE</footer>
  </div>
);
export default Layout;
