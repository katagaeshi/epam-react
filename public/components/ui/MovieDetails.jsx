import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/MovieDetails.css';

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
      <div className="MovieDetails">
        <button onClick={this.props.onClick}>SEARCH</button>
        <img src={this.props.poster_path} alt="poster" />
        <span className="Title">{this.props.title}</span>
        <span className="VoteAverage">{this.props.vote_average}</span>
        <span className="TagLine">{this.props.tagline}</span>
        <span className="ReleaseDate">{this.props.release_date}</span>
        <span className="Runtime">{this.props.runtime}</span>
        <span className="Overview">{this.props.overview}</span>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  tagline: PropTypes.string,
  runtime: PropTypes.number,
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
};

MovieDetails.defaultProps = {
  title: '',
  poster_path: null,
  release_date: null,
  tagline: null,
  runtime: null,
  overview: null,
  vote_average: null,
  notFound: false,
};

export default MovieDetails;
