import { ReactNode } from 'react';
import Operable from '../pages/Operable';
import Perceivable from '../pages/Perceivable';
import Robust from '../pages/Robust';
import Understandable from '../pages/Understandable';
import { Title } from '../enums';
import Home from '../pages/Home';

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
    path: Title.Perceivable.toLowerCase(),
    element: <Perceivable />,
    linkName: Title.Perceivable,
  },
  {
    path: Title.Operable.toLowerCase(),
    element: <Operable />,
    linkName: Title.Operable,
  },
  {
    path: Title.Understandable.toLowerCase(),
    element: <Understandable />,
    linkName: Title.Understandable,
  },
  {
    path: Title.Robust.toLowerCase(),
    element: <Robust />,
    linkName: Title.Robust,
  },
];

export default routes;
