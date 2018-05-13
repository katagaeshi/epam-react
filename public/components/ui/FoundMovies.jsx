import React from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import ResultsSort from './ResultsSort';
import '../../styles/EmptyResults.css';

const COMPARATOR = {
  rating: (a, b) => a.vote_average - b.vote_average,
  'release date': (a, b) => a.release_date >= b.release_date,
};
const extractMovies = (movies, sortBy) => {
  const compare = COMPARATOR[sortBy];
  return movies.sort(compare).map((movie, idx) => {
    const key = idx;
    return (<MovieTile
      key={key}
      {...movie}
    />);
  });
};

const FoundMovies = (props) => {
  const { movies, option, onSortUpdate } = props;
  let moviesFoundMessage = '';
  let resultsSort = null;
  if (props.total) {
    moviesFoundMessage = `${props.total} movies found`;
    resultsSort = (
      <ResultsSort
        onUpdate={onSortUpdate}
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
          extractMovies(movies, option) :
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
};

FoundMovies.defaultProps = {
  movies: null,
  total: 'No films found',
};

export default FoundMovies;
