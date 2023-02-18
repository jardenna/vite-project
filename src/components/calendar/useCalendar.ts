import { addMinutes, subMinutes } from 'date-fns';
import { useState } from 'react';

const useCalendar = () => {
  const [value, setValue] = useState<any>(null);

  const onChange = (e: Date) => {
    setValue(e);
  };

  const onFocus = () => {
    if (!value) {
      setValue(new Date());
    }
  };

  const add = (val: Date, min: number) => {
    const sum = val && addMinutes(val, min);
    return sum;
  };

  const subtract = (val: Date, min: number) => {
    const sum = val && subMinutes(val, min);
    return sum;
  };

  const onClick = (amount: number, action: string) => {
    if (value) {
      if (action === 'sub') {
        setValue(subtract(value, amount));
      } else {
        setValue(add(value, amount));
      }
    }
  };
  return { onChange, onClick, onFocus, value };
};

export default useCalendar;
