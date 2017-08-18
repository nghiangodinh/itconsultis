import React, { Component, PropTypes } from 'react';
import * as currencyConverterActions from '../actions/currencyConverterActions';
import DropdownList from '../components/common/dropdownList';
import Input from '../components/common/input';
import configStore from '../store/configStore';

const store = configStore();

const CurrencyConverterForm = ({ data, rates, actions, errors, dispatch }, context) => {
  const onValueChanged = (event) => {
      actions.valueChanged(event.target.value);
  };

  // const isValidInput = (event) => {
  //   return isNumeric(event.target.value);
  // };

  // const isNumeric = (n) => {
  //   return !isNaN(parseFloat(n)) && isFinite(n);
  // };

  const onSourceChanged = (event) => {
    const selectedItem = extractSelectedItem(event);

    actions.sourceChanged(selectedItem);
    store.dispatch(currencyConverterActions.loadCurrencyRates(selectedItem.name));
  };

  const onTargetChanged = (event) => {
    const selectedItem = extractSelectedItem(event);

    actions.targetChanged(selectedItem);
  };

  const extractSelectedItem = (event) => {
    const name = event.target.selectedOptions[0].text;
    const value = event.target.value;

    return { name, value };
  };

  const parseArrayRates = (rateObj) => {
    return Object.entries(rateObj.rates);
  };

  const getSourceArrayRates = (rateObj) => {
    const arr = parseArrayRates(rateObj);
    return [[rateObj.base, 1.0], ...arr];
  };

  const getInitSelectedValue = (obj, name) => {
    if (name in obj) {
      return obj[name];
    }
    return 0;
  };

  const calculateRates = (value, rate) => {
    let result = 0.0;
    try {
      result = (value * rate).toFixed(2);
    } catch (error) {
      //console.log("error: " + error);
    }
    return result;
  };

  return (
    <div>
      <form action="">
        <Input
          controlType="number"
          label="Input Value"
          value={data.inputValue}
          onChange={onValueChanged}
        />

        <DropdownList
          id="dlSource"
          title="Source Currency"
          values={getSourceArrayRates(rates)}
          handleChange={onSourceChanged}
          selectedValue={data.source.value} />

        <DropdownList
          id="dlTarget"
          title="Target Currency"
          handleChange={onTargetChanged}
          values={parseArrayRates(rates)}
          selectedValue={getInitSelectedValue(rates.rates, data.target.name)} />


        <div className="form-group">
          <label tmlfor="result">Result: &nbsp;</label>
          <div className="alert alert-success form-control" role="alert">
            {calculateRates(data.inputValue, data.target.value)}
          </div>

        </div>
      </form>
    </div>
  );
};

CurrencyConverterForm.protoTypes = {
  errors: PropTypes.object,
  data: PropTypes.object.isRequired,
  rates: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

CurrencyConverterForm.contextTypes = { store: React.PropTypes.object };

export default CurrencyConverterForm;
