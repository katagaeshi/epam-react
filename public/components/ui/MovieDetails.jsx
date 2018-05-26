import React from 'react';
import PropTypes from 'prop-types';

class MovieDetails extends React.Component {
  componentDidMount() {
    if (this.props.notFound) {
      return this
        .props
        .fetchMovieDetails(this.props.location.pathname.replace(this.props.match.path, ''));
    }
    return Promise.resolve();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>SEARCH</button>
        <img src={this.props.poster_path} alt="poster" />
        <span>{this.props.title}</span>
        <span>{this.props.vote_average}</span>
        <span>{this.props.tagline}</span>
        <span>{this.props.release_date}</span>
        <span>{this.props.runtime}</span>
        <span>{this.props.overview}</span>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.string,
  release_date: PropTypes.string,
  tagline: PropTypes.string,
  runtime: PropTypes.string,
  overview: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  notFound: PropTypes.bool,
  fetchMovieDetails: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  setActivePanel: PropTypes.func.isRequired,
  redirectOnRenderFail: PropTypes.func.isRequired,
};

MovieDetails.defaultProps = {
  poster_path: null,
  release_date: null,
  tagline: null,
  runtime: null,
  overview: null,
  vote_average: null,
  notFound: false,
};

export default MovieDetails;
