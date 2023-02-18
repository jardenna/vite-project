import { FC } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import DateTimePicker from 'react-datetime-picker';

import './_calendar.scss';
import useCalendar from './useCalendar';

interface CalendarProps {
  name: string;
}
const Calendar: FC<CalendarProps> = ({ name }) => {
  const { setValue, subtract, onClick, onFocus, add, value } = useCalendar();

  return (
    <>
      <button id="120" type="button" onClick={onClick}>
        Subtract 2 hour
      </button>

      <button id="60" type="button" onClick={onClick}>
        Subtract 1 hour
      </button>
      <DateTimePicker
        onChange={setValue}
        value={value}
        format="dd-MM-y HH.mm"
        dayPlaceholder=""
        monthPlaceholder=""
        yearPlaceholder=""
        minutePlaceholder=""
        hourPlaceholder=""
        openWidgetsOnFocus={false}
        name={name}
        className={value ? 'test' : ''}
        onFocus={onFocus}
        locale="dk-DA"
      />
    </>
  );
};
export default Calendar;
