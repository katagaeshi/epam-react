import { connect } from 'react-redux';
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

const mapDispatchToProps = dispatch => ({
  onSortUpdate(changeEvent, movies) {
    const sortOption = changeEvent.target.value;
    dispatch(setSortBy(sortOption));
    dispatch(sortMovies(sortOption, movies));
  },
  onMovieClick(event) {
    if (event.target !== event.currentTarget) {
      dispatch(setMovieDetails(event.target.dataset.id));
      dispatch(setActivePanel('MovieDetails'));
      dispatch(setRedirect(true));
    }
    event.stopPropagation();
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(FoundMovies);
export default Container;
