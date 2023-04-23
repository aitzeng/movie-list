import React from 'react';

const { useState, useEffect } = React;

const MovieListEntry = ( {movie} ) => {

  // const [watched, setWatched] = useState("To Watch")
  // const [currentMovie, setcurrentMovie] = useState(movie.watched)
  const [update, setUpdate] = useState(false)

  var handleClick = function(e) {
    e.preventDefault();
    console.log(movie.status);
    if (movie.status === "To Watch") {
      movie.status = "Watched"
      setUpdate(!update);
    } else {
      movie.status = "To Watch"
      setUpdate(!update);
    }
  };
// On click, I want it to add the movie to a setWatched array state
  return (
    <tr onClick={handleClick}>
      <td>{movie.title}</td>
      <td>{movie.status}</td>
    </tr>
  )

}

export default MovieListEntry;