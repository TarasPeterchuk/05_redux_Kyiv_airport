import * as flightsGateway from './flightsGateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS_LIST_RECEIVED';
export const FILTER_COURSE = 'FILTER_COURSE';
export const FILTER_TEXT = 'FILTER_TEXT';
export const FILTER_DATE = 'FILTER_DATE';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const flightsListReceived = (flightsListData) => {
  const action = {
    type: FLIGHTS_LIST_RECEIVED,
    payload: { flightsListData },
  };
  return action;
};

export const setCource = (course) => {
  const action = {
    type: FILTER_COURSE,
    payload: { course },
  };
  return action;
};

export const setFilterText = (filterText) => {
  const action = {
    type: FILTER_TEXT,
    payload: { filterText },
  };
  return action;
};
export const setFilterDate = (date) => {
  const action = {
    type: FILTER_DATE,
    payload: { date },
  };
  return action;
};

export const getFlightsList = (flightsDate) => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    flightsGateway.fetchFlightsList(flightsDate).then((flightsListData) => {
      return dispatch(flightsListReceived(flightsListData));
    });
  };
  return thunkAction;
};

export const setFilterDateGetFlightsList = (date) => {
  const thunkAction = function (dispatch) {
    dispatch(setFilterDate(date));
    dispatch(getFlightsList(date));
  };
  return thunkAction;
};
