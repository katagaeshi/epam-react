import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/RadioButtonGroup.css';

const getCheckedProperty = (checked, option) => (checked && option === checked);

const RadioButtonGroup = (props) => {
  const options = props.options.map((option, idx) => {
    const id = props.idPrefix + idx;
    const key = id;
    return (
      <div key={key} className="RadioButton">
        <input
          type="radio"
          value={option}
          id={id}
          checked={getCheckedProperty(props.checked, option)}
          onChange={props.onUpdate}
        />
        <label htmlFor={id}>{option}</label>
      </div>
    );
  });
  return options;
};

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  idPrefix: PropTypes.string.isRequired,
  checked: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
};

RadioButtonGroup.defaultProps = {
  checked: null,
};

export default RadioButtonGroup;
