import Images from './components/Images';

function App() {
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
          <Images />
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
