import { ReactNode } from 'react';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Operable from '../pages/Operable';
import Perceivable from '../pages/Perceivable';
import Robust from '../pages/Robust';
import Understandable from '../pages/Understandable';

interface IRoutes {
  element: ReactNode;
  children: IRoutesElements[];
}
interface IRoutesElements {
  path?: string;
  element: ReactNode;
  index?: boolean;
  linkName?: string;
}
const routes: IRoutes[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
    ],
  },
];

export default routes;
