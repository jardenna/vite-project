import Headings from '../components/Headings';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Header from '../layout/Header';

function Home() {
  useDocumentTitle(Title.Home);

  return (
    <article className="main-container">
      <Header />

      <div className="container">
        <main className="main-content">
          <aside className="aside">
            <span className="vertical-line-container">
              <span className="vertical-line" />
              <span className="vertical-line" />
            </span>
            <Headings />
            <div>
              <h1>Why should we care</h1>
              <div>
                Seek out exclusions, and use them as opportunities to create new
                and better experiences.
                <p>
                  <a href="https://www.microsoft.com/design">Microsoft</a>
                </p>
              </div>
            </div>
          </aside>

          <section>
            Bear in mind that a lot of accessibility best practices benefit
            everyone, not just users with disabilities.
            <p>
              {' '}
              Lean semantic markup is fast to load and performant. This benefits
              everyone, especially those on mobile devices and/or slow
              connections.
            </p>
          </section>
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
export default Home;
