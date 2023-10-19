import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';
import Home from './pages/Home';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <article className="main-container">
      <div className="container">
        <Home />
      </div>
    </article>
  );
}

export default App;
