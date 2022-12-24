import React from 'react';
import { connect } from 'react-redux';
import * as flightsListSelector from '../flights.selectors';

import * as flightsAction from '../flights.actions';

const SearchFlightCourseBtns = ({ filterData, setCource }) => {
  return (
    <div className="search-cource">
      <button
        className={`search-cource__btn search-cource__btn-departure  search-cource__btn${
          filterData.course === 'departure' ? '_active' : '_inactive'
        }`}
        onClick={() => setCource('departure')}
      >
        <i className="search-cource__icon fa-solid fa-plane-departure"></i>
        виліт
      </button>
      <button
        className={`search-cource__btn search-cource__btn-arrival search-cource__btn${
          filterData.course == 'arrival' ? '_active' : '_inactive'
        }`}
        onClick={() => setCource('arrival')}
      >
        <i className="search-cource__icon fa-solid fa-plane-arrival" />
        приліт
      </button>
    </div>
  );
};

const mapDispatch = {
  setCource: flightsAction.setCource,
};

const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};
export default connect(mapstate, mapDispatch)(SearchFlightCourseBtns);
