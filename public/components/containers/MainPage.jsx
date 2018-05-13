import { connect } from 'react-redux';
import MainPage from '../ui/MainPage';

const mapStateToProps = state => ({
  activePanel: state.activePanel,
});

const Container = connect(mapStateToProps)(MainPage);
export default Container;
