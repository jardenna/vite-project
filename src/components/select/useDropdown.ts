/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

const useDropdown = (options: any) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };
  const handleKeyDown = (index: number) => (e: any) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e: any) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption === options.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return {
    toggleOptions,
    handleKeyDown,
    handleListKeyDown,
    isOptionsOpen,
    selectedOption,
    setSelectedThenCloseDropdown,
  };
};

export default useDropdown;
