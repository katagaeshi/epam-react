import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = props => (
  <div>
    <button onClick={props.onClick}>SEARCH</button>
    <img src={props.poster_path} alt="poster" />
    <span>{props.title}</span>
    <span>{props.vote_average}</span>
    <span>{props.tagline}</span>
    <span>{props.release_date}</span>
    <span>{props.runtime}</span>
    <span>{props.overview}</span>
  </div>
);

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.string,
  release_date: PropTypes.string,
  tagline: PropTypes.string,
  runtime: PropTypes.string,
  overview: PropTypes.string,
};

MovieDetails.defaultProps = {
  poster_path: null,
  release_date: null,
  tagline: null,
  runtime: null,
  overview: null,
  vote_average: null,
};

export default MovieDetails;
