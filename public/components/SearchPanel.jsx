import React from 'react';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import '../styles/SearchPanel.css';

const labelText = 'FIND YOUR MOVIE';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.onFilterUpdate = this.onFilterUpdate.bind(this);
    this.state = {
      value: '',
      filter: SearchFilter.defaultProps.checked,
    };
  }

  onFilterUpdate(filter) {
    this.setState({
      filter,
    });
  }

  handleSearchChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  startSearch() {
    if (!this.state.value) {
      console.log('Search field is empty');
      return;
    }
    console.log(`Making request for movies: '${this.state.value} with filter '${this.state.filter}'`);
  }

  render() {
    return (
      <div className="SearchPanel">
        <span className="Header">
          {labelText}
        </span>
        <SearchField
          handleChange={this.handleSearchChange}
        />
        <SearchFilter
          onUpdate={this.onFilterUpdate}
        />
        <button
          className="SearchButton"
          onClick={this.startSearch}
        >
        SEARCH
        </button>
      </div>
    );
  }
}

export default SearchPanel;
