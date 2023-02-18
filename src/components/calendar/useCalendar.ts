import { addMinutes, subMinutes } from 'date-fns';
import { useState } from 'react';

const useCalendar = () => {
  const [value, setValue] = useState<any>(null);

  const onChange = (date: Date) => {
    setValue(date);
  };

  const onFocus = () => {
    if (!value) {
      setValue(new Date());
    }
  };

  const add = (val: Date, min: number) => val && addMinutes(val, min);
  const subtract = (val: Date, min: number) => val && subMinutes(val, min);

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
