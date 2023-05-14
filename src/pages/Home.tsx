import { useState } from 'react';
import Toast from '../components/toast/Toast';
import { Title, TypesEnum } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Header from '../layout/Header';

function Home() {
  useDocumentTitle(Title.Home);
  const [toastList, setToastList] = useState<any>([]);
  const list = [
    {
      id: 1,
      title: 'Warning',
      description: 'This is an error toast component',
      type: TypesEnum.Danger,
    },
    {
      id: 2,
      title: 'Success',
      description: 'This is a success toast component',
      type: TypesEnum.Success,
    },
    {
      id: 3,
      title: 'Danger',
      description: 'This is an error toast component',
      type: TypesEnum.Danger,
    },
  ];

  return (
    <article className="main-container">
      <Header />
      <button type="button" onClick={() => setToastList(list)}>
        show Toast
      </button>
      <Toast toastList={toastList} />
      <div className="container">
        <main className="main-content">
          <aside className="aside">
            <span className="vertical-line-container">
              <span className="vertical-line" />
              <span className="vertical-line" />
            </span>
            <div>
              <h1>Images</h1>
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
            everyone, not just users with disabilities. For example, lean
            semantic markup is not only good for screen readers, but it is also
            fast to load and performant. This benefits everyone, especially
            those on mobile devices and/or slow connections.
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
