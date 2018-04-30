/*
  As header and footer are the same currently in our program
  it means logically to make one component for both.
*/

import React from 'react';
import PropTypes from 'prop-types';

const defaultText = 'netflixroulette';

const RunningTitle = props => <span>{props.text}</span>;

RunningTitle.defaultProps = {
  text: defaultText,
};

RunningTitle.propTypes = {
  text: PropTypes.string,
};

export default RunningTitle;
