import { useEffect, KeyboardEvent } from 'react';

const useKey = (callback: any, keys: any) => {
  const onKeyDown = (event: any) => {
    const wasAnyKeyPressed = keys.some((key: string) => event.key === key);
    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
export default useKey;
