import { FC } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import DateTimePicker from 'react-datetime-picker';

import './_calendar.scss';
import useCalendar from './useCalendar';

interface CalendarProps {
  name: string;
}
const Calendar: FC<CalendarProps> = ({ name }) => {
  const { onChange, onClick, onFocus, value } = useCalendar();

  return (
    <>
      <button
        id="120"
        type="button"
        onClick={() => onClick(120, 'sub')}
        disabled={value === null}
      >
        Subtract 2 hour
      </button>

      <button
        disabled={value === null}
        id="60"
        type="button"
        onClick={() => onClick(60, 'add')}
      >
        Add 1 hour
      </button>
      <DateTimePicker
        onChange={onChange}
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
