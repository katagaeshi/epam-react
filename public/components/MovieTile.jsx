import React from 'react';
import PropTypes from 'prop-types';

const MovieTile = props => (
  <div>
    <img src={props.src} alt="movie" />
    <span>{props.title}</span>
    <span>{props.year}</span>
    <span>{props.genre}</span>
  </div>
);

MovieTile.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  genre: PropTypes.string,
};

MovieTile.defaultProps = {
  src: null,
  year: null,
  genre: 'unknown',
};

export default MovieTile;
