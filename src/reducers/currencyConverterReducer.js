import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const CurrencyConverter = (state = initialState.currencyConverter, action) => {
  switch (action.type) {

    case actionTypes.VALUE_CHANGED:
      return Object.assign({}, state, {
        inputValue: action.data.inputValue
      });

    case actionTypes.TARGET_CHANGED:
      return Object.assign({}, state, {
        target: action.data.target
      });

    case actionTypes.SOURCE_CHANGED:
      return Object.assign({}, state, {
        source: action.data.source
      });

    case actionTypes.INITIAL_STATE: {
      const name = state.target.name;
      const value = (action.data.rates[name]) ? Number.parseFloat(action.data.rates[name]): 0;

      return Object.assign({}, state, {
        target: { name, value }
      });
    }

    default:
      return state;
  }
};

export default CurrencyConverter;
