import { useState } from 'react';
import Images from './components/Images';

// https://jsfiddle.net/plan/V2Q58

function App() {
  const STATUS = ['All procurements', 'Draft', 'Running', 'Completed'];
  const [isActiveFilter, setIsActiveFilter] = useState(''); // string which one is active

  function handleFilterClick(v: string) {
    setIsActiveFilter(v);
  }
  return (
    <article className="main-container">
      <div className="image-u" />
      <header className="main-header">
        <div className="container">
          <h1>A11Y</h1>

          <nav className="main-nav">
            <ul>
              <li>Home</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          {STATUS.map((status) => (
            <button
              type="button"
              className={`btn ${
                isActiveFilter === status
                  ? 'hover:bg-primary-500 bg-primary-400'
                  : ''
              }`}
              key={status}
              onClick={() => handleFilterClick(status)}
            >
              {status}
              {status === isActiveFilter && <span>hello</span>}
            </button>
          ))}
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
