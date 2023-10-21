import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

export default router;
