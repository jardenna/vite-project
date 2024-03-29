import { useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, delay: any) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.=
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout
  useEffect(() => {
    // Don't schedule if no delay is specified
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    // return () => {
    //   clearTimeout(id);
    // };
    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
