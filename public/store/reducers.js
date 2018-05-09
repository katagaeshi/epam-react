import actions from './actions';
import initialState from './initialState.json';
import { combineReducers } from 'redux';

const searchText = (state = initialState.searchText, action) =>
  ((action.type === actions.SET_SEARCH_TEXT) ?
    action.payload :
    state);

const searchBy = (state = initialState.searchBy, action) =>
  ((action.type === actions.SET_SEARCH_BY) ?
    action.payload :
    state);

const sortBy = (state = initialState.sortBy, action) =>
  ((action.type === actions.SET_SORT_BY) ?
    action.payload :
    state);

const foundMovies = (state = initialState.foundMovies, action) =>
  ((action.type === actions.SET_FOUND_MOVIES) ?
    action.payload :
    state);

const activePanel = (state = initialState.activePanel, action) =>
  ((action.type === actions.SET_ACTIVE_PANEL) ?
    action.payload :
    state);

export default combineReducers({
  searchText,
  searchBy,
  sortBy,
  foundMovies,
  activePanel,
});
