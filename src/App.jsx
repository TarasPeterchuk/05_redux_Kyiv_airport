import React, { useEffect, useParams } from 'react';
import { Provider } from 'react-redux';
import Flights from './features/flights/components/Flights';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Flights />
      </Provider>
    </Router>
  );
};

export default App;
