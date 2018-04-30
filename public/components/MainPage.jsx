import React from 'react';
import RunningTitle from './RunningTitle';
import SearchPanel from './SearchPanel';
import FoundMovies from './FoundMovies';
import ErrorBoundary from './ErrorBoundary';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <RunningTitle />
          <SearchPanel />
          <FoundMovies />
          <RunningTitle />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MainPage;
