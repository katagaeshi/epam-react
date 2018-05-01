/*
  As header and footer are the same currently in our program
  it means logically to make one component for both.
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RunningTitle.css';

const defaultText = 'netflixroulette';

const RunningTitle = props => <span className="RunningTitle">{props.text}</span>;

RunningTitle.defaultProps = {
  text: defaultText,
};

RunningTitle.propTypes = {
  text: PropTypes.string,
};

export default RunningTitle;
