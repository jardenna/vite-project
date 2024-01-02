import { FC } from 'react';
import { useCurrentVan } from './HostVanDetail';

interface HostVanPhotoProps {}
const HostVanPhoto: FC<HostVanPhotoProps> = () => {
  const { currentVan } = useCurrentVan();

  return (
    <div>
      {currentVan ? (
        <img src={currentVan.imageUrl} alt={currentVan.name} />
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};
export default HostVanPhoto;
