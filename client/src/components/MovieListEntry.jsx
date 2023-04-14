import React from 'react';

const { useState, useEffect } = React;

const MovieListEntry = ( {movie} ) => {

  const [watched, setWatched] = useState("To Watch")

  var handleClick = function(e) {
    e.preventDefault();
    if (watched === "To Watch") {
      setWatched("Watched");
    } else {
      setWatched("To Watch")
    }
  }

  return (
    <tr onClick={handleClick}>
      <td>{movie.title}</td>
      <td>{watched}</td>
    </tr>
  )

}

export default MovieListEntry;