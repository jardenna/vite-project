import { useState } from 'react';
import CustomSelect from './components/formElements/select/CustomSelect';
import Select from './components/formElements/select/Select';

const options = [
  {
    value: 'kai',
    label: 'Kai',
  },
  {
    value: 'nya',
    label: 'Nya',
  },
  {
    value: 'lloyd',
    label: 'Lloyd',
  },
  {
    value: 'zane',
    label: 'Zane',
  },
  {
    value: 'cole',
    label: 'Cole',
  },
  {
    value: 'jay',
    label: 'Jay',
  },
  {
    value: 'garmadon',
    label: 'Garmadon',
  },
];
function App() {
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
          <CustomSelect />
          {/* <Select options={options} selectedOption="lloyd" /> */}
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">Footer</div>
      </footer>
    </article>
  );
}

export default App;
