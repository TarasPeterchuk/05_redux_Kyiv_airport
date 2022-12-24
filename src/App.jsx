import React, { useEffect, useParams } from 'react';
import { Provider } from 'react-redux';
import Flights from './features/flights/components/Flights';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route,
} from 'react-router-dom';

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    //   ga.send(['pageview', location.pathname]);
    // }, [location]);
    console.log(location);
  });
}

// function BlogPost() {
//   let { slug } = useParams();
//   return <div>Now showing post {slug}</div>;
// }

const App = () => {
  // usePageViews();
  return (
    <Switch>
      <Provider store={store}>
        <Flights />
      </Provider>
    </Switch>
  );
};

export default App;
