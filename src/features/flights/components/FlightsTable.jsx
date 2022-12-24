import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';
import * as flightsListSelector from '../flights.selectors';
import Flight from './Flight';
import Spinner from './Spinner';
import FlightsEmpty from './FlightsEmpty';

const FlightsTable = ({ flights, filterData, getFlightsList, isFetching }) => {
  useEffect(() => {
    getFlightsList(filterData.date);
  }, []);
  if (isFetching) {
    return <Spinner />;
  }
  console.log(flights);
  if (!flights) {
    return <FlightsEmpty />;
  }
  if (flights[filterData.course].length === 0) {
    return <FlightsEmpty />;
  }

  return (
    <table className="table" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>Термінал</th>
          <th>Розклад</th>
          <th>
            {filterData.course === 'departure' ? 'Напрямок' : '	Прилітає з'}
          </th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>
      <tbody>
        {flights[filterData.course]
          .filter(
            (flight) =>
              flight.codeShareData[0]['codeShare']
                .toLowerCase()
                .includes(filterData.filterText.toLowerCase()) ||
              (flight['airportToID.city']
                ? flight['airportToID.city']
                    .toLowerCase()
                    .includes(filterData.filterText.toLowerCase())
                : flight['airportFromID.city']
                    .toLowerCase()
                    .includes(filterData.filterText.toLowerCase()))
          )
          .map((fligth) => (
            <Flight key={fligth.ID} flightData={fligth} />
          ))}
      </tbody>
    </table>
  );
};

const mapstate = (state) => {
  return {
    flights: flightsListSelector.flights(state),
    filterData: flightsListSelector.filterData(state),
    isFetching: flightsListSelector.isFetching(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
};

export default connect(mapstate, mapDispatch)(FlightsTable);
