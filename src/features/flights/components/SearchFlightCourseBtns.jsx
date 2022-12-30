import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as flightsListSelector from '../flights.selectors';
import * as flightsAction from '../flights.actions';

const SearchFlightCourseBtns = ({ filterData, setCource }) => {
  const handleClick = (course) => {
    setCource(course);
  };
  let { pathname } = useLocation();
  if (pathname !== '/arrival' && pathname !== '/departure') {
    pathname = '/departure';
  }
  useEffect(() => {
    if (pathname.substring(1) !== filterData.course) {
      setCource(pathname.substring(1));
    }
  }, []);

  return (
    <div className="search-cource">
      <button
        className={`search-cource__btn search-cource__btn-departure  search-cource__btn${
          filterData.course === 'departure' ? '_active' : '_inactive'
        }`}
        onClick={() => handleClick('departure')}
      >
        <i className="search-cource__icon fa-solid fa-plane-departure"></i>
        виліт
      </button>
      <button
        className={`search-cource__btn search-cource__btn-arrival search-cource__btn${
          filterData.course == 'arrival' ? '_active' : '_inactive'
        }`}
        onClick={() => handleClick('arrival')}
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
