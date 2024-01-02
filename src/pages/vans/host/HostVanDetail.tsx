import { FC } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { IVans } from '../data';

interface HostVanDetailProps {
  vans: IVans[];
}
type ContextType = { currentVan: IVans | null };

const HostVanDetail: FC<HostVanDetailProps> = ({ vans }) => {
  const { id } = useParams();

  const currentVan = vans.find((van) => van.id === id);

  return currentVan ? (
    <section>
      <Link to=".." className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink to="." end>
          Details
        </NavLink>

        <NavLink to="photo">Photos</NavLink>
        <NavLink to="pricing">Pricing</NavLink>
      </nav>

      <Outlet context={{ currentVan } satisfies ContextType} />
    </section>
  ) : (
    <h2>Loading...</h2>
  );
};

export function useCurrentVan() {
  return useOutletContext<ContextType>();
}

export default HostVanDetail;
