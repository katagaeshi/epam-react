// @flow

import { connect } from 'react-redux';
import MainPage from '../ui/MainPage';
import {
  setRedirect,
  findMovies,
} from './../../actions';

const mapStateToProps = state => ({
  activePanel: state.activePanel,
  movieDetailsId: state.movieDetails.toString(),
  redirect: state.redirect,
  searchQuery: state.searchQuery,
});

const mapDispatchToProps = dispatch => ({
  setRedirect: value => dispatch(setRedirect(value)),
  findMovies: (query) => {
    dispatch(findMovies({
      query,
      value: null,
      filter: null,
      sortOption: null,
    }));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default Container;
