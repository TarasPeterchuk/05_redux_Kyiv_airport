import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';
import * as flightsListSelector from '../flights.selectors';

class SearchFlightInput extends React.Component {
  state = {
    value: '',
  };

  // componentDidMount() {
  //   // console.log('1', this.state.value, this.props.filterData.filterText);
  //   if (
  //     this.state.value !== this.props.filterData.filterText
  //     // this.state.value !== prevProps.filterData.filterText
  //   ) {
  //     this.setState({ value: this.props.filterData.filterText });
  //   }
  // }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="search-line">
        <i className="search-line__icon fa-solid fa-magnifying-glass" />
        <input
          className="search-line__input"
          type="text"
          placeholder="Номер рейсу або місто"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <button
          className="search-line__btn"
          onClick={() => this.props.setFilterText(this.state.value)}
        >
          знайти
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  setFilterText: flightsAction.setFilterText,
};
const mapstate = (state) => {
  return {
    filterData: flightsListSelector.filterData(state),
  };
};

export default connect(mapstate, mapDispatch)(SearchFlightInput);
