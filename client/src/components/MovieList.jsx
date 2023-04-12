import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => {


  return (

    <tbody>
      {movies.map(movie => <MovieListEntry movie = {movie} />)}
    </tbody>


  )
}

export default MovieList;