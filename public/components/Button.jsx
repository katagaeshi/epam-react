import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button type="button" className={props.className}>{props.text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
