// @flow

import React from 'react';
import injectSheet from 'react-jss';

import MovieTile from './MovieTile';
import ResultsSort from './ResultsSort';

const styles = {
  emptyResults: {
    display: 'block',
    'text-align': 'center',
    'font-size': '36px',
  },
  foundMovies: {
    display: 'grid',
    'grid-gap': '15px',
    'grid-row-gap': '15px',
    'grid-template-columns': 'repeat(auto-fit, minmax(220px, 1fr))',
  },
};

type Movie = {
  src: string,
  title: string,
  year: number,
  genre: string,
};
const extractMovies = (
  movies: Array<Movie>,
  onClick: () => {},
  classes: {
    foundMovies: string,
  },
) => {
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
      className={classes.foundMovies}
    >
      {tiles}
    </div>
  );
};

type Props = {
  movies: Array<Movie>,
  total: number,
  option: string,
  onSortUpdate: (
    event: Object,
    movies: Array<Movie>
  ) => {},
  onMovieClick: () => {},
  classes: {
    emptyResults: string,
    foundMovies: string,
  },
};

const FoundMovies = (props: Props) => {
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
      className={!movies.length ? props.classes.emptyResults : null}
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
          extractMovies(movies, props.onMovieClick, props.classes) :
          null
      }
    </div>
  );
};

FoundMovies.defaultProps = {
  movies: [],
  total: 'No films found',
};

export default injectSheet(styles)(FoundMovies);
