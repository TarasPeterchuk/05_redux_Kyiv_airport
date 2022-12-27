import React, { useEffect } from 'react';
import moment from 'moment';
import SearchSection from './SearchSection';
import FlightsTable from './FlightsTable';
import * as flightsAction from '../flights.actions';
import { connect } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import * as flightsListSelector from '../flights.selectors';

const Flights = ({
  filterData,
  setFilterDateGetFlightsList,
  setFilterText,
}) => {
  // const history = useHistory();
  // let { search } = useLocation();
  // const splitDate = search.indexOf('?date=');
  // const splitSearch = search.indexOf('&search=');
  // // console.log(decodeURI(search.substr(splitSearch + 8)));
  let searchDate = filterData.date;
  // if (splitDate !== -1) {
  //   searchDate = search.substr(splitDate + 6, 10);
  // }

  useEffect(() => {
    // setFilterText(decodeURI(search.substr(splitSearch + 8)));
    setFilterDateGetFlightsList(
      moment(searchDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
    );

    // history.push(
    //   `${filterData.course}?date=${filterData.date}'&search=${filterData.filterText}`
    // );
  }, []);

  return (
    <>
      <SearchSection />
      <FlightsTable />
    </>
  );
};

const mapDispatch = {
  setFilterText: flightsAction.setFilterText,
  setFilterDateGetFlightsList: flightsAction.setFilterDateGetFlightsList,
};
const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};

export default connect(mapstate, mapDispatch)(Flights);
// export default Flights;
