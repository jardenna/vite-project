import { ReactNode } from 'react';

import Operable from '../pages/Operable';
import Perceivable from '../pages/Perceivable';
import Robust from '../pages/Robust';
import Understandable from '../pages/Understandable';

interface IRoutes {
  path: string;
  element: ReactNode;
  index?: boolean;
  linkName?: string;
}
const routes: IRoutes[] = [
  {
    path: 'perceivable',
    element: <Perceivable />,
    linkName: 'Perceivable',
  },
  {
    path: 'operable',
    element: <Operable />,
    linkName: 'Operable',
  },
  {
    path: 'understandable',
    element: <Understandable />,
    linkName: 'Understandable',
  },
  {
    path: 'robust',
    element: <Robust />,
    linkName: 'Robust',
  },
];

export default routes;
