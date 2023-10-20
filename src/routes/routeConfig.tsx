import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import routes from './routes';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    element: <Layout />,
    children: routes,
  },
]);

export default router;
