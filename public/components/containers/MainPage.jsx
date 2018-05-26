import { connect } from 'react-redux';
import MainPage from '../ui/MainPage';
import {
  setRedirect,
  findMovies,
} from './../../actions';
import actions from './../../constants';

const mapStateToProps = state => ({
  activePanel: state.activePanel,
  movieDetailsId: state.movieDetails,
  redirect: state.redirect,
  searchQuery: state.searchQuery,
});

const mapDispatchToProps = dispatch => ({
  setRedirect: value => dispatch(setRedirect(value)),
  findMovies: (query) => {
    dispatch(findMovies({ query }));
  },
  setCameFromLink: value => dispatch({
    type: actions.SET_CAME_FROM_LINK,
    payload: value,
  }),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default Container;
