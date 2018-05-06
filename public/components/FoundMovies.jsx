import React from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import '../styles/EmptyResults.css';

const extractMovies = movies => movies.map((movie, idx) => {
  const key = idx;
  return (<MovieTile
    key={key}
    {...movie}
  />);
});

const FoundMovies = (props) => {
  const { movies } = props;
  const totalMessage = <span className={!movies ? 'EmptyResults' : null}>{props.total}</span>;

  return (
    <div>
      {totalMessage}
      {
        movies ?
          extractMovies(movies) :
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
};

FoundMovies.defaultProps = {
  movies: null,
  total: 'No films found',
};

export default FoundMovies;
