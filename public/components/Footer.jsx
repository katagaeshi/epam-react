import React from 'react';
import PropTypes from 'prop-types';

const defaultText = 'netflixroulette';

const Footer = props => (
  <div>
    <span>{props.text}</span>
  </div>
);

Footer.defaultProps = {
  text: defaultText,
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
