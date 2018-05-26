import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/MovieTile.css';

const MovieTile = props => (
  <div className="MovieTile">
    <img data-id={props.id} src={props.poster_path} alt="movie" />
    <span className="Title">{props.title}</span>
    <div className="ReleaseDate">
      <span>{props.release_date}</span>
    </div>
    <span className="Genre">{props.genres.toString()}</span>
  </div>
);

MovieTile.propTypes = {
  id: PropTypes.string.isRequired,
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
