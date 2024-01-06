/* eslint-disable arrow-body-style */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetVans } from '../../../layout/Layout';

const Hostvans: FC = () => {
  const hostId = '123';
  const { vans } = useGetVans();
  const hostVans = vans?.filter((a) => a.hostId === hostId);

  return hostVans?.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
};
export default Hostvans;
