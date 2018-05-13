import React from 'react';
import PropTypes from 'prop-types';
import RunningTitle from './RunningTitle';
import SearchPanel from './../containers/SearchPanel';
import FoundMovies from './../containers/FoundMovies';
import MovieDetails from './../containers/MovieDetails';
import ErrorBoundary from './ErrorBoundary';

const MainPage = props => (
  <div>
    <ErrorBoundary>
      <RunningTitle />
      {props.activePanel === 'SearchPanel' ? <SearchPanel /> : <MovieDetails /> }
      <FoundMovies />
      <RunningTitle />
    </ErrorBoundary>
  </div>
);

MainPage.propTypes = {
  activePanel: PropTypes.string.isRequired,
};

export default MainPage;
