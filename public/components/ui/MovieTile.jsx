import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  movieTile: {
    display: 'grid',
    'grid-auto-columns': '2fr 1fr',
  },

  image: {
    'object-fit': 'contain',
    'max-width': '100%',
    'grid-row': '1 / 1',
    'grid-column': '1 / 3',
  },

  releaseDate: {
    'grid-row': '2 / 2',
    'grid-column': '2 / 2',
    'text-align': 'right',
  },

  releaseDateSpan: {
    'border-style': 'solid',
    'border-width': '1px',
    display: 'inline-block',
    'white-space': 'nowrap',
  },

  genre: {
    'grid-row': '3 / 3',
    'grid-column': '1 / 1',
  },

  title: {
    'grid-row': '2 / 2',
    'grid-column': '1 / 1',
    'font-weight': 'bold',
  },
};

const MovieTile = (props) => {
  const {
    movieTile,
    image,
    title,
    releaseDate,
    releaseDateSpan,
    genre,
  } = props.classes;
  return (
    <div className={movieTile}>
      <img className={image} data-id={props.id} src={props.poster_path} alt="movie" />
      <span className={title}>{props.title}</span>
      <div className={releaseDate}>
        <span className={releaseDateSpan}>{props.release_date}</span>
      </div>
      <span className={genre}>{props.genres.toString()}</span>
    </div>
  );
};

MovieTile.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.shape({
    movieTile: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    releaseDateSpan: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};

MovieTile.defaultProps = {
  poster_path: null,
  release_date: null,
  genres: 'unknown',
};

export default injectSheet(styles)(MovieTile);
