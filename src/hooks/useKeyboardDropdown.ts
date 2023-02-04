/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useKeyboardNavigation = (size: number) => {
  const [activeCursor, setActiveCursor] = useState(0);

  const handleKeyPress = (event: any) => {
    if (event.key === 'ArrowDown') {
      setActiveCursor((prev) => (prev < size ? prev + 1 : 0));
    } else if (event.key === 'ArrowUp') {
      setActiveCursor((prev) => (prev > 0 ? prev - 1 : size));
    }
  };

  // Reset when size changes
  useEffect(() => setActiveCursor(0), [size]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [size, activeCursor]);

  return [activeCursor, setActiveCursor];
};

export default useKeyboardNavigation;
