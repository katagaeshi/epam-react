import { combineReducers } from 'redux';
import actions from '../constants';
import initialState from './initialState.json';

const searchText = (state = initialState.searchPanel.text, action) =>
  ((action.type === actions.SET_SEARCH_TEXT) ?
    action.payload :
    state);

const searchBy = (state = initialState.searchPanel.filter, action) =>
  ((action.type === actions.SET_SEARCH_BY) ?
    action.payload :
    state);

const sortBy = (state = initialState.sortBy, action) =>
  ((action.type === actions.SET_SORT_BY) ?
    action.payload :
    state);

const foundMovies = (state = initialState.foundMovies.value, action) =>
  ((action.type === actions.SET_FOUND_MOVIES) ?
    action.payload :
    state);

const foundDetails = (state = initialState.movieDetails.value, action) =>
  ((action.type === actions.OPEN_MOVIE_DETAILS) ?
    action.payload :
    state);

const activePanel = (state = initialState.activePanel, action) =>
  ((action.type === actions.SET_ACTIVE_PANEL) ?
    action.payload :
    state);


export const fetching = (state = false, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES:
      return true;
    case actions.FETCH_MOVIE_DETAILS:
      return true;
    case actions.CANCEL_FETCHING:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  searchPanel: combineReducers({
    text: searchText,
    filter: searchBy,
  }),
  sortBy,
  activePanel,
  foundMovies: combineReducers({
    fetching,
    value: foundMovies,
  }),
  movieDetails: combineReducers({
    fetching,
    foundDetails,
  }),
});
