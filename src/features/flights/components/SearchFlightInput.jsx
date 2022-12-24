import React from 'react';
import { connect } from 'react-redux';
import * as flightsAction from '../flights.actions';

class SearchFlightInput extends React.Component {
  state = {
    value: '',
  };

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

export default connect(null, mapDispatch)(SearchFlightInput);
