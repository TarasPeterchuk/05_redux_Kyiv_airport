import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';
import * as flightsListSelector from '../flights.selectors';
import SearchFlightDateDay from './SearchFlightDateDay';

class SearchFlightDate extends React.Component {
  // handleChange = (event) => {
  //   // this.props.setFilterDate(event.target.value);
  //   // this.props.getFlightsList(event.target.value);
  //   this.props.setFilterDateGetFlightsList(event.target.value);
  // };

  render() {
    return (
      <div className="calendar-container">
        <div className="calendar">
          <span className={'calendar__num'}>
            {moment(this.props.filterData.date, 'DD-MM-YYYY').format('DD/MM')}
          </span>
          <input
            className="calendar__select"
            type="date"
            value={moment(this.props.filterData.date, 'DD-MM-YYYY').format(
              'YYYY-MM-DD'
            )}
            onChange={(event) =>
              this.props.setFilterDateGetFlightsList(event.target.value)
            }
          />
        </div>
        <div className="calendar-container__dates">
          <SearchFlightDateDay
            day={moment().subtract(1, 'days')}
            dayTitle={'вчора'}
            setDate={this.props.setFilterDateGetFlightsList}
            filterDateDay={this.props.filterData.date}
          />
          <SearchFlightDateDay
            day={moment()}
            dayTitle={'сьогодні'}
            setDate={this.props.setFilterDateGetFlightsList}
            filterDateDay={this.props.filterData.date}
          />
          <SearchFlightDateDay
            day={moment().add(1, 'days')}
            dayTitle={'завтра'}
            setDate={this.props.setFilterDateGetFlightsList}
            filterDateDay={this.props.filterData.date}
          />
        </div>
      </div>
    );
  }
}

const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};
const mapDispatch = {
  // setFilterDate: flightsAction.setFilterDate,
  // getFlightsList: flightsAction.getFlightsList,
  setFilterDateGetFlightsList: flightsAction.setFilterDateGetFlightsList,
};
export default connect(mapstate, mapDispatch)(SearchFlightDate);
