import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RadioButtonGroup.css';

const getCheckedProperty = (checked, option) => (checked && option === checked);

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onUpdate = this.props.onUpdate;
    this.state = {
      selectedOption: this.props.checked,
    };
  }

  handleOptionChange(changeEvent) {
    const selectedOption = changeEvent.target.value;
    this.setState({
      selectedOption,
    });
    this.onUpdate(selectedOption);
  }

  render() {
    const options = this.props.options.map((option, idx) => {
      const id = this.props.idPrefix + idx;
      const key = id;
      return (
        <div key={key} className="RadioButton">
          <input
            type="radio"
            value={option}
            id={id}
            checked={getCheckedProperty(this.state.selectedOption, option)}
            onChange={this.handleOptionChange}
          />
          <label htmlFor={id}>{option}</label>
        </div>
      );
    });

    return options;
  }
}

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  idPrefix: PropTypes.string.isRequired,
  checked: PropTypes.string,
  onUpdate: PropTypes.func,
};

RadioButtonGroup.defaultProps = {
  checked: null,
  onUpdate: () => {},
};

export default RadioButtonGroup;
