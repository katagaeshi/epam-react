import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import RunningTitle from './RunningTitle';
import SearchPanel from './../containers/SearchPanel';
import FoundMovies from './../containers/FoundMovies';
import MovieDetails from './../containers/MovieDetails';
import ErrorBoundary from './ErrorBoundary';

const component404 = () => (<h1>404</h1>);

const MainPage = (props) => {
  let cameFromLink = false;
  if (props.redirect) {
    props.setRedirect(false);
    if (props.activePanel === 'MovieDetails') {
      return <Redirect to={`/film/${props.movieDetailsId}`} />;
    } else if (props.activePanel === 'SearchPanel') {
      return <Redirect to={`/search/${props.searchQuery}`} />;
    }
    return <Redirect to="/404" />;
  } else if (props.location.pathname !== '/' &&
      `/search/${props.searchQuery}` !== props.location.pathname) {
    cameFromLink = true;
  }

  return (
    <div>
      <ErrorBoundary>
        <RunningTitle />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <SearchPanel />
                <FoundMovies />
              </div>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <div>
                <SearchPanel
                  query={cameFromLink ? props.location.pathname.replace('/search/', '') : null}
                />
                <FoundMovies />
              </div>
            )}
          />
          <Route
            path="/film/"
            component={MovieDetails}
          />
          <Route
            exact
            path="/404"
            component={component404}
          />
          <Route
            component={component404}
          />
        </Switch>
        <RunningTitle />
      </ErrorBoundary>
    </div>
  );
};

MainPage.propTypes = {
  redirect: PropTypes.bool.isRequired,
  setRedirect: PropTypes.func.isRequired,
  activePanel: PropTypes.string.isRequired,
  movieDetailsId: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  setCameFromLink: PropTypes.func.isRequired,
  cameFromLink: PropTypes.bool.isRequired,
};

export default MainPage;
