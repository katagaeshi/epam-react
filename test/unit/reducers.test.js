import actions from 'public/constants';
import {
  searchText,
  searchBy,
  sortBy,
  foundMovies,
  foundDetails,
  activePanel,
  fetching,
} from 'public/store/reducers';

const actionNames = Object.keys(actions);
const filterAction =
  excludeActions => actionNames.filter(actionName => !excludeActions.includes(actionName));
const generateIgnoreActionsTest = (reducer, excludedActions) => () => {
  const anotherActions = filterAction(excludedActions);
  anotherActions.forEach((action) => {
    expect(reducer({}, {
      type: action,
      payload: true,
    })).toEqual({});
  });
};

describe('reducers', () => {
  describe('searchText', () => {
    it('reduce on SET_SEARCH_TEXT action', () => {
      expect(searchText({}, {
        type: actions.SET_SEARCH_TEXT,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(searchText, [actions.SET_SEARCH_TEXT]),
    );
  });
  describe('searchBy', () => {
    it('reduce on SET_SEARCH_BY action', () => {
      expect(searchBy({}, {
        type: actions.SET_SEARCH_BY,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(searchBy, [actions.SET_SEARCH_BY]),
    );
  });
  describe('sortBy', () => {
    it('reduce on SET_SORT_BY action', () => {
      expect(sortBy({}, {
        type: actions.SET_SORT_BY,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(sortBy, [actions.SET_SORT_BY]),
    );
  });
  describe('foundMovies', () => {
    it('reduce on SET_FOUND_MOVIES action', () => {
      expect(foundMovies({}, {
        type: actions.SET_FOUND_MOVIES,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(foundMovies, [actions.SET_FOUND_MOVIES]),
    );
  });
  describe('foundDetails', () => {
    it('reduce on SET_MOVIE_DETAILS action', () => {
      expect(foundDetails({}, {
        type: actions.SET_MOVIE_DETAILS,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(foundDetails, [actions.SET_MOVIE_DETAILS]),
    );
  });
  describe('activePanel', () => {
    it('reduce on SET_ACTIVE_PANEL action', () => {
      expect(activePanel({}, {
        type: actions.SET_ACTIVE_PANEL,
        payload: true,
      })).toEqual(true);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(activePanel, [actions.SET_ACTIVE_PANEL]),
    );
  });
  describe('fetching', () => {
    it('reduce on FETCH_MOVIES action', () => {
      expect(fetching({}, {
        type: actions.FETCH_MOVIES,
      })).toEqual(true);
    });
    it('reduce on CANCEL_FETCHING action', () => {
      expect(fetching({}, {
        type: actions.CANCEL_FETCHING,
      })).toEqual(false);
    });
    it(
      'ignore another actions',
      generateIgnoreActionsTest(fetching, [actions.FETCH_MOVIES, actions.CANCEL_FETCHING]),
    );
  });
});
