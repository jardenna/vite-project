import { useState, useRef } from 'react';

interface Option {
  value: string;
  label: string;
}

const useAccessibleDropdown = (options: Option[], value: string) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const listRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  const isSafari = () => {
    const chromeInAgent = navigator.userAgent.indexOf('Chrome') > -1;
    const safariInAgent = navigator.userAgent.indexOf('Safari') > -1;
    return safariInAgent && !chromeInAgent;
  };

  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex((o) => o.value === value);
      setActiveIndex(selected < 0 ? 0 : selected);
      if (listRef.current && isSafari()) {
        requestAnimationFrame(() => {
          listRef.current.focus();
        });
      }
    } else if (listRef.current && isSafari()) {
      requestAnimationFrame(() => {
        listRef?.current.previousSibling.focus();
      });
    }
    setIsDropdownOpenInternal(v);
  };

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    listRef,
  };
};

export default useAccessibleDropdown;

// https://codepen.io/kacper-lego/pen/mdxMNyv?editors=0010
