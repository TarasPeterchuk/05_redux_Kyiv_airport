import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
