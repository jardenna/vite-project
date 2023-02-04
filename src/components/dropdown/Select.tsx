import { FC } from 'react';
import useAccessibleDropdown from '../../hooks/useAccessibleDropdown';

interface SelectProps {
  options: any;
  value: string;
  onChange: any;
  title: string;
  namespace?: string;
}
const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  title,
  namespace = 'default_select_namespace',
}) => {
  const chosen = options.find((o: any) => o.value === value);
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    listRef,
  } = useAccessibleDropdown({ options, value, onChange });
  return (
    <>
      <label id={`${namespace}_label`}>{title}</label>
      <div className="select-container">
        <button
          type="button"
          className="select-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          role="combobox"
          aria-haspopup="listbox"
          aria-controls={`${namespace}_dropdown`}
          aria-expanded={isDropdownOpen}
          aria-activedescendant={`${namespace}_element_${value}`}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          aria-label="Choose your favourite Ninjago character"
        >
          Selected: {chosen.label}
        </button>
        <ul
          className="select-dropdown"
          role="listbox"
          ref={listRef}
          id={`${namespace}_dropdown`}
          tabIndex={-1}
        >
          {options.map(({ value: optionValue }, index: number) => (
            <li
              key={optionValue}
              id={`${namespace}_element_${optionValue}`}
              aria-selected={index === activeIndex}
              role="option"
              onMouseOver={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <label>
                <input
                  type="radio"
                  name={`${namespace}_radio`}
                  value={optionValue}
                  className={chosen.value === optionValue ? 'checked' : ''}
                  checked={chosen.value === optionValue}
                  onChange={() => select(optionValue)}
                />
                {optionValue}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
