// @flow

import { combineReducers } from 'redux';
import actions from '../constants';
import initialState from './initialState.json';

export const searchText = (
  state: string = initialState.searchPanel.text,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_SEARCH_TEXT) ?
    action.payload :
    state);

export const searchBy = (
  state: string = initialState.searchPanel.filter,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_SEARCH_BY) ?
    action.payload :
    state);

export const sortBy = (
  state: string = initialState.sortBy,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_SORT_BY) ?
    action.payload :
    state);

export const foundMovies = (
  state: string = initialState.foundMovies.value,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_FOUND_MOVIES) ?
    action.payload :
    state);

export const foundDetails = (
  state: string = initialState.movieDetails,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_MOVIE_DETAILS) ?
    action.payload :
    state);

export const activePanel = (
  state: string = initialState.activePanel,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_ACTIVE_PANEL) ?
    action.payload :
    state);

export const redirect = (
  state: string = initialState.redirect,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_REDIRECT) ?
    action.payload :
    state);

export const searchQuery = (
  state: string = initialState.searchQuery,
  action: {
    type: string,
    payload: string,
  },
) =>
  ((action.type === actions.SET_SEARCH_QUERY) ?
    action.payload :
    state);

export const fetching = (
  state: boolean = false,
  action: {
    type: string,
  },
) => {
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
