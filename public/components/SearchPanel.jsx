import React from 'react';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import Button from './Button';

const labelText = 'FIND YOUR MOVIE';
const SearchPanel = () => (
  <div>
    <label htmlFor="searchMovie">
      {labelText}
      <SearchField id="searchMovie" />
      <SearchFilter />
      <Button text="SEARCH" />
    </label>
  </div>
);

export default SearchPanel;
