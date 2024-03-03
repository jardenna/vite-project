import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Play from '../pages/Play';

import Chess from '../pages/Chess';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import { Path } from '../types/enums';
import Perceivable from '../pages/Perceivable';
import Operable from '../pages/Operable';
import Understandable from '../pages/Understandable';
import Robust from '../pages/Robust';

const routeConfig = createBrowserRouter([
  {
    path: Path.Root,
    errorElement: <ErrorPage />,
  },
  {
    id: 'root',
    path: Path.Root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Path.Perceivable,
        element: <Perceivable />,
      },
      {
        path: Path.Operable,
        element: <Operable />,
      },
      {
        path: Path.Understandable,
        element: <Understandable />,
      },
      {
        path: Path.Robust,
        element: <Robust />,
      },

      {
        path: 'Chess',
        element: <Chess />,

        children: [
          {
            path: 'play',
            element: <Play />,
          },
        ],
      },
    ],
  },
]);

export default routeConfig;
