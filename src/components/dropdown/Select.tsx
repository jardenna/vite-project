/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';

/* eslint-disable default-case */

interface Props {
  value: string;
  onChange: any;
  options: any;
}

const registerOpenDropdownHandlers = ({
  optionsLength,
  activeIndex,
  setActiveIndex,
  handleSelect,
  options,
}) => {
  const keyDownCallback = (e: any) => {
    e.preventDefault();

    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(activeIndex <= 0 ? optionsLength - 1 : activeIndex - 1);
        return;
      case 'Down':
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(activeIndex + 1 === optionsLength ? 0 : activeIndex + 1);
        return;
      case 'Enter':
      case ' ': // Space
        e.preventDefault();
        handleSelect(options[activeIndex].value);
        return;
      case 'Esc':
      case 'Escape':
        e.preventDefault();
        handleSelect(false);
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

const registerClosedDropdownHandlers = ({ setIsDropdownOpen }) => {
  const keyDownCallback = (e: any) => {
    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
      case 'Down':
      case 'ArrowDown':
      case ' ': // Space
      case 'Enter':
        e.preventDefault();
        setIsDropdownOpen(true);
    }
  };
  document.addEventListener('keydown', keyDownCallback);
  return () => {
    document.removeEventListener('keydown', keyDownCallback);
  };
};

const useAccessibleDropdown = ({ options, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex((o) => o.value === value);
      setActiveIndex(selected < 0 ? 0 : selected);
    }
    setIsDropdownOpenInternal(v);
  };
  const handleSelect = (valu: any) => {
    if (valu) {
      onChange && onChange(valu);
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      return registerOpenDropdownHandlers({
        activeIndex,
        setActiveIndex,
        optionsLength: options.length,
        handleSelect,
        options,
      });
    }
    return registerClosedDropdownHandlers({
      setIsDropdownOpen,
    });
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
    useAccessibleDropdown({ options, value, onChange });
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
        {options.map(({ value: optionValue }, index: number) => (
          <li key={optionValue} aria-selected={index === activeIndex}>
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
