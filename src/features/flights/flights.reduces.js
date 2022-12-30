import {
  SHOW_SPINNER,
  FLIGHTS_LIST_RECEIVED,
  FILTER_COURSE,
  FILTER_TEXT,
  FILTER_DATE,
} from './flights.actions';

import moment from 'moment';

const initialState = {
  flightsListData: {},
  filterData: {
    course: 'departure',
    date: moment().format('DD-MM-YYYY'),
    // date: moment('11-01-2022', 'DD-MM-YYYY').format('DD-MM-YYYY'),
    filterText: '',
  },
  isFetching: false,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FLIGHTS_LIST_RECEIVED: {
      return {
        ...state,
        flightsListData: action.payload.flightsListData,
        isFetching: false,
      };
    }
    case FILTER_COURSE: {
      return {
        ...state,
        filterData: { ...state.filterData, course: action.payload.course },
      };
    }
    case FILTER_TEXT: {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          filterText: action.payload.filterText,
        },
      };
    }
    case FILTER_DATE: {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          date: moment(action.payload.date).format('DD-MM-YYYY'),
        },
      };
    }
    default:
      return state;
  }
};

export default flightsReducer;
