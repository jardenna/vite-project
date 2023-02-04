/* eslint-disable react/no-array-index-key */
import { FC, useEffect } from 'react';
import useKeyboard from '../../hooks/useKeyboard';
import useDropdown from './useDropdown';

const CustomSelect: FC<any> = ({ options }) => {
  const {
    toggleOptions,
    handleKeyDown,
    handleListKeyDown,
    isOptionsOpen,
    selectedOption,
    setSelectedThenCloseDropdown,
  } = useDropdown(options);
  const selected = options[selectedOption].value;

  return (
    <div className="wrapper">
      <div className="container">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? 'expanded' : ''}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {options[selectedOption].value}
        </button>
        <ul
          className={`options ${isOptionsOpen ? 'show' : ''}`}
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {options.map((option: any, index: number) => (
            <li
              key={index}
              id={option.value}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
