import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/SearchField.css';

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
      className="SearchField"
      placeholder={placeholder}
      onChange={this.handleChange}
      onKeyPress={this.handleKeyPress}
    />);
  }
}

SearchField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default SearchField;
