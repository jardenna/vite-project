import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DateTimePicker from 'react-datetime-picker';

// import Images from './components/Images';

// https://github.com/wojtekmaj/react-datetime-picker

// https://stackblitz.com/edit/react-datetimepicker-yk3poz?file=src%2FApp.js,src%2Findex.js

function App() {
  // const STATUS = ['All procurements', 'Draft', 'Running', 'Completed'];
  // const [isActiveFilter, setIsActiveFilter] = useState(''); // string which one is active

  // function handleFilterClick(v: string) {
  //   setIsActiveFilter(v);
  // }

  const [value, onChange] = useState(new Date());
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
          {/* <DatePicker
            onChange={onChange}
            value={value}
            format="dd-MM-yyyy"
            monthPlaceholder=""
          /> */}
          <DateTimePicker
            onChange={onChange}
            value={value}
            format="dd-MM-yyyy"
          />
          {/* {STATUS.map((status) => (
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
          ))} */}
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
