import { List } from 'immutable';
import actions from 'public/constants';
import {
  setSearchText,
  setSearchBy,
  setSortBy,
  setMovieDetails,
  setActivePanel,
  sortMovies,
} from 'public/actions';

describe('actions', () => {
  it('setSearchText', () => {
    expect(setSearchText('test')).toEqual({
      type: actions.SET_SEARCH_TEXT,
      payload: 'test',
    });
  });
  it('setSearchBy', () => {
    expect(setSearchBy('test')).toEqual({
      type: actions.SET_SEARCH_BY,
      payload: 'test',
    });
  });
  it('setSortBy', () => {
    expect(setSortBy('test')).toEqual({
      type: actions.SET_SORT_BY,
      payload: 'test',
    });
  });
  it('setMovieDetails', () => {
    expect(setMovieDetails('test')).toEqual({
      type: actions.SET_MOVIE_DETAILS,
      payload: 'test',
    });
  });
  it('setActivePanel', () => {
    expect(setActivePanel('test')).toEqual({
      type: actions.SET_ACTIVE_PANEL,
      payload: 'test',
    });
  });
  describe('sortMovies', () => {
    const movie1 = {
      vote_average: 1,
      release_date: 2,
    };
    const movie2 = {
      vote_average: 3,
      release_date: 3,
    };
    const movie3 = {
      vote_average: 2,
      release_date: 1,
    };
    const movies = List([movie1, movie2, movie3]);
    it('by rating', () => {
      expect(sortMovies(
        'rating',
        movies,
      )).toEqual({
        type: actions.SET_FOUND_MOVIES,
        payload: {
          movies: List([movie1, movie3, movie2]),
          total: 3,
        },
      });
    });
    it('by release date', () => {
      expect(sortMovies(
        'release date',
        movies,
      )).toEqual({
        type: actions.SET_FOUND_MOVIES,
        payload: {
          movies: List([movie3, movie1, movie2]),
          total: 3,
        },
      });
    });
  });
});
