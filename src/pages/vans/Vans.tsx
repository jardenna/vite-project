import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { VanType } from './data';
import { useGetVans } from '../../layout/Layout';

const Vans: FC = () => {
  const { vans } = useGetVans();
  const [searchParams, setSearchParams] = useSearchParams();
  const vansFromParams = searchParams.get('type');
  const filteredVans = vansFromParams
    ? vans?.filter((van) => van.type.toLowerCase() === vansFromParams)
    : vans;

  // Function so that the prev params doesn't get overwritten
  const handleSearchParams = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="filter">
        <button
          className={
            vansFromParams === VanType.Simple.toLowerCase() ? 'selected' : ''
          }
          type="button"
          onClick={() =>
            handleSearchParams('type', VanType.Simple.toLowerCase())
          }
        >
          {VanType.Simple}
        </button>
        <button
          className={
            vansFromParams === VanType.Rugged.toLowerCase() ? 'selected' : ''
          }
          type="button"
          onClick={() =>
            handleSearchParams('type', VanType.Rugged.toLowerCase())
          }
        >
          {VanType.Rugged}
        </button>
        <button
          className={
            vansFromParams === VanType.Luxury.toLowerCase() ? 'selected' : ''
          }
          type="button"
          onClick={() =>
            handleSearchParams('type', VanType.Luxury.toLowerCase())
          }
        >
          {VanType.Luxury}
        </button>
        <button
          disabled={!vansFromParams}
          type="button"
          onClick={() => handleSearchParams('type', null)}
        >
          Clear
        </button>
      </div>
      <div className="van-list">
        {filteredVans?.map((van) => (
          <div key={van.id} className="van-tile">
            <Link
              to={van.id}
              state={{
                filter: `?${searchParams.toString()}`,
                type: vansFromParams,
              }}
            >
              <div className="van-info">
                <img src={van.imageUrl} alt={van.name} />
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Vans;
