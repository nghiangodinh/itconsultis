import React from 'react';
import { Link } from 'react-router';
import CurrencyConveter from '../containers/currencyConverter';


const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Currency Converter</h1>
      <CurrencyConveter />
    </div>
  );
};

export default HomePage;
