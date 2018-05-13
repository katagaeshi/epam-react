import actions from './constants';

export const openMovieDetails = id => ({
  type: actions.OPEN_MOVIE_DETAILS,
  payload: id,
});

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

const endpoint = 'http://react-cdp-api.herokuapp.com';

export const findMovies = (value, filter) => (dispatch) => {
  dispatch({
    type: actions.FETCH_MOVIES,
  });

  fetch(`${endpoint}/movies?search=${encodeURIComponent(value)}&searchBy=${filter}`)
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
        type: actions.CANCEL_FETCHING,
      });
    });
};


export const getMovieDetails = id => (dispatch) => {
  dispatch({
    type: actions.FETCH_MOVIE_DETAILS,
  });

  fetch(`${endpoint}/movies/${id}`)
    .then(results => results.json())
    .then((results) => {
      dispatch({
        type: actions.SET_MOVIE_DETAILS,
        payload: results,
      });
      dispatch({
        type: actions.SET_ACTIVE_PANEL,
        payload: 'MovieDetails',
      });
      dispatch({
        type: actions.CANCEL_FETCHING,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: actions.CANCEL_FETCHING,
      });
    });
};
