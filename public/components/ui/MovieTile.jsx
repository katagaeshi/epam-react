import React from 'react';
import PropTypes from 'prop-types';

const MovieTile = props => (
  <div>
    <img src={props.poster_path} alt="movie" />
    <span>{props.title}</span>
    <span>{props.release_date}</span>
    <span>{props.genres.toString()}</span>
  </div>
);

MovieTile.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

MovieTile.defaultProps = {
  poster_path: null,
  release_date: null,
  genres: 'unknown',
};

export default MovieTile;
