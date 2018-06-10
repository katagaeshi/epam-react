// @flow

import React from 'react';
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

  titleAndVote: {
    'grid-row': '1 / 1',
    'grid-column': '2 / 2',
  },

  title: {
    'font-weight': 'bold',
    'font-size': '20px',
    color: 'pink',
    'padding-right': '10px',
  },

  voteAverage: {
    color: 'white',
    'border-radius': '50%',
    border: 'solid white',
    width: '30px',
    height: '25px',
    'text-align': 'center',
    'vertical-align': 'middle',
    'padding-top': '5px',
    display: 'inline-block',
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

type Props = {
  poster_path: ?string,
  title: string,
  vote_average: ?string,
  release_date: ?string,
  tagline: ?string,
  runtime: ?number,
  overview: ?string,
  onClick: () => {},
  notFound: boolean,
  fetchMovieDetails: (request: string) => {},
  location: {
    pathname: string,
  },
  match: {
    path: string,
  },
  classes: {
    movieDetails: string,
    button: string,
    image: string,
    titleAndVote: string,
    title: string,
    voteAverage: string,
    tagLine: string,
    releaseDate: string,
    runtime: string,
    overview: string,
  },
};

class MovieDetails extends React.Component<Props> {
  static defaultProps: Object;

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
        <div className={this.props.classes.titleAndVote}>
          <span className={this.props.classes.title}>{this.props.title}</span>
          <span className={this.props.classes.voteAverage}>{this.props.vote_average}</span>
        </div>
        <span className={this.props.classes.tagLine}>{this.props.tagline}</span>
        <span className={this.props.classes.releaseDate}>{this.props.release_date}</span>
        <span className={this.props.classes.runtime}>{this.props.runtime}</span>
        <span className={this.props.classes.overview}>{this.props.overview}</span>
      </div>
    );
  }
}

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
