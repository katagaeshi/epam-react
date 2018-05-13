import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = props => (
  <div>
    <button>SEARCH</button>
    <img src={props.src} alt="poster" />
    <span>{props.title}</span>
    <span>{props.rating}</span>
    <span>{props.tag}</span>
    <span>{props.year}</span>
    <span>{props.duration}</span>
    <span>{props.description}</span>
  </div>
);

MovieDetails.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  year: PropTypes.number,
  tag: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
};

MovieDetails.defaultProps = {
  src: null,
  year: null,
  tag: null,
  duration: null,
  description: null,
  rating: null,
};

export default MovieDetails;
