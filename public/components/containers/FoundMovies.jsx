// @flow

import { connect } from 'react-redux';
import { List } from 'immutable';
import FoundMovies from '../ui/FoundMovies';
import {
  setSortBy,
  sortMovies,
  setMovieDetails,
  setActivePanel,
  setRedirect,
} from '../../actions';

const mapStateToProps = state => (
  Object.assign({}, state.foundMovies.value, {
    option: state.sortBy,
    selectedMovie: state.movieDetails,
    activePanel: state.activePanel,
  })
);

type EventTarget = {
  dataset: { id: number },
};

const mapDispatchToProps = dispatch => ({
  onSortUpdate(changeEvent: { target: { value: string }}, movies: List<{}>) {
    const sortOption = changeEvent.target.value;
    dispatch(setSortBy(sortOption));
    dispatch(sortMovies(sortOption, movies));
  },
  onMovieClick(event: {
    target: EventTarget,
    currentTarget: EventTarget,
    stopPropagation: () => {},
  }) {
    if (event.target !== event.currentTarget) {
      dispatch(setMovieDetails(event.target.dataset.id || null));
      dispatch(setActivePanel('MovieDetails'));
      dispatch(setRedirect(true));
    }
    event.stopPropagation();
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(FoundMovies);
export default Container;
