/* eslint-disable arrow-body-style */
import { FC } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from './Header';
import vans, { IVans } from '../pages/vans/data';
import './_style.scss';

type ContextType = { vans: IVans[] | null };

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet context={{ vans } satisfies ContextType} />
      <footer>&#169; 2022 #VANLIFE</footer>
    </div>
  );
};

export function useGetVans() {
  return useOutletContext<ContextType>();
}

export default Layout;
