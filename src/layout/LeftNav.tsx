import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useLocationName from '../hooks/useLocationName';
import leftMenuRoutes from '../routes/perceivableLinks';
import { Path } from '../enums';

interface LeftNavProps {}

const LeftNav: FC<LeftNavProps> = () => {
  const pathName = useLocationName();

  return (
    <ul className="left-nav">
      {pathName.includes(Path.Perceivable) &&
        leftMenuRoutes.perceivableLinks.map((link) => (
          <li className="nav-item">
            <NavLink key={link.path} to={`${Path.Perceivable}/${link.path}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      {pathName.includes(Path.Operable) &&
        leftMenuRoutes.operableLinks.map((link) => (
          <li className="nav-item">
            <NavLink key={link.path} to={`${Path.Operable}/${link.path}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      <li className="nav-item">
        {pathName.includes(Path.Understandable) &&
          leftMenuRoutes.understandableLinks.map((link) => (
            <NavLink key={link.path} to={`${Path.Operable}/${link.path}`}>
              {link.title}
            </NavLink>
          ))}
      </li>
    </ul>
  );
};
export default LeftNav;
