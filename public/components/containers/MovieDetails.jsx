import { connect } from 'react-redux';
import MovieDetails from '../ui/MovieDetails';
import {
  setActivePanel,
  setRedirect,
} from '../../actions';

const mapStateToProps =
  state =>
    (state.foundMovies.value.movies.find &&
    state
      .foundMovies
      .value
      .movies
      .find(movie => movie.id === parseInt(state.movieDetails, 10))) || {};

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(setActivePanel('SearchPanel'));
    dispatch(setRedirect(true));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
export default Container;
