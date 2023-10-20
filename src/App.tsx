import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routeConfig';
import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <React.StrictMode>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </React.StrictMode>
    // <article className="main-container">
    //   <div className="container">
    //     <Home />
    //   </div>
    // </article>
  );
}

export default App;
