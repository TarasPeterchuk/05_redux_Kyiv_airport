import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchSection from './SearchSection';
import FlightsTable from './FlightsTable';
import * as flightsListSelector from '../flights.selectors';

const Flights = ({ filterData }) => {
  const history = useHistory();
  useEffect(() => {
    history.push(
      `${filterData.course}?date=${filterData.date}${
        filterData.filterText ? `&search=${filterData.filterText}` : ''
      }`,
    );
  }, [filterData]);
  return (
    <>
      <SearchSection />
      <FlightsTable />
    </>
  );
};

const mapstate = state => ({
  filterData: flightsListSelector.filterData(state),
});

export default connect(mapstate)(Flights);
