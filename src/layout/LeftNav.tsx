import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useLocationName from '../hooks/useLocationName';
import { Path } from '../enums';

interface LeftNavProps {}

const LeftNav: FC<LeftNavProps> = () => {
  const pathName = useLocationName();
  return (
    <div>
      {pathName.includes(Path.Perceivable) && (
        <NavLink to={`${Path.Perceivable}/${Path.Alt}`}>
          Alternative text
        </NavLink>
      )}
    </div>
  );
};
export default LeftNav;
