import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const dropdowns = [
  {
    name: 'dropdown1',
    options: ['apple', 'banana', 'pineapple', 'pear', 'mango'],
  },
  {
    name: 'dropdown2',
    options: ['apple', 'banana', 'pineapple', 'pear', 'mango'],
  },
  {
    name: 'dropdown3',
    options: ['apple', 'banana', 'pineapple', 'pear', 'mango'],
  },
];

const FilterSelect = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      {dropdowns.map((dropdown, index) => {
        const dropdownItem =
          selected &&
          selected.length &&
          selected.filter((selectedItem) => !!selectedItem[dropdown.name]);
        const dropdownItemName =
          (dropdownItem && dropdownItem[0] && dropdownItem[0][dropdown.name]) ||
          '';
        const key = `dropdown-${dropdown.name}-${index}`;

        return (
          <select
            key={key}
            name={dropdown.name}
            value={dropdownItemName}
            onChange={(event) => {
              const newSelected = selected.length
                ? selected.map((selectedItem) => {
                    if (selectedItem[dropdown.name]) {
                      const newSelectedItem = {
                        [dropdown.name]: event.target.value,
                      };

                      return newSelectedItem;
                    }

                    return selectedItem;
                  })
                : [{ [dropdown.name]: event.target.value }];

              if (
                !newSelected.filter(
                  (filteredItem) => !!filteredItem[dropdown.name]
                ).length
              ) {
                newSelected.push({ [dropdown.name]: event.target.value });
              }

              setSelected(newSelected);
            }}
          >
            <option>Select</option>
            {dropdown.options
              .filter((option) => {
                if (selected.length) {
                  return !selected.filter(
                    (selectedItem) =>
                      selectedItem[Object.keys(selectedItem)[0]] === option &&
                      Object.keys(selectedItem)[0] !== dropdown.name
                  ).length;
                }

                return true;
              })
              .map((option, i) => {
                const ky = `dropdown-${dropdown.name}-${option}-${i}`;

                return (
                  <option key={ky} value={option}>
                    {option}
                  </option>
                );
              })}
          </select>
        );
      })}
    </div>
  );
};

export default FilterSelect;
// https://codesandbox.io/s/multiple-dropdowns-shared-state-react-e2mtb?file=/src/App.js
