import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';
import * as flightsListSelector from '../flights.selectors';
import { useLocation } from 'react-router-dom';

const SearchFlightInput = ({ filterData, setFilterText }) => {
  let [inputValue, onInputChange] = useState(filterData.filterText);

  let { search } = useLocation();
  const splitSearch =
    search.indexOf('&search=') !== -1
      ? decodeURI(search.substr(search.indexOf('&search=') + 8))
      : '';

  useEffect(() => {
    if (splitSearch !== filterData.filterText) {
      setFilterText(splitSearch);
    }
  }, []);

  useEffect(() => {
    onInputChange(filterData.filterText);
  }, [filterData.filterText]);

  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div className="search-line">
      <i className="search-line__icon fa-solid fa-magnifying-glass" />
      <input
        className="search-line__input"
        type="text"
        placeholder="Номер рейсу або місто"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        className="search-line__btn"
        onClick={() => setFilterText(inputValue)}
      >
        знайти
      </button>
    </div>
  );
};

const mapDispatch = {
  setFilterText: flightsAction.setFilterText,
};
const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};

export default connect(mapstate, mapDispatch)(SearchFlightInput);
