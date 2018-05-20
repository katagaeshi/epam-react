import actions from './constants';

export const setSearchText = text => ({
  type: actions.SET_SEARCH_TEXT,
  payload: text,
});

export const setSearchBy = filter => ({
  type: actions.SET_SEARCH_BY,
  payload: filter,
});

export const setSortBy = option => ({
  type: actions.SET_SORT_BY,
  payload: option,
});

export const setMovieDetails = id => ({
  type: actions.SET_MOVIE_DETAILS,
  payload: id,
});

export const setActivePanel = panel => ({
  type: actions.SET_ACTIVE_PANEL,
  payload: panel,
});

export const setRedirect = value => ({
  type: actions.SET_REDIRECT,
  payload: value,
});

export const setSearchQuery = query => ({
  type: actions.SET_SEARCH_QUERY,
  payload: query,
});

export const setCameFromLink = value => ({
  type: actions.SET_CAME_FROM_LINK,
  payload: value,
});

const COMPARATOR = {
  rating: (a, b) => a.vote_average - b.vote_average,
  'release date': (a, b) => a.release_date >= b.release_date,
};

export const sortMovies = (sortOption, movies) => ({
  type: actions.SET_FOUND_MOVIES,
  payload: {
    total: movies.length,
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
  query = null,
}) => (dispatch) => {
  dispatch({
    type: actions.FETCH_MOVIES,
  });

  const searchQuery = query || `${encodeURIComponent(value)}&searchBy=${filter}&sortBy=${SORT_OPTIONS[sortOption]}`;

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
          movies: results.data,
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
          movies: [],
        },
      });
      dispatch({
        type: actions.CANCEL_FETCHING,
      });
    });
};
