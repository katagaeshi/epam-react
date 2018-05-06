import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchField.css';

const placeholder = 'Enter movie info here';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.handleChange;
  }

  render() {
    return (<input
      className="SearchField"
      placeholder={placeholder}
      onChange={this.handleChange}
    />);
  }
}

SearchField.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchField;
