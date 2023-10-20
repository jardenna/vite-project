import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Perceivable from '../pages/Perceivable';
import Operable from '../pages/Operable';
import Understandable from '../pages/Understandable';
import Robust from '../pages/Robust';

const router = createBrowserRouter([
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
      },
      {
        path: 'operable',
        element: <Operable />,
      },
      {
        path: 'understandable',
        element: <Understandable />,
      },
      {
        path: 'robust',
        element: <Robust />,
      },
    ],
  },
]);

export default router;
