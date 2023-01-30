/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import useAccessibleDropdown from '../../../hooks/useAccessibleDropdown';

interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  value: string;
  options: Option[];
  namespace?: string;
  onChange?: any;
  labels: string;
}
const Select: FC<SelectProps> = ({
  options,
  value,
  namespace = 'default_select_namespace',
  onChange,
  labels,
}) => {
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    listRef,
  } = useAccessibleDropdown(options, value);
  const chosen = options.find((o) => o.value === value);
  // const select = (value: string) => {
  //   onChange && onChange(value);
  //   setIsDropdownOpen(false);
  // };
  const select = (val: string) => {
    onChange && onChange(val);
    setIsDropdownOpen(false);
  };
  return (
    <section className="select-container">
      <p>{labels}</p>
      <button
        type="button"
        className="select-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        role="combobox"
        aria-labelledby={`${namespace}_label`}
        aria-haspopup="listbox"
        aria-controls={`${namespace}_dropdown`}
        aria-expanded={isDropdownOpen}
        aria-activedescendant={`${namespace}_element_${value}`}
      >
        Selected: {chosen?.label}
      </button>
      <ul
        className="select-dropdown"
        role="listbox"
        ref={listRef}
        id={`${namespace}_dropdown`}
        tabIndex={-1}
      >
        {options.map(({ label, value: optionValue }, index) => (
          <li
            key={index}
            id={`${namespace}_element_${optionValue}`}
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
                onChange={(v) => select(v.target.value)}
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
