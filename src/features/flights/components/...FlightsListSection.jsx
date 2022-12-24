import React from 'react';
import FlightsListHeader from './FlightsListHeader';
import FlightsList from './FlightsList';

const FlightsListSection = () => {
  return (
    <div className="search-section">
      <FlightsListHeader />
      <FlightsList />
    </div>
  );
};

export default FlightsListSection;
