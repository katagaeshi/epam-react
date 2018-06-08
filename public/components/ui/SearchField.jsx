import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  searchField: {
    'grid-row': '2',
    'grid-column': '1 / 3',
  },
};

const placeholder = 'Enter movie info here';

class SearchField extends React.Component {
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

SearchField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    searchField: PropTypes.string,
  }).isRequired,
};

export default injectSheet(styles)(SearchField);
