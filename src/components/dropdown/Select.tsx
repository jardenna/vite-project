import { FC } from 'react';
import useDropdown from './useDropdown';

interface Option {
  [key: string]: string;
}
export interface DropdownProps {
  val: string;
  onChange: (value: string) => void;
  options: Option[];
  keys: string;
}

const Select: FC<DropdownProps> = ({ val, onChange, options, keys }) => {
  const { isDropdownOpen, setIsDropdownOpen, activeIndex, handleSelect } =
    useDropdown(options, val, onChange, keys);
  const selectedOption = options.find((option) => option[keys] === val);

  return (
    <div className="select-container">
      <button
        type="button"
        className="select-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        {selectedOption?.[keys]}
      </button>
      <ul className="select-dropdown" role="listbox" tabIndex={-1}>
        {options.map((option, index: number) => (
          <li
            key={option[keys]}
            aria-selected={index === activeIndex}
            role="option"
          >
            <label>
              <input
                type="radio"
                value={option[keys]}
                checked={options[0][keys] === option[keys]}
                onChange={() => handleSelect(option[keys])}
              />
              {option[keys]}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;
