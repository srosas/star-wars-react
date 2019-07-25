import React from 'react';
import '../styles/MovieListing.css'

const MovieListing = (props) => {
  const { title, release } = props;

  return (
    <div className="movie-listing">
      <p className="title">{title}</p>
      <p>Release Date: </p>
      <p>{release}</p>
    </div>
  )
}
export default MovieListing;