import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CurrencyConverterForm from '../components/currencyConverterForm';
import * as currencyConverterActions from '../actions/currencyConverterActions';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.currencyConverter,
    rates: state.currencyRates
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(currencyConverterActions, dispatch)
  };
};

const CurrencyConverter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverterForm);

export default CurrencyConverter;
