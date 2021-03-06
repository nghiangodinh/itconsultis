import React, { PropTypes } from 'react';
import Header from './common/header';


const App = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
