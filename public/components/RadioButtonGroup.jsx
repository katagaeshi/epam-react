import React from 'react';
import PropTypes from 'prop-types';

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
    const options = this.props.options.map(option => (
      <div>
        <label htmlFor={option}>{option}
          <input
            type="radio"
            value={option}
            checked={getCheckedProperty(this.state.selectedOption, option)}
            onChange={this.handleOptionChange}
          />
        </label>
      </div>
    ));

    return options;
  }
}

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  checked: null,
};

export default RadioButtonGroup;
