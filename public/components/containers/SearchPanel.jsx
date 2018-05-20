import { connect } from 'react-redux';
import SearchPanel from '../ui/SearchPanel';
import {
  findMovies,
  setSearchText,
  setSearchBy,
  setRedirect,
  setCameFromLink,
} from '../../actions';

const mapStateToProps = state => Object.assign(
  {},
  state.searchPanel, {
    sortOption: state.sortBy,
    fetchFilmsOnLoad: state.foundMovies,
  },
);

const mapDispatchToProps = dispatch => ({
  startSearch(value, filter, sortOption) {
    if (!value) {
      console.log('Search field is empty');
      return;
    }
    dispatch(findMovies({
      value,
      filter,
      sortOption,
    }));
    dispatch(setRedirect(true));
    dispatch(setCameFromLink(false));
  },
  findMovies(query) {
    dispatch(findMovies({ query }));
  },
  handleSearchChange(event) {
    dispatch(setSearchText(event.target.value));
  },
  onFilterUpdate(changeEvent) {
    dispatch(setSearchBy(changeEvent.target.value));
  },
  setCameFromLink: value => dispatch(setCameFromLink(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
export default Container;
