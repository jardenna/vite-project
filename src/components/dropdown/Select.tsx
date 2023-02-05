import { FC } from 'react';
import useDropdown from './useDropdown';

interface DropdownProps {
  value: string;
  onChange: any;
  options: any;
}
interface OptionProps {
  value: string;
}

const Select: FC<DropdownProps> = ({ value, onChange, options }) => {
  const { isDropdownOpen, setIsDropdownOpen, activeIndex, handleSelect } =
    useDropdown(options, value, onChange);
  const chosen = options.find((o: any) => o.value === value);

  return (
    <div className="select-container">
      <button
        type="button"
        className="select-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        {chosen?.label}
      </button>
      <ul className="select-dropdown" role="listbox" tabIndex={-1}>
        {options.map(({ value: optionValue }: OptionProps, index: number) => (
          <li
            key={optionValue}
            aria-selected={index === activeIndex}
            role="option"
          >
            <label>
              <input
                type="radio"
                value={optionValue}
                checked={chosen?.value === optionValue}
                onChange={() => handleSelect(optionValue)}
              />
              {optionValue}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;
