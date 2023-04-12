import MovieListEntry from './MovieListEntry';

const MovieList = ({movies}) => {


  return (

    <tbody>
      {movies.map(movie => <MovieListEntry movie = {movie} />)}
    </tbody>


  )
}

export default MovieList;