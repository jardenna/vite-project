import { useState } from 'react';
import Button from './components/Button';
import Figure from './components/Figure';

import Images from './components/Images';

import useKeyboard from './hooks/useKeyboard';

function App() {
  const onClick = () => {
    console.log(145);
  };

  const onKeyDown = useKeyboard(onClick, 'Enter');

  const [hidden, setHidden] = useState(true);
  const handleShow = () => {
    setHidden(!hidden);
  };

  return (
    <article className="main-container">
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
          <aside>nav</aside>
          <Images />
        </div>
      </main>

      {/* <article>
        <h2>Headings</h2>
        <div>
          <h1>Heading 1</h1>
          <h2>heading 2</h2>
          <h3>heading 3</h3>
          Aria
          <div role="heading" aria-level={2}>
            heading 2
          </div>
        </div>
      </article>
      <span role="img" aria-label="mouse">
        &#x1f5b0;
      </span>
      <section>
        <h2>section 2</h2>
        <Button text="Klik her" type="submit" />
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="please click here"
        >
          Click
        </div>
      </section>
      <section>
        <h2>section 3</h2>
        this is section 3
      </section> */}

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
