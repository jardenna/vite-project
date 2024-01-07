import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './_style.scss';

const Layout: FC = () => (
  <div>
    <Header />
    <Outlet />
    <footer>&#169; 2022 #VANLIFE</footer>
  </div>
);

export default Layout;
