import React from 'react';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import '../styles/SearchPanel.css';

const labelText = 'FIND YOUR MOVIE';
const SearchPanel = () => (
  <div className="SearchPanel">
    <span className="Header">
      {labelText}
    </span>
    <SearchField />
    <SearchFilter />
    <button className="SearchButton">SEARCH</button>
  </div>
);

export default SearchPanel;
