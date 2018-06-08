import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  movieDetails: {
    display: 'grid',
    'background-color': 'gray',
    'grid-auto-columns': '3fr 1fr 1fr 2fr',
    'grid-auto-rows': '0.2fr 0.3fr 0.2fr 2fr',
  },

  button: {
    height: '30px',
    width: '100px',
    position: 'absolute',
    top: '20px',
    right: '20px',
  },

  image: {
    'grid-row': '1 / 5',
    'grid-column': '1 / 1',
    'max-width': '100%',
  },

  title: {
    'grid-row': '1 / 1',
    'grid-column': '2 / 2',
    'font-weight': 'bold',
    'font-size': '20px',
    color: 'pink',
  },

  voteAverage: {
    'grid-row': '1 / 1',
    'grid-column': '3 / 3',
    color: 'white',
    'border-radius': '50%',
    border: 'solid white',
    width: '30px',
    height: '25px',
    'text-align': 'center',
    'vertical-align': 'middle',
    'padding-top': '5px',
  },

  tagLine: {
    'grid-row': '2 / 2',
    'grid-column': '2 / 3',
    color: 'white',
  },

  releaseDate: {
    'grid-row': '3 / 3',
    'grid-column': '2 / 2',
    color: 'white',
  },

  runtime: {
    'grid-row': '3 / 3',
    'grid-column': '3 / 3',
    color: 'white',
  },

  overview: {
    'grid-row': '4 / 4',
    'grid-column': '2 / 4',
    color: 'white',
  },
};

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
      <div className={this.props.classes.movieDetails}>
        <button className={this.props.classes.button} onClick={this.props.onClick}>SEARCH</button>
        <img className={this.props.classes.image} src={this.props.poster_path} alt="poster" />
        <span className={this.props.classes.title}>{this.props.title}</span>
        <span className={this.props.classes.voteAverage}>{this.props.vote_average}</span>
        <span className={this.props.classes.tagLine}>{this.props.tagline}</span>
        <span className={this.props.classes.releaseDate}>{this.props.release_date}</span>
        <span className={this.props.classes.runtime}>{this.props.runtime}</span>
        <span className={this.props.classes.overview}>{this.props.overview}</span>
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
  classes: PropTypes.shape({
    movieDetails: PropTypes.string,
    button: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    voteAverage: PropTypes.string,
    tagLine: PropTypes.string,
    releaseDate: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
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

export default injectSheet(styles)(MovieDetails);
