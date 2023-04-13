import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => {

  // const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(setFilter.toLowerCase()))
  // const filteredMovies = movies.filter(function(movie) {
  //   return movie.title.toLowerCase().includes(setFilter.toLowerCase())
  // })


  return (

    <tbody>
      {movies.map(movie => <MovieListEntry movie = {movie} key={movie.title}/>)}
    </tbody>


  )
}

export default MovieList;