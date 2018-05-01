import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RadioButtonGroup.css';

const getCheckedProperty = (checked, option) => (checked && option === checked);

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: this.props.checked,
    };
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  render() {
    const options = this.props.options.map((option, idx) => (
      <div className="RadioButton">
        <input
          type="radio"
          value={option}
          id={this.props.idPrefix + idx}
          checked={getCheckedProperty(this.state.selectedOption, option)}
          onChange={this.handleOptionChange}
        />
        <label htmlFor={this.props.idPrefix + idx}>{option}</label>
      </div>
    ));

    return options;
  }
}

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  idPrefix: PropTypes.string.isRequired,
  checked: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  checked: null,
};

export default RadioButtonGroup;
