// @flow

import actions from './constants';
import { List } from 'immutable';

export const setSearchText = (text: string) => ({
  type: actions.SET_SEARCH_TEXT,
  payload: text,
});

export const setSearchBy = (filter: string) => ({
  type: actions.SET_SEARCH_BY,
  payload: filter,
});

export const setSortBy = (option: string) => ({
  type: actions.SET_SORT_BY,
  payload: option,
});

export const setMovieDetails = (id: ?number) => ({
  type: actions.SET_MOVIE_DETAILS,
  payload: id,
});

export const setActivePanel = (panel: string) => ({
  type: actions.SET_ACTIVE_PANEL,
  payload: panel,
});

export const setRedirect = (value: boolean) => ({
  type: actions.SET_REDIRECT,
  payload: value,
});

export const setSearchQuery = (query: string) => ({
  type: actions.SET_SEARCH_QUERY,
  payload: query,
});

const COMPARATOR = {
  rating: (
    a: {
      vote_average: number,
    },
    b: {
      vote_average: number,
    },
  ) => a.vote_average - b.vote_average,
  'release date': (
    a: {
      release_date: string,
    },
    b: {
      release_date: string,
    },
  ) => a.release_date >= b.release_date,
};

export const sortMovies = (
  sortOption: string,
  movies: List<{}>,
) : {
  type: string,
  payload: {
    total: number,
    movies: List<{}>,
  }
} => ({
  type: actions.SET_FOUND_MOVIES,
  payload: {
    total: movies.size,
    movies: movies.sort(COMPARATOR[sortOption]),
  },
});

const endpoint = 'http://react-cdp-api.herokuapp.com';

const SORT_OPTIONS = {
  'release date': 'release_date',
  rating: 'vote_average',
};

export const findMovies = ({
  value,
  filter,
  sortOption,
  query,
} : {
  value: ?string,
  filter: ?string,
  sortOption: ?string,
  query: ?string,
}) => (dispatch: (
  action: {
    type: string,
  },
) => {}) => {
  dispatch({
    type: actions.FETCH_MOVIES,
  });

  let searchQuery = query;
  if (!searchQuery) {
    if (!value) {
      throw new Error('Function called with wrong arguments');
    }
    searchQuery = encodeURIComponent(value);
    if (filter) {
      searchQuery += `&searchBy=${filter}`;
    }

    if (sortOption) {
      searchQuery += `&sortBy=${SORT_OPTIONS[sortOption]}`;
    }
  }

  dispatch({
    type: actions.SET_SEARCH_QUERY,
    payload: searchQuery,
  });

  fetch(`${endpoint}/movies?search=${searchQuery}`)
    .then(results => results.json())
    .then((results) => {
      dispatch({
        type: actions.SET_FOUND_MOVIES,
        payload: {
          total: results.total,
          movies: List(results.data),
        },
      });
      dispatch({
        type: actions.CANCEL_FETCHING,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: actions.SET_FOUND_MOVIES,
        payload: {
          total: 0,
          movies: List(),
        },
      });
      dispatch({
        type: actions.CANCEL_FETCHING,
      });
    });
};

export const fetchMovieDetails = (id: number) => (dispatch: ({type: string}) => {}) => {
  dispatch({
    type: actions.FETCH_MOVIE_DETAILS,
  });

  return fetch(`${endpoint}/movies/${id}`)
    .then(results => results.json())
    .then((results) => {
      dispatch({
        type: actions.SET_MOVIE_DETAILS,
        payload: results.id,
      });
      dispatch({
        type: actions.SET_FOUND_MOVIES,
        payload: {
          total: 1,
          movies: List([results]),
        },
      });
      dispatch({
        type: actions.CANCEL_FETCH_MOVIE_DETAILS,
      });
    })
    .catch(() => {
      dispatch(setActivePanel('404'));
      dispatch(setRedirect(true));
      dispatch({
        type: actions.CANCEL_FETCH_MOVIE_DETAILS,
      });
    });
};
