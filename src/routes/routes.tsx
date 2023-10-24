import { ReactNode } from 'react';
import Operable from '../pages/Operable';
import Perceivable from '../pages/percievable/Perceivable';
import Robust from '../pages/Robust';
import Understandable from '../pages/Understandable';
import { Path, Title } from '../enums';
import Home from '../pages/Home';
import AlternativeText from '../pages/percievable/AlternativeText';

interface IRoutes {
  path: string;
  element: ReactNode;
  index?: boolean;
  linkName?: string;
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: Path.Perceivable,
    element: <Perceivable />,
    linkName: Title.Perceivable,
  },
  {
    path: `${Path.Perceivable}/${Path.Alt}`,
    element: <AlternativeText />,
    linkName: Title.AlternativeText,
  },
  {
    path: Path.Operable,
    element: <Operable />,
    linkName: Title.Operable,
  },
  {
    path: Path.Understandable,
    element: <Understandable />,
    linkName: Title.Understandable,
  },
  {
    path: Path.Robust,
    element: <Robust />,
    linkName: Title.Robust,
  },
];

export default routes;
