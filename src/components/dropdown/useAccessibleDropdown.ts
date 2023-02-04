import { useState, useRef, useEffect } from 'react';

const useAccessibleDropdown = ({ options, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const listRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
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
        listRef.current.previousSibling.focus();
      });
    }
    setIsDropdownOpenInternal(v);
  };
  const select = (value: any) => {
    if (value) {
      onChange && onChange(value);
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      return registerOpenDropdownHandlers({
        activeIndex,
        setActiveIndex,
        optionsLength: options.length,
        select,
      });
    }
    return (
      isFocus &&
      registerClosedDropdownHandlers({
        setIsDropdownOpen,
      })
    );
  }, [isDropdownOpen, activeIndex, isFocus]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    listRef,
  };
};

export default useAccessibleDropdown;
