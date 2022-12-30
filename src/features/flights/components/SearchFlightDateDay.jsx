import React from 'react';
import moment from 'moment';

const SearchFlightDateDay = ({ day, dayTitle, setDate, filterDateDay }) => {
  return (
    <div
      onClick={() => setDate(moment(day).format('YYYY-MM-DD'))}
      className={`date-picker${
        filterDateDay === moment(day).format('DD-MM-YYYY')
          ? ' date-picker_active'
          : ''
      }`}
    >
      <span className={'date-picker__num'}>{moment(day).format('DD/MM')}</span>
      <span className={'date-picker__title'}>{dayTitle}</span>
    </div>
  );
};

export default SearchFlightDateDay;
