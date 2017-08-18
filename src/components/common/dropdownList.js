import React, { PropTypes } from 'react';

const DropdownList = ({ id, title, values, selectedValue, handleChange }) => {
  return (
    <div className="form-group">
      <label tmlfor={id}>{title}</label>
      <select value={selectedValue} onChange={handleChange} className="form-control" id={id}>
        {values.map(([key, value]) =>
          <option value={value} key={key}>{key}</option>
        )}
      </select>
    </div>
  );
};

DropdownList.propTypes = {
  values: PropTypes.array.isRequired,
  selectedValue: PropTypes.number,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleChange: PropTypes.func
};

export default DropdownList;
