// @flow

import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  searchField: {
    'grid-row': '2',
    'grid-column': '1 / 3',
  },
};

const placeholder = 'Enter movie info here';

type Props = {
  handleChange: () => {},
  onEnter: () => {},
  classes: {
    searchField: string,
  },
};

class SearchField extends React.Component<Props> {
  handleChange: () => {};
  handleKeyPress: () => {};

  constructor(props) {
    super(props);
    this.handleChange = props.handleChange;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onEnter();
    }
  }

  render() {
    return (<input
      className={this.props.classes.searchField}
      placeholder={placeholder}
      onChange={this.handleChange}
      onKeyPress={this.handleKeyPress}
    />);
  }
}

export default injectSheet(styles)(SearchField);
