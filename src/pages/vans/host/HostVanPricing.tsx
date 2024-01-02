/* eslint-disable arrow-body-style */
import { FC } from 'react';

import { useCurrentVan } from './HostVanDetail';

interface HostVanPricingProps {}
const HostVanPricing: FC<HostVanPricingProps> = () => {
  const { currentVan } = useCurrentVan();

  return (
    <div>
      {currentVan ? (
        <p>Price: {currentVan.price} / Pr. day</p>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};
export default HostVanPricing;
