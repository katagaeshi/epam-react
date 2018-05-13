import { connect } from 'react-redux';
import MovieDetails from '../ui/MovieDetails';
import { setActivePanel } from '../../actions';

const mapStateToProps = state => state.foundMovies.value.movies[state.movieDetails];

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(setActivePanel('SearchPanel'));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
export default Container;
