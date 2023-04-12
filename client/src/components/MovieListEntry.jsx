import React from 'react';

const MovieListEntry = ( {movie} ) => {


  return (
    <tr>
      <td>{movie.title}</td>
    </tr>
  )

}

export default MovieListEntry;