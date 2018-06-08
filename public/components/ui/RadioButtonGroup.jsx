import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  radioButton: {
    display: 'inline-block',
    height: '20px',
  },

  label: {
    color: 'white',
    'padding-right': '10px',
    'padding-left': '10px',
    'padding-top': '2px',
    'padding-bottom': '1px',
  },

  input: {
    visibility: 'hidden',
    '&:not(:checked) + label': {
      'background-color': 'black',
    },
    '&:checked + label': {
      'background-color': 'pink',
    },
  },
};

const getCheckedProperty = (checked, option) => (checked && option === checked);

const RadioButtonGroup = (props) => {
  const options = props.options.map((option, idx) => {
    const id = props.idPrefix + idx;
    const key = id;
    const {
      radioButton,
      input,
      label,
    } = props.classes;
    return (
      <div key={key} className={radioButton}>
        <input
          className={input}
          type="radio"
          value={option}
          id={id}
          checked={getCheckedProperty(props.checked, option)}
          onChange={props.onUpdate}
        />
        <label className={label} htmlFor={id}>{option}</label>
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
  classes: PropTypes.shape({
    radioButton: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

RadioButtonGroup.defaultProps = {
  checked: null,
};

export default injectSheet(styles)(RadioButtonGroup);
