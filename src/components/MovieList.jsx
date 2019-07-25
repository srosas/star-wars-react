import React from 'react';
import MovieListing from './MovieListing';
import '../styles/MovieList.css'

const MovieList = (props) => {

  const { moviesData, name } = props;
  return (
    <div >
      <div>
        <h2 className='movie-character'>{name}</h2>
        <div className='movie-list'>
          {moviesData.map(movie => <MovieListing key={movie.title + name} title={movie.title} release={movie.releaseDate} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;