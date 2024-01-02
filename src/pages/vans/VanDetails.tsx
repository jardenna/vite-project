import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IVans } from './data';

interface VanDetailsProps {
  vans: IVans[];
}

const VanDetails: FC<VanDetailsProps> = ({ vans }) => {
  const { id } = useParams();
  const selectedVan = vans.find((van) => van.id === id);
  return (
    <div className="van-detail-container">
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
