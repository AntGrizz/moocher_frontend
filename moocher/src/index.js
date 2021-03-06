import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-infinite-calendar/styles.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
require('dotenv').config();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
