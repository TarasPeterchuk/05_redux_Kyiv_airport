import React from 'react';
import SearchFlightInput from './SearchFlightInput';
import SearchFlightCourseBtns from './SearchFlightCourseBtns';
import SearchFlightDate from './SearchFlightDate';
class SearchCection extends React.Component {
  render() {
    return (
      <div className="search-flights">
        <h2 className="search-flights__title">ПОШУК РЕЙСУ</h2>
        <SearchFlightInput />
        <SearchFlightCourseBtns />
        <SearchFlightDate />
      </div>
    );
  }
}

export default SearchCection;
