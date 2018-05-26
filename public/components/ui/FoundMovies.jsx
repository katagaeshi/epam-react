import React from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import ResultsSort from './ResultsSort';
import '../../styles/EmptyResults.css';
import '../../styles/FoundMovies.css';

const extractMovies = (movies, onClick) => {
  const tiles = movies.map((movie, idx) => {
    const key = idx;
    return (<MovieTile
      idx={idx}
      key={key}
      {...movie}
    />);
  });
  return (
    <div
      onClick={onClick}
      role="presentation"
      className="FoundMovies"
    >
      {tiles}
    </div>
  );
};

const FoundMovies = (props) => {
  const {
    movies,
    option,
    onSortUpdate,
  } = props;

  let moviesFoundMessage = '';
  let resultsSort = null;
  if (props.total) {
    moviesFoundMessage = `${props.total} movies found`;
    const onUpdate = (event) => {
      onSortUpdate(event, movies);
    };
    resultsSort = (
      <ResultsSort
        onUpdate={onUpdate}
        checked={option}
      />
    );
  } else {
    moviesFoundMessage = FoundMovies.defaultProps.total;
  }
  const totalMessage = (
    <span
      className={!movies ? 'EmptyResults' : null}
    >
      {moviesFoundMessage}
    </span>
  );

  return (
    <div>
      {totalMessage}
      {resultsSort}
      {
        movies ?
          extractMovies(movies, props.onMovieClick) :
          null
      }
    </div>
  );
};

FoundMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    genre: PropTypes.string,
  })),
  total: PropTypes.string,
  option: PropTypes.string.isRequired,
  onSortUpdate: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

FoundMovies.defaultProps = {
  movies: null,
  total: 'No films found',
};

export default FoundMovies;
