// @flow

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { List } from 'immutable';

import MovieDetails from '../ui/MovieDetails';
import {
  setActivePanel,
  setRedirect,
  fetchMovieDetails,
} from '../../actions';

const areMovieDetailsFetched = (id, movies) => id !== -1 && movies.find;

const getMovieDetailsId = (state: { movieDetails: string }) => state.movieDetails;
const getFoundMovies = (state:
  { foundMovies:
    {
      value:
        { movies: List<{id: number}>}
    },
  }) => state.foundMovies.value.movies;

const getMovieDetails = createSelector(
  [getMovieDetailsId, getFoundMovies],
  (movieDetailsId, foundMovies) => {
    const parsedId = parseInt(movieDetailsId, 10);
    if (areMovieDetailsFetched(parsedId, foundMovies)) {
      return foundMovies.find(movie => movie.id === parsedId);
    }
    return {
      notFound: true,
    };
  },
);

const mapStateToProps = state => getMovieDetails(state);

const mapDispatchToProps = dispatch => ({
  onClick: (event) => {
    dispatch(setActivePanel('SearchPanel'));
    dispatch(setRedirect(true));
    event.stopPropagation();
  },
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id)),
  setActivePanel: name => dispatch(setActivePanel(name)),
  redirectOnRenderFail: () => {
    dispatch(setActivePanel('SearchPanel'));
    dispatch(setRedirect(true));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
export default Container;
