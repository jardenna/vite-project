import { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import vans from './data';

const VanDetails: FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const filter = location.state?.filter || '';
  const type = location.state?.type || 'all';
  const selectedVan = vans?.find((van) => van.id === id);

  return (
    <div className="van-detail-container">
      <Link to={`..${filter}`} className="back-button" relative="path">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {selectedVan ? (
        <div className="van-detail">
          <img src={selectedVan.imageUrl} alt={selectedVan.name} />
          <i className={`van-type ${selectedVan.type} selected`}>
            {selectedVan.type}
          </i>
          <h2>{selectedVan.name}</h2>
          <p className="van-price">
            <span>${selectedVan.price}</span>/day
          </p>
          <p>{selectedVan.description}</p>
          <button type="button" className="link-button">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default VanDetails;
