// @flow

import React from 'react';
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

type Props = {
  startSearch: (
    query: string,
    filter: string,
    sortOption: string) => {},
  handleSearchChange: () => {},
  onFilterUpdate: () => {},
  text: string,
  filter: string,
  sortOption: string,
  query: string,
  findMovies: (query: string) => {},
  classes: {
    searchPanel: string,
    header: string,
    searchButtonContainer: string,
    searchButton: string,
  },
};

class SearchPanel extends React.Component<Props> {
  onClick: () => {};

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (this.props.query) {
      this.props.findMovies(this.props.query);
    }
  }

  onClick() {
    this.props.startSearch(
      this.props.text,
      FILTER[this.props.filter],
      this.props.sortOption,
    );
  }

  render() {
    const {
      searchPanel,
      searchButtonContainer,
      searchButton,
    } = this.props.classes;
    return (
      <div className={searchPanel}>
        <span className={this.props.classes.header}>
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

export default injectSheet(styles)(SearchPanel);
