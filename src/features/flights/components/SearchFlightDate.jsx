import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';
import * as flightsListSelector from '../flights.selectors';
import SearchFlightDateDay from './SearchFlightDateDay';
import { useLocation } from 'react-router-dom';

const SearchFlightDate = ({ filterData, setFilterDateGetFlightsList }) => {
  let { search } = useLocation();
  const splitDate =
    search.indexOf('?date=') !== -1
      ? search.substr(search.indexOf('?date=') + 6, 10)
      : moment().format('DD-MM-YYYY');

  useEffect(() => {
    if (splitDate !== filterData.date) {
      setFilterDateGetFlightsList(
        moment(splitDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
      );
    } else {
      setFilterDateGetFlightsList(
        moment(filterData.date, 'DD-MM-YYYY').format('YYYY-MM-DD')
      );
    }
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar">
        <span className={'calendar__num'}>
          {moment(filterData.date, 'DD-MM-YYYY').format('DD/MM')}
        </span>
        <input
          className="calendar__select"
          type="date"
          value={moment(filterData.date, 'DD-MM-YYYY').format('YYYY-MM-DD')}
          onChange={(event) => setFilterDateGetFlightsList(event.target.value)}
        />
        {/* <DatePicker ref={(c) => (this._calendar = c)} />
          <img
            style={{ height: '40px', width: '40px', backgroundColor: 'black' }}
            src={'https://iev.aero/images/icons/calendar.svg'}
            onClick={this.openDatepicker}
          /> */}
      </div>
      <div className="calendar-container__dates">
        <SearchFlightDateDay
          day={moment().subtract(1, 'days')}
          dayTitle={'вчора'}
          setDate={setFilterDateGetFlightsList}
          filterDateDay={filterData.date}
        />
        <SearchFlightDateDay
          day={moment()}
          dayTitle={'сьогодні'}
          setDate={setFilterDateGetFlightsList}
          filterDateDay={filterData.date}
        />
        <SearchFlightDateDay
          day={moment().add(1, 'days')}
          dayTitle={'завтра'}
          setDate={setFilterDateGetFlightsList}
          filterDateDay={filterData.date}
        />
      </div>
    </div>
  );
};

const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};
const mapDispatch = {
  setFilterDateGetFlightsList: flightsAction.setFilterDateGetFlightsList,
};
export default connect(mapstate, mapDispatch)(SearchFlightDate);
