import FilteredSelectBoxes from './components/FilteredBoxes';
import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <article className="main-container">
      <div className="container">
        <FilteredSelectBoxes />
      </div>
    </article>
  );
}

export default App;
