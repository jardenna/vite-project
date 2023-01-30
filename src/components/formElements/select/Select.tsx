import { FC, useEffect, useState } from 'react';
import useAccessibleDropdown from '../../../hooks/useAccessibleDropdown';

interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  options: Option[];
  selectedOption: string;
}
const Select: FC<SelectProps> = ({ options, selectedOption }) => {
  const [value, setValue] = useState(selectedOption);
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    listRef,
  } = useAccessibleDropdown(options, value);
  const chosen = options.find((o) => o.value === value);

  function select(val: string) {
    setValue(val);
    setIsDropdownOpen(false);
  }

  return (
    <section className="select-container">
      <button
        type="button"
        className="select-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        {chosen?.label}
      </button>
      <ul
        className="select-dropdown"
        role="listbox"
        ref={listRef}
        tabIndex={-1}
      >
        {options.map(({ label, value: optionValue }, index) => (
          <li
            key={label}
            aria-selected={index === activeIndex}
            role="option"
            className={value === optionValue ? 'chosen' : ''}
            onMouseOver={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <label>
              <input
                type="radio"
                value={optionValue}
                checked={value === optionValue}
                onChange={(e) => select(e.target.value)}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Select;
