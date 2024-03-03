import { RouterProvider } from 'react-router-dom';
import routeConfig from './routes/routeConfig';

function App() {
  return (
    <RouterProvider
      router={routeConfig}
      fallbackElement={<p>Initial Load...</p>}
    />
  );
}

export default App;
