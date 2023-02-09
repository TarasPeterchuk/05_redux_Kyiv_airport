import React from 'react';
import { connect } from 'react-redux';
import * as flightsListSelector from '../flights.selectors';
import Flight from './Flight';
import Spinner from './Spinner';
import FlightsEmpty from './FlightsEmpty';

const FlightsTable = ({ filterData, isFetching, filteredFlights }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (!filteredFlights) {
    return <FlightsEmpty />;
  }
  if (filteredFlights.length === 0) {
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
        {filteredFlights.map((fligth) => (
          <Flight key={fligth.ID} flightData={fligth} />
        ))}
      </tbody>
    </table>
  );
};

const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
    isFetching: flightsListSelector.isFetching(state),
    filteredFlights: flightsListSelector.filteredFlights(state),
  };
};

export default connect(mapstate)(FlightsTable);
