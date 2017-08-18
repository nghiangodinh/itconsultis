/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './route';
import configStore from './store/configStore';
import {loadCurrencyRates} from './actions/currencyConverterActions';

import './styles/styles.css'; //FIXME: webpack can imort CSS file too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configStore();
store.dispatch(loadCurrencyRates());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
