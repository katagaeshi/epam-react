import { connect } from 'react-redux';
import FoundMovies from '../ui/FoundMovies';
import {
  setSortBy,
  sortMovies,
  setMovieDetails,
  setActivePanel
} from '../../actions';

const mapStateToProps = state => (
  Object.assign({}, state.foundMovies.value, {
    option: state.sortBy,
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
      dispatch(setMovieDetails(event.target.dataset.idx));
      dispatch(setActivePanel('MovieDetails'));
    }
    event.stopPropagation();
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(FoundMovies);
export default Container;
