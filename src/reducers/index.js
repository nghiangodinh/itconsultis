import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import currencyConverter from './currencyConverterReducer';
import currencyRates from './currencyRatesReducer';

const RootReducer = combineReducers({
  currencyConverter: currencyConverter,
  currencyRates: currencyRates
});

export default RootReducer;
