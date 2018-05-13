import { connect } from 'react-redux';
import SearchPanel from '../ui/SearchPanel';
import {
  findMovies,
  setSearchText,
  setSearchBy,
} from '../../actions';

const mapStateToProps = state => state.searchPanel;

const mapDispatchToProps = dispatch => ({
  startSearch(text, filter) {
    if (!text) {
      console.log('Search field is empty');
      return;
    }
    dispatch(findMovies(text, filter));
  },
  handleSearchChange(event) {
    dispatch(setSearchText(event.target.value));
  },
  onFilterUpdate(changeEvent) {
    dispatch(setSearchBy(changeEvent.target.value));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
export default Container;
