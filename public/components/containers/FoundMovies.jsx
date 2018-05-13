import { connect } from 'react-redux';
import FoundMovies from '../ui/FoundMovies';
import { setSortBy } from '../../actions';

const mapStateToProps = state => (
  Object.assign({}, state.foundMovies.value, {
    option: state.sortBy,
  })
);

const mapDispatchToProps = dispatch => ({
  onSortUpdate(changeEvent) {
    dispatch(setSortBy(changeEvent.target.value));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(FoundMovies);
export default Container;
