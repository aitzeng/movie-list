import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => {


  return (

    <tbody>
      {movies.map(movie => <MovieListEntry movie = {movie} key={movie.title}/>)}
    </tbody>


  )
}

export default MovieList;