import { addMinutes, subMinutes } from 'date-fns';
import { useState } from 'react';

const useCalendar = () => {
  const [value, setValue] = useState<Date>();

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

  const onClick = (e: any) => {
    const { id } = e.target;
    if (value) {
      setValue(subtract(value, id));
    }
  };
  return { setValue, onClick, onFocus, add, subtract, value };
};

export default useCalendar;
