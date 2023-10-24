import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useLocationName from '../hooks/useLocationName';
import leftMenuRoutes from '../routes/perceivableLinks';
import { Path } from '../enums';

interface LeftNavProps {}

const LeftNav: FC<LeftNavProps> = () => {
  const pathName = useLocationName();

  return (
    <>
      {pathName.includes(Path.Perceivable) &&
        leftMenuRoutes.perceivableLinks.map((link) => (
          <NavLink key={link.path} to={`${Path.Perceivable}/${link.path}`}>
            {link.title}
          </NavLink>
        ))}
      {pathName.includes(Path.Operable) &&
        leftMenuRoutes.operableLinks.map((link) => (
          <NavLink key={link.path} to={`${Path.Operable}/${link.path}`}>
            {link.title}
          </NavLink>
        ))}
      {pathName.includes(Path.Understandable) &&
        leftMenuRoutes.understandableLinks.map((link) => (
          <NavLink key={link.path} to={`${Path.Operable}/${link.path}`}>
            {link.title}
          </NavLink>
        ))}
    </>
  );
};
export default LeftNav;
