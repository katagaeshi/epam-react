// @flow

import React from 'react';
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

type Props = {
  id: number,
  poster_path: string,
  title: string,
  release_date: string,
  genres: Array<string>,
  classes: {
    movieTile: string,
    image: string,
    title: string,
    releaseDate: string,
    releaseDateSpan: string,
    genre: string,
  },
};

const MovieTile = (props: Props) => {
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

MovieTile.defaultProps = {
  poster_path: null,
  release_date: null,
  genres: 'unknown',
};

export default injectSheet(styles)(MovieTile);
