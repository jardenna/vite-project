import { useEffect } from 'react';

const useKeyPress = (callback: () => void, targetKey: string) => {
  const keyPressHandler = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === targetKey.toLowerCase()) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [callback, targetKey]);
};

export default useKeyPress;
