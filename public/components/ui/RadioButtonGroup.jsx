// @flow

import React from 'react';
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

type Props = {
  options: Array<string>,
  idPrefix: string,
  checked: string,
  onUpdate: () => {},
  classes: {
    radioButton: string,
    input: string,
    label: string,
  },
};

const RadioButtonGroup = (props: Props) => {
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

RadioButtonGroup.defaultProps = {
  checked: null,
};

export default injectSheet(styles)(RadioButtonGroup);
