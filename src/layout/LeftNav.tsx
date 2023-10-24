import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useLocationName from '../hooks/useLocationName';
import perceivableLinks from '../routes/perceivableLinks';
import { Path } from '../enums';

interface LeftNavProps {}

const LeftNav: FC<LeftNavProps> = () => {
  const pathName = useLocationName();

  return (
    <>
      {pathName.includes(Path.Perceivable) &&
        perceivableLinks.map((perceivableLink) => (
          <NavLink
            key={perceivableLink.path}
            to={`${Path.Perceivable}/${perceivableLink.path}`}
          >
            {perceivableLink.title}
          </NavLink>
        ))}
      {pathName.includes(Path.Operable) && <div>hello</div>}
    </>
  );
};
export default LeftNav;
