import { combineReducers } from 'redux';
import actions from '../constants';
import initialState from './initialState.json';

export const searchText = (state = initialState.searchPanel.text, action) =>
  ((action.type === actions.SET_SEARCH_TEXT) ?
    action.payload :
    state);

export const searchBy = (state = initialState.searchPanel.filter, action) =>
  ((action.type === actions.SET_SEARCH_BY) ?
    action.payload :
    state);

export const sortBy = (state = initialState.sortBy, action) =>
  ((action.type === actions.SET_SORT_BY) ?
    action.payload :
    state);

export const foundMovies = (state = initialState.foundMovies.value, action) =>
  ((action.type === actions.SET_FOUND_MOVIES) ?
    action.payload :
    state);

export const foundDetails = (state = initialState.movieDetails, action) =>
  ((action.type === actions.SET_MOVIE_DETAILS) ?
    action.payload :
    state);

export const activePanel = (state = initialState.activePanel, action) =>
  ((action.type === actions.SET_ACTIVE_PANEL) ?
    action.payload :
    state);

export const redirect = (state = initialState.redirect, action) =>
  ((action.type === actions.SET_REDIRECT) ?
    action.payload :
    state);

export const searchQuery = (state = initialState.searchQuery, action) =>
  ((action.type === actions.SET_SEARCH_QUERY) ?
    action.payload :
    state);

export const fetching = (state = false, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES:
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
  searchQuery,
  activePanel,
  foundMovies: combineReducers({
    fetching,
    value: foundMovies,
  }),
  movieDetails: foundDetails,
  redirect,
});
