import { FC } from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import vans, { IVans } from '../pages/vans/data';

interface HostLayoutProps {}
type ContextType = { vans: IVans[] | null };
// <NavLink to="." end> to="." = /host. It means to stay in this directory,
// end = do not apply style for active link

const HostLayout: FC<HostLayoutProps> = () => (
  <div>
    <nav>
      <NavLink to="." end>
        Dashboard
      </NavLink>
      <NavLink to="vans">Vans</NavLink>
      <NavLink to="income">Income</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </nav>
    <Outlet context={{ vans } satisfies ContextType} />
  </div>
);

export function useGetVans() {
  return useOutletContext<ContextType>();
}
export default HostLayout;
