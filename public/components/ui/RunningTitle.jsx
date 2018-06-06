/*
  As header and footer are the same currently in our program
  it means logically to make one component for both.
*/

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import '../../styles/RunningTitle.css';

const styles = {
  runningTitle: {
    'padding-top': '20px',
    'padding-bottom': '20px',
    'background-color': 'gray',
    color: 'pink',
    display: 'block',
  },
};

const defaultText = 'netflixroulette';

const RunningTitle = props => <span className={props.classes.runningTitle}>{props.text}</span>;

RunningTitle.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.shape({
    runningTitle: PropTypes.string,
  }).isRequired,
};

RunningTitle.defaultProps = {
  text: defaultText,
};

export default injectSheet(styles)(RunningTitle);
