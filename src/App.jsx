import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Flights from './features/flights/components/Flights';
import store from './store';

const App = () => (
  <Router>
    <Provider store={store}>
      <Flights />
    </Provider>
  </Router>
);

export default App;
