import FilterComponent from './components/FilterComponent';
import FilterSelect from './components/FilterSelect';
import FilteredSelectBoxes from './components/FilteredBoxes';
import MyComponent from './components/Filterselect2';
import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <article className="main-container">
      <div className="container">
        <FilterComponent />
      </div>
    </article>
  );
}

export default App;
