interface Option {
  value: string;
}

interface Props {
  value: string;
  options: Option[];
}

const registerOpenDropdownHandlers = ({
  optionsLength,
  activeIndex,
  setActiveIndex,
  handleSelect,
}) => {
  const keyDownCallback = (e) => {
    e.preventDefault();

    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(activeIndex <= 0 ? optionsLength - 1 : activeIndex - 1);
        return;
      case 'Down':
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(activeIndex + 1 === optionsLength ? 0 : activeIndex + 1);
        return;
      case 'Enter':
      case ' ': // Space
        e.preventDefault();
        handleSelect(options[activeIndex].value);
        return;
      case 'Esc':
      case 'Escape':
        e.preventDefault();
        handleSelect(false);
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

      default:
        break;
    }
  };
  document.addEventListener('keydown', keyDownCallback);
  return () => {
    document.removeEventListener('keydown', keyDownCallback);
  };
};

const registerClosedDropdownHandlers = ({ setIsDropdownOpen }) => {
  const keyDownCallback = (e) => {
    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
      case 'Down':
      case 'ArrowDown':
      case ' ': // Space
      case 'Enter':
        e.preventDefault();
        setIsDropdownOpen(true);
      default:
        break;
    }
  };
  document.addEventListener('keydown', keyDownCallback);
  return () => {
    document.removeEventListener('keydown', keyDownCallback);
  };
};

const useAccessibleDropdown = ({ options, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpenInternal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (value: string) => {
    if (value) {
      onChange && onChange(value);
    }
    setIsDropdownOpen(false);
  };

  const setIsDropdownOpen = (v: boolean) => {
    if (v) {
      const selected = options.findIndex((o) => o.value === value);
      setActiveIndex(selected < 0 ? 0 : selected);
    }
    setIsDropdownOpenInternal(v);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      return registerOpenDropdownHandlers({
        activeIndex,
        setActiveIndex,
        optionsLength: options.length,
        handleSelect,
      });
    }
    return registerClosedDropdownHandlers({
      setIsDropdownOpen,
    });
  }, [isDropdownOpen, activeIndex]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    handleSelect,
  };
};
