import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';
import Header from './layout/Header';
import Home from './pages/Home';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <article className="main-container">
      <Header />
      <div className="main-content-container container">
        <aside className="aside">
          <div className="container">
            <span className="vertical-line-container">
              <span className="vertical-line" />
              <span className="vertical-line" />
            </span>
            <section>
              <h1>
                Anyone can experience a disability when the design, the
                environment, the attitude or the social structure exclude them
                from participating.
              </h1>
            </section>
          </div>
        </aside>

        <main className="main-content">
          <Home />
        </main>
      </div>

      <footer className="main-footer">
        <div className="container">
          <nav className="footer-nav">Contact Great links Thanks</nav>
          <span className="copyright">Copyright 2023</span>
        </div>
      </footer>
    </article>
  );
}

export default App;
