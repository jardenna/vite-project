/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';

/* eslint-disable default-case */

interface Props {
  value: string;
  onChange: any;
  options: any;
}
interface Pre {
  value: string;
}
const useAccessibleDropdown = (
  options: any[],
  value: string,
  onChange: (e: any) => void
) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const setIsDropdownOpen = (open: boolean) => {
    const selected = options.findIndex((o: any) => o.value === value);
    setActiveIndex(selected < 0 ? 0 : selected);

    setIsDropdownOpenInternal(open);
  };
  const handleSelect = (val: any) => {
    onChange(val);
    setIsDropdownOpen(false);
  };
  const optionsLength = options.length;
  const registerOpenDropdownHandlers = () => {
    const keyDownCallback = (e: any) => {
      e.preventDefault();

      switch (e.key) {
        case 'Up':
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(
            activeIndex <= 0 ? optionsLength - 1 : activeIndex - 1
          );
          return;
        case 'Down':
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(
            activeIndex + 1 === optionsLength ? 0 : activeIndex + 1
          );
          return;
        case 'Enter':
        case ' ': // Space
          e.preventDefault();
          handleSelect(options[activeIndex].value);
          return;
        case 'Esc':
        case 'Escape':
          e.preventDefault();
          setIsDropdownOpenInternal(false);
          return;
        case 'PageUp':
        case 'Home':
          e.preventDefault();
          setActiveIndex(0);
          return;
        case 'PageDown':
        case 'End':
          e.preventDefault();
          setActiveIndex(options.length - 1);
      }
    };
    document.addEventListener('keydown', keyDownCallback);
    return () => {
      document.removeEventListener('keydown', keyDownCallback);
    };
  };

  const registerClosedDropdownHandlers = () => {
    const keyDownCallback = (e: any) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setIsDropdownOpen(true);
      }
      // switch (e.key) {
      //   case 'Enter':
      //     e.preventDefault();
      //     setIsDropdownOpen(true);
      // }
    };

    document.addEventListener('keydown', keyDownCallback);
    return () => {
      document.removeEventListener('keydown', keyDownCallback);
    };
  };
  useEffect(() => {
    if (isDropdownOpen) {
      return registerOpenDropdownHandlers();
    }
    return registerClosedDropdownHandlers();
  }, [isDropdownOpen, activeIndex]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    handleSelect,
  };
};

const Select = ({ value, onChange, options }: Props) => {
  const { isDropdownOpen, setIsDropdownOpen, activeIndex, handleSelect } =
    useAccessibleDropdown(options, value, onChange);
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
        {options.map(({ value: optionValue }: Pre, index: number) => (
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
