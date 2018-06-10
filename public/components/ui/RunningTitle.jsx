// @flow

/*
  As header and footer are the same currently in our program
  it means logically to make one component for both.
*/

import React from 'react';
import injectSheet from 'react-jss';

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

type Props = {
  text: string,
  classes: {
    runningTitle: string,
  }
};

const RunningTitle = (props: Props) => <span className={props.classes.runningTitle}>{props.text}</span>;

RunningTitle.defaultProps = {
  text: defaultText,
};

export default injectSheet(styles)(RunningTitle);
