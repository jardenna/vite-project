import { useState, useEffect } from 'react';

interface Option {
  [key: string]: string;
}

/* eslint-disable default-case */
const useDropdown = (
  options: Option[],
  value: string,
  onChange: (e: string) => void,
  key: string
) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const setIsDropdownOpen = (open: boolean) => {
    const selected = options.findIndex((option) => option[key] === value);
    setActiveIndex(selected < 0 ? 0 : selected);

    setIsDropdownOpenInternal(open);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsDropdownOpen(false);
  };
  const optionsLength = options.length;
  const registerOpenDropdownHandlers = () => {
    const keyDownCallback = (e: KeyboardEvent) => {
      e.preventDefault();

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(
            activeIndex <= 0 ? optionsLength - 1 : activeIndex - 1
          );
          return;
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(
            activeIndex + 1 === optionsLength ? 0 : activeIndex + 1
          );
          return;
        case 'Enter':
        case ' ': // Space
          e.preventDefault();
          handleSelect(options[activeIndex][key]);
          return;
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
    const keyDownCallback = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setIsDropdownOpen(true);
      }
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

export default useDropdown;
