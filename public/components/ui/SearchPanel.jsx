import React from 'react';
import PropTypes from 'prop-types';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import '../../styles/SearchPanel.css';

const labelText = 'FIND YOUR MOVIE';

const FILTER = {
  TITLE: 'title',
  GENRE: 'genres',
};

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.startSearch(
      this.props.text,
      FILTER[this.props.filter],
      this.props.sortOption,
    );
  }

  render() {
    if (this.props.query) {
      this.props.findMovies(this.props.query);
    }
    return (
      <div className="SearchPanel">
        <span className="Header">
          {labelText}
        </span>
        <SearchField
          handleChange={this.props.handleSearchChange}
          onEnter={this.onClick}
        />
        <SearchFilter
          onUpdate={this.props.onFilterUpdate}
          checked={this.props.filter}
        />
        <button
          className="SearchButton"
          onClick={this.onClick}
        >
        SEARCH
        </button>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  startSearch: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  onFilterUpdate: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
  query: PropTypes.string,
  findMovies: PropTypes.func.isRequired,
  setCameFromLink: PropTypes.func.isRequired,
};

SearchPanel.defaultProps = {
  query: null,
};

export default SearchPanel;
