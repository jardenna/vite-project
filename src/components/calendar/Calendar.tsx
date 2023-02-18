import { FC, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DateTimePicker from 'react-datetime-picker';

import './_calendar.scss';

interface CalendarProps {
  name: string;
}
const Calendar: FC<CalendarProps> = ({ name }) => {
  const [value, setValue] = useState<Date>();

  const onFocus = () => {
    if (!value) {
      setValue(new Date());
    }
  };

  return (
    <DateTimePicker
      onChange={setValue}
      value={value}
      format="dd-MM-y h.mm"
      dayPlaceholder=""
      monthPlaceholder=""
      yearPlaceholder=""
      minutePlaceholder=""
      hourPlaceholder=""
      openWidgetsOnFocus={false}
      name={name}
      className={value ? 'test' : ''}
      onFocus={onFocus}
      locale="hu-HU"
    />
  );
};
export default Calendar;
