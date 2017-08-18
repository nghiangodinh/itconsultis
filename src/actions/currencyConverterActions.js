import * as actionTypes from './actionTypes';
import currencyApi from '../api/currencyApi';

export const valueChanged = (inputValue) => ({
  type: actionTypes.VALUE_CHANGED,
  data: { inputValue }
});

export const sourceChanged = (source) => ({
  type: actionTypes.SOURCE_CHANGED,
  data: { source }
});


export const targetChanged = (target) => ({
  type: actionTypes.TARGET_CHANGED,
  data: { target }
});


// will fire to update initistate each time source changed
export const setInitialState = (rateObj) => ({
  type: actionTypes.INITIAL_STATE,
  data: rateObj
});

/// for currency api
export const loadCurrencyRatesSuccess = (rates) => ({
  type: actionTypes.LOAD_CURRENCY_RATES_SUCCESS,
  data: rates
});

export const loadCurrencyRates = (base = 'USD') => {
  return function (dispatch) {
    return currencyApi.getCurrencyRates(base).then(rates => {
      dispatch(loadCurrencyRatesSuccess(rates));
      dispatch(setInitialState(rates));
    }).catch(error => {
      throw (error);
    });
  };
};


