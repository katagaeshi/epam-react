// @flow

import React from 'react';
import {
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import injectSheet from 'react-jss';

import RunningTitle from './RunningTitle';
import SearchPanel from './../containers/SearchPanel';
import FoundMovies from './../containers/FoundMovies';
import MovieDetails from './../containers/MovieDetails';

const styles = {};

const component404 = () => (<h1>404</h1>);

type Props = {
  redirect: boolean,
  setRedirect: (redirect: boolean) => {},
  activePanel: string,
  movieDetailsId: string,
  searchQuery: string,
  location: {
    pathname: string,
  },
};

const MainPage = (props: Props) => {
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
    </div>
  );
};

export default injectSheet(styles)(MainPage);
