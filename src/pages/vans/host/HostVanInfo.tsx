import { FC } from 'react';

import { useCurrentVan } from './HostVanDetail';

interface HostVanInfoProps {}
const HostVanInfo: FC<HostVanInfoProps> = () => {
  const { currentVan } = useCurrentVan();

  return (
    <div>
      {currentVan ? (
        <div>
          <p>Name:{currentVan.name}</p>
          <p>Category: {currentVan.type}</p>
          <p>{currentVan.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default HostVanInfo;
