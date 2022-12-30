import React, { useEffect, useParams } from 'react';
import { Provider } from 'react-redux';
import Flights from './features/flights/components/Flights';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <Provider store={store}>
            <Flights />
          </Provider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
