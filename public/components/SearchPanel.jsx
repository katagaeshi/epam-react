import React from 'react';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import Button from './Button';
import '../styles/SearchPanel.css';

const labelText = 'FIND YOUR MOVIE';
const SearchPanel = () => (
  <div className="SearchPanel">
    <span className="Header">
      {labelText}
    </span>
    <SearchField />
    <SearchFilter />
    <Button text="SEARCH" />
  </div>
);

export default SearchPanel;
