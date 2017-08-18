import React, { PropTypes } from 'react';

const Input = (props) => {
  let wrapperClass = 'form-group';
  if (props.error && props.error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type={props.controlType}
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange} />
        <div className="input">{props.error}</div>
      </div>
    </div>
  );
};

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  controlType: React.PropTypes.string,
  error: React.PropTypes.string
};

export default Input;
