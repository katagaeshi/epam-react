import { connect } from 'react-redux';
import MovieDetails from '../ui/MovieDetails';

const mapStateToProps = state => state.movieDetails.value;

const Container = connect(mapStateToProps)(MovieDetails);
export default Container;
