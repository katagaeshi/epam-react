import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import SearchField from './SearchField';
import SearchFilter from './SearchFilter';

const styles = {
  searchPanel: {
    display: 'grid',
    'grid-template-rows': '20px 20px 20px',
    'grid-template-columns': '300px',
    'background-color': 'gray',
    color: 'white',
  },

  header: {
    'grid-row': '1',
  },

  searchButtonContainer: {
    'grid-row': '3',
    'grid-column': '2 / 2',
    'text-align': 'right',
  },

  searchButton: {
    'background-color': 'pink',
    color: 'white',
    border: 'none',
    width: '100px',
    height: '20px',
  },
};

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

  componentDidMount() {
    if (this.props.query) {
      this.props.findMovies(this.props.query);
    }
  }

  render() {
    const {
      searchPanel,
      header,
      searchButtonContainer,
      searchButton,
    } = this.props.classes;
    return (
      <div className={searchPanel}>
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
        <div className={searchButtonContainer}>
          <button
            className={searchButton}
            onClick={this.onClick}
          >
          SEARCH
          </button>
        </div>
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
  classes: PropTypes.shape({
    searchPanel: PropTypes.string,
    header: PropTypes.string,
    searchButtonContainer: PropTypes.string,
    searchButton: PropTypes.string,
  }).isRequired,
};

SearchPanel.defaultProps = {
  query: null,
};

export default injectSheet(styles)(SearchPanel);
