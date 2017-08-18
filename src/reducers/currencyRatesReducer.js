import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const CurrencyRatesReducer = (state = initialState.currencyRates, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CURRENCY_RATES_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export default CurrencyRatesReducer;
