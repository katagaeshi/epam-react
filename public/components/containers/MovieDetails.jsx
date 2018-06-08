// @flow

import { connect } from 'react-redux';
import MovieDetails from '../ui/MovieDetails';
import {
  setActivePanel,
  setRedirect,
  fetchMovieDetails,
} from '../../actions';

const areMovieDetailsFetched = (id, state) => id !== -1 && state.foundMovies.value.movies.find;

const mapStateToProps =
  (state) => {
    const parsedId = parseInt(state.movieDetails, 10);
    if (areMovieDetailsFetched(parsedId, state)) {
      return state
        .foundMovies
        .value
        .movies
        .find(movie => movie.id === parsedId);
    }
    return {
      notFound: true,
    };
  };

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
