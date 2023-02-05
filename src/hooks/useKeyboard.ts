import { KeyboardEvent, useEffect } from 'react';

function useKeyboard(callback: () => void, key: string) {
  const match = (event: KeyboardEvent<HTMLElement>) =>
    event.key.toLowerCase() === key.toLowerCase();

  const onKeyDown = (event: any) => {
    if (match(event)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [key]);

  return onKeyDown;
}

export default useKeyboard;
