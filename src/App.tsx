import { useState } from 'react';

import Calendar from './components/calendar/Calendar';

// import Images from './components/Images';

// https://github.com/wojtekmaj/react-datetime-picker

// https://stackblitz.com/edit/react-datetimepicker-yk3poz?file=src%2FApp.js,src%2Findex.js

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
          <Calendar name="ca1" />
          <Calendar name="ca2" />
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
